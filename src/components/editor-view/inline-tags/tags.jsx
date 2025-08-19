export const TAGS = {
  // <[color, #aabbcc]>text<[/color]>
  color(children, args) {
    const hex = (args[0] || "").trim();
    const isHex = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex);
    return isHex ? (
      <span style={{ color: hex }}>{children}</span>
    ) : (
      <>{children}</>
    );
  },

  // <[link, https://example.com || www.example.com]>text<[/link]>
  link(children, args) {
    const normalizeHref = (u = "") => {
      const t = u.trim();
      if (/^https?:\/\//i.test(t)) return t;
      if (/^www\./i.test(t)) return `https://${t}`;
      return t;
    };
    const href = normalizeHref(args[0] || "");
    return (
      <a href={href} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  },

  // <[bold]>text<[/bold]>
  bold(children) {
    return <strong>{children}</strong>;
  },

  // <[italic]>text<[/italic]>
  italic(children) {
    return <em>{children}</em>;
  },
};

export const allowedTags = new Set(Object.keys(TAGS));
