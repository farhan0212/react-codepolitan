import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
];

function RootLayout() {
  return (
    <>
      {navLinks.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive, isPending }) => {
            if (isActive) return "active";
            if (isPending) return "pending";
            return "";
          }}
          style={{ marginRight: "1rem" }}>
          {label}
        </NavLink>
      ))}
      <p />
      <Outlet />
    </>
  );
}

export default RootLayout;
