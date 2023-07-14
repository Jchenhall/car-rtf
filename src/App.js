import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";

import { CarShow } from "./CarShow";

const App = () => {
  const [car, setCar] = useState("1");
  return (
    <>
      <div className="buttonGroup">
        <button onClick={() => setCar("2")} className="button1">
          Sport
        </button>

        <button onClick={() => setCar("1")} className="button2">
          Volvo
        </button>
      </div>

      <Suspense fallback={null}>
        <Canvas shadows>
          <CarShow car={car} />
        </Canvas>
      </Suspense>
    </>
  );
};
export default App;
