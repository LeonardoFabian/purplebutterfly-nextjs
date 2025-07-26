import Link from "next/link";

const Header = () => {
  const navItems = [
    {
      label: "Home",
      slug: "/",
    },
    {
      label: "About Us",
      slug: "/about",
    },
    {
      label: "Products",
      slug: "/products",
    },
    {
      label: "Customize",
      slug: "/customize",
    },
    {
      label: "How Work",
      slug: "/how-work",
    },
    {
      label: "Contact",
      slug: "/contact",
    },
  ];
  return (
    <header className="header">
      <img
        className="header__logo"
        src="/assets/logo-header.svg"
        alt="Purple Butterfly Logo"
      />
      <ul className="header__nav">
        {navItems.map((item) => (
          <li key={item.slug}>
            <Link href={item.slug}>
              <h5>{item.label}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
