import fileIcon from "../../../assets/icons/file.svg";

export default function File({ node }) {
  const openFile = () => {
    console.log("Open file:", node.name);
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
          src={fileIcon}
          alt=""
          aria-hidden="true"
        />
        <span className="tree-item__name">{node.name}</span>
      </button>
    </li>
  );
}
