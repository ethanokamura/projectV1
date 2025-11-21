import { useState } from "react";
import PresentationForm from "./components/AppForm";
import AppHero from "./components/AppHero";

function App() {
  const [started, setStarted] = useState(false);
  return (
    <main className="flex flex-col items-center py-20 gap-10 mx-auto px-4 max-w-2xl">
      <AppHero />
      {!started ? (
        <button onClick={() => setStarted(true)} className="btn btn-primary">
          Click to get started
        </button>
      ) : (
        <PresentationForm />
      )}
    </main>
  );
}

export default App;
