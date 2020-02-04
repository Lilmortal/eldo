#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer = require("inquirer");
const cli = require("clui");
const fs = require("fs");
const path = require("path");
const gitRoot = require("git-root");

const template = require("./template");

const PACKAGE_DIR = `${gitRoot()}/packages/@eldo`;
const APP_DIR = `${gitRoot()}/web`;
const UTILS_DIR = `${gitRoot()}/utils`;

const APP = "App";
const COMPONENT = "Component";
const UTILS = "Utils";
const STYLES = "Styles";

clear();
console.log(
  chalk.yellow(figlet.textSync("Eldo", { horizontalLayout: "full" }))
);

const questions = [
  {
    name: "type",
    type: "list",
    message: "What kind of package do you want to create?",
    choices: [COMPONENT, APP, UTILS, STYLES],
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

  spinner = new cli.Spinner("Creating your folders...");
  spinner.start();

  const dirName = `${result.name
    .charAt(0)
    .toUpperCase()}${result.name.substring(1)}`;

  if (result.type === APP) {
    createApp(dirName);
  } else if (result.type === COMPONENT) {
    createComponent(dirName);
  } else if (result.type === UTILS) {
    createUtils(result.name);
  } else if (result.type === STYLES) {
    createStyles(result.name);
  } else {
    console.error("There is an error.");
  }
});

const createApp = name => {
  if (!fs.existsSync(APP_DIR)) {
    fs.mkdirSync(APP_DIR);
  }

  try {
    template.createDirectoryContents({
      rootPath: APP_DIR,
      templatePath: path.resolve(__dirname, "template/app"),
      projectPath: name,
      projectName: name,
    });

    const packageJsonDir = `${APP_DIR}/${name}`;
    template.postProcess({
      templatePath: packageJsonDir,
      targetPath: packageJsonDir,
    });
  } catch (e) {
    console.log(chalk.red(e));
    spinner.stop();
  }

  spinner.stop();
};

const createComponent = name => {
  // TODO: See if windows can handle `/`

  if (!fs.existsSync(PACKAGE_DIR)) {
    fs.mkdirSync(PACKAGE_DIR);
  }

  try {
    template.createDirectoryContents({
      rootPath: PACKAGE_DIR,
      templatePath: path.resolve(__dirname, "template/component"),
      projectPath: name,
      projectName: name,
    });

    const packageJsonDir = `${PACKAGE_DIR}/${name}`;
    template.postProcess({
      templatePath: packageJsonDir,
      targetPath: packageJsonDir,
    });
  } catch (e) {
    console.log(chalk.red(e));
    spinner.stop();
  }

  spinner.stop();
};

const createUtils = name => {
  if (!fs.existsSync(PACKAGE_DIR)) {
    fs.mkdirSync(PACKAGE_DIR);
  }

  try {
    template.createDirectoryContents({
      rootPath: PACKAGE_DIR,
      templatePath: path.resolve(__dirname, "template/utils"),
      projectPath: name,
      projectName: name,
    });

    const packageJsonDir = `${PACKAGE_DIR}/${name}`;
    template.postProcess({
      templatePath: packageJsonDir,
      targetPath: packageJsonDir,
    });
  } catch (e) {
    console.log(chalk.red(e));
    spinner.stop();
  }

  spinner.stop();
};

const createStyles = name => {
  if (!fs.existsSync(PACKAGE_DIR)) {
    fs.mkdirSync(PACKAGE_DIR);
  }

  try {
    template.createDirectoryContents({
      rootPath: PACKAGE_DIR,
      templatePath: path.resolve(__dirname, "template/styles"),
      projectPath: name,
      projectName: name,
    });

    const packageJsonDir = `${PACKAGE_DIR}/${name}`;
    template.postProcess({
      templatePath: packageJsonDir,
      targetPath: packageJsonDir,
    });
  } catch (e) {
    console.log(chalk.red(e));
    spinner.stop();
  }

  spinner.stop();
};
