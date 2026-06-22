import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo gradient-text">Sriramfx</span>
            <p className="footer-tagline">
              Video Editor &bull; UI/UX Designer &bull; Motion Graphics
            </p>
          </div>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Sriram Sundaram. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
