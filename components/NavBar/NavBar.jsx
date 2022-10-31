import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BsTerminal } from 'react-icons/bs';

const NavBar = () => {
  const router = useRouter();
  const location = router.pathname;
  const [burgerMenu, setburgerMenu] = useState(false);
  const handleBurgerMenu = () => {
    setburgerMenu(!burgerMenu);
  };
  const closeBurgerMenu = () => {
    setburgerMenu(false);
  };

  return (
    <>
      <nav
        aria-label="main navigation"
        className="navbar is-transparent py-6"
        role="navigation"
      >
        <div className="navbar-brand">
          <Link
            className="is-flex is-justify-content-center navbar-item has-text-primary is-black  is-size-3"
            href="/"
            onClick={closeBurgerMenu}
          >
            <BsTerminal className="has-text-weight-medium " />
            <span className="has-text-weight-bold --reset-line-height ml-2">
              gonzalorossi.dev
            </span>
          </Link>
          <a
            aria-expanded="false"
            aria-label="menu"
            className={burgerMenu ? 'navbar-burger is-active' : 'navbar-burger'}
            data-target="navbarBasicExample"
            role="button"
            onClick={handleBurgerMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <div
            className={burgerMenu ? 'navbar-menu is-active' : 'navbar-menu'}
          ></div>
        </div>

        <div className={burgerMenu ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-end">
            <a
              className={
                burgerMenu
                  ? 'navbar-item is-size-4 has-text-weight-semibold'
                  : 'navbar-item is-size-4 has-text-weight-semibold '
              }
              href="https://www.linkedin.com/in/gonzaloarossi/"
              rel="noreferrer"
              target="_blank"
              onClick={closeBurgerMenu}
            >
              Linkedin
            </a>
            <a
              className={
                burgerMenu
                  ? 'navbar-item is-size-4 has-text-weight-semibold'
                  : 'navbar-item is-size-4 has-text-weight-semibold'
              }
              href="https://github.com/GonzaloArielRossi"
              rel="noreferrer"
              target="_blank"
              onClick={closeBurgerMenu}
            >
              GitHub
            </a>
            <a
              className={
                burgerMenu
                  ? 'navbar-item is-size-4 has-text-weight-semibold'
                  : 'navbar-item is-size-4 has-text-weight-semibold'
              }
              href="https://drive.google.com/drive/folders/1MXFZg05g-UEF0YpCZdSTaoYyD4DwyigN?usp=sharing"
              rel="noreferrer"
              target="_blank"
              onClick={closeBurgerMenu}
            >
              CV
            </a>
            {location === '/' && (
              <div className={burgerMenu ? '' : 'navbar-item'}>
                <Link
                  className={
                    burgerMenu
                      ? 'navbar-item is-size-4 has-text-weight-semibold'
                      : 'button is-outlined is-primary is-rounded has-text-weight-bold is-size-5'
                  }
                  href="/contact"
                  onClick={closeBurgerMenu}
                >
                  Say Hello!
                </Link>
              </div>
            )}
            {location === '/contact' && !burgerMenu && (
              <div className="navbar-item">
                <Link
                  className="is-rounded has-text-weight-bold is-size-3"
                  href="/"
                  onClick={closeBurgerMenu}
                >
                  X
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
