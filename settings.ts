import { App, Setting, PluginSettingTab, ToggleComponent } from "obsidian";
import SamplePlugin from "./main";

export class IssueNoticeSettingsTab extends PluginSettingTab {
  plugin: SamplePlugin

  constructor(app: App, plugin: SamplePlugin) {
    super(app, plugin)
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;

    containerEl.empty();
    new Setting(containerEl)
      .setName("Issue Notice")
      .setDesc("A Notice will be issued whenever a command from this plugin is run")
      .addToggle((toggle: ToggleComponent) => {
        toggle
          .setValue(this.plugin.settings.issueNoticeOnCommands)
          .onChange(async (value: boolean) => {
            this.plugin.settings.issueNoticeOnCommands = value;
          });
      });
  }
}