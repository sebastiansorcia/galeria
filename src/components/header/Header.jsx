import "./header.css";

function Header() {
    return (
        <header className="header__images__app">
            <nav className="header__navbar__app container-mx">
                <div className="item-component">
                    <div className="header__title">
                        <h1 className="title">Gallery</h1>
                    </div>
                    <div className="generated__for">
                        <span className="text">developed by sebastian</span>
                    </div>
                </div>
                <div className="switch-theme">
                    <label htmlFor="darkmode" className="switch"></label>
                </div>
            </nav>
        </header>
    )
}

export default Header;