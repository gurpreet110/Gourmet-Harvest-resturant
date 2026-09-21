function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Gourmet Harvest</h3>

          <p>
            Fresh ingredients. Authentic flavors. Memorable moments.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#reservation">Reservation</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © {currentYear} Gourmet Harvest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;