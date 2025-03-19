// app/page.tsx

export default function HomePage() {
    return (
      <div className="min-h-screen bg-[#ffe4c4] p-4">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-2 sm:mb-0">
            <span className="text-xl font-['Jersey25'] text-orange-800 mr-2">⭐</span>
            <span className="text-xl font-['Jersey25'] text-orange-800">Welcome, User!</span>
          </div>
          <button className="text-xl font-['Jersey25'] text-orange-800">Logout</button>
        </header>
  
        <main className="flex flex-col lg:flex-row">
          <aside className="w-full lg:w-1/4 pr-4">
            <div className="bg-[#f08080] p-4 rounded-lg shadow-md mb-4">
              <h2 className="text-2xl font-['Jersey25'] text-maroon-800 mb-4">Your Habits</h2>
              <div className="min-w-[280px] grid grid-cols-3 gap-2 text-sm font-['Jersey25']">
                <span className="text-left">HABIT<br />TO TRACK</span>
                <span className="text-center">STREAK<br />NUMBER</span>
                <span className="text-right">DONE<br />TODAY?</span>
  
                <span className="text-left">&gt; Drawing</span>
                <span className="text-center">Day 14</span>
                <span className="flex justify-end items-center">
                  <input
                    type="checkbox"
                    name="drawing"
                    id="drawing-done"
                    className="form-checkbox h-4 w-4 text-orange-600 appearance-none rounded-full border border-gray-300 checked:bg-orange-600 focus:outline-none" // Added focus:outline-none
                  />
                </span>
  
                <span className="text-left">&gt; Jogging</span>
                <span className="text-center">Day 4</span>
                <span className="flex justify-end items-center">
                  <input
                    type="checkbox"
                    name="jogging"
                    id="jogging-done"
                    className="form-checkbox h-4 w-4 text-orange-600 appearance-none rounded-full border border-gray-300 checked:bg-orange-600 focus:outline-none" // Added focus:outline-none
                  />
                </span>
  
                <span className="col-span-3 text-left">
                  <button className="text-orange-800">+Add New</button>
                </span>
              </div>
            </div>
            <button className="bg-[#f7bfbf] p-2 rounded-lg shadow-md w-full text-left font-['Jersey25'] text-maroon-800 mb-4  transition-all duration-300 ease-in-out hover:bg-[#f4a6a6] lg:mb-0">
              Visit Group Cafe
            </button>
          </aside>
  
          <section className="w-full lg:w-3/4">
            <div className="bg-[#f08080] p-4 rounded-lg shadow-md h-[400px] mb-4">
              {/* Main content area */}
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center text-xl font-['Jersey25'] text-orange-800">
              <span className="mb-2 sm:mb-0">28th Feb 2025 01:47 PM</span>
              <span>Your Cafe</span>
            </div>
          </section>
        </main>
      </div>
    );
  }
  
  //export default HomePage;