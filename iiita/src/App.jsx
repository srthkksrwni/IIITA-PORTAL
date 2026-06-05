import { HashRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Ecological from "./pages/Ecological";
import Wellness from "./pages/Home/Wellness";
import Resources from "./pages/Resources";
import News from "./pages/News";
import Responsibilities from "./pages/Responsibilities";
import Programs from "./pages/Programs";
// import mobility from "./pages/Mobility";

function App() {
  return (
<>
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ecological" element={<Ecological />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/mobility" element={<mobility />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/News" element={<News />} />
          <Route path="/responsibilities" element={<Responsibilities />} />
          <Route path="/programs" element={<Programs />} />
          

          {/* other routes */}
        </Route>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;