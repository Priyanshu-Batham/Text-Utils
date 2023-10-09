import { useState, useCallback, useEffect, useRef} from 'react'


function App() {

  // variables
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);

  // password reference
  const passRef = useRef(null);

  // password generator
  const passGen = useCallback((len, numInc) => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numInc) str += "0123456789"

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)
  }, [length, numberAllowed])

  // copying to clipboard
  const copyPass = ()=>{
    passRef.current.select();
    window.navigator.clipboard.writeText(password);
  }

  //render on change
  useEffect(()=>{
    passGen(length, numberAllowed)
  }, [length, numberAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref = {passRef}
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPass}
          >copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(data)=>{
                setLength(data.target.value)
              }}
            />
            <label>Length: "{length}"</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={()=>{
                setNumberAllowed(!numberAllowed);
              }}
              id="numberInput"
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
