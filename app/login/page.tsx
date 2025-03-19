// app/page.tsx

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100">
      <h1 className="text-7xl font-bold text-orange-800 mb-8 font-['Jersey25'] drop-shadow-bottom-right-white">Streak Together!</h1>
      <div className="bg-red-200 p-8 rounded-lg shadow-md text-center w-96"> {/* Increased width here */}
        <h2 className="text-2xl font-semibold text-red-900 mb-6 font-['Jersey25']">Who are you?</h2>
        <select className="w-full p-2 border border-gray-300 rounded mb-4">
          <option value="">Select your name</option>
          {/* Add more options here */}
        </select>
        <div className="bg-white p-2 border border-gray-300 rounded">New User</div>
      </div>
      <div className="flex space-x-2 mt-8">
        <span className="w-2 h-2 bg-orange-800 rounded-full"></span>
        <span className="w-2 h-2 bg-orange-800 rounded-full"></span>
        <span className="w-2 h-2 bg-orange-800 rounded-full"></span>
        <span className="w-2 h-2 bg-orange-800 rounded-full"></span>
        <span className="w-2 h-2 bg-orange-800 rounded-full"></span>
      </div>
    </div>
  );
}