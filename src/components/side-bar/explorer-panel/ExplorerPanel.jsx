import FileTree from "./FileTree";

import { fileData } from "../../../data/fileData";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

import ellipsis from "../../../assets/icons/ellipsis.svg";

import "./ExplorerPanel.css";

export default function ExplorerPanel({ onOpenFile }) {
  const [openFolders, setOpenFolders] = useLocalStorage(
    "explorerOpenFolders",
    []
  );

  const toggleFolder = (id) => {
    setOpenFolders((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="explorer-panel">
      <div className="explorer-panel__header">
        <span className="explorer-panel__header-title">EXPLORER</span>
        <button className="explorer-panel__header-button">
          <img
            className="explorer-panel__header-button-icon"
            src={ellipsis}
            alt=""
          />
        </button>
      </div>
      <FileTree
        fileData={fileData}
        openFolders={openFolders}
        onToggleFolder={toggleFolder}
        onOpenFile={onOpenFile}
      />
    </div>
  );
}
