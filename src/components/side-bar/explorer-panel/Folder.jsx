import openFolderIcon from "../../../assets/icons/down.svg";
import closedFolderIcon from "../../../assets/icons/right.svg";
import File from "./File";

export default function Folder({
  node,
  isOpen,
  onToggle,
  openFolders,
  onToggleFolder,
}) {
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
          className="tree-item__icon"
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
              />
            ) : (
              <File key={child.name} node={child} />
            )
          )}
        </ul>
      )}
    </li>
  );
}
