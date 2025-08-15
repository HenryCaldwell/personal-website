import CodePanel from "./CodePanel";
import "./EditorView.css";
import FilePathBar from "./FilePathBar";
import TabBar from "./TabBar";

export default function EditorView({ tabs, activeId, onSelect, onClose }) {
  const activeTab = tabs.find((t) => t.id === activeId) ?? tabs[0];
  const pathSegments = activeTab?.pathSegments ?? [];
  const content = activeTab?.content ?? "";

  return (
    <div className="editor-view">
      <TabBar
        tabs={tabs}
        activeId={activeId}
        onSelect={onSelect}
        onClose={onClose}
      />
      <FilePathBar segments={pathSegments} />
      <CodePanel content={content} />
    </div>
  );
}
