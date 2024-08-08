import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const variants = {
  hidden: { opacity: 0, x: -20, y: 0 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.3 } },
};

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const [currentRoute, setCurrentRoute] = useState(router.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(router.pathname);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="Spice Odyssey"
              width={120}
              height={40}
              className="cursor-pointer"
              priority
            />
          </Link>
          <motion.div
            variants={variants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            className="hidden md:block ml-8"
          >
            <nav className="flex space-x-8">
              <Link
                href="/"
                className={`text-lg font-medium ${
                  currentRoute === '/' ? 'text-orange-500' : 'text-gray-600'
                }`}
              >
                Home
              </Link>
              <Link
                href="/menu"
                className={`text-lg font-medium ${
                  currentRoute === '/menu' ? 'text-orange-500' : 'text-gray-600'
                }`}
              >
                Menu
              </Link>
              <Link
                href="/gallery"
                className={`text-lg font-medium ${
                  currentRoute === '/gallery' ? 'text-orange-500' : 'text-gray-600'
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className={`text-lg font-medium ${
                  currentRoute === '/contact' ? 'text-orange-500' : 'text-gray-600'
                }`}
              >
                Contact
              </Link>
              {status === 'authenticated' && (
                <Link
                  href="/reservations"
                  className={`text-lg font-medium ${
                    currentRoute === '/reservations'
                      ? 'text-orange-500'
                      : 'text-gray-600'
                  }`}
                >
                  Reservations
                </Link>
              )}
              {status === 'authenticated' ? (
                <Link href="/admin">Admin</Link>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </nav>
          </motion.div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            <FaBars size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-md z-20 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            href="/"
            className="text-lg font-medium text-orange-500"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="text-lg font-medium text-gray-600"
            onClick={toggleMenu}
          >
            Menu
          </Link>
          <Link
            href="/gallery"
            className="text-lg font-medium text-gray-600"
            onClick={toggleMenu}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium text-gray-600"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          {status === 'authenticated' && (
            <Link
              href="/reservations"
              className="text-lg font-medium text-gray-600"
              onClick={toggleMenu}
            >
              Reservations
            </Link>
          )}
          {status === 'authenticated' ? (
            <Link href="/admin" onClick={toggleMenu}>
              Admin
            </Link>
          ) : (
            <Link href="/login" onClick={toggleMenu}>
              Login
            </Link>
          )}
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;