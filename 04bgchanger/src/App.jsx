import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const [bgColor, setBgColor] = useState('#000000');

  // List of colors for the bottom bar
  const colors = [
    { name: 'Black', value: '#000000' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Green', value: '#22c55e' },
    { name: 'Purple', value: '#a855f7' },
    { name: 'Orange', value: '#f97316' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Cyan', value: '#06b6d4' },
    { name: 'Yellow', value: '#eab308' },
    { name: 'White', value: '#ffffff' },
  ];
  return (
    <>
    <div 
      className="relative w-full h-screen transition-colors duration-500 flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      {/* Center Text Indicator */}
      <div className="text-center p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-1">Color Changer</h1>
        <p className="text-gray-300 text-sm">
          Current Background: <span className="font-mono uppercase underline">{bgColor}</span>
        </p>
      </div>

      {/* Bottom Color Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md border border-white/20 p-3 rounded-full flex items-center gap-3 shadow-2xl">
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => setBgColor(color.value)}
            className={`w-9 h-9 rounded-full border-2 transition-transform hover:scale-110 active:scale-95 shadow-md ${
              bgColor === color.value ? 'border-white scale-110 ring-4 ring-white/30' : 'border-transparent'
            }`}
            style={{ backgroundColor: color.value }}
            title={color.name}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
