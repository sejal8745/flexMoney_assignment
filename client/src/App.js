import Form from "./components/Form.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/application-form" element={<Form />} />
    </Routes>
  );
}

export default App;
