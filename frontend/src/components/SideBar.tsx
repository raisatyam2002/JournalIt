import { useNavigate, useLocation } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route path

  const navItems = [
    { label: "Today", path: "/today" },
    { label: "Calendar", path: "/calendar" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-1/5 border h-full bg-gray-200">
      <div className="text-center m-20">
        <h1 className="text-3xl">Journal It</h1>
        <div className="mt-10 text-2xl space-y-2">
          {navItems.map((item) => (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`cursor-pointer p-2 rounded-md ${
                location.pathname === item.path
                  ? " text-black font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
