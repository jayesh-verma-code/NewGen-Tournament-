import Marquee from "react-fast-marquee";

export default function Marqee() {
  return (
    <div className="h-screen w-screen flex items-center bg-black">
      <Marquee speed={80} pauseOnHover={true} gradient={false} className="text-5xl font-bold text-white">
        🚀 Ye Fullscreen Marquee Hai! 🔥 Always Visible, Always Moving! 🔄
      </Marquee>
    </div>
  );
}
