export default function Navbar () {
    return (
        <div className="flex justify-center">
            <div className="navbar w-auto font-mono shadow-2xl text-s bg-base-100 rounded-box fixed mt-5 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a href="#home">Home</a>
                            </li> 
                            <li>
                                <a href="#about">About</a>
                            </li> 
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#experience">Experience</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a href="#home">Home</a>
                        </li> 
                        <li>
                            <a href="#about">About</a>
                        </li> 
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                </div>
            </div>
        </div>
    )
}