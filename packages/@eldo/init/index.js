#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer = require("inquirer");
const cli = require("clui");
const fs = require("fs");
const path = require("path");

const COMPONENT_FOLDER_DIR = "packages/@eldo";
const APP_FOLDER_DIR = "web/app";

clear();
console.log(
  chalk.yellow(figlet.textSync("Eldo", { horizontalLayout: "full" }))
);

const questions = [
  {
    name: "type",
    type: "list",
    message: "What kind of package do you want to create?",
    choices: ["Component", "App"],
  },
  {
    name: "name",
    type: "input",
    message: `What will your folder name be?`,
  },
];

let spinner;

const type = inquirer.prompt(questions).then(result => {
  // TODO: Ask them to confirm it.

  spinner = new cli.Spinner("Almost ready...");
  spinner.start();

  if (result.type === "App") {
    createApp(name);
  } else if (result.type === "Component") {
    createComponent(result.name);
  } else {
    console.error("There is an error.");
  }
});

const createApp = name => {
  spinner.stop();
};

const createComponent = name => {
  const componentDir = path.basename(process.cwd());

  console.log(componentDir);
  //   if (!fs.existsSync(componentDir)) {
  //     fs.mkdirSync(componentDir);
  //   }

  //   const componentFolderName = `${name.charAt(0).toUpperCase()}${name.substring(
  //     1
  //   )}`;
  //   fs.mkdirSync(componentFolderName);

  //   fs.writeFile(
  //     `${componentFolderName}/.eslintrc.js`,
  //     require("./eslintrc"),
  //     handleErr
  //   );

  //   const src = `${componentFolderName}/src`;
  //   fs.mkdirSync(src);

  spinner.stop();
};

const handleErr = err => console.error(err);
