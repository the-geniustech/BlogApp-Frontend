import { useEffect, useRef, useState } from "react";

const AutoResizingTextarea = ({
  className,
  placeholder,
  text,
  setText,
  autoFocus,
  charLimit = 200, // Default character limit
  minHeight = "auto",
}) => {
  const [error, setError] = useState("");
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    const newText = e.target.value.replace(/\n/g, " ");
    if (newText.length <= charLimit) {
      setText(newText);
      setError("");
      adjustTextareaHeight();
    } else {
      setError(`Character limit of ${charLimit} exceeded.`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default action (inserting a line break)
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text").replace(/\n/g, " ");
    if (text.length + pastedText.length <= charLimit) {
      document.execCommand("insertText", false, pastedText);
      setError("");
      adjustTextareaHeight();
    } else {
      setError(
        `Pasting this text will exceed the character limit of ${charLimit}.`
      );
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = minHeight; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
    }
  };

  useEffect(() => {
    const adjustTextareaHeight = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = minHeight; // Reset height
        textarea.style.height = `${textarea.scrollHeight}px`; // Set height to scrollHeight
      }
    };
    adjustTextareaHeight();
  }, [minHeight, text]);

  return (
    <div className="w-full">
      <textarea
        ref={textareaRef}
        className={`box-border flex items-center mb-2 rounded-md w-full ${className} whitespace-pre-wrap overflow-hidden resize-none`}
        style={{ height: minHeight }}
        value={text}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        onPaste={handlePaste}
        autoComplete="off"
        autoFocus={autoFocus}
      />
      {error && <div className="mt-1 text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default AutoResizingTextarea;

/* import { useState } from "react";

const AutoResizingTextarea = ({
  className,
  placeholder,
  text,
  setText,
  autoFocus,
  charLimit = 200, // Default character limit
  minHeight = "auto",
}) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newText = e.target.value.replace(/\n/g, " ");
    if (newText.length <= charLimit) {
      setText(newText);
      setError("");
      e.target.style.height = minHeight; // Reset height
      e.target.style.height = `${e.target.scrollHeight}px`; // Set height to scrollHeight
    } else {
      setError(`Character limit of ${charLimit} exceeded.`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default action (inserting a line break)
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text").replace(/\n/g, " ");
    if (text.length + pastedText.length <= charLimit) {
      document.execCommand("insertText", false, pastedText);
      setError("");
    } else {
      setError(
        `Pasting this text will exceed the character limit of ${charLimit}.`
      );
    }
  };

  return (
    <div className="w-full">
      <textarea
        className={`box-border flex items-center mb-2 rounded-md w-full ${className}  whitespace-pre-wrap overflow-hidden resize-none`}
        style={{ height: minHeight }}
        value={text}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        onPaste={handlePaste}
        autoComplete="off"
        autoFocus={autoFocus}
      />
      {error && <div className="mt-1 text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default AutoResizingTextarea;
 */
