import emailIcon from "../assets/icons/email.svg";
import errorIcon from "../assets/icons/error.svg";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import remoteIcon from "../assets/icons/remote.svg";
import smileyIcon from "../assets/icons/smiley.svg";
import warningIcon from "../assets/icons/warning.svg";
import "./StatusBar.css";

export default function StatusBar({ left, right }) {
  return (
    <div className="status-bar">
      <div className="status-bar__left">
        <button
          className="status-bar__item status-bar__item--focused"
          aria-label="Remote status"
        >
          <img
            className="status-bar__item-image"
            src={remoteIcon}
            alt=""
            aria-hidden="true"
          />
        </button>
        <button className="status-bar__item" aria-label="Problem status">
          <img
            className="status-bar__item-image"
            src={errorIcon}
            alt=""
            aria-hidden="true"
          />
          <span>0</span>
          <img
            className="status-bar__item-image"
            src={warningIcon}
            alt=""
            aria-hidden="true"
          />
          <span>0</span>
        </button>
        <button className="status-bar__item" aria-label="Smiley face">
          <img
            className="status-bar__item-image"
            src={smileyIcon}
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
      <div className="status-bar__right">
        <a
          className="status-bar__item"
          href="https://github.com/HenryCaldwell"
          target="_blank"
          aria-label="Github link"
        >
          <img
            className="status-bar__item-image"
            src={githubIcon}
            alt="Github icon"
          />
        </a>
        <a
          className="status-bar__item"
          href="https://www.linkedin.com/in/henrycaldwell05/"
          target="_blank"
          aria-label="LinkedIn Link"
        >
          <img
            className="status-bar__item-image"
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
        </a>
        <a
          className="status-bar__item"
          href="mailto:henrycaldwell2005@gmail.com"
          target="_blank"
          aria-label="Email Link"
        >
          <img
            className="status-bar__item-image"
            src={emailIcon}
            alt="Email icon"
          />
        </a>
      </div>
    </div>
  );
}
