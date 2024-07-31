import "./styles.css";
import { Logo } from "../Logo";
import { Search } from "../Search";
import { LinkPages } from "../LinkPages";

export function Header() {
  return (
    <section className="section">
      <Logo />

      <LinkPages />

      <Search />
    </section>
  );
}

export default Header;
