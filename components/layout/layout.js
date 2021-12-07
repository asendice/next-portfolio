import { Fragment } from "react";
import { useRouter } from "next/router";
import MainNavigation from "./main-navigation";

function Layout(props) {

  const router = useRouter();
  const showHeader = router.pathname === "/" ? false : true;

  return (
    <Fragment>
      {showHeader && <MainNavigation />}
      {props.children}
    </Fragment>
  )
}

export default Layout;