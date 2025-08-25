import rightArrow from "../../assets/icons/right.svg";

import "./FilePathBar.css";

export default function FilePathBar({ segments = [] }) {
  return (
    <nav className="file-path-bar">
      <ol className="file-path-bar__list">
        {segments.map((seg, i) => {
          const isLast = i === segments.length - 1;
          return (
            <li key={seg} className="file-path-bar__item">
              <button
                className="file-path-bar__button"
                onClick={() => console.log(seg)}
              >
                <span className="file-path-bar__segment">{seg}</span>
                {!isLast && (
                  <img
                    className="file-path-bar__arrow"
                    src={rightArrow}
                    alt=""
                    aria-hidden="true"
                  />
                )}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
