import React from 'react';

function Banner() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-28 lg:flex lg:items-center lg:justify-between">
        
        {/* Left Part */}
        <div className="lg:w-2/4 text-center lg:text-left">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
            Land into the Ultimate.
            <span className="sm:block"> Tournament Environment. </span>
          </h1>

          <p className="mt-4 max-w-lg sm:text-lg">
            NewGen Tournament organizes daily tournaments for gamers from different institutes to contribute to the Indian community.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              className="block w-full rounded-md border border-blue-600 bg-blue-600 px-10 py-3 text-base font-medium text-white hover:bg-transparent hover:text-white focus:ring-3 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded-md border border-blue-600 px-10 py-3 text-base font-medium text-white hover:bg-blue-600 focus:ring-3 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Part */}
        <div className="lg:w-2/4 mt-14 lg:mt-0 flex flex-col lg:flex-row items-center bg-[#0F172A] p-6 rounded-lg shadow-2xl">
          
          {/* Tournament Image */}
          <img
            alt="Tournament Poster"
            src="https://media-hosting.imagekit.io//5a26de43901446c7/FFtournamentPoster3%20(1).png?Expires=1834202101&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=D7WDFjwwmBhryB0cVzIqulU6SLut8mLLEuLSfaz0swOMFzQhpa5DuHp993Iu-Y~i8UyKPNjfmmA-Dm-2evRSaM6Tr3ILXDk7IzA9-m8YvICggXLGkaJbFavgQ1Ovd8NTXieissgxNseGUxDwsWerZQLk4z-9gxYaMRBvnKdRDWYR9Oi6f7oaO-mvl0qNsjEFGMe9IahGUgY5TAVnHVuAsm-KG2q2BRCQSwLa72~s~e2yfrJcbIEsFKBxbieZQoh1yS~RsjIqMofq9HofDyBvfpT-xN2khAWcCK30JCQCr4HFNLgr~2qpRzM2OpdfIOYFE1IsJNjFbGP8j0ZUwsl6KQ__"
            className="h-64 w-auto object-cover rounded-lg lg:w-1/2"
          />

          {/* Tournament Details */}
          <div className="p-6 lg:ml-6 bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl text-center lg:w-1/2 mt-6 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-white">Tournament Details</h2>

            <div className="mt-4 grid grid-cols-2 gap-6 text-white text-[15px]">
              <div className="text-left">
                <p><strong>Format:</strong> Solo</p>
                <p><strong>Date:</strong> 15th Feb 2025</p>
                <p><strong>Time:</strong> 9:30 PM</p>
                <p><strong>Entry Fee:</strong> ₹30/-</p>
              </div>
              <div className="text-right">
                <h3 className="text-lg font-bold">Rewards</h3>
                <p><strong>Per Kill:</strong> ₹10/-</p>
                <p><strong>1st Place:</strong> ₹100/-</p>
                <p><strong>2nd Place:</strong> ₹50/-</p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://forms.gle/sord8CneG1YzJHwMA"
                className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 py-3 px-8 text-lg font-bold uppercase tracking-wide text-white rounded-full hover:bg-red-700 transition-all"
              >
                Register
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Banner;
