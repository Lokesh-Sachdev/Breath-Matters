const CTASection = () => (
  <div className="bg-teal-600 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/api/placeholder/500/500"
            alt="Woman pointing to breathing information"
            className="rounded-lg"
          />
        </div>

        <div className="text-white">
          <h2 className="text-4xl font-bold mb-4">
            Take Control of Your
            <br />
            Breath Today!
          </h2>
          <p className="mb-8 text-lg">
            Invest in the Science of Better Breathing
            <br />
            For a limited time, get your CapnoTrainer®GO at an exclusive launch
            price!
          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Order now and receive a FREE personalized breathing evaluation plan!
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CTASection;
