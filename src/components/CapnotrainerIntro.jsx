import Image from "next/image";

const CapnoTrainerIntro = () => {
  const points = [
    {
      id: 1,
      text: "Identify and correct dysfunctional breathing habits.",
    },
    {
      id: 2,
      text: "Understand the triggers and motivations behind your habits.",
    },
    {
      id: 3,
      text: "Optimize your respiration for health, focus, and performance.",
    },
  ];

  return (
    <section className="bg-white py-8 md:py-24">
      <div className="container bg-[url(/capno-bg.png)] bg-contain bg-center bg-no-repeat min-h-[340px] mx-auto px-4 lg:px-6 flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-4">
        <div className="flex flex-col max-w-full md:max-w-[528px] pt-6 md:pt-0">
          <h1 className="app__title text-blue-500 flex flex-wrap items-center gap-2">
            WHAT IS THE{" "}
            <span className="inline-block">
              <Image
                src="/waves.svg"
                alt="waves"
                width={204}
                height={46}
                className="w-auto h-auto"
              />
            </span>
          </h1>
          <h1 className="app__title text-blue-500 text-3xl md:text-[50px] leading-tight">
            CapnoTrainer® GO?
          </h1>

          <p className="text-gray-600 text-sm md:text-base mt-4">
            The CapnoTrainer GO isn't just a tool—it's your personal gateway to
            a healthier, more aligned you. Using advanced{" "}
            <b className="text-blue-500">capnography technology</b>, it provides
            real-time insights into your breathing behavior by measuring CO2
            levels and visualizing your breathing patterns. Paired with a guided
            learning framework, it empowers you to:
          </p>
        </div>

        <ul className="list-none space-y-3 md:space-y-5 md:mt-9 w-full md:w-auto">
          {points.map((point) => (
            <li
              key={point.id}
              className="flex p-2.5 gap-1.5 bg-blue-100 rounded-lg min-h-[42px] w-full md:w-fit"
            >
              <Image
                src="/check.png"
                width={22}
                height={21}
                alt="check-icon"
                className="object-contain flex-shrink-0"
              />
              <p className="text-blue-500 font-bold text-sm md:text-base">
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CapnoTrainerIntro;
