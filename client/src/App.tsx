import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, LeagueView, MatchView, TeamView } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/league" element={<LeagueView />} />
          <Route path="/team" element={<TeamView />} />
          <Route path="/match" element={<MatchView />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
