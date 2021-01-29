import {useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(89);
  const [bottles, setBottles] = useState(3);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let alcohol = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsleft = grams - (burning * time);

    if (gender === 'male') {
      alcohol = gramsleft / (weight * 0.7);
    }
    else {
      alcohol = gramsleft / (weight * 0.6);
    }
    setResult(alcohol);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Calculating alcohol blood level</h1>
        <div>
          <label>Weight</label>
          <input type="number" id="paino" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles</label>
          <input type="number" id="alkoholi" value={bottles} onChange={e => setBottles(e.target.value)}></input>
        </div>
        <div>
          <label>Time</label>
          <input type="number" id="aika" value={time} onChange={e => setTime(e.target.value)}></input>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio"name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input><label>Male</label>
          <input type="radio"name="gender" value="female" onChange={e => setGender(e.target.value)}></input><label>Female</label>
        </div>
        <div>
          <output>{result}</output>
        </div>
        <button>Calculate</button>
      </form>
    </>
  );
}

export default App;
