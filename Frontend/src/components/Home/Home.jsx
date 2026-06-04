import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-indigo-600">StudySphere</h1>

        <div className="flex gap-4">
          <button
            onClick={handleLogin}
            className="px-5 py-2 text-indigo-600 font-medium border border-indigo-600 rounded-lg hover:bg-indigo-50 transition"
          >
            Login
          </button>

          <button
            onClick={handleRegister}
            className="px-5 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl font-bold text-slate-800 leading-tight">
              Study Smarter with
              <span className="text-indigo-600"> AI-Powered </span>
              Learning
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Upload notes, generate quizzes, create flashcards, track progress,
              and plan your studies—all in one place.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition">
                Get Started
              </button>

              <button className="px-6 py-3 border border-slate-300 rounded-xl font-medium hover:bg-slate-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Students Studying"
              className="w-full rounded-3xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-slate-800">
            Features
          </h2>

          <p className="text-center text-slate-500 mt-3">
            Everything you need to make studying easier and more effective.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">📚 Smart Notes</h3>
              <p className="text-slate-600">
                Upload and organize all your study material in one place.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">📝 Quiz Generator</h3>
              <p className="text-slate-600">
                Automatically generate quizzes from your notes.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">🎯 Flashcards</h3>
              <p className="text-slate-600">
                Create flashcards to improve memory retention.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">📅 Study Planner</h3>
              <p className="text-slate-600">
                Plan and schedule your study sessions efficiently.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                📊 Progress Tracking
              </h3>
              <p className="text-slate-600">
                Monitor your learning journey and achievements.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">🤖 AI Assistance</h3>
              <p className="text-slate-600">
                Get summaries, keywords, and smart study insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl font-bold text-slate-800">
            Ready to Boost Your Learning?
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            Join StudySphere today and make every study session more productive.
          </p>

          <button className="mt-8 px-8 py-4 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition">
            Create Free Account
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
