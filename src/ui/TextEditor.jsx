import { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "code-block",
];

const modules = {
  toolbar: {
    container: [
      [{ header: "1" }, { header: "2" }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "code-block"],
    ],
  },
};

const TextEditor = ({ value, onChange }) => {
  const quillRef = useRef(null);

  return (
    <div className="bg-white basis-auto grow shrink-0">
      <ReactQuill
        ref={quillRef}
        value={value}
        onChange={onChange}
        theme="snow"
        formats={formats}
        modules={modules}
        placeholder="Enter your blog post..."
        // bounds=".editor"
      />
    </div>
  );
};

export default TextEditor;
