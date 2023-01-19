import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import "./styles/tailwind.output.css";
import ChatMain from "./pages/ChatMain";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="chat" element={<Layout />}>
          <Route index element={<ChatMain />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route index element={<Navigate to="chat" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
