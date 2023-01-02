import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import "./App.css";
import Chat from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-row">
        <div className="w-24 bg-white">
          <Sidebar />
        </div>
        <Routes>
          <Route path="/message" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
