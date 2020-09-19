import Link from 'next/link'

export default () => (
  <footer className="footer">
    <div className="content has-text-centered">
      Powered by  
        <Link href="/about">
          <a>
            Next BasicAuth Starter
          </a>
        </Link>
    </div>
  </footer>
)