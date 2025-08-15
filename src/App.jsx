import { useState } from "react";
import "./App.css";
import EditorView from "./components/editor-view/EditorView";
import SideBar from "./components/side-bar/SideBar";
import StatusBar from "./components/StatusBar";

export default function App() {
  const [tabs, setTabs] = useState([]);
  const [activeId, setActiveId] = useState("java");

  const openTab = (tab) => {
    setTabs((prev) =>
      prev.some((t) => t.id === tab.id) ? prev : [...prev, tab]
    );
    setActiveId(tab.id);
  };

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
        <SideBar onOpenFile={openTab} />
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
