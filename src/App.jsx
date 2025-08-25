import EditorView from "./components/editor-view/EditorView";
import SideBar from "./components/side-bar/SideBar";
import StatusBar from "./components/StatusBar";

import { fileData } from "./data/fileData";
import { useLocalStorage } from "./hooks/useLocalStorage";

import "./App.css";

const README_ID = "read-me";

function findNodeById(nodes, targetId, path = []) {
  for (const node of nodes) {
    const nextPath = [...path, node.name];

    if (node.id === targetId) {
      return { node, pathSegments: nextPath };
    }

    if (node.type === "folder" && node.children?.length) {
      const hit = findNodeById(node.children, targetId, nextPath);

      if (hit) {
        return hit;
      }
    }
  }
  return null;
}

const DEFAULT_README_TAB = (() => {
  const hit = findNodeById(fileData, README_ID);

  if (!hit) {
    return null;
  }

  const { node, pathSegments } = hit;
  return {
    id: node.id,
    title: node.name,
    icon: node.icon,
    content: node.content ?? "",
    pathSegments,
  };
})();

export default function App() {
  const [tabs, setTabs] = useLocalStorage(
    "tabs",
    DEFAULT_README_TAB ? [DEFAULT_README_TAB] : []
  );
  const [activeId, setActiveId] = useLocalStorage(
    "activeId",
    DEFAULT_README_TAB?.id ?? ""
  );

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
