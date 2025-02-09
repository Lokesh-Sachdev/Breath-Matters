const HowItWorks = () => (
  <div className="bg-[url(/howitworks-bg.png)] bg-cover bg-no-repeat py-16">
    <div className="container mx-auto px-4">
      <div className="space-y-6">
        <h2 className="app__title text-black">
          How the CapnoTrainer® GO Works
        </h2>

        <div className="grid gap-4 md:grid-cols-2 max-w-3xl">
          {cards.map((card) => (
            <div
              key={card.id}
              className="max-w-sm bg-blue-500 text-white p-5 rounded-lg h-fit"
            >
              <h3 className="font-bold text-xl mb-1">{card.title}</h3>
              <p className="max-w-[329px]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;

const cards = [
  {
    id: 1,
    title: "Measure What Matters",
    description:
      "Monitor your End-Tidal CO2 (PetCO2) in real time to assess how effectively your breathing supports acid-base balance and health.",
  },
  {
    id: 2,
    title: "Customized Interventions",
    description:
      "Based on your unique breathing habits, receive tailored exercises and interventions to dismantle bad habits and cultivate optimal ones.",
  },
  {
    id: 3,
    title: "Visualize Your Breathing",
    description:
      "See your breathing habits on a capnogram, a dynamic display of your inhalation and exhalation patterns. Pinpoint issues like overbreathing, gasps, or shallow breaths.",
  },
  {
    id: 4,
    title: "Engage in Practicums",
    description:
      "Explore playful self-intervention techniques to realign breathing mechanics with your body’s needs—whether through nose-breathing challenges or CO2 biofeedback training.",
  },
];
