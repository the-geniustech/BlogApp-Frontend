const DataStats = () => {
  return (
    // <section className="bg-gray-2 ---dark:bg-dark py-20 lg:py-[120px]">
    <div className="mx-auto px-4 md:container">
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap bg-white ---dark:bg-dark-2 shadow-1 shadow-lg ---dark:shadow-box-dark mb-14 py-[30px] rounded w-full max-w-[845px]">
          <DataStatsCard
            total="3,529"
            totalTitle="Total Subscribers"
            //   increment="+8%"
          />
          <DataStatsCard
            total="129K"
            totalTitle="Total Post Likes"
            //   increment="+58%"
          />
          <DataStatsCard
            total="4,341"
            totalTitle="Total Post Comments"
            //   increment="+8%"
          />
          <DataStatsCard
            total="3,052"
            totalTitle="Total Post View"
            //   decrement="-10%"
          />
        </div>
      </div>
    </div>
    // </section>
  );
};

export default DataStats;

const DataStatsCard = ({ totalTitle, total, increment, decrement }) => {
  return (
    <div className="border-stroke ---dark:border-dark-3 mb-7 lg:mb-0 px-[30px] sm:border-r last-of-type:border-none w-full sm:w-1/2 lg:w-1/4">
      <p className="font-medium text-body-color text-sm ---dark:text-dark-6">
        {totalTitle}
      </p>
      <p className="mb-2 font-semibold text-2xl text-dark ---dark:text-white">
        {total}
      </p>
      <div className="flex items-center">
        <span
          className={`mr-1 flex h-4 w-4 items-center justify-center rounded-full ${
            increment ? "bg-green/10" : "bg-red/10"
          } ${increment ? "text-green" : "text-red"}`}
        >
          {increment && (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2965_1178)">
                <path
                  d="M5.57113 4.20921L3.27227 6.50807L2.66627 5.90207L5.9997 2.56864L9.33313 5.90207L8.72713 6.50807L6.42827 4.20921L6.42827 9.42578L5.57113 9.42578L5.57113 4.20921Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_2965_1178">
                  <rect
                    width="10.2857"
                    height="10.2857"
                    fill="white"
                    transform="translate(11.1426 11.1406) rotate(180)"
                  />
                </clipPath>
              </defs>
            </svg>
          )}
          {decrement && (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2965_1213)">
                <path
                  d="M6.42899 7.79079L8.72785 5.49193L9.33385 6.09793L6.00042 9.43136L2.66699 6.09793L3.27299 5.49193L5.57185 7.79079L5.57185 2.57422L6.42899 2.57422L6.42899 7.79079Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2965_1213">
                  <rect
                    width="10.2857"
                    height="10.2857"
                    fill="white"
                    transform="translate(0.857666 0.859375)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          )}
        </span>
        {/* <p className="text-body-color text-xs whitespace-nowrap">
          <span className={`text-${increment ? "success" : "danger"}`}>
            {increment}
            {decrement}
          </span>{" "}
          than last week
        </p> */}
      </div>
    </div>
  );
};
