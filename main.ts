import { PluginManifest, Plugin, App } from "obsidian";

export default class SamplePlugin extends Plugin {
  constructor(app: App, manifest: PluginManifest) {
    super(app, manifest);
  }

  onload() {
    this.addRibbonIcon("dice", this.manifest.name, (event: MouseEvent) => {
      console.log("mouse-event-info", event);
      console.log("clicked on plugin ribbon icon");
    });
  }
}
