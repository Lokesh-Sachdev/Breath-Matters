import Image from "next/image";

const FooterCTA = () => (
  <div className="bg-white text-white py-12">
    <div className="container bg-[url(/footer-bg.png)] bg-cover bg-no-repeat mx-auto py-14 text-center min-h-[390px] rounded-[10px]">
      <h2 className="text-2xl font-bold spectral mb-4">Don't Wait</h2>
      <h3 className="app__title mb-6">Transform Your Breathing Today!</h3>
      <p className="mb-11 mt-3">
        Your breath is your power. Take control with the CapnoTrainer® GO,
        <br />
        and optimize life with greater clarity, confidence, and vitality.
      </p>
      <button className="bg-white text-teal-700 px-8 py-3 mt-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
        Order Now and Start Your Breathing Journey
      </button>
    </div>
  </div>
);

const Footer = () => (
  <>
    <FooterCTA />
    <footer className="bg-white pt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Image src="/logo.png" alt="Logo" width={355} height={79} />
            <p className="text-gray-600">
              Join us in a journey towards a healthier balanced life. Allow your
              body and mind, and whole constitution to thrive with proper
              breathing.
            </p>
          </div>

          <div className="centered mt-6">
            <h3 className="font-semibold spectral text-2xl mb-4 text-black">
              Contact
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>Email</p>
              <p>Phone</p>
              <p>Location</p>
            </div>
          </div>

          <div className="flex flex-col items-end mt-6">
            <h3 className="font-semibold spectral text-2xl mb-4 text-black">
              Stay in touch
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <img src="/instagram.svg" alt="Instagram" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <img src="/facebook.svg" alt="Facebook" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <img src="/twitter.svg" alt="Twitter" />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                <img src="/discord.svg" alt="Discord" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-sm text-black text-center pt-24 pb-8">
          ©2024 BreatheMasters all rights reserved
        </p>
      </div>
    </footer>
  </>
);

export default Footer;
