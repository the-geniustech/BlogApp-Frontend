import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CreateEditNewsModal = ({ modalOpen, setModalOpen, trigger }) => {
  const modal = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current || !trigger.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      ) {
        return;
      }
      setModalOpen(false);
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [modalOpen, setModalOpen, trigger]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };

    document.addEventListener("keydown", keyHandler);

    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, [modalOpen, setModalOpen]);

  return (
    <div
      className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center z-50 justify-center bg-dark/90 px-4 py-5 ${
        modalOpen ? "block" : "hidden"
      }`}
    >
      <div
        ref={modal}
        className="bg-white px-8 md:px-[70px] py-12 md:py-[50px] rounded-[20px] w-full max-w-[570px] text-center"
      >
        <div className="flex justify-center items-center bg-red-300 mx-auto mb-5 rounded-full w-[60px] h-[60px] text-red-950">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6875 15.4875L14.6625 2.57498C14.025 1.71248 13.05 1.22498 12 1.22498C10.9125 1.22498 9.93753 1.71248 9.33753 2.57498L1.31253 15.4875C0.562527 16.5 0.450027 17.8125 1.01253 18.9375C1.57503 20.0625 2.70003 20.775 3.97503 20.775H20.025C21.3 20.775 22.425 20.0625 22.9875 18.9375C23.55 17.85 23.4375 16.5 22.6875 15.4875ZM21.4875 18.1875C21.1875 18.75 20.6625 19.0875 20.025 19.0875H3.97503C3.33753 19.0875 2.81253 18.75 2.51253 18.1875C2.25003 17.625 2.28753 16.9875 2.66253 16.5L10.6875 3.58748C10.9875 3.17498 11.475 2.91248 12 2.91248C12.525 2.91248 13.0125 3.13748 13.3125 3.58748L21.3375 16.5C21.7125 16.9875 21.75 17.625 21.4875 18.1875Z"
              fill="currentColor"
            />
            <path
              d="M12 8.20001C11.55 8.20001 11.1375 8.57501 11.1375 9.06251V13.15C11.1375 13.6 11.5125 14.0125 12 14.0125C12.4875 14.0125 12.8625 13.6375 12.8625 13.15V9.02501C12.8625 8.57501 12.45 8.20001 12 8.20001Z"
              fill="currentColor"
            />
            <path
              d="M12 15C11.55 15 11.1375 15.375 11.1375 15.8625V16.05C11.1375 16.5 11.5125 16.9125 12 16.9125C12.4875 16.9125 12.8625 16.5375 12.8625 16.05V15.825C12.8625 15.375 12.45 15 12 15Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h3 className="pb-[22px] font-bold text-dark text-xl sm:text-2xl">
          You have unsaved changes
        </h3>
        <p className="mb-4 text-base text-body-color leading-relaxed">
          You&lsquo;ve made changes to your post. Do you want to navigate to
          leave this page?
        </p>
        <div className="flex flex-wrap -mx-3">
          <div className="px-3 w-1/2">
            <button
              onClick={(e) => {
                e.preventDefault();
                setModalOpen(false);
              }}
              className="block border-stroke hover:bg-red-950 p-3 border hover:border-red-950 rounded-md w-full font-medium text-base text-center text-dark hover:text-white transition"
            >
              No, keep editing
            </button>
          </div>
          <div className="px-3 w-1/2">
            <Link
              to="/"
              className="block bg-red-800 hover:bg-red-700 p-3 border border-red-900 rounded-md w-full font-medium text-base text-center text-white transition"
            >
              Yes, leave the page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEditNewsModal;
