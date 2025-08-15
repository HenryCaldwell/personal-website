import React, { useMemo } from "react";
import "./CodePanel.css";
import { parseContent } from "./inline-tags/parser";
import { TAGS, allowedTags } from "./inline-tags/tags";

export default function CodePanel({ content = "" }) {
  const parsedContent = useMemo(
    () => parseContent(content, allowedTags),
    [content]
  );
  const totalLines = parsedContent.length + 1;

  return (
    <div className="code-panel" role="region" aria-label="Read-only code panel">
      {Array.from({ length: totalLines }, (_, i) => (
        <React.Fragment key={i}>
          <div className="line-number" aria-hidden="true">
            {i + 1}
          </div>
          <div className="line-text" data-line={i}>
            {renderTokens(parsedContent[i] || [], `L${i}`)}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

function renderTokens(tokens, keyBase = "") {
  return tokens.map((token, index) => {
    const key = `${keyBase}-${index}`;

    if (token.type === "text") {
      return <React.Fragment key={key}>{token.text}</React.Fragment>;
    }

    if (token.type === "mark") {
      const children = renderTokens(token.children, key);
      const handler = TAGS[token.tag];
      return (
        <React.Fragment key={key}>
          {handler(children, token.args)}
        </React.Fragment>
      );
    }

    return null;
  });
}
