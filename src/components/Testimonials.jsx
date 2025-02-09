const Testimonials = () => (
  <div className="bg-blue-50 py-12">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Real Success Stories
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600 italic mb-4">
            "I thought I knew how to breathe... until I used the CapnoTrainer®
            GO. This device opened my eyes to habits I never noticed were
            holding me back from peak performance."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              <img src="/api/placeholder/48/48" alt="Amanda K" />
            </div>
            <div>
              <p className="font-bold">Amanda K</p>
              <p className="text-sm text-gray-600">Entrepreneur</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600 italic mb-4">
            "As a therapist, the CapnoTrainer®GO has completely transformed how
            I work with clients. It's a game-changer in helping people tackle
            anxiety and performance issues."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              <img src="/api/placeholder/48/48" alt="Dr. Michael J" />
            </div>
            <div>
              <p className="font-bold">Dr. Michael J</p>
              <p className="text-sm text-gray-600">Clinical Psychologist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
