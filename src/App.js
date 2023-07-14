import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";

import { CarShow } from "./CarShow";

const App = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
};
export default App;
