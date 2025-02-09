const WhatMakesDifferent = () => (
  <div className="bg-gray-50 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/api/placeholder/500/500"
            alt="CapnoTrainer GO device and accessories"
            className="rounded-lg shadow-lg"
          />
          <div className="mt-8 bg-teal-600 text-white p-6 rounded-lg">
            <p className="text-lg italic">
              "Breathing is behavior. And behavior can be changed. The
              CapnoTrainer® helps you edit, optimize, and own your breath for
              life."
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">
            What Makes the CapnoTrainer® GO Different?
          </h2>
          <p className="text-gray-600 text-lg">
            Unlike traditional breathing tools that focus on shallow techniques,
            the CapnoTrainer® GO goes deeper. It integrates
            <span className="text-teal-600 font-semibold">
              {" "}
              psychophysiology, respiratory science, and cutting-edge technology{" "}
            </span>
            to provide a complete understanding of your breathing patterns.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default WhatMakesDifferent;
