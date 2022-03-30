import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicContainer from "./components/BasicContainer";
import SimpleForm from "./pages/SimpleForm";
import ComplexForm from "./pages/ComplexForm";
import Home from "./pages/Home";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <BasicContainer>
        <Routes>
          <Route path="/" element={<Home />}>
            Simple Form
          </Route>
          <Route path="/simple-form" element={<SimpleForm />}>
            Simple Form
          </Route>
          <Route path="/complex-form" element={<ComplexForm />}>
            Complex Form
          </Route>
        </Routes>
      </BasicContainer>
    </BrowserRouter>
  );
}

export default App;
