import { Link } from "react-router-dom";

// Link tag replaces the <a> tag
// Do not use <a> to navigate within react
// use <a> tag and target="_blank" when navigating away from your site
export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>I Love Light</h1>
      </Link>
    </header>
  );
}
