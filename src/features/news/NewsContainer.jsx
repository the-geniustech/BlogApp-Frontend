import { useRef, useState } from "react";
import ButtonGroup from "../../ui/ButtonGroup";
import Spinner from "../../ui/Spinner";
import NewsOverviewCard from "./NewsOverviewCard";
import ConfirmDeleteModal from "../../ui/ConfirmDeleteModal";

export default function NewsContainer({ isLoadingPost, allPostData, userId }) {
  const [modalOpen, setModalOpen] = useState(false);
  const trigger = useRef(null);

  if (isLoadingPost && !isLoadingPost) return <Spinner />;

  if (!isLoadingPost && !allPostData?.length)
    return <h1 className="p-20">No post Yet. Start creating your own post</h1>;

  return (
    <div className="mx-auto container">
      <div className="flex flex-wrap -mx-4">
        {allPostData.map((item) => (
          <NewsOverviewCard
            key={item._id}
            image={item.coverImage?.url || ""}
            title={item.title}
            paragraph={item.summary}
            id={item._id}
          >
            {item.author._id === userId && (
              <>
                <ButtonGroup
                  trigger={trigger}
                  id={item._id}
                  onHandleDelete={setModalOpen}
                />
                <ConfirmDeleteModal
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                  id={item._id}
                  trigger={trigger}
                />
              </>
            )}
          </NewsOverviewCard>
        ))}
      </div>
    </div>
  );
}
