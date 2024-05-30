import { useState, useEffect } from "react";
import logo from "/assets/EMO_LOGO.png";
import { FaXmark, FaBars } from "react-icons/fa6";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "#home" },
    { link: "Service", path: "#service" },
    { link: "About", path: "#about" },
    { link: "Team", path: "#team" },

  ];

  return (
    <div className="border-black mt-0">
      <header
        className={`w-full md:bg-black top-0 left-0 right-0 border-black z-10 transition-all duration-300 ${
          isSticky ? "fixed bg-black shadow-md py-4" : "absolute py-6"
        }`}
      >
        <nav className="lg:px-14 px-4 border-b-0">
          <div className="flex justify-between items-center text-base gap-8">
            <a
              className="text-2xl font-semibold flex items-center space-x-3"
              href="/"
            >
              <img src={logo} className="w-24" alt="Logo" />
            </a>

            <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
                <li key={path}>
                <a href={`/${path}`} className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer">{link}</a>
                </li>
              ))}
              <li>
         <a href='/project' className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer">Projects</a>
              </li>
              <li>
                <a href='/achievement' className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer">Achievements</a>

              </li>
            </ul>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none focus:text-gray-500"
              >
                {isMenuOpen ? (
                  <FaXmark className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
              isMenuOpen ? "bg-black block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
          <ul className="md:flex flex-col items-center justify-center bg-black">
            {navItems.map(({ link, path }) => (
                <li key={path}>
                <a href={`/${path}`} className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer">{link}</a>
                </li>
              ))}
              <li>
         <a href='/project' className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer">Projects</a>
              </li>
              <li>
                <a href='/achievement' className="block text-base text-white hover:text-brandPrimary font-bold cursor-pointer">Achievements</a>

              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
