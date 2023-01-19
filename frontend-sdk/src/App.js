import "./styles/tailwind.output.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
