import "./App.css";
import StatusBar from "./components/StatusBar";
import SideBar from "./components/side-bar/SideBar";

export default function App() {
  return (
    <div className="app-content">
      <div className="main-content">
        <SideBar />
      </div>
      <div className="footer-content">
        <StatusBar />
      </div>
    </div>
  );
}
