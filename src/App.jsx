import "./App.css";
import EditorView from "./components/editor-view/EditorView";
import SideBar from "./components/side-bar/SideBar";
import StatusBar from "./components/StatusBar";

export default function App() {
  return (
    <div className="app-content">
      <div className="main-content">
        <SideBar />
        <EditorView />
      </div>
      <div className="footer-content">
        <StatusBar />
      </div>
    </div>
  );
}
