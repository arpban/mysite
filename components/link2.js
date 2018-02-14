// Helpers
import isAbsolute from 'is-absolute-url'

// Components
import Link from 'next/link'

const isAnchor = href => href.charAt(0) === '#'

export default ({ href, children }) =>
  <span>
    {isAnchor(href)
      ? <a href={href}>
          {children}
        </a>
      : isAbsolute(href)
        ? <a href={href} target="_blank" rel="noreferrer noopener">
            {children}
          </a>
        : <Link href={href} prefetch>
            <a>
              {children}
            </a>
          </Link>}

    <style jsx>
      {`
        span{
          display: inline;
        }
        a {
          font-size: 16px;
          display :inline;
          color: #2196f3;
          text-decoration: none;
          border-bottom: 1px dashed currentColor;
        }
      `}
    </style>
  </span>
