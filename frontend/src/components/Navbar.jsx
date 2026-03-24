import { Link } from 'react-router-dom'


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="navbar-container">

                <div className='logo'>
                    <h3><Link to="/">SkillBridge</Link></h3>
                </div>

                <div className='signin-section'>
                    <Link to="/login" className="login-link">Login</Link>
                    <Link to="/register" className="signup-link">Sign up</Link>
                </div>

            </div>
        </nav>
     );
}
 
export default Navbar;