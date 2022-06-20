import { PluginManifest, Plugin, Notice, App } from "obsidian";

export default class SamplePlugin extends Plugin {
  constructor(app: App, manifest: PluginManifest) {
    super(app, manifest);
  }

  onload() {
    new Notice("hello ! atifcppprogrammer here !");
  }
}
