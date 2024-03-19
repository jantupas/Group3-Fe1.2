// Importing browser router, install it first --- npm i -D react-router-dom@latest
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Template from "./components/Template";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import Error from "./components/pages/error/Error";
import Viera from "./components/pages/viera/Viera";
import Tupas from "./components/pages/tupas/Tupas";
import Babar from "./components/pages/babar/Babar";
import Ong from "./components/pages/ong/Ong";

//import Map from "./components/pages/map/Map";
//import States from "./components/pages/states/States";
//import Effect from "./components/pages/useEffect/Effect";
//import Hooks from "./components/pages/hooks/Hooks";

import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* Importing the Nav component before nested routes */}
        <Nav />

        {/* Using the Routes and Route components from react-router-dom */}
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/babar" element={<Babar />} />
            <Route path="/ong" element={<Ong />} />
            <Route path="/tupas" element={<Tupas />} />
            <Route path="/viera" element={<Viera />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>

        {/* Importing the Footer component after nested routes */}
        <Footer />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
