export const appConstantService = (() => {
  const navItems = [
    {
      link: "/",
      name: "home",
      text: "Home",
    },
    {
      link: "/rent",
      name: "rent",
      text: "Rent",
    },
    {
      link: "/sell",
      name: "sell",
      text: "Sell",
    },
    {
      link: "/construction-material",
      name: "construction-material",
      text: "Construction Materials",
    },
    {
      link: "/contact-us",
      name: "contact-us",
      text: "Contact Us",
    },
  ];

  return {
    navItems,
  };
})();
