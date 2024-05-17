export default function Navbar({ darkMode, setDarkMode }) {
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);

    document.body.classList.toggle("dark");
  }

  return (
    <section className="w-full flex justify-center bg-Toggle">
      <div className=" w-11/12 max-w-[1111px] flex flex-col my-10 md:justify-between md:flex-row">
        <div>
          <h1
            className={` text-2xl font-bold lg:text-[28px]  ${
              darkMode ? "text-Blanco  " : "text-Very-Dark-Blue "
            }`}
          >
            Social Media Dashboard
          </h1>
          <p className="text-Desaturated-Blue">
            Total Followers: <span>23,004</span>
          </p>
        </div>
        <hr className="my-6" />
        <div className="flex justify-between md:items-center md:gap-4">
          <span
            className={` text-sm font-bold  ${
              darkMode ? "  text-Desaturated-Blue" : " text-Desaturated-Blue"
            }`}
          >
            Dark Mode
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              onClick={toggleDarkMode}
              className=" group peer ring-0  bg-Cambio after:bg-White hover:bg-gradient-to-r hover:duration-150 hover:from-Toggle1  hover:to-Toggle2   rounded-full outline-none duration-1000 after:duration-300 w-12 h-6  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute    peer-checked:after:rotate-180  after:outline-none  after:h-4 after:w-4 after:top-1 after:left-1 peer-checked:after:translate-x-6 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900"
            ></div>
          </label>
        </div>
      </div>
    </section>
  );
}
