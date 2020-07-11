import Home from "../pages/Home";
import Resume from "../pages/Resume";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";

export default [
  {
    path: "/Home",
    name: "Home",
    component: Home,
    meta: {
      title: "_home_",
    },
    children: [],
  },
  {
    path: "/Resume",
    name: "Resume",
    component: Resume,
    meta: {
      title: "_resume_",
    },
  },
  {
    path: "/About",
    name: "About",
    component: About,
    meta: {
      title: "_about_",
    },
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    component: Portfolio,
    meta: {
      title: "_portfolio_",
    },
  },
  {
    path: "/*", //other page , force redirect to home page
    redirect: "/Home",
  },
];
