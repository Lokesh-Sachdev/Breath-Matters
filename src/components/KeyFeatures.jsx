const KeyFeatures = () => (
  <div className="bg-white py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Key Features You'll Love
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 text-teal-600">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-full h-full"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>
          <h3 className="font-bold mb-2">Real-Time Monitoring</h3>
          <p className="text-sm text-gray-600">
            Track your progress with live CO2 concentration, breathing rate, and
            rhythm.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 text-teal-600">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path d="M3 12h18M12 3v18M5 5l14 14" />
            </svg>
          </div>
          <h3 className="font-bold mb-2">Capnogram Visualization</h3>
          <p className="text-sm text-gray-600">
            See the details of your breathing mechanics and the impacts of
            adjustment in real-time.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 text-teal-600">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path d="M12 3v18M3 12h18M12 8l-4 4M12 16l4-4" />
            </svg>
          </div>
          <h3 className="font-bold mb-2">Custom Learning Plans</h3>
          <p className="text-sm text-gray-600">
            Tailored protocols to help you reach new levels and master new
            skills.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 text-teal-600">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-full h-full"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </div>
          <h3 className="font-bold mb-2">Interactive Practicums</h3>
          <p className="text-sm text-gray-600">
            Engaging exercises to align behavior with physiology.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default KeyFeatures;
