import { useState } from "react";
import { Plus, Minus, RotateCcw, Sparkles } from "lucide-react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full max-w-md">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 text-center">
        {/* Header */}
        <div className="flex justify-center mb-4">
          <div className="bg-indigo-500/20 p-4 rounded-full animate-pulse">
            <Sparkles size={32} className="text-indigo-400" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-2">Counter App</h1>

        <p className="text-gray-300 mb-8">Modern React Counter</p>

        {/* Counter Display */}
        <div className="relative mb-10">
          <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-30"></div>

          <div className="relative bg-white/10 border border-white/20 rounded-3xl py-10">
            <h2
              className={`text-7xl font-extrabold transition-all duration-300 ${
                count > 0
                  ? "text-green-400"
                  : count < 0
                    ? "text-red-400"
                    : "text-white"
              }`}
            >
              {count}
            </h2>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="group bg-red-500 hover:bg-red-600 text-white p-4 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          >
            <Minus
              size={24}
              className="mx-auto group-hover:rotate-12 transition-transform"
            />
          </button>

          <button
            onClick={() => setCount(0)}
            className="group bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          >
            <RotateCcw
              size={24}
              className="mx-auto group-hover:rotate-180 transition-transform duration-500"
            />
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          >
            <Plus
              size={24}
              className="mx-auto group-hover:rotate-90 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
