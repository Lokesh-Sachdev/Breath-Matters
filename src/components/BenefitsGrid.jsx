const BenefitsGrid = () => (
  <div className="bg-gray-50 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Can the CapnoTrainer®GO Do For You?
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="relative overflow-hidden rounded-lg group">
          <img
            src="/api/placeholder/300/400"
            alt="Meditation practice"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white p-4">
            <h3 className="font-bold mb-2">Eliminate Stress and Anxiety</h3>
            <p className="text-sm">
              Learn to regulate your nervous system and maintain better ease in
              challenging times.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg group">
          <img
            src="/api/placeholder/300/400"
            alt="Mental clarity visualization"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white p-4">
            <h3 className="font-bold mb-2">Enhance Mental Clarity and Focus</h3>
            <p className="text-sm">
              Better breathing means better focus in any learning scenario.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg group">
          <img
            src="/api/placeholder/300/400"
            alt="Peak performance"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white p-4">
            <h3 className="font-bold mb-2">Achieve Peak Performance</h3>
            <p className="text-sm">
              Whether you're going for a personal best or excelling
              exponentially.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg group">
          <img
            src="/api/placeholder/300/400"
            alt="Physical health"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white p-4">
            <h3 className="font-bold mb-2">Improve Physical Health</h3>
            <p className="text-sm">
              Develop optimized life rhythms that support your core and base
              physiology.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BenefitsGrid;
