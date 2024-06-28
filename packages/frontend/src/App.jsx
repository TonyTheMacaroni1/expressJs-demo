import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { addition, subtraction, multiplication, division } from '../services'

function App() {
  const [Num1, setNum1] = useState()
  const [Num2, setNum2] = useState()
  const [Operator, setOperator] = useState()
  const [Result, setResult] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      switch (Operator) {
        case '+':
          setResult(await addition(Num1, Num2))
          break;
          case '-':
            setResult(await subtraction(Num1, Num2))
            break;
            case '*':
              setResult(await multiplication(Num1, Num2))
              break;
              case '/':
                setResult(await division(Num1, Num2))
                break;
              }
            } catch (error) {
              console.log(error)
            }
          }

  return (
    <>
      <div className="App">
        <h1>Calculator App</h1>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-md-3'>
              <label>Number 1</label>
              <input className="form-control" type="text" onChange={e => setNum1(e.target.value)} />
            </div>
            <div className='col-md-3'>
              <label>Operator</label>
              <input className="form-control" type="text" onChange={e => setOperator(e.target.value)} />
            </div>
            <div className='col-md-3'>
              <label>Number 2</label>
              <input className="form-control" type="text" onChange={e => setNum2(e.target.value)} />
            </div>
            <div className='col-md-3'>
              <span>Result</span>
              <br />
              <span>{Result}</span>
            </div>
          </div>
          <br />
          <button type='submit'>Calculate</button>
        </form>
      </div>
    </>
  )
}

export default App
