import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./views/Home";
import { Layout } from "./models/Layout";
import { Info } from "./views/Info";
import { Review } from "./views/Review";
import { NotF } from "./views/NotF";
import { Store } from "./views/Store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/information/:id" element={<Info />} />
          <Route path="/review/:id" element={<Review />} />
          <Route path="/*" element={<NotF />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
