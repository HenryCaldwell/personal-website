import explorerIcon from "../../../assets/icons/files.svg";
import searchIcon from "../../../assets/icons/search.svg";
import sourceIcon from "../../../assets/icons/source.svg";
import "./ActivityBar.css";

export default function ActivityBar({ active, onSelect }) {
  const buttons = [
    { id: "explorer", icon: explorerIcon, aria: "Explorer" },
    { id: "search", icon: searchIcon, aria: "Search" },
    { id: "source", icon: sourceIcon, aria: "Source" },
  ];

  return (
    <nav className="activity-bar">
      {buttons.map(({ id, icon, aria }) => (
        <button
          key={id}
          className={`activity-bar__button${
            active === id ? " activity-bar__button--focused" : ""
          }`}
          onClick={() => onSelect(id)}
          aria-label={aria}
          aria-pressed={active === id}
        >
          <img
            className="activity-bar__button__icon"
            src={icon}
            alt={aria + " icon"}
          />
        </button>
      ))}
    </nav>
  );
}
