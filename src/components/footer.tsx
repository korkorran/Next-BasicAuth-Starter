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
      <p><a href="https://github.com/Fredestrik/Next-BasicAuth-Starter"><i className="fab fa-github"></i></a></p>
    </div>
  </footer>
)
