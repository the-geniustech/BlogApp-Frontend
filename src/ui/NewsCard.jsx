const NewsCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <div className="px-4 w-full md:w-1/2 lg:w-1/3">
      <div className="mb-10 w-full">
        <div className="mb-8 rounded overflow-hidden">
          <img src={image} alt="" className="w-full" />
        </div>
        <div>
          {date && (
            <span className="inline-block mb-1 px-4 py-1 rounded font-semibold text-center text-xs leading-loose">
              {date}
            </span>
          )}
          <h3>
            <a
              href="/#"
              className="inline-block mb-4 font-semibold text-dark text-xl sm:text-2xl lg:text-xl xl:text-2xl hover:text-primary"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base text-body-color">{CardDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
