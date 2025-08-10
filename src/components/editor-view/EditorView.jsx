import { useMemo, useState } from "react";
import cssIcon from "../../assets/icons/css.svg";
import javaIcon from "../../assets/icons/java.svg";
import pythonIcon from "../../assets/icons/python.svg";
import reactIcon from "../../assets/icons/react.svg";
import exampleCode from "../../data/Example.java?raw";
import CodePanel from "./CodePanel";
import "./EditorView.css";
import FilePathBar from "./FilePathBar";
import TabBar from "./TabBar";

export default function EditorView() {
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

  const handleSelect = (id) => setActiveId(id);

  const handleClose = (id) => {
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

  const activeTab = tabs.find((t) => t.id === activeId) ?? tabs[0];
  const content = activeTab?.content ?? "";

  return (
    <div className="editor-view">
      <TabBar
        tabs={tabs}
        activeId={activeTab?.id}
        onSelect={handleSelect}
        onClose={handleClose}
      />
      <FilePathBar />
      <CodePanel content={content} />
    </div>
  );
}
