import { PluginManifest, Plugin, App } from "obsidian";

export default class SamplePlugin extends Plugin {
  constructor(app: App, manifest: PluginManifest) {
    super(app, manifest);
  }

  onload() {
    console.log(`${this.manifest.name} loaded`);
  }

  onunload() {
    console.log(`${this.manifest.name} unloaded`);
  }
}
