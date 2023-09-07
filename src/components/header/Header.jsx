import "./header.css";

function Header() {
    return (
        <header className="header__images__app">
            <nav className="header__navbar__app container-mx">
                <div className="header__title">
                    <h1 className="title">Gallery</h1>
                </div>
                <div className="generated__for">
                    <span className="text">developed by sebastian</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;