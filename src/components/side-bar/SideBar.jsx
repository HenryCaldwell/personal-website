import { useLocalStorage } from "../../hooks/useLocalStorage";
import ActivityBar from "./activity-bar/ActivityBar";
import ExplorerPanel from "./explorer-panel/ExplorerPanel";
import SearchPanel from "./search-panel/SearchPanel";
import "./SideBar.css";
import SourcePanel from "./source-panel/SourcePanel";

const PANEL_COMPONENTS = {
  explorer: ExplorerPanel,
  search: SearchPanel,
  source: SourcePanel,
};

export default function SideBar({ onOpenFile }) {
  const [activePanel, setActivePanel] = useLocalStorage(
    "activePanel",
    "explorer"
  );
  const ActivePanel = activePanel ? PANEL_COMPONENTS[activePanel] : null;

  return (
    <div className="side-bar-shell">
      <ActivityBar
        active={activePanel}
        onSelect={(panel) =>
          setActivePanel(panel === activePanel ? null : panel)
        }
      />
      {ActivePanel && (
        <div className="side-bar-panel">
          <ActivePanel onOpenFile={onOpenFile} />
        </div>
      )}
    </div>
  );
}
