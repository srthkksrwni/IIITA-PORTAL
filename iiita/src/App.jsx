import { HashRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Dashboard from "./pages/Dashboard";
import Ecological from "./pages/Ecological";
import Wellness from "./pages/Wellness";
import Resources from "./pages/Resources";
import News from "./pages/News";
import Responsibilities from "./pages/Responsibilities";
import Minors from "./pages/Minors";
import ScrollToTop from "./components/layout/ScrollToTop";
import Internships from "./pages/Internships";
import Honours from "./pages/Honours";
import UnderConstruction from "./pages/UnderConstruction";

function App() {
  return (
<>
    <HashRouter>
      <ScrollToTop/>
      <Routes>
        <Route element={<MainLayout />}>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/ecological" element={<Ecological />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/mobility" element={<mobility />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/News" element={<News />} />
          <Route path="/responsibilities" element={<Responsibilities />} />
          <Route path="/minors" element={<Minors />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/honours" element={<Honours />} />
          <Route path="/underconstruction" element={<UnderConstruction/>} />
          

          {/* other routes */}
        </Route>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;