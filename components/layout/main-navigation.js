import { useRouter } from "next/router"
import classes from "./main-navigation.module.css";
import Link from "next/link";
function MainNavigation() {

  const router = useRouter();
  const path = router.pathname;

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Link href="/">Dylan Travis</Link>
      </div>

      <ul className={classes.nav}>
        <li>
          <Link href="/about">
            <a>
              <div className={path === "/about" ? classes.active : classes.dormant} style={{ backgroundColor: "#62acb5" }}>about</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>
              <div className={path === "/projects" ? classes.active : classes.dormant}  style={{ backgroundColor: "#fc7223" }}>projects</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>
              <div className={path === "/contact" ? classes.active : classes.dormant}  style={{ backgroundColor: "#e4324c" }}>contact</div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MainNavigation;
