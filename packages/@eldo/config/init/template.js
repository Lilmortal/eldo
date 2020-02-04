const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const shell = require("shelljs");

const SKIP_FILES = [];
const LOWER_CASE_FILES = ["package.json"];

const createDirectoryContents = ({
  rootPath,
  templatePath,
  projectPath,
  projectName,
}) => {
  // read all files/folders (1 level) from template folder
  const filesToCreate = fs.readdirSync(templatePath);
  // loop each file/folder
  filesToCreate.forEach(file => {
    const origFilePath = path.join(templatePath, file);

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    // skip files that should not be copied
    if (SKIP_FILES.indexOf(file) > -1) return;

    if (stats.isFile()) {
      // write file to destination folder
      const writePath = path.join(rootPath, projectPath);
      if (!fs.existsSync(writePath)) {
        fs.mkdirSync(writePath, { recursive: true });
      }

      if (projectPath.endsWith("src")) {
        fileName = file.indexOf(".");
        file = `${projectName}${file.substring(fileName)}`;
      }

      if (file.includes("ejs")) {
        file = file.replace(".ejs", "");
      }

      // read file content and transform it using template engine
      let contents = fs.readFileSync(origFilePath, "utf8");

      const name = LOWER_CASE_FILES.includes(file)
        ? projectName.toLowerCase()
        : projectName;
      contents = render(contents, { projectName: name });

      fs.writeFileSync(`${writePath}/${file}`, contents, "utf8");
    } else if (stats.isDirectory()) {
      // create folder in destination folder
      fs.mkdirSync(path.join(rootPath, projectPath, file));

      // copy files/folder inside current folder recursively
      createDirectoryContents({
        rootPath,
        templatePath: path.join(templatePath, file),
        projectPath: path.join(projectPath, file),
        projectName,
      });
    }
  });
};

const postProcess = options => {
  const isNode = fs.existsSync(path.join(options.templatePath, "package.json"));
  if (isNode) {
    shell.cd(options.targetPath);
    const result = shell.exec("yarn");
    if (result.code !== 0) {
      return false;
    }
  }

  return true;
};

const render = (content, data) => ejs.render(content, data);

module.exports = { createDirectoryContents, postProcess };
