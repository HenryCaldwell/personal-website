import { useState } from "react";
import "./App.css";
import ActivityBar from "./components/ActivityBar";

export default function App() {
  const [activePanel, setActivePanel] = useState("explorer");

  return (
    <div className="main-content">
      <ActivityBar
        active={activePanel}
        onSelect={(panel) =>
          setActivePanel(panel === activePanel ? null : panel)
        }
      />
    </div>
  );
}
