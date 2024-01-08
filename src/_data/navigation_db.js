/*
  |----------------------------------------
  | Navigation
  |----------------------------------------
*/

const base_route = "analytic-portfolio";
export const navigation_db = {
  base_route: base_route,
  nav_links: [
    {
      name: "Home",
      path: `${base_route}/`,
      end: true,
    },
    {
      name: "Portfolio",
      path: `${base_route}/portfolio`,
      end: false,
    },
    {
      name: "About",
      path: `${base_route}/about`,
      end: false,
    },
    {
      name: "Services",
      path: `${base_route}/services`,
      end: false,
    },
    {
      name: "Contact",
      path: `${base_route}/contact`,
      end: false,
    },
  ],

  home: {
    name: "Home",
    path: `/${base_route}/`,
  },
  about: {
    name: "About",
    path: `/${base_route}/about`,
  },
  portfolio: {
    name: "Portfolio",
    path: `/${base_route}/portfolio`,
  },
  dashboard: {
    name: "Project",
    path: `/${base_route}/project/:cat/:id`,
  },
  service: {
    name: "Services",
    path: `/${base_route}/services`,
  },
  contact: {
    name: "Contact",
    path: `/${base_route}/contact`,
  },
};
