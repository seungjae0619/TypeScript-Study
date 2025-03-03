import React from "react";
import { Link, useLocation } from "react-router-dom";

// 사이드바 메뉴 아이템 타입 정의
type MenuItem = {
  id: string;
  title: string;
  path: string;
  icon?: React.ReactNode; // 선택적 아이콘
};

// 사이드바 컴포넌트 props 타입 정의
interface SidebarProps {
  items: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const location = useLocation();

  return (
    <div className="w-76 h-screen bg-blue-400 text-white fixed left-0 top-0 overflow-y-auto">
      <div className="p-4 ml-4">
        <div className="flex items-center ">
          <img
            className="size-12"
            src="https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png"
            alt="TypeScript Logo
            mb-4"
          />
          <h1 className="text-xl font-bold ml-2">TypeScript Study</h1>
        </div>

        <nav>
          <ul className="space-y-2 mt-4">
            {items.map((item) => {
              // 현재 경로가 이 항목의 경로와 일치하는지 확인
              const isActive = location.pathname === item.path;

              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-2 rounded transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white font-medium w-55" // 활성화된 항목 스타일
                        : "hover:bg-blue-500 w-55" // 비활성화된 항목의 호버 스타일
                    }`}
                  >
                    {item.icon && <span className="mr-3">{item.icon}</span>}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
