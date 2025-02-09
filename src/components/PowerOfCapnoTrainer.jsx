import Image from "next/image";

const PowerOfCapnoTrainer = () => (
  <div className="bg-blue-100 pt-24">
    <div className="container mx-auto px-4">
      <div className="centered">
        <div className="max-w-[620px]">
          <h2 className=" font-bold spectral text-black">Experience the</h2>
          <h1 className="app__title text-blue-500 leading-8">
            Power of CapnoTrainer® GO
          </h1>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-blue-100 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="">
              <img
                src={card.img}
                alt="Person viewing breathing data"
                className="w-full rounded-lg"
              />
              <div className="p-5">
                <h3 className="text-teal-600 font-bold text-xl mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.heading}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="/big-wave.svg" className="mt-12" alt="Waves Icon" />
    </div>
  </div>
);

export default PowerOfCapnoTrainer;

const cards = [
  {
    id: 1,
    img: "/card1.png",
    title: "See Your Breathing in Action",
    heading:
      "Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals.",
  },
  {
    id: 2,
    img: "/card2.png",
    title: "Monitor Your Progress",
    heading:
      "Track your breathing efficiency over time. By measuring your CO2 levels, the CapnoTrainer® GO provides real-time data to help you optimize your respiration.",
  },
  {
    id: 3,
    img: "/card3.png",
    title: "Receive Tailored Feedback",
    heading:
      "Get personalized feedback to improve your breathing. Practical exercises help realign your breath for optimal benefits.",
  },
];
