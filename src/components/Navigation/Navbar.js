import React from "react";
import "../styles/Main.scss";
import "../styles/Nav.scss";

export default function NavBar() {
  // const path = window.location.pathname;
  return (
    <nav className="nav">
      <a href="/Products" className="site-title">
        HighQualiDee Merchantry
      </a>
      <ul>
        <li>
          <a href="/Cart" className="btn ">
            Cart
          </a>
        </li>
        <li>
          {/* <a href="/electronics" className="btn">
            Electronics
          </a>
        </li>
        <li>
          <a href="/jewelery" className="btn">
            Jewelery
          </a>
        </li>
        <li>
          <a href="/men" className="btn">
            Men
          </a>
        </li>
        <li>
          <a href="/women" className="btn">
            Women
          </a>
        </li>
        <li> */}
          <a href="/Contact" className="btn">
            Contact
          </a>
        </li>
        <li>
          <a href="/About" className="btn">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
// eslint-disable-next-line
function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
        {children}
      </a>
    </li>
  );
}

// export default function Navbar({ setToken }) {
//   const logOutHandler = () => {
//     setToken("");
//     localStorage.clear();
//   };
//   return (
//     <div className="navbar">
//       <h1>HighQualiDee Merchantry</h1>
//       <button className="log-out-btn" onClick={() => logOutHandler()}>
//         Log Out
//       </button>
//     </div>
//   );
// }
