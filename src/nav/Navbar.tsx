import NavBtn from "./NavBtn";

function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0">
      <nav className="flex justify-center gap-4 bg-[#228b22] px-2 py-4">
        <NavBtn link="/">Fat loss</NavBtn>
        <NavBtn link="/bodyfat">Body fat %</NavBtn>
        <NavBtn link="/about">About</NavBtn>
        <div className="flex gap-4"></div>
      </nav>
    </div>
  );
}

export default Navbar;
