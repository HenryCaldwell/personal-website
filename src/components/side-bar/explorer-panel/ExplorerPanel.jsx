import { useEffect, useState } from "react";
import ellipsis from "../../../assets/icons/ellipsis.svg";
import { fileData } from "../../../data/fileData";
import "./ExplorerPanel.css";
import FileTree from "./FileTree";

export default function ExplorerPanel() {
  const [openFolders, setOpenFolders] = useState(() => {
    const stored = localStorage.getItem("explorerOpenFolders");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("explorerOpenFolders", JSON.stringify(openFolders));
  }, [openFolders]);

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
      />
    </div>
  );
}
