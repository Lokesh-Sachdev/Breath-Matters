import Image from "next/image";

const BreathingIssues = () => {
  const issues = [
    {
      alt: "health",
      img: "/headache.png",
      title: "Compromise your health:",
      heading: "Triggering anxiety, fatigue, and physical discomfort.",
    },
    {
      alt: "Low Energy",
      img: "/low-battery.png",
      title: "Disrupt your performance:",
      heading:
        "Causing focus deficits, memory issues, and suboptimal endurance.",
    },
    {
      alt: "Muscle Pain",
      img: "/muscle-pain.png",
      title: "Exacerbate existing conditions:",
      heading: "Like asthma, chronic pain, and even stress-related disorders.",
    },
  ];

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1
          className=" app__title text-black mb-5 text-center"
          style={{ display: "block" }}
        >
          DISCOVER THE HIDDEN POWER OF YOUR BREATH
        </h1>

        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:max-w-[450px] aspect-square mx-auto md:mx-0">
            <Image
              src="/yoga-women.png"
              alt="Yoga Women"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col flex-1">
            <div className="bg-blue-100 px-4 md:px-9 pt-8 md:pt-12 pb-6 md:pb-9">
              <p className="max-w-2xl text-left text-gray-600 text-sm md:text-base">
                Your breathing isn't just about oxygen in and carbon dioxide
                out—it's a complex behavior shaped by triggers, habits, and
                physiology. When misaligned, these habits can:
              </p>

              <ul className="list-none mt-6 md:mt-9 text-gray-600 space-y-4 md:space-y-6">
                {issues.map((issue) => (
                  <li
                    key={issue.alt}
                    className="flex gap-3 md:gap-[14px] items-start"
                  >
                    <div className="relative w-8 md:w-11 aspect-square flex-shrink-0">
                      <Image
                        src={issue.img}
                        alt={issue.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h5 className="text-black text-left font-bold text-sm md:text-base">
                        {issue.title}
                      </h5>
                      <p className="text-gray-600 text-sm md:text-base">
                        {issue.heading}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-500 py-4 md:py-5 px-4 md:px-9 text-white text-left text-sm md:text-base">
              <p className="max-w-[630px]">
                Millions of people suffer the consequences of poor breathing
                habits. But you don't have to be one of those. With the{" "}
                <b>CapnoTrainer GO</b>, you'll find a scientifically treated
                pathway to breathing mastery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreathingIssues;
