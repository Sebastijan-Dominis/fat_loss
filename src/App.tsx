import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Spinner from "./Spinner/Spinner";
import Navbar from "./nav/Navbar";

const Fat_loss = lazy(() => import("./fat_loss/Fat_loss"));
const Body_fat = lazy(() => import("./body_fat/Body_fat"));
const About = lazy(() => import("./about/About"));
const NotFound = lazy(() => import("./not_found/NotFound"));

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#fffff5] object-cover"></div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Suspense fallback={<Spinner />}>
          <div className="flex flex-col items-center overflow-y-scroll pb-4 pt-20 text-[#333] md:pt-24 lg:pt-28 xl:pt-32">
            <Routes>
              <Route index element={<Fat_loss />} />
              <Route path="bodyfat" element={<Body_fat />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
