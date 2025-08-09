import React, { useMemo } from "react";
import "./CodePanel.css";

export default function CodePanel({ content = "" }) {
  const lines = useMemo(() => {
    const s = String(content);
    const arr = s.split("\n");
    while (arr.length && arr[arr.length - 1] === "") arr.pop();
    return arr;
  }, [content]);

  const totalLines = lines.length + 1;

  return (
    <div className="code-panel">
      {Array.from({ length: totalLines }, (_, i) => (
        <React.Fragment key={i}>
          <div className="line-number">{i + 1}</div>
          <div className="line-text">{lines[i] ?? ""}</div>
        </React.Fragment>
      ))}
    </div>
  );
}
