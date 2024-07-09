import DataStats from "../features/authentication/DataStats";
import { useUser } from "../features/authentication/useUser";
import NewsContainer from "../features/news/NewsContainer";
import Spinner from "../ui/Spinner";

function Dashboard() {
  const { isLoadingUser, user } = useUser();

  if (isLoadingUser && !user) return <Spinner />;

  return (
    <section className="bg-white mx-auto px-4 pt-24 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="mx-auto mb-[60px] lg:mb-20 container">
        <h1 className="mb-4 font-bold text-3xl text-dark sm:text-4xl md:text-[40px]">
          Dashboard
        </h1>
      </div>

      <DataStats />

      <NewsContainer
        isLoadingPost={isLoadingUser}
        allPostData={user.posts}
        userId={user._id}
      />
    </section>
  );
}

export default Dashboard;
