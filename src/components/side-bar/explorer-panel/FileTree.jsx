import File from "./File";
import "./FileTree.css";
import Folder from "./Folder";

export default function FileTree({ fileData, openFolders, onToggleFolder }) {
  return (
    <ul className="file-tree">
      {fileData.map((node) =>
        node.type === "folder" ? (
          <Folder
            key={node.id}
            node={node}
            isOpen={openFolders.includes(node.id)}
            onToggle={() => onToggleFolder(node.id)}
            openFolders={openFolders}
            onToggleFolder={onToggleFolder}
          />
        ) : (
          <File key={node.name} node={node} />
        )
      )}
    </ul>
  );
}
