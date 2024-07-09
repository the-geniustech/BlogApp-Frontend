import NewsContainer from "../features/news/NewsContainer";
import { useAllNews } from "../features/news/useAllNews";
import Spinner from "../ui/Spinner";

const Home = () => {
  const { isLoading, allNewsData } = useAllNews();

  return (
    <section className="bg-white mx-auto px-4 pt-24 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="mx-auto mb-[60px] lg:mb-20 container">
        <h1 className="mb-4 font-bold text-3xl text-dark sm:text-4xl md:text-[40px]">
          Latest Tech Talks
        </h1>
        <p className="text-base text-body-color">
          Dive into the world of technology with our latest posts. From
          cutting-edge web development techniques to in-depth discussions on
          software engineering, our tech talks provide valuable insights and
          updates for developers and tech enthusiasts.
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
