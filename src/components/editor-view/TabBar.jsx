import Tab from "./Tab";
import "./TabBar.css";

export default function TabBar({ tabs, activeId, onSelect, onClose }) {
  return (
    <div className="tab-bar" role="tablist" aria-label="File tabs">
      <div className="tab-bar__tabs">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            tab={tab}
            isActive={tab.id === activeId}
            onSelect={onSelect}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
}
