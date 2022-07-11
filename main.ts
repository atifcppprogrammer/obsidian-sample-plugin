import { PluginManifest, Plugin, App } from "obsidian";

export default class SamplePlugin extends Plugin {

  constructor(app: App, manifest: PluginManifest) {
    super(app, manifest);
  }

  onload() {

    /**
     * Adding additional items to the status bar, additional status bar 
     * items do not appear on mobile as of this writing.
     */
    const fruits = this.addStatusBarItem();
    fruits.createEl("span", { text: "🍎" });
    fruits.createEl("span", { text: "🍌" });

    const veggies = this.addStatusBarItem();
    veggies.createEl("span", { text: "🥦" });
    veggies.createEl("span", { text: "🥬" });
  }
}
