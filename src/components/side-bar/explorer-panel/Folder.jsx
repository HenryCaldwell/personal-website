import File from "./File";

import openFolderIcon from "../../../assets/icons/down.svg";
import closedFolderIcon from "../../../assets/icons/right.svg";

export default function Folder({
  node,
  isOpen,
  onToggle,
  openFolders,
  onToggleFolder,
  onOpenFile,
  basePath = [],
}) {
  const currentPath = [...basePath, node.name];

  return (
    <li className="tree-item-wrapper">
      <button
        type="button"
        className="tree-item"
        onClick={onToggle}
        aria-label={node.name}
        aria-expanded={isOpen}
      >
        <img
          className="tree-item__arrow"
          src={isOpen ? openFolderIcon : closedFolderIcon}
          alt=""
          aria-hidden="true"
        />
        <span className="tree-item__name">{node.name}</span>
      </button>
      {isOpen && node.children && (
        <ul className="nested">
          {node.children.map((child) =>
            child.type === "folder" ? (
              <Folder
                key={child.id}
                node={child}
                isOpen={openFolders.includes(child.id)}
                onToggle={() => onToggleFolder(child.id)}
                openFolders={openFolders}
                onToggleFolder={onToggleFolder}
                onOpenFile={onOpenFile}
                basePath={currentPath}
              />
            ) : (
              <File
                key={child.name}
                node={child}
                onOpen={onOpenFile}
                pathSegments={[...currentPath, child.name]}
              />
            )
          )}
        </ul>
      )}
    </li>
  );
}
