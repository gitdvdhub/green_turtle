
function Header () {
    return (
        <header>
            <div className="header-content">
                <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="Logo óticas vida" />
                <nav>
                    <a href="#produtos">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;