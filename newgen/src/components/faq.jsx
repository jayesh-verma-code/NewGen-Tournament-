export default function FAQ() {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-[#121212] p-6 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-100 mb-6 text-center">Frequently Asked Questions</h1>
          <div className="space-y-4">
            <details className="group border-l-4 border-[#155DFC] bg-[#1E1E1E] p-6 rounded-lg">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-300">
                  Q1. I have registered and paid the entry fee. How do I join the match?
                </h2>
                <span className="shrink-0 rounded-full bg-gray-800 p-1.5 text-gray-300 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-400">
                You will be added to the NewGen Tournament WhatsApp group, where you will receive the custom room code and password.
              </p>
            </details>
  
            <details className="group border-l-4 border-[#155DFC] bg-[#1E1E1E] p-6 rounded-lg">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-300">
                  How will I receive the reward prize?
                </h2>
                <span className="shrink-0 rounded-full bg-gray-800 p-1.5 text-gray-300 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-400">
                The reward will be sent within 1 hour after the tournament ends to the same mobile number you used for UPI payment during registration.
              </p>
            </details>
  
            <details className="group border-l-4 border-[#155DFC] bg-[#1E1E1E] p-6 rounded-lg">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-300">
                  I have other doubts. What should I do?
                </h2>
                <span className="shrink-0 rounded-full bg-gray-800 p-1.5 text-gray-300 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-400">
                Feel free to ask any questions related to the tournament, registration, payment, or rewards. Contact our tournament host, Mr. Sonu Kumar Mishra, on WhatsApp at +91 830-670-9245.
              </p>
            </details>
          </div>
        </div>
      </div>
    );
  }
  