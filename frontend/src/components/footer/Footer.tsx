import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__disclaimer">
        © {new Date().getFullYear()} NorthPeak Digital. Toate drepturile
        rezervate.
      </p>
    </footer>
  );
}
