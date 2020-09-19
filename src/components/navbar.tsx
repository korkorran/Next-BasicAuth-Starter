import Link from 'next/link'
import useAuth from "../contexts/auth"

export default () =>{
  const { user, isAuthenticated, logout } = useAuth();

  return (
<nav className="navbar is-primary is-spaced" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
  <Link href="/">
    <a className="navbar-item">
      <h1><b>Next BasicAuth Starter</b></h1>
    </a>
  </Link>
  </div>
  
  <div className="navbar-menu">
    <div className="navbar-start">
    <Link href="/public">
    <a className="navbar-item">
      <h1>Public Page</h1>
    </a>
    </Link>
    <Link href="/restricted">
      <a className="navbar-item">
        <h1>Restricted Page</h1>
      </a>
    </Link>
    </div>


    {!isAuthenticated &&
    <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link href="/sign-up">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            </Link>
            <Link href="/log-in">
            <a className="button is-light">
              Log in
            </a>
            </Link>
          </div>
        </div>
    </div>
    }
    {isAuthenticated &&
    <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <div 
            className="loggedAvatar navbar-link is-arrowless" 
            style={{ backgroundImage: `url("${user.profilePictureURL}")`}} 
            >
                    
          </div>
          <div className="navbar-dropdown is-right">
            <Link href="/settings" >
              <a className="navbar-item">Settings</a>
            </Link>
            <hr className="navbar-divider"></hr>
            <a 
              className="navbar-item"
              onClick={logout}
              >
              Log out
            </a>
          </div>
          
        </div>
    </div>
    }
  </div>


</nav>
)}