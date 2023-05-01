import { useState } from "react";
// http://api.weatherstack.com/current?access_key=7df498c084359df612fc1b081d73e835&query=New%20York

function App() {
  const [city, setcity] = useState("");
  const [result, setresult] = useState("");

  const changeHandler = (e) => {
    setcity(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    await fetch(
      `http://api.weatherstack.com/current?access_key=7df498c084359df612fc1b081d73e835&query=${city}`
    ).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setresult(city + "\n" + data.current.temperature+"°C");
      });
    });
  };
  return (
    <center>
      <div className="container my-5 p-5 ">
        <div className="card w-50 bg-body-secondary shadow  ">
          <div className="card-body">
            <h2 className="card-title mb-3">Weather App</h2>
            {/* form */}
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <input
                  onChange={changeHandler}
                  value={city}
                  type="text"
                  placeholder="Enter City Name"
                  className="form-control  text-secondary"
                  id="city"
                  name="city"
                  aria-describedby="textHelp"
                />
              </div>

              <button type="submit" className="btn btn-secondary">
                Get Temperature
              </button>
            </form>

            <div className="container my-3">
{result ? <h4 className="shadow-sm p-3 bg-white border rounded">{result}</h4> : <h4 className="shadow-sm p-3 bg-white border rounded">No Result..!</h4> }

              
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
