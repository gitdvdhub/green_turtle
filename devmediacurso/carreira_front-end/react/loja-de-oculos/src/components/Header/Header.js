
function Header () {
    return (
        <header>
            <div className="header-content">
                <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="Logo óticas vida" />
                <nav>
                    <a href="http://localhost:3000">PRODUTOS</a>
                    <a href="http://localhost:3000">SOBRE</a>
                    <a href="http://localhost:3000">CONTATO</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;