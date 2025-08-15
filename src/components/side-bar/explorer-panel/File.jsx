export default function File({ node, onOpen, pathSegments = [] }) {
  const openFile = () => {
    onOpen?.({
      id: node.id,
      title: node.name,
      icon: node.icon,
      content: node.content ?? "",
      pathSegments,
    });
  };

  return (
    <li>
      <button
        type="button"
        className="tree-item"
        onClick={openFile}
        aria-label={node.name}
      >
        <img
          className="tree-item__icon"
          src={node.icon}
          alt=""
          aria-hidden="true"
        />
        <span className="tree-item__name">{node.name}</span>
      </button>
    </li>
  );
}
