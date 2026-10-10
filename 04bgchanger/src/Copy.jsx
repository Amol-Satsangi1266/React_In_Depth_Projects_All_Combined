import React, { useState } from 'react' // ✅ Fixed!

function Copy() {
  const [bgColor, setBgColor] = useState('#000000');

  return (
    <div 
      className="relative w-screen h-screen flex items-center justify-center transition-colors duration-500 font-sans overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Center Card */}
      <div className="bg-black/60 backdrop-blur-md px-8 py-6 rounded-2xl text-white text-center border border-white/15 shadow-2xl">
        <h1 className="text-2xl font-bold mb-2">Color Wheel Picker</h1>
        <p className="text-gray-300 text-sm">
          Current Background: <span className="font-mono uppercase underline">{bgColor}</span>
        </p>
      </div>

      {/* Bottom Bar with Color Wheel */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 border border-white/20 shadow-2xl">
        <span className="text-white text-sm font-medium">
          Pick a color:
        </span>
        
        {/* Color Wheel Input */}
        <input 
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="w-10 h-10 rounded-full border-2 border-white cursor-pointer appearance-none bg-[conic-gradient(red,yellow,lime,aqua,blue,magenta,red)] outline-none p-0 shadow-md transition-transform hover:scale-110"
        />
      </div>
    </div>
  );
}

export default Copy