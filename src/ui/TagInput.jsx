import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const TagInput = ({ tags, setTags }) => {
  const [currentInput, setCurrentInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {}, [tags]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.match(/^[a-zA-Z0-9]*$/)) {
      setCurrentInput(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === " " && currentInput.trim()) {
      addTag(currentInput.trim());
    }
  };

  const addTag = (tag) => {
    if (tags.length < 4) {
      if (editingIndex !== null) {
        const updatedTags = [...tags];
        updatedTags[editingIndex] = tag;
        setTags(updatedTags);
        setEditingIndex(null);
      } else {
        setTags([...tags, tag]);
      }
      setCurrentInput("");
    }
  };

  const handleTagClick = (index) => {
    setEditingIndex(index);
    setCurrentInput(tags[index]);
  };

  const handleDeleteTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
    setEditingIndex(null);
  };

  const handleTooltipClick = () => {
    if (currentInput.trim()) {
      addTag(currentInput.trim());
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center space-x-1">
            {editingIndex === index ? (
              <input
                type="text"
                value={currentInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="flex-grow p-2 border rounded"
                autoFocus
              />
            ) : (
              <div
                className="flex items-center space-x-1 bg-gray-200 p-2 rounded cursor-pointer"
                onClick={() => handleTagClick(index)}
              >
                <span>{tag}</span>
                <button
                  className="text-black"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteTag(index);
                  }}
                >
                  <FiX />
                </button>
              </div>
            )}
          </div>
        ))}
        {tags.length < 4 && editingIndex === null && (
          <input
            type="text"
            value={currentInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-grow border-0 p-2 rounded w-full placeholder:text-dark"
            placeholder="Add upto 4 tags..."
          />
        )}
      </div>
      {currentInput && (
        <div className="absolute bg-gray-100 shadow-md mt-2 p-2 rounded">
          <div className="cursor-pointer" onClick={handleTooltipClick}>
            {currentInput}
          </div>
        </div>
      )}
    </div>
  );
};

export default TagInput;
