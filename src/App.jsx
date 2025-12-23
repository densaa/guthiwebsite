import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoticesBar from "./components/NoticesBar";
import NoticeDetail from "./pages/NoticeDetail";

function App() {
  return (
    <>
      <Navbar />
      <NoticesBar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="p-6">
              
            </div>
          }
        />

        <Route path="/notice/:id" element={<NoticeDetail />} />
      </Routes>
    </>
  );
}

export default App;
