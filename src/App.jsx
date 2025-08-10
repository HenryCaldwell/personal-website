import { useMemo, useState } from "react";
import "./App.css";
import cssIcon from "./assets/icons/css.svg";
import javaIcon from "./assets/icons/java.svg";
import pythonIcon from "./assets/icons/python.svg";
import reactIcon from "./assets/icons/react.svg";
import EditorView from "./components/editor-view/EditorView";
import SideBar from "./components/side-bar/SideBar";
import StatusBar from "./components/StatusBar";
import exampleCode from "./data/Example.java?raw";

export default function App() {
  const initialTabs = useMemo(
    () => [
      {
        id: "app",
        title: "App.jsx",
        icon: reactIcon,
        content: "JSX FILE",
      },
      {
        id: "java",
        title: "test_file.java",
        icon: javaIcon,
        content: exampleCode,
      },
      {
        id: "css",
        title: "a.css",
        icon: cssIcon,
        content: "CSS FILE",
      },
      {
        id: "python",
        title: "test_file.py",
        icon: pythonIcon,
        content: "PYTHON FILE",
      },
    ],
    []
  );

  const [tabs, setTabs] = useState(initialTabs);
  const [activeId, setActiveId] = useState("java");

  const selectTab = (id) => setActiveId(id);

  const closeTab = (id) => {
    setTabs((prev) => {
      const idx = prev.findIndex((t) => t.id === id);
      const next = prev.filter((t) => t.id !== id);
      if (id === activeId) {
        const neighbor = next[Math.max(0, idx - 1)] ?? next[0];
        setActiveId(neighbor?.id ?? "");
      }
      return next;
    });
  };

  return (
    <div className="app-content">
      <div className="main-content">
        <SideBar />
        {tabs.length > 0 && (
          <EditorView
            tabs={tabs}
            activeId={activeId}
            onSelect={selectTab}
            onClose={closeTab}
          />
        )}
      </div>
      <div className="footer-content">
        <StatusBar />
      </div>
    </div>
  );
}
