import Marquee from "react-fast-marquee";
import { Home, Search, Bell, User, Settings, MessageSquare, Star, Heart, Globe, Layers, Bookmark, Camera, Cloud, Code } from "lucide-react";

const icons = [Home, Search, Bell, User, Settings, MessageSquare, Star, Heart, Globe, Layers, Bookmark, Camera, Cloud, Code,Settings, MessageSquare, Star,];

export default function IconMarqee() {
  return (
    <Marquee gradient={false} speed={100} className="bg-gray-900 py-4">
      {icons.map((Icon, index) => (
        <Icon key={index} className="w-12 h-12 mx-6 text-white" />
      ))}
    </Marquee>
  );
}
