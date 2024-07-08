/* import { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { marked } from "marked";

const mdParser = new MarkdownIt();

const MarkdownEditor = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = ({ text }) => {
    setContent(text);
  };

  return (
    <>
      <div>
        <MdEditor
          value={content}
          style={{ height: "500px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
          config={{
            view: {
              md: true,
              html: false,
              fullScreen: false,
              hideMenu: false,
            },
            shortcuts: {
              drawTable: "Cmd-Alt-T",
            },
          }}
        />
      </div>
      <div
        className="container"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>
    </>
  );
};

export default MarkdownEditor; */

/* import { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState("");

  const handleChange = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div>
      <textarea
        value={markdownText}
        onChange={handleChange}
        placeholder="Write your post using Markdown..."
        rows={10}
        cols={80}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <div style={{ marginTop: "10px" }}>
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
 */
