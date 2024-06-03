import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SignUp from "./components/forms/SignUp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="pt-8 sm:pt-44">
          <Routes>
            <Route
              path="/"
              element
            />
            <Route
              path="/signup"
              element={<SignUp />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
