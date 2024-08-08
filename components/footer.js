import Link from 'next/link';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Spice Odyssey</h3>
            <p className="text-gray-600">
              [Restaurant Address]
            </p>
            <p className="text-gray-600">
              Phone: [Restaurant Phone Number]
            </p>
            <p className="text-gray-600">
              Email: [Restaurant Email Address]
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-600">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/menu">Menu</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/reservations">Reservations</Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className="flex justify-center md:justify-start text-gray-600 gap-4">
              <li>
                <a
                  href="[Restaurant Facebook Link]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="[Restaurant Instagram Link]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-500">&copy; 2024 Spice Odyssey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;