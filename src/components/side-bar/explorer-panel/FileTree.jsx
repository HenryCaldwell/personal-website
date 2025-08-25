import File from "./File";
import Folder from "./Folder";

import "./FileTree.css";

export default function FileTree({
  fileData,
  openFolders,
  onToggleFolder,
  onOpenFile,
}) {
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
            onOpenFile={onOpenFile}
            basePath={[]}
          />
        ) : (
          <File
            key={node.id}
            node={node}
            onOpen={onOpenFile}
            pathSegments={[node.name]}
          />
        )
      )}
    </ul>
  );
}
