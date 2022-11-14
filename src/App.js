import { useEffect, useState } from "react";
import "./app.css"

function App() {

  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [flag, setFlag] = useState(false)

  const Onstart = () => {
    setFlag(true)
  }

  const OnReset = () => {
    setFlag(false)
    setTimeout(() => {
      setHour(0)
      setMin(0)
      setSec(0)
    }, 1000);
  }

  const OnStop = () => {
    setFlag(false)
  }

  useEffect(() => {
    if (flag) {
      setTimeout(() => {
        if (sec < 61) {
          setSec((sec) => sec + 1)
        }
        else {
          setSec(0)
          if (min < 61) {
            setMin((min) => min + 1)
          }
          else {
            setMin(0)
            if (hour < 24) {
              setHour((hour) => hour + 1)
            }
          }
        }
      }, 1000)
    }
  }, [sec, flag])


  return (
    <div className="stop">
      <h2 className="text">My StopWatch App</h2>

      <h1>{hour} : {min} : {sec}</h1>
      <button className="btn btn1" onClick={() => Onstart()}>Start</button>
      <button className="btn btn1" onClick={() => OnStop()}>Stop</button>
      <button className="btn btn1" onClick={() => OnReset()}>Reset</button>

    </div>
  );
}

export default App;
