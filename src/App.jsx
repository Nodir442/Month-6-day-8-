import { Routes, Route } from "react-router-dom";
import { Home } from "./home";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
