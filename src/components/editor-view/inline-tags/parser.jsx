export const INLINE_TAG_REGEX =
  /<\[(\/)?\s*([a-z][a-z0-9-]*)\s*(?:,\s*([^\]]+))?\s*\]>/gi;

export function parseContent(content, allowedTags) {
  const lines = String(content).split(/\r?\n/);

  // Trim trailing blank lines
  while (lines.length && lines[lines.length - 1] === "") {
    lines.pop();
  }

  return lines.map((lineText, lineIndex) =>
    parseLine(lineText, lineIndex, allowedTags)
  );
}

function parseLine(lineText, lineIndex, allowedTags) {
  const tokenList = []; // { type: 'text'|'mark', text? | { tag, args, children } }
  const openTagStack = []; // { tagName, argList, tokenStartIndex, openingColumn }
  let cursorIndex = 0;
  let match;

  INLINE_TAG_REGEX.lastIndex = 0;

  while ((match = INLINE_TAG_REGEX.exec(lineText))) {
    const matchStartIndex = match.index;

    // Literal rendering if preceded with \
    if (matchStartIndex > 0 && lineText[matchStartIndex - 1] === "\\") {
      if (matchStartIndex - 1 > cursorIndex) {
        tokenList.push({
          type: "text",
          text: lineText.slice(cursorIndex, matchStartIndex - 1),
        });
      }

      tokenList.push({ type: "text", text: match[0] });
      cursorIndex = INLINE_TAG_REGEX.lastIndex;
      continue;
    }

    // Plain text before this tag
    if (matchStartIndex > cursorIndex) {
      tokenList.push({
        type: "text",
        text: lineText.slice(cursorIndex, matchStartIndex),
      });
    }

    const isClosingTag = !!match[1];
    const tagName = match[2].toLowerCase();
    const rawArgString = (match[3] || "").trim();
    const argList = rawArgString
      ? rawArgString.split(",").map((s) => s.trim())
      : [];
    const columnNumber = matchStartIndex + 1;

    // Unknown tag name
    if (allowedTags && !allowedTags.has(tagName)) {
      throw new SyntaxError(
        `Unknown tag "${tagName}" at line ${
          lineIndex + 1
        }, column ${columnNumber}`
      );
    }

    if (!isClosingTag) {
      // Opening tag
      openTagStack.push({
        tagName,
        argList,
        tokenStartIndex: tokenList.length,
        openingColumn: columnNumber,
      });
    } else {
      // Closing tag
      let stackIndex = openTagStack.length - 1;

      while (stackIndex >= 0 && openTagStack[stackIndex].tagName !== tagName) {
        stackIndex--;
      }

      // Unopened tag
      if (stackIndex < 0) {
        throw new SyntaxError(
          `Unmatched tag "${tagName}" at line ${
            lineIndex + 1
          }, column ${columnNumber}`
        );
      }

      const openingTag = openTagStack.splice(stackIndex, 1)[0];
      const innerTokens = tokenList.splice(openingTag.tokenStartIndex);
      tokenList.push({
        type: "mark",
        tag: tagName,
        args: openingTag.argList,
        children: innerTokens,
      });
    }

    cursorIndex = INLINE_TAG_REGEX.lastIndex;
  }

  // Plain text after the last tag
  if (cursorIndex < lineText.length) {
    tokenList.push({ type: "text", text: lineText.slice(cursorIndex) });
  }

  // Unclosed tag
  if (openTagStack.length) {
    const firstUnclosed = openTagStack[0];
    throw new SyntaxError(
      `Unclosed tag "${firstUnclosed.tagName}" at line ${
        lineIndex + 1
      }, column ${firstUnclosed.openingColumn}`
    );
  }

  return tokenList;
}
