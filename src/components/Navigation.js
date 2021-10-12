import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <>
            <nav className="nav-bar">
                <div className="container mx-auto flex justify-between mt-4">
                    <div>
                        <Link to="/"><img src="/images/logo.svg" alt="logo" /></Link>
                    </div>
                    <div>
                        <ul className="flex justify-between text-primary items-center text-2xl">
                            <li><Link to="/uploads">My Uploads</Link></li>
                            <li><Link to="/account" className="ml-8">Account</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation
