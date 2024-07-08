import NewsContainer from "../features/news/NewsContainer";
import { useAllNews } from "../features/news/useAllNews";
import Spinner from "../ui/Spinner";

const Home = () => {
  const { isLoading, allNewsData } = useAllNews();

  return (
    <section className="bg-white mx-auto px-4 pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="mx-auto mb-[60px] lg:mb-20 container">
        <h1 className="mb-4 font-bold text-3xl text-dark sm:text-4xl md:text-[40px]">
          Recent News
        </h1>
        <p className="text-base text-body-color">
          Stay informed with the latest updates from around the world. From
          groundbreaking scientific discoveries to major political events, our
          recent news section covers the most important stories that impact your
          life and community.
        </p>
      </div>

      {isLoading && !allNewsData ? (
        <div className="flex justify-center items-center bg-gray-50 h-screen">
          <Spinner />
        </div>
      ) : (
        <NewsContainer isLoadingPost={isLoading} allPostData={allNewsData} />
      )}
    </section>
  );
};

export default Home;
