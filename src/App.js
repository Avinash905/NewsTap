import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Error from "./components/Error";
import "./App.css";

function App() {
  const pageSize = 9;
  const country = "us";
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          key="general"
          path="/NewsTap"
          element={
            <News category={"general"} country={country} pageSize={pageSize} />
          }
        />
        <Route
          key="business"
          path="/NewsTap/business"
          element={
            <News category={"business"} country={country} pageSize={pageSize} />
          }
        />
        <Route
          key="entertainment"
          path="/NewsTap/entertainment"
          element={
            <News
              category={"entertainment"}
              country={country}
              pageSize={pageSize}
            />
          }
        />
        <Route
          key="health"
          path="/NewsTap/health"
          element={
            <News category={"health"} country={country} pageSize={pageSize} />
          }
        />
        <Route
          key="science"
          path="/NewsTap/science"
          element={
            <News category={"science"} country={country} pageSize={pageSize} />
          }
        />
        <Route
          key="sports"
          path="/NewsTap/sports"
          element={
            <News category={"sports"} country={country} pageSize={pageSize} />
          }
        />
        <Route
          key="technology"
          path="/NewsTap/technology"
          element={
            <News
              category={"technology"}
              country={country}
              pageSize={pageSize}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
