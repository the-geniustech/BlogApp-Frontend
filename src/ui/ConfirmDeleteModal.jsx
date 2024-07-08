import { useEffect, useRef } from "react";
import { useDeletePost } from "../features/news/useDeleteNews";

const ConfirmDeleteModal = ({ modalOpen, setModalOpen, id, trigger }) => {
  const { isDeleting, deletePost } = useDeletePost();
  const modal = useRef(null);

  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        (trigger && trigger.current.contains(target))
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [modalOpen, setModalOpen, trigger]);

  // Close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [modalOpen, setModalOpen]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <div
      className={`fixed left-0 top-0 flex h-screen w-full items-center justify-center py-10 bg-opacity-60 bg-gray-800 backdrop-blur-sm ${
        modalOpen ? "block" : "hidden"
      }`}
    >
      <div
        ref={modal}
        className="bg-white shadow-lg dark:shadow-3 mx-auto p-8 rounded-[10px] max-w-[560px]"
      >
        <h3 className="flex mb-5 font-semibold text-dark text-lg sm:text-xl">
          <span className="inline-block pr-[10px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2095_7581)">
                <path
                  d="M12 0.674988C5.73749 0.674988 0.674988 5.73749 0.674988 12C0.674988 18.2625 5.73749 23.3625 12 23.3625C18.2625 23.3625 23.3625 18.2625 23.3625 12C23.3625 5.73749 18.2625 0.674988 12 0.674988ZM12 21.675C6.67499 21.675 2.36249 17.325 2.36249 12C2.36249 6.67499 6.67499 2.36249 12 2.36249C17.325 2.36249 21.675 6.71249 21.675 12.0375C21.675 17.325 17.325 21.675 12 21.675Z"
                  fill="#F27430"
                />
                <path
                  d="M13.5 10.2H10.5C10.05 10.2 9.63751 10.575 9.63751 11.0625V18.5625C9.63751 19.0125 10.0125 19.425 10.5 19.425H13.5C13.95 19.425 14.3625 19.05 14.3625 18.5625V11.0625C14.3625 10.575 13.95 10.2 13.5 10.2ZM12.675 17.7H11.3625V11.8875H12.675V17.7Z"
                  fill="#F27430"
                />
                <path
                  d="M12 4.61249C10.725 4.61249 9.63751 5.66249 9.63751 6.97499C9.63751 8.28749 10.6875 9.33749 12 9.33749C13.3125 9.33749 14.3625 8.28749 14.3625 6.97499C14.3625 5.66249 13.275 4.61249 12 4.61249ZM12 7.61249C11.625 7.61249 11.325 7.31249 11.325 6.93749C11.325 6.56249 11.625 6.26249 12 6.26249C12.375 6.26249 12.675 6.56249 12.675 6.93749C12.675 7.31249 12.375 7.61249 12 7.61249Z"
                  fill="#F27430"
                />
              </g>
              <defs>
                <clipPath id="clip0_2095_7581">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          Are you sure you want to delete?
        </h3>
        <div className="flex justify-end items-center space-x-1">
          <button
            onClick={() => setModalOpen(false)}
            className="bg-white hover:bg-red-900 shadow-1 px-5 py-2 rounded-md font-medium text-dark text-sm hover:text-white"
          >
            Cancel
          </button>
          <button
            disabled={isDeleting}
            onClick={() => deletePost(id)}
            className={`bg-primary hover:bg-opacity-90 px-5 py-2 rounded font-medium text-sm text-white ${
              isDeleting ? "opacity-85" : ""
            }`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmDeleteModal;
