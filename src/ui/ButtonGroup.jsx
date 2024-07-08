import { useNavigate } from "react-router-dom";

export default function ButtonGroup({ id, onHandleDelete, trigger }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center lg:ml-auto">
      <div className="inline-flex items-center border-stroke dark:border-dark-3 border rounded-lg overflow-hidden">
        <button
          onClick={() => navigate(`/editpost/${id}`)}
          className="border-stroke dark:border-dark-3 hover:bg-gray-2 hover:bg-primary px-4 py-3 border-r last-of-type:border-r-0 font-medium text-base text-dark hover:text-white"
        >
          Edit
        </button>
        <button
          onClick={() => onHandleDelete(true)}
          ref={trigger}
          className="border-stroke dark:border-dark-3 hover:bg-gray-2 hover:bg-primary px-4 py-3 border-r last-of-type:border-r-0 font-medium text-base text-dark hover:text-white"
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}
