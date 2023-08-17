import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LogOut, Users, Image, Map, ClipboardList } from "lucide-react";
import "../Styles/SideMenu.css";

function SideMenu() {
  const sizeIcons = 15;
  const colorIcons = "black";
  const colorIcons2 = "white";
  const logoutColor = "red";
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  const items = [
    {
      label: "Inicio",
      icon: <Map size={sizeIcons} fill={colorIcons} />,
      key: "/",
    },
    {
      label: "Negocios",
      key: "/inventory",
      icon: <Users size={sizeIcons} fill={colorIcons} />,
    },
    {
      label: "Banners",
      key: "/orders",
      icon: <Image size={sizeIcons} fill={colorIcons} />,
    },
    {
      label: "Publicidad",
      key: "/customers",
      icon: <ClipboardList size={sizeIcons} fill={colorIcons} />,
    },
    {
      label: "Salir",
      key: "/logout",
      icon: <LogOut size={sizeIcons} fill={colorIcons} />,
    },
  ];

  return (
    <div className="SideMenu">
      <Menu
        theme="dark"
        className="SideMenuVertical"
        mode="inline"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
      >
        {items.map((item) => (
          <Menu.Item
            key={item.key}
            icon={
              <item.icon.type
                size={sizeIcons}
                fill={
                  item.key === "/logout"
                    ? logoutColor
                    : item.key === selectedKeys
                    ? colorIcons2
                    : colorIcons
                }
              />
            }
            style={{
              color:
                item.key === selectedKeys && item.key !== "/logout"
                  ? "#1EA097"
                  : item.key === "/logout"
                  ? logoutColor
                  : "white",
            }}
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
export default SideMenu;
