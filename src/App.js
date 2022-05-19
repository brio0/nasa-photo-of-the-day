import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import NasaPicture from "./Components/nasaPic";

function App() {
  const [value, setValue] = useState();
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setValue(res.data)
      })
      .catch(() => console.log('error'))
  }, [])

  return (
    <div className="App">
      {value && <NasaPicture photo={value} />}
    </div>
  );
}

export default App;
