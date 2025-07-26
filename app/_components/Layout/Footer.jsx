import Link from "next/link";

const Footer = () => {
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

  const policies = [
    {
      label: "Privacy Policy",
      slug: "/privacy-policy",
    },
    {
      label: "Terms and Conditions",
      slug: "/terms-and-conditions",
    },
    {
      label: "Cookie Policy",
      slug: "/cookie-policy",
    },
  ];

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <img
          src="/assets/logo-header.svg"
          alt="logo"
          className="footer__logo"
        />
        <ul className="footer__links">
          {navItems.map((item) => (
            <li key={item.slug}>
              <Link href={item.slug}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policies.map((policy) => (
            <li key={policy.slug}>
              <Link href={policy.slug}>{policy.label}</Link>
            </li>
          ))}
        </ul>
        <p className="copy">
          © {new Date().getFullYear()} Purple Butterfly. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
