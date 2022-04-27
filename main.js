const vscode = require("vscode");
const { exec } = require("child_process");

exports.activate = (context) => {
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.pull", () => {
      vscode.commands.executeCommand("git.pull");
    }),
    vscode.commands.registerCommand("extension.push", () => {
      vscode.commands.executeCommand("git.push");
    }),
    vscode.commands.registerCommand("extension.install", () => {
      vscode.commands.executeCommand("npm-script.install");
    }),
    vscode.commands.registerCommand("extension.start", () => {
      vscode.commands.executeCommand("npm-script.start");
    }),
    vscode.commands.registerCommand("extension.focusTerminal", () => {
      vscode.commands.executeCommand(
        "workbench.action.terminal.toggleTerminal"
      );
    })
  );
};

exports.deactivate = () => {};
