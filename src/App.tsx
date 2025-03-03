import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/navigation/Sidebar";
import Home from "./pages/chapters/index.tsx";
import Chapter01 from "./pages/chapters/01";
import Chapter02 from "./pages/chapters/02";

// 사이드바 아이템 설정
const sidebarItems = [
  { id: "home", title: "Home", path: "/home" },
  {
    id: "ch1",
    title: "1장: 들어가며",
    path: "/chapters/01",
  },
  {
    id: "ch2",
    title: "2장: 타입",
    path: "/chapters/02",
  },
  {
    id: "ch3",
    title: "3장: 고급 타입",
    path: "/chapters/03",
  },
];

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar items={sidebarItems} />

        <div className="ml-70 p-8 w-full">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/chapters/01" element={<Chapter01 />} />
            <Route path="/chapters/02" element={<Chapter02 />} />
            {/* 추가 라우트 */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
