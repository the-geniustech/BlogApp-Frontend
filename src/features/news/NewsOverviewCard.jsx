import { NavLink } from "react-router-dom";

function NewsOverviewCard({ title, image, paragraph, id, children }) {
  return (
    <div className="px-4 w-full md:w-1/2 lg:w-1/3">
      <div className="border-stroke dark:border-dark-3 mb-8 p-5 border rounded-lg group">
        <div className="mb-7 rounded overflow-hidden">
          {image && (
            <img
              src={image}
              alt={title}
              className="group-hover:rotate-6 group-hover:scale-125 w-full duration-200 object-center object-cover"
            />
          )}
        </div>
        <div>
          <h3 className="mb-5 line-clamp-2 font-bold text-dark text-xl hover:text-primary dark:hover:text-primary duration-200 cursor-pointer">
            {title}
          </h3>
          <p className="mb-7 line-clamp-3 text-base text-body-color">
            {paragraph}
          </p>
          <div className="flex justify-between items-center">
            <NavLink
              onClick={() => id}
              to={`/newsdetails/${id}`}
              className="inline-flex items-center gap-2 hover:gap-3.5 text-dark hover:text-primary dark:hover:text-primary duration-200"
            >
              Read More
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.6875 16.0312C4.5 16.0312 4.3125 15.9687 4.1875 15.8125C3.90625 15.5312 3.90625 15.0938 4.1875 14.8125L13.6562 5.34375H6.09375C5.71875 5.34375 5.40625 5.03125 5.40625 4.65625C5.40625 4.28125 5.71875 3.96875 6.09375 3.96875H15.3125C15.6875 3.96875 16 4.28125 16 4.65625V13.9375C16 14.3125 15.6875 14.625 15.3125 14.625C14.9375 14.625 14.625 14.3125 14.625 13.9375V6.40625L5.1875 15.8438C5.0625 15.9688 4.875 16.0312 4.6875 16.0312Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </NavLink>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsOverviewCard;
