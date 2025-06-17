import { Link } from "react-router-dom";
import cat_astronaut from "../assets/cat_astronaut.jpg";

function PageNotFound() {
  return (
    <div className="relative z-0 text-[#333]">
      <h1 className="mt-4 max-w-[80dvw] justify-self-center text-center text-2xl md:text-3xl lg:text-4xl">
        Whoa, how did you end up here?! That's odd!
      </h1>
      <img
        src={cat_astronaut}
        alt=""
        className="fixed left-[50%] top-56 h-auto w-[64dvw] -translate-x-[50%] rotate-45"
      />
      <Link to={"/"}>
        <button className="fixed bottom-20 left-[50%] h-12 w-24 -translate-x-[50%] rounded-full bg-[#32cd32] md:h-12 md:w-32 md:text-lg lg:h-16 lg:w-40 lg:text-xl">
          Home
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
