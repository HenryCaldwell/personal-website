import exampleCode from "../../data/Example.java?raw";
import CodePanel from "./CodePanel";
import "./EditorView.css";
import FilePathBar from "./FilePathBar";
import TabBar from "./TabBar";

export default function EditorView() {
  return (
    <div className="editor-view">
      <TabBar />
      <FilePathBar />
      <CodePanel content={exampleCode} />
    </div>
  );
}
