import { useState } from "react";
const PicturesArr = [
  "../images/1.jpg",
  "../images/2.png",
  "../images/3.jpg",
  "../images/4.webp",
  "../images/5.png",
  "../images/6.jpeg",
  "../images/7.jpeg",
  "../images/8.jpg",
];

function App() {
  const [plan, setPlan] = useState("");
  const [yesterday, setYesterday] = useState("");
  const [tooday, setTooday] = useState("");
  const [result, setResult] = useState(false);

  const doneToday = +yesterday + +tooday;
  const percentPlan = ((+doneToday * 100) / +plan).toFixed(2);

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(true);
  };

  const reset = () => {
    setPlan("");
    setYesterday("");
    setTooday("");
    setResult(false);
  };

  const randomImg = Math.floor(Math.random() * PicturesArr.length);
  const randomUrl = PicturesArr[randomImg];

  return (
    <div className="container">
      <div className="mt-6 columns column-gap">
        <form
          className="form box column"
          onSubmit={handleSubmit}
          onReset={reset}
        >
          <div className="field ">
            <label className="label" htmlFor="1">
              План на місяць всього
            </label>
            <input
              id="1"
              required
              className="input"
              type="number"
              placeholder="введи сумму"
              value={plan}
              onChange={(event) => setPlan(event.target.value)}
            ></input>
          </div>
          <div className="field">
            <label className="label" htmlFor="2">
              Виконано на вчорашній день (в грн)
            </label>
            <input
              id="2"
              required
              className="input"
              type="number"
              placeholder="введи сумму"
              value={yesterday}
              onChange={(event) => setYesterday(event.target.value)}
            ></input>
          </div>
          <div className="field">
            <label className="label" htmlFor="3">
              Виконано сьогодні
            </label>
            <input
              id="3"
              required
              className="input"
              type="number"
              placeholder="введи сумму"
              value={tooday}
              onChange={(event) => setTooday(event.target.value)}
            ></input>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">
                Розрахувати
              </button>
            </div>
            <div className="control">
              <button className="button is-link is-light" type="reset">
                Скинути
              </button>
            </div>
          </div>
        </form>

        {!result ? (
          <div className="column column-gap">
            <div className="box column has-background-danger-light is-size-4 has-text-danger-dark">
              Введи та перевір значення, <br />
              після чого натисни "Розрахувати"
            </div>
          </div>
        ) : (
          <div className="column column-gap">
            <div className="box column has-background-warning	">
              На сьогодні виконано <br />
               <strong className="is-size-3 has-text-primary">{doneToday} грн,</strong>
              <br />
              що дорівнює:
              <br />
              <strong className="is-size-2 has-text-primary">{percentPlan} % плану!</strong>
              
            </div>

            <div className="column">
              <progress
                className="progress is-large is-success"
                value={percentPlan}
                max="100"
              >
                {percentPlan}
              </progress>
            </div>
            <div className="column is-size-3 has-text-warning has-background-info-light">ви молодці!</div>

            <figure className="image is-128x128 mx-auto column">
              <img src={randomUrl} alt="Так тримати!" />
            </figure>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
