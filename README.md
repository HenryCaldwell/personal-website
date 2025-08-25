# Personal Website

## [LIVE SITE](https://henrycaldwell.vercel.app)

## Project Description

A VS Code–inspired personal website built with React and Vite. The UI mirrors an editor: activity bar, explorer, tab strip, breadcrumb path bar, and a read-only code panel with line numbers. Portfolio content is rendered as files, and a small inline-markup parser powers bold, italic, link, and color tags.

**Key Features:**

- **Editor Layout:** Activity bar, side panels, tabs, breadcrumb path bar, and code viewport.
- **File Explorer:** Nested folders/files with icons and expand/collapse.
- **Tabbed Reading:** Open multiple files simultaneously. Active tab is centered and state persists via useLocalStorage.
- **Inline Markup:** Custom parser for bold, italic, link, and color tags inside file content.

**Inline Markup:**

Inside the project files, you can embed lightweight tags:

```
<[bold]>Bold Text<[/bold]>
<[italic]>Italic Text<[/italic]>
<[link, https://example.com]>Example Link<[/link]>
<[color, #8ab4f8]>Colored Text<[/color]>
```

The parser validates tag names, checks nesting, and supports escaping with a backslash:

```
\<[bold]>
```

## File Structure

```
.
├── src
│  ├── assets
│  │  └── icons
│  ├── components
│  │  ├── editor-view
│  │  │  ├── inline-tags
│  │  │  │  ├── parser.jsx             # Tokenizes and parses inline markup tags.
│  │  │  │  └── tags.jsx               # Renders bold, italic, link, and color tags.
│  │  │  ├── CodePanel.jsx/css         # Read-only code viewport with line numbers.
│  │  │  ├── EditorView.jsx/css        # Composes TabBar, FilePathBar, and CodePanel.
│  │  │  ├── FilePathBar.jsx/css       # Breadcrumb-style path bar for the active file.
│  │  │  ├── Tab.jsx/css               # Single tab with title and close control.
│  │  │  └── TabBar.jsx/css            # Scrollable tab strip that centers the active tab.
│  │  ├── side-bar
│  │  │  ├── activity-bar
│  │  │  │  └── ActivityBar.jsx/css    # Vertical activity buttons (Explorer, Search, Source).
│  │  │  ├── explorer-panel
│  │  │  │  ├── ExplorerPanel.jsx/css  # Explorer header and actions with file tree.
│  │  │  │  ├── FileTree.jsx/css       # Renders nested folder and file structure.
│  │  │  │  ├── File.jsx               # Leaf node renderer that opens a file tab.
│  │  │  │  └── Folder.jsx             # Folder node with expand/collapse behavior.
│  │  │  ├── search-panel
│  │  │  │  └── SearchPanel.jsx/css    # Placeholder search panel.
│  │  │  ├── source-panel
│  │  │  │  └── SourcePanel.jsx/css    # Placeholder source control panel.
│  │  │  └── SideBar.jsx/css           # Side bar shell that hosts panels.
│  │  └── StatusBar.jsx/css            # Footer bar with social and contact links.
│  ├── data
│  │  └── fileData.js                  # Explorer tree and file content metadata.
│  ├── hooks
│  │  └── useLocalStorage.js           # Persists tabs and activeId to localStorage.
│  ├── App.jsx/css                     # App shell composing side bar, editor, and status bar.
│  ├── index.css                       # Base styles and CSS variables.
│  └── main.jsx                        # React entry point that mounts the app.
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
