import cssIcon from "../../assets/icons/css.svg";
import javaIcon from "../../assets/icons/java.svg";
import pythonIcon from "../../assets/icons/python.svg";
import reactIcon from "../../assets/icons/react.svg";
import Tab from "./Tab";
import "./TabBar.css";

const initialTabs = [
  { id: "app", title: "App.jsx", icon: reactIcon },
  { id: "java", title: "test_file.java", icon: javaIcon },
  { id: "css", title: "a.css", icon: cssIcon },
  { id: "python", title: "test_file.py", icon: pythonIcon },
];

export default function TabBar() {
  const activeId = "java";

  const handleSelect = (id) => {
    console.log("select", id);
  };

  const handleClose = (id) => {
    console.log("close", id);
  };

  return (
    <div className="tab-bar" role="tablist" aria-label="File tabs">
      <div className="tab-bar__tabs">
        {initialTabs.map((t) => (
          <Tab
            key={t.id}
            tab={t}
            isActive={t.id === activeId}
            onSelect={handleSelect}
            onClose={handleClose}
          />
        ))}
      </div>
    </div>
  );
}
