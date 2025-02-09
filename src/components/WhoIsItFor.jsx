const WhoIsItFor = () => (
  <div className="bg-white py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Who Is the CapnoTrainer® GO For?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="relative group overflow-hidden rounded-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Wellness enthusiasts"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white p-4">
            <h3 className="font-bold text-lg mb-2">Wellness Enthusiasts</h3>
            <p>
              Achieve better sleep, reduce stress, and enhance mental clarity.
            </p>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Health practitioners"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white p-4">
            <h3 className="font-bold text-lg mb-2">Health Practitioners</h3>
            <p>
              Provide clients with revolutionary breathing insights and tools
              for lasting change.
            </p>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Athletes and performers"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white p-4">
            <h3 className="font-bold text-lg mb-2">Athletes & Performers</h3>
            <p>Boost endurance, focus, and physical resilience.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group overflow-hidden rounded-lg">
          <img
            src="/api/placeholder/600/300"
            alt="Healthcare professionals"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white p-4">
            <h3 className="font-bold text-lg mb-2">Healthcare Professionals</h3>
            <p>
              Enhance patient care with cutting-edge breathing assessment tools.
            </p>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-lg">
          <img
            src="/api/placeholder/600/300"
            alt="Educators and trainers"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white p-4">
            <h3 className="font-bold text-lg mb-2">Educators & Trainers</h3>
            <p>
              Incorporate evidence-based breathing techniques into your teaching
              or coaching.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WhoIsItFor;
