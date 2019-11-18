import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';


const Nav = () => {
    const router = useRouter();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/hiragana/" as="/hiragana">
            <a
              onMouseEnter={() => {
                router.prefetch('/hiragana');
                console.log('prefetching /hiragana!');
              }}
            >
              Hiragana
            </a>
          </Link>
        </li>
        <li>
          <Link href="/katakana/" as="/katakana">
            <a
              onMouseEnter={() => {
                router.prefetch('/katakana');
                console.log('prefetching /katakana!');
              }}
            >
              Katakana
            </a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </nav>
  );}

export default Nav
