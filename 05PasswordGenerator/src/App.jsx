import { useState, useCallback, useEffect, useRef} from 'react'

function App() {

  const [length,setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

      // useRef
    const passwordRef = useRef(null);


  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"



    if(numberAllowed)
    {
       str+="0123456789"
    }
    if(charAllowed)
    {
      str+="~!@#$%^&*()_+?|"
    }
    
    for(let i = 1; i<= length;i++)
    {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[numberAllowed,charAllowed,length, setPassword])

  const passwordToClipboard = useCallback(()=>{
    passwordRef.current?.select(); // Highlights the text in the input box
  passwordRef.current?.setSelectionRange(0, 999);
  alert("Password copied to clipboard!");
    window.navigator.clipboard.writeText(password)
    setCopied(true);
  setTimeout(() => {
    setCopied(false);
  }, 2000);
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
      <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-6 my-8 bg-gray-900 text-orange-400 border border-gray-800">
  <h1 className="text-white text-center text-xl font-semibold mb-4">Password Generator</h1>
  
  {/* Password & Copy Button Field */}
  <div className="flex shadow-lg rounded-lg overflow-hidden mb-5 bg-gray-800 border border-gray-700">
    <input 
      type="text"
      value={password}
      placeholder="Password"
      readOnly
      ref = {passwordRef}
      className="outline-none w-full py-2 px-3 bg-transparent text-white font-mono"
    />
<button 
  onClick={passwordToClipboard} 
  className={`outline-none px-5 py-2 font-medium shrink-0 transition-colors ${
    copied ? "bg-gray-600 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"
  }`} 
>
  {copied ? "Copied!" : "Copy"}
</button>
  </div>

  {/* Controls Section */}
  <div className="flex flex-col sm:flex-row text-sm gap-y-4 sm:gap-y-0 sm:gap-x-4 items-center justify-between text-gray-300">
    {/* Length Slider */}
    <div className="flex items-center gap-x-2 w-full sm:w-auto">
      <input 
        type="range"
        min={6}
        max={32}
        value={length}
        className="cursor-pointer accent-blue-500"
        onChange={(e) => setlength(Number(e.target.value))}
      />
      <label>Length: {length}</label>
    </div>

    {/* Numbers Checkbox */}
    <div className="flex items-center gap-x-2">
      <input 
        type="checkbox"
        checked={numberAllowed}
        id="numberInput"
        className="cursor-pointer w-4 h-4 accent-blue-500 rounded"
        onChange={() => setnumberAllowed((prev) => !prev)}
      />
      <label htmlFor="numberInput" className="cursor-pointer">Numbers</label>
    </div>

    {/* Characters Checkbox */}
    <div className="flex items-center gap-x-2">
      <input 
        type="checkbox"
        checked={charAllowed}
        id="characterInput"
        className="cursor-pointer w-4 h-4 accent-blue-500 rounded"
        onChange={() => setcharAllowed((prev) => !prev)}
      />
      <label htmlFor="characterInput" className="cursor-pointer">Characters</label>
    </div>
  </div>
</div>
    </>
  )
}

export default App
