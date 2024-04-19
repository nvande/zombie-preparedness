import React from 'react';

/**
 * Parses text and transforms markdown-like syntax into React components.
 * Supports **bold** text, [link text](url) format, and --- for horizontal rules.
 *
 * @param {string} text
 * @param {string} [currentPathname]
 * @returns {Array<JSX.Element | string>}
 */
const parseMarkdown = (text: string, currentPathname?: string): Array<JSX.Element | string> => {
  const parts: Array<JSX.Element | string> = [];
  const regex = /\*\*(.*?)\*\*|\[(.*?)\]\((.*?)\)|^---$/gm;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const textSegment = text.slice(lastIndex, match.index);
      if (textSegment.trim() === "---") {
        parts.push(<hr key={`hr-${lastIndex}`} className="margin-y-4"/>);
      } else {
        parts.push(textSegment);
      }
    }

    if (match[1]) {
      parts.push(<strong key={`bold-${lastIndex}`}>{match[1].trim()}</strong>);
    } else if (match[2] && match[3]) {
      const url = new URL(match[3], window.location.origin);
      let href = url.href;
      if (currentPathname && url.pathname === currentPathname && url.hash) {
        href = url.hash;
      }
      parts.push(
        <a href={href} key={`link-${lastIndex}`}>
          {match[2].trim()}
        </a>
      );
    } else if (match[0] === '---') {
      parts.push(<hr key={`hr-${lastIndex}`} />);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    const remainingText = text.slice(lastIndex);
    if (remainingText.trim() === "---") {
      parts.push(<hr key={`hr-end`} />);
    } else {
      parts.push(<span key={`text-end`}> {remainingText.trim()} </span>);
    }
  }

  return parts;
};

export default parseMarkdown;
