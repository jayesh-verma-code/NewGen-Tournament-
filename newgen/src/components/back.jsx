import { useState, useEffect } from "react";

const Back = () => {
  const [muted, setMuted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoId = "8EZ3ChYGrj8"; // YouTube video ID

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Video (only for larger screens) */}
      {!isMobile ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&mute=${muted ? 1 : 0}`}
          allow="autoplay"
        ></iframe>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-[#101828]"></div>
      )}

      {/* Semi-transparent Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/75"></div>

      {/* Main Content */}
      <div className="relative w-full px-6 py-16 lg:py-28 flex flex-col items-center">
        <div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-center lg:justify-between">
          
          {/* Left Part */}
          <div className="lg:w-2/4 text-center lg:text-left">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl sm:text-4xl font-extrabold text-transparent sm:text-5xl">
              Land into the Ultimate.
              <span className="sm:block"> Tournament Environment. </span>
            </h1>

            <p className="mt-4 max-w-lg sm:text-lg text-white">
              NewGen Tournament organizes daily tournaments for gamers from different institutes to contribute to the Indian community.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                className="block w-full sm:w-auto rounded-md border border-blue-600 bg-blue-600 px-8 py-3 text-sm sm:text-base font-medium text-white hover:bg-transparent hover:text-white"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full sm:w-auto rounded-md border border-blue-600 px-8 py-3 text-sm sm:text-base font-medium text-white hover:bg-blue-600"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Part (Image & Details) */}
          <div className="lg:w-2/4 mt-14 lg:mt-0 flex flex-col lg:flex-row items-center lg:items-start w-full">
            
            {/* Tournament Image */}
            <img
              alt="Tournament Poster"
              src="https://media-hosting.imagekit.io//5a26de43901446c7/FFtournamentPoster3%20(1).png?Expires=1834202101&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=D7WDFjwwmBhryB0cVzIqulU6SLut8mLLEuLSfaz0swOMFzQhpa5DuHp993Iu-Y~i8UyKPNjfmmA-Dm-2evRSaM6Tr3ILXDk7IzA9-m8YvICggXLGkaJbFavgQ1Ovd8NTXieissgxNseGUxDwsWerZQLk4z-9gxYaMRBvnKdRDWYR9Oi6f7oaO-mvl0qNsjEFGMe9IahGUgY5TAVnHVuAsm-KG2q2BRCQSwLa72~s~e2yfrJcbIEsFKBxbieZQoh1yS~RsjIqMofq9HofDyBvfpT-xN2khAWcCK30JCQCr4HFNLgr~2qpRzM2OpdfIOYFE1IsJNjFbGP8j0ZUwsl6KQ__"
              className="h-52 sm:h-64 w-auto object-cover rounded-lg"
            />

            {/* Tournament Details */}
            <div className="p-6 mt-6 lg:mt-0 lg:ml-6 w-full lg:w-1/2 border border-gray-500 rounded-2xl text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Tournament Details</h2>

              <div className="mt-4 grid grid-cols-2 gap-6 text-white text-xs sm:text-sm">
                <div className="text-left">
                  <p><strong>Format:</strong> Solo</p>
                  <p><strong>Date:</strong> 15th Feb 2025</p>
                  <p><strong>Time:</strong> 9:30 PM</p>
                  <p><strong>Entry Fee:</strong> ₹30/-</p>
                </div>
                <div className="text-right">
                  <h3 className="text-sm font-bold">Rewards</h3>
                  <p><strong>Per Kill:</strong> ₹10/-</p>
                  <p><strong>1st Place:</strong> ₹100/-</p>
                  <p><strong>2nd Place:</strong> ₹50/-</p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://forms.gle/sord8CneG1YzJHwMA"
                  className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 py-2 px-6 text-sm sm:text-lg font-semibold  tracking-wide text-white rounded-[6px] hover:bg-red-700 transition-all"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mute/Unmute Button (Hidden in Mobile) */}
      {!isMobile && (
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-4 px-3 sm:px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300 flex items-center gap-2 text-xs sm:text-sm"
        >
          {muted ? "🔇 Mute" : "🔊 Unmute"}
        </button>
      )}
    </div>
  );
};

export default Back;
