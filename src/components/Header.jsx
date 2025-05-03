import { NavLink } from "react-router-dom"
import styles from "./Header.module.scss"
function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="https://lms.iel-ce.org.br/pluginfile.php/1/theme_moove/logo/1741803101/logo.png" alt="Logo Geração Tech" />
        <nav>
            <ul>
                <li>
                  <NavLink 
                  to={"/"} 
                  className={({ isActive }) =>
                    isActive ? `${styles["nav-link"]} ${styles.active}` : styles["nav-link"]
                  }
                  >
                    Início
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                  to={"/about"} 
                  className={({ isActive }) =>
                    isActive ? `${styles["nav-link"]} ${styles.active}` : styles["nav-link"]
                  }
                  >
                    Sobre
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                  to={"/contact"} 
                  className={({ isActive }) =>
                    isActive ? `${styles["nav-link"]} ${styles.active}` : styles["nav-link"]
                  }
                  >
                    Contato
                  </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header