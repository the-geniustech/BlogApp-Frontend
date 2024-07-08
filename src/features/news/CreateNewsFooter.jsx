import Button from "../../ui/Button";

function CreatePostFooter() {
  return (
    <div className="flex justify-between items-center bg-stone-800 px-4 sm:px-6 py-4 text-sm text-stone-200 md:text-base uppercase">
      <p className="space-x-4 sm:space-x-6 font-semibold text-stone-300">
        <span>50 pizzas</span>
        <span>$96:00</span>
      </p>
      <Button>Create Post</Button>
    </div>
  );
}

export default CreatePostFooter;
