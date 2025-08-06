import "./EditorView.css";
import FilePathBar from "./FilePathBar";
import TabBar from "./TabBar";

export default function EditorView() {
  return (
    <div className="editor-view">
      <TabBar />
      <FilePathBar />
    </div>
  );
}
