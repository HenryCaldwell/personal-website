import { useEffect, useRef } from "react";

import Tab from "./Tab";

import "./TabBar.css";

export default function TabBar({ tabs, activeId, onSelect, onClose }) {
  const scrollerRef = useRef(null);
  const activeRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const active = activeRef.current;
    if (!scroller || !active) return;

    const target =
      active.offsetLeft - (scroller.clientWidth - active.clientWidth) / 2;

    const max = scroller.scrollWidth - scroller.clientWidth;
    const clamped = Math.max(0, Math.min(target, max));
    scroller.scrollLeft = clamped;
  }, [activeId]);

  return (
    <div
      className="tab-bar"
      role="tablist"
      aria-label="File tabs"
      ref={scrollerRef}
    >
      <div className="tab-bar__tabs">
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <Tab
              key={tab.id}
              tab={tab}
              isActive={isActive}
              onSelect={onSelect}
              onClose={onClose}
              innerRef={isActive ? activeRef : null}
            />
          );
        })}
      </div>
    </div>
  );
}
