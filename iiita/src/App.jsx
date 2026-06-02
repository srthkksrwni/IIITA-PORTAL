import { HashRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          
          <Route path="/" element={<Home />} />
          
          {/* other routes */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;