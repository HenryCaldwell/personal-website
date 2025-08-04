import closeIcon from "../../assets/icons/close.svg";
import "./Tab.css";

/**
 * tab: { id, title, icon }
 * isActive: boolean
 * onSelect: (id) => void
 * onClose: (id) => void
 */
export default function Tab({ tab, isActive, onSelect, onClose }) {
  return (
    <div
      className={`tab${isActive ? " tab--active" : ""}`}
      onClick={() => onSelect(tab.id)}
      aria-selected={isActive}
    >
      <img className="tab__image" src={tab.icon} alt="" aria-hidden="true" />
      <span className="tab__title">{tab.title}</span>
      <button
        className="tab__close"
        onClick={() => onClose(tab.id)}
        aria-label={`Close ${tab.title}`}
      >
        <img src={closeIcon} alt="" aria-hidden="true" />
      </button>
    </div>
  );
}
