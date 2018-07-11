#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const shell = require("shelljs");
const figlet = require("figlet");

const init = () => {
  console.log(
      chalk.green(
         figlet.textSync("Simple Node CLI", {
                    // font: "Ghost",
                     horizontalLayout: "default",
                     verticalLayout: "default"
                   })
                 )
           );
 };

const askQuestions = () => {
  const questions = [
     {
       name: "FILENAME",
       type: "input",
       message: "What is the name of the file without extension?"
     },

     {
       type: "list",
       name: "EXTENSION",
       message: "What is the file extension?",
       choices: [".rb", ".js", ".txt", ".html", ".php", ".css"],
       filter: function(val) {
        return val.split(".")[1];
       }
     }
  ];
 return inquirer.prompt(questions);
};

const createFile = (filename,extension) => {
  const filePath = `${process.cwd()}/${filename}.${extension}`
  shell.touch(filePath);
  return filePath;
};

const success = (filepath) => {
  console.log(
     chalk.white.bgGreen.bold(`Done! file created at ${filepath}`)
  );
};

const run = async () => {
//show script intro
 init();


// ask questions
const answers = await askQuestions();
const { FILENAME, EXTENSION } = answers;

//create file
const filePath = createFile(FILENAME,EXTENSION);

// show success
success(filePath);

};


run();





