function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600">StudySphere</h1>

          <h2 className="text-2xl font-semibold text-slate-800 mt-4">
            Create Account
          </h2>

          <p className="text-slate-500 mt-2">
            Start your smart learning journey today.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-slate-700 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-700 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-700 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-slate-600 mt-6">
          Already have an account?{" "}
          <span className="text-indigo-600 font-medium cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
