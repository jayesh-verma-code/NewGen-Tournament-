import React, { useState, useEffect } from "react";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true); // Scroll up → Show header
      } else {
        setIsVisible(false); // Scroll down → Hide header
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-black transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } shadow-lg z-50`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block" href="#">
              <span className="sr-only">Home</span>
              <img
                src="https://media-hosting.imagekit.io//671ab5f897234e49/Frame%201.png?Expires=1834200443&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wl93MxrP0GCPpm8sKIFvh1olViB95pGPW85wqF8ZeN5cSfH22s57iXfr~msm2UXQfMvThJHRFUrtmiRUYb1LhkPU0HX0hT7v2TuhFXRXtJs43Jq3~k9PCyN-eBRC7BH4ExwPtSBxXuPfYMQxab3yPMWQY~thHkJnY8~cs6rVR5xG4Otu95wUaUvbOkQMzEH1EbOFXLwazsfwQdBQ~8pIGv4TOfwHadwwFt2ua9eG9irfpRLLRtGc0FENW98Ji20dHgIp2Yh5pbisszTgukPgl5EoXv5ggSefTeSoXy9DnlW3tfHUQvRd1eAoWdpdTbPnVfKoYmB2-tVjBXItl19SRg__"
                alt="Logo"
                className="h-30 w-auto"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-white transition hover:text-gray-500" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-500" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-500" href="#">
                    History
                  </a>
                </li>
                <li>
                  <a className="text-white transition hover:text-gray-500" href="#">
                    Tournaments
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                href="#"
              >
                Login
              </a>
              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#101828]"
                  href="#"
                >
                  Register
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
