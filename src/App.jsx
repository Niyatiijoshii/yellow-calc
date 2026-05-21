import { useState } from "react"
import "./App.css"

function App() {

  const [input, setInput] = useState("")

  function handleClick(value) {
    setInput(input + value)
  }

  function clearInput() {
    setInput("")
  }

  function deleteLast() {
    setInput(input.slice(0, -1))
  }

  function calculateResult() {
    try {
      setInput(eval(input).toString())
    } catch {
      setInput("Error")
    }
  }

  return (
    <div className="calculator">

      <div className="display">
        <p>{input}</p>
        <h1>{input || 0}</h1>
      </div>

      <div className="buttons">

        <button onClick={clearInput}>AC</button>

        <button onClick={deleteLast}>Del</button>

        <button onClick={() => handleClick("%")}>%</button>

        <button
          className="operator"
          onClick={() => handleClick("/")}
        >
          ÷
        </button>

        <button onClick={() => handleClick("7")}>7</button>

        <button onClick={() => handleClick("8")}>8</button>

        <button onClick={() => handleClick("9")}>9</button>

        <button
          className="operator"
          onClick={() => handleClick("*")}
        >
          ×
        </button>

        <button onClick={() => handleClick("4")}>4</button>

        <button onClick={() => handleClick("5")}>5</button>

        <button onClick={() => handleClick("6")}>6</button>

        <button
          className="operator"
          onClick={() => handleClick("-")}
        >
          -
        </button>

        <button onClick={() => handleClick("1")}>1</button>

        <button onClick={() => handleClick("2")}>2</button>

        <button onClick={() => handleClick("3")}>3</button>

        <button
          className="operator"
          onClick={() => handleClick("+")}
        >
          +
        </button>

        <button onClick={() => handleClick(".")}>.</button>

        <button onClick={() => handleClick("0")}>0</button>

        <button onClick={() => handleClick("00")}>00</button>

        <button
          className="operator"
          onClick={calculateResult}
        >
          =
        </button>

      </div>

    </div>
  )
}

export default App