"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as net from "net";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  vscode.workspace.onDidSaveTextDocument(document => {
    const home =
      process.env[process.platform === "win32" ? "USERPROFILE" : "HOME"] || "";
    const backSlashReg = new RegExp(/\\/, "g");
    const fileName = document.fileName.replace(backSlashReg, "/");
    const homePath = home.replace(backSlashReg, "/");
    const configuration = vscode.workspace.getConfiguration("go-touch-client");
    const path = fileName.replace(
      new RegExp(homePath + configuration.get("removePath"), "i"),
      configuration.get("appendPath") || ""
    );
    const client = new net.Socket();
    client.connect(
      configuration.get("port") || 7650,
      "127.0.0.1",
      () => {
        client.write(path + "\n");
      }
    );
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}
