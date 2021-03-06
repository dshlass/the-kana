import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="navigation" >
      <div className="navigation__border-one">
        <div className="navigation__border-two">
          <div className="navigation__border-three">
            <ul className="navigation__container">
              <li className="navigation__item">
                <Link href="/">
                  <a
                    className="navigation__link"
                    onMouseEnter={() => {
                      router.prefetch('/');
                    }}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="navigation__item">
                <Link href="/hiragana/" as="/hiragana">
                  <a
                    className="navigation__link"
                    onMouseEnter={() => {
                      router.prefetch('/hiragana');
                    }}
                  >
                    Hiragana
                  </a>
                </Link>
              </li>
              <li className="navigation__item">
                <Link href="/katakana/" as="/katakana">
                  <a
                    className="navigation__link"
                    onMouseEnter={() => {
                      router.prefetch('/katakana');
                    }}
                  >
                    Katakana
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
