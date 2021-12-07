import classes from "./main-navigation.module.css";
import Link from "next/link";
function MainNavigation() {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Link href="/">Dylan Travis</Link>
      </div>

      <ul className={classes.nav}>
        <li>
          <Link href="/about">
            <a>
              <div style={{ backgroundColor: "#62acb5" }}>about</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>
              <div style={{ backgroundColor: "#fc7223" }}>projects</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>
              <div style={{ backgroundColor: "#e4324c" }}>contact</div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MainNavigation;
