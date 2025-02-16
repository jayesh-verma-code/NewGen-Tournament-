const Card = ({ image, title, subtitle, description }) => {
    return (
      <a href="#" className="group relative block bg-black overflow-hidden rounded-2xl shadow-lg w-72 h-96">
        <img
          alt=""
          src={image}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />
  
        <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col h-full justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-[#2C88FF]">{subtitle}</p>
            <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>
          </div>
          
          <div className="mt-4">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">{description}</p>
            </div>
          </div>
          
          <button className="mt-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition">View</button>
        </div>
      </a>
    );
  };
  
  export default function CardGrid() {
    const cards = [
      {
        image: "https://i.pinimg.com/736x/4c/bb/83/4cbb837472b26012674c04954cb8372a.jpg",
        title: "Free Fire Tournament",
        subtitle: "NewGen Present",
        description: "All the best for the Tournament, the Rewards are waiting for you."
      },
      {
        image: "https://i.pinimg.com/736x/df/84/af/df84affdbd5952b3e7a85606c0caf0ff.jpg",
        title: "PUBG Tournament",
        subtitle: "NewGen Present",
        description: "All the best for the Tournament, the Rewards are waiting for you.."
      },
      {
        image: "https://i.pinimg.com/736x/0d/e2/f9/0de2f9c2f36214d2b0446c7991a4f701.jpg",
        title: "COD Tournament",
        subtitle: "NewGen Present",
        description: "All the best for the Tournament, the Rewards are waiting for you.."
      }
    ];
  
    return (
      <div className='w-full min-h-screen flex justify-center items-center bg-black'>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    );
  }
  