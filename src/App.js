import{ useState } from 'react';
import './App.css';

function App() {
let [paino, setPai] = useState(0);
let [annokset, setAnn] = useState(0);
let [sukupuoli, setSukupuoli] = useState('');
let [aika, setAika] = useState(0);
let [tulos, setTulos] = useState(0);
let [vahvuus, setVahvuus] = useState(0);
let [koko, setKoko] = useState(0);


//const numbers = [1,2,3,4,5,6]
const numbers = new Array(24).fill(null).map((_,i) => i+1)

function Laske(e) {
  e.preventDefault()
  const litroja = annokset * koko;
  let grammoja = litroja * 8 * vahvuus;
  const selviäminen = paino / 10;
 let grammoja2 = grammoja - (selviäminen * aika);

  if (grammoja2 < 0) {
    grammoja2 = 0;
  }

  let laskettuTulos;


  if (sukupuoli === 'Mies') {
    laskettuTulos = grammoja2 / (paino * 0.7);
  } 
  else if ( sukupuoli === 'Nainen') {
    laskettuTulos = grammoja2 / (paino * 0.6);
  }
  else {
    laskettuTulos = grammoja2 / (paino * 0.65);
  }

  setTulos(laskettuTulos);

}

  return (
    <div id="containter">
      <form onSubmit={Laske}>
        <div>
        <label>Paino:</label>
        <input type="number" value={paino} onChange={e => setPai(e.target.value)}/>
        </div>
        <div>
        <div>
        <label>Vahvuus %:</label>
        <input type="number" value={vahvuus} onChange={e => setVahvuus(e.target.value)}/>
        </div>
          <label>Annokset:</label>
          <select value={annokset} onChange={(e) => setAnn(e.target.value)}>
            {
              numbers.map(bottle => {
               return <option value={bottle}>{bottle} </option>
              })
            }
          </select>
        </div>
        <div>
        <label>Annoskoko:</label>
        <input type="radio" name="koko" value="0.04" checked={koko === '0.04'} onChange={() => setKoko('0.04')} /><label>40ml</label>
        <input type="radio" name="koko" value="0.33" checked={koko === '0.33'} onChange={() => setKoko('0.33')} /><label>330ml</label>
        <input type="radio" name="koko" value="0.50" checked={koko === '0.50'} onChange={() => setKoko('0.50')} /><label>500ml</label>
        <input type="radio" name="koko" value="0.568" checked={koko === '0.568'} onChange={() => setKoko('0.568')} /><label>568ml</label>
        </div>
        <div>
          <label>Aika:</label>
          <select value={aika} onChange={(e) => setAika(e.target.value)}>
            {
              numbers.map(bottle => {
               return <option value={bottle}>{bottle} tuntia</option>
              })
            }
          </select>
        </div>
        <div>
        <label>Sukupuoli:</label>
        <input type="radio" name="sukupuoli" value="Mies" checked={sukupuoli === 'Mies'} onChange={() => setSukupuoli('Mies')} /><label>Mies</label>
        <input type="radio" name="sukupuoli" value="Nainen" checked={sukupuoli === 'Nainen'} onChange={() => setSukupuoli('Nainen')} /><label>Nainen</label>
        <input type="radio" name="sukupuoli" value="Muu" checked={sukupuoli === 'Muu'} onChange={() => setSukupuoli('Muu')}/><label>En halua kertoa.</label>
        </div>
        <div>
        <output>Tulos:  {tulos.toFixed(2)} Promillea.</output>
        </div>
        <button>Laske!</button>
      </form>
    </div>
  );
}

export default App;
