import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[url(/header-bg.png)] bg-no-repeat bg-cover shadow-md min-h-[637px]">
      {/* Logo and Navigation */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-gray-800">
          <Image src="/logo.png" height={58} width={260} alt="Logo" />
        </div>
        <nav>
          <Link href="/book-now">
            <button className="bg-blue-500 text-white px-6 py-2 min-h-[43px] rounded-lg hover:bg-blue-600 transition duration-300">
              Book Now
            </button>
          </Link>
        </nav>
      </div>

      {/* Title Section */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="app__title max-w-5xl z-10">
          Transform Your Life with the Revolutionary CapnoTrainer® GO{" "}
          <span>
            <Image src="/waves.png" height={44} width={204} alt="Waves" />
          </span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="relative">
        <div className="container mx-auto flex items-start relative z-10">
          <div className="max-w-2xl py-4 px-6 mt-6">
            <h2 className="font-bold text-4xl">Breathe Smarter, Live Better</h2>
            <p>
              Breathing is more than just an unconscious action—it’s a
              foundation of health, performance, and emotional well-being. But
              what if your breathing habits are silently holding you back? Enter
              the CapnoTrainer® GO, the groundbreaking tool that merges science,
              psychology, and technology to revolutionize your breathing habits
              and transform your life.
            </p>
          </div>
        </div>

        {/* Image Section (Outside Container) */}
        <div className="lg:absolute right-0 top-[3.5rem] h-full flex justify-end items-center">
          <Image
            src="/Capnotrainer.png"
            height={425}
            width={600}
            alt="CapnoTrainer"
          />
        </div>
      </div>
    </header>
  );
}
