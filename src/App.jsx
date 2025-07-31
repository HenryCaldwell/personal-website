import { useState } from "react";
import "./App.css";
import ActivityBar from "./components/ActivityBar";
import StatusBar from "./components/StatusBar";

export default function App() {
  const [activePanel, setActivePanel] = useState("explorer");

  return (
    <div className="app-content">
      <div className="main-content">
        <ActivityBar
          active={activePanel}
          onSelect={(panel) =>
            setActivePanel(panel === activePanel ? null : panel)
          }
        />
      </div>
      <div className="footer-content">
        <StatusBar />
      </div>
    </div>
  );
}
