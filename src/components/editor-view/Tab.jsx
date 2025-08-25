import closeIcon from "../../assets/icons/close.svg";

import "./Tab.css";

export default function Tab({ tab, isActive, onSelect, onClose, innerRef }) {
  return (
    <div
      className={`tab${isActive ? " tab--active" : ""}`}
      onClick={() => onSelect(tab.id)}
      aria-selected={isActive}
      ref={innerRef || null}
    >
      <img className="tab__image" src={tab.icon} alt="" aria-hidden="true" />
      <span className="tab__title">{tab.title}</span>
      <button
        className="tab__close"
        onClick={(e) => {
          e.stopPropagation();
          onClose(tab.id);
        }}
        aria-label={`Close ${tab.title}`}
      >
        <img src={closeIcon} alt="" aria-hidden="true" />
      </button>
    </div>
  );
}
