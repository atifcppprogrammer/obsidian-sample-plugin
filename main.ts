import { PluginManifest, Plugin, Notice, App } from "obsidian";
import { Editor, MarkdownView } from "obsidian";

export default class SamplePlugin extends Plugin {
  private canIssueNotices = false;

  constructor(app: App, manifest: PluginManifest) {
    super(app, manifest);
  }

  onload() {
    /**
     * Creating command to toggle this.canIssueNotices local setting.
     */
    this.addCommand({
      name: "Toggle issue notices",
      id: "toggle-issue-notices",
      callback: () => {
        this.canIssueNotices = !this.canIssueNotices;
      }
    });

    /**
     * Creating conditional command to print plugin name only if 
     * this.canIssueNotices is true, the actual check for the command 
     * should be performed twice.
     */
    const canIssueNoticesCallback = (checking: boolean) => {
      if (checking) return this.canIssueNotices;
      if (this.canIssueNotices) {
        new Notice(this.manifest.name);
        return true;
      }
      return false;
    }

    this.addCommand({
      name: "Print plugin name",
      id: "print-plugin-name",
      checkCallback: canIssueNoticesCallback
    });

    /**
     * Creating conditional editor command to print current selection 
     * to console in the event we have an active editor.
     */
    this.addCommand({
      name: "Print selection",
      id: "print-selection",
      editorCheckCallback(checking: boolean, editor: Editor, view: MarkdownView) {
        if (checking) return !!view;
        if (!!view) {
          const selection = editor.getSelection();
          console.log("editor-selection", selection);
        }
        return false;
      },
    });

    /**
     * Creating command using hotkeys, (should be discaouraged)
     * because choosen key combination may conflict with existing
     * hot key
     */
    this.addCommand({
      name: "Print Plugin Name (Hot Key)",
      id: "print-plugin-name-hot-key",
      hotkeys: [
        { modifiers: ["Ctrl", "Shift"], key: "l" }
      ],
      checkCallback: canIssueNoticesCallback
    });
  }
}
