import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./styles/tailwind.output.css";
import ChatMain from "./pages/ChatMain";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ChatMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
