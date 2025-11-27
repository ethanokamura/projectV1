import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import RegistrationPage from "./pages/Registration";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter basename="projectV1">
      <div className="hidden opacity-50 sm:block fixed inset-0 z-0 pointer-events-none animate-gradient-shift">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(136,117,224,0.15)_0%,transparent_50%)]
                      md:bg-[radial-gradient(ellipse_at_50%_0%,rgba(136,117,224,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(112,212,224,0.1)_0%,transparent_50%),radial-gradient(ellipse_at_20%_80%,rgba(216,150,255,0.1)_0%,transparent_50%)]"
        />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
