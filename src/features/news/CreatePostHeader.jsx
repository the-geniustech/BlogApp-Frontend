import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function CreatePostHeader() {
  return (
    <header className="flex justify-between items-center border-stone-200 bg-yellow-400 px-4 sm:px-6 py-3 border-b uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <Button>Create post</Button>
      <Button>Create post</Button>
    </header>
  );
}

export default CreatePostHeader;
