import { PluginManifest, Plugin, App, Notice } from "obsidian";
import { IssueNoticeSettingsTab } from "./settings";
import { PluginSettings } from "./interfaces";

export default class SamplePlugin extends Plugin {
  settings: PluginSettings;

  static defaultSettings: Partial<PluginSettings> = {
    issueNoticeOnCommands: false
  };

  constructor(app: App, manifest: PluginManifest) {
    super(app, manifest);
  }

  onload() {
    this.loadSettings();
    this.addSettingTab(new IssueNoticeSettingsTab(this.app, this));

    this.addCommand({
      name: "Plugin Command",
      id: "plugin-command",
      checkCallback: (checking: boolean) => {
        if (checking) return this.settings.issueNoticeOnCommands;
        if (this.settings.issueNoticeOnCommands) {
          new Notice("Executed plugin command");
          return true;
        }
        return false;
      }
    })
  }

  async loadSettings() {
    const data = await this.loadData();
    const { defaultSettings } = SamplePlugin;
    this.settings = Object.assign({}, defaultSettings, data);
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
