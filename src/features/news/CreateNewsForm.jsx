import { useEffect, useRef, useState } from "react";
import TextEditor from "../../ui/TextEditor";
import AutoResizingTextarea from "../../ui/AutoResizingTextarea";
import Button from "../../ui/Button";
import TagInput from "../../ui/TagInput";
import { FiX } from "react-icons/fi";
import CreateEditNewsModal from "../../ui/CreateEditNewsModal";
import { useCreateNews } from "./useCreateNews";
import { useForm } from "react-hook-form";

const CreateNewsForm = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const trigger = useRef(null);
  const [coverImage, setCoverImage] = useState([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});

  const { createNews, isCreating } = useCreateNews();
  const { setValue, handleSubmit, reset } = useForm();

  useEffect(() => {
    setValue("coverImage", coverImage);
    setValue("title", title);
    setValue("summary", summary);
    setValue("content", content);
    setValue("tags", tags.join(" "));
  }, [content, coverImage, modalOpen, setValue, summary, tags, title]);

  const validateFields = () => {
    const newErrors = {};

    if (coverImage.length === 0)
      newErrors.coverImage = "Cover image is required";
    if (!title.trim()) newErrors.title = "Title is required";
    if (!summary.trim()) newErrors.summary = "Summary is required";
    if (tags.length === 0) newErrors.tags = "At least one tag is required";
    if (!content.trim()) newErrors.content = "Content is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    // Update the field value
    switch (field) {
      case "coverImage":
        setCoverImage(value);
        setValue("coverImage", value);
        break;
      case "title":
        setTitle(value);
        setValue("title", value);
        break;
      case "summary":
        setSummary(value);
        setValue("summary", value);
        break;
      case "tags":
        setTags(value);
        setValue("tags", value.join(" "));
        break;
      case "content":
        setContent(value);
        setValue("content", value);
        break;
      default:
        break;
    }

    // Remove the error message for the specific field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: undefined,
    }));
  };

  const onSubmit = (data) => {
    if (!validateFields()) return;
    createNews(data, {
      onSettled: () => reset(),
    });
  };

  return (
    <form
      className="relative bg-gray-200 px-4 pt-16 max-h-screen"
      onSubmit={handleSubmit(onSubmit)}
    >
      <header className="top-0 left-0 z-50 fixed flex items-center bg-inherit px-4 py-4 w-full h-16">
        <div className="mx-auto container">
          <span>Creating post...</span>
        </div>
        <button
          className="top-6 right-10 absolute bg-transparent text-2xl text-black"
          onClick={(e) => {
            e.preventDefault();
            setModalOpen((modalOpen) => !modalOpen);
          }}
          ref={trigger}
        >
          <FiX />
        </button>
      </header>
      <div className="grid grid-rows-[max-content,1fr] bg-white h-[calc(100vh-4rem-6rem)] mx-auto rounded-md overflow-auto container">
        <div className="flex flex-col bg-white p-10">
          <div className="inline relative mb-4 self-start">
            <input
              type="file"
              accept="image/*"
              id="coverPhoto"
              className="absolute inset-0 opacity-0 w-full cursor-pointer"
              onChange={(e) => handleChange("coverImage", e.target.files)}
            />
            <label
              htmlFor="coverPhoto"
              className="flex items-center border-2 border-stroke focus:border-primary bg-transparent focus-visible:shadow-none px-5 py-3 border-l-primary-dark rounded-md text-gray-900 text-lg cursor-pointer outline-none"
            >
              Add a cover image
            </label>
          </div>
          {errors.coverImage && (
            <span className="text-red-600">{errors.coverImage}</span>
          )}

          <AutoResizingTextarea
            placeholder="News headline here..."
            className="border-none font-black text-3xl text-dark md:text-4xl lg:text-5xl placeholder:text-dark"
            autoFocus={true}
            charLimit={150}
            minHeight="5rem"
            text={title}
            setText={(value) => handleChange("title", value)}
          />
          {errors.title && <span className="text-red-600">{errors.title}</span>}

          <AutoResizingTextarea
            placeholder="Write not more than 250 characters Summary of your news..."
            className="border-stroke focus:border-primary bg-transparent focus-visible:shadow-none px-5 py-3 border rounded-md w-full text-base text-body-color placeholder:text-gray-600 outline-none"
            charLimit={250}
            minHeight="3rem"
            text={summary}
            setText={(value) => handleChange("summary", value)}
          />
          {errors.summary && (
            <span className="text-red-600">{errors.summary}</span>
          )}

          <TagInput
            setTags={(value) => handleChange("tags", value)}
            tags={tags}
          />
          {errors.tags && <span className="text-red-600">{errors.tags}</span>}
        </div>
        <TextEditor
          value={content}
          onChange={(value) => handleChange("content", value)}
        />
        {errors.content && (
          <span className="text-red-600">{errors.content}</span>
        )}
      </div>
      <footer className="bottom-0 left-0 z-50 fixed flex items-center bg-inherit px-4 py-6 w-full h-24">
        <div className="mx-auto container">
          <Button size="large" isloading={isCreating}>
            Create Post
          </Button>
        </div>
      </footer>

      <CreateEditNewsModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        trigger={trigger}
      />
    </form>
  );
};

export default CreateNewsForm;
