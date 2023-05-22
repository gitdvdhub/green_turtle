function SecaoContato() {
    return (
        <section className="secao-contato">
            <div className="secao-contato-content">
                <h2>Fale Conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div>
                    <div className="meios-contato">
                        <h3>Contato</h3>
                        <span> <img src={process.env.PUBLIC_URL + "/assets/images/local.png"} alt="icone" /> Nova Iguaçu, RJ</span>
                        <span> <img src={process.env.PUBLIC_URL + "/assets/images/telefone.png"} alt="icone" /> (21) 99999-9999</span>
                        <span> <img src={process.env.PUBLIC_URL + "/assets/images/email.png"} alt="icone" /> contato@oticavida.com</span>
                    </div>
                    <div className="redes-sociais">
                        <h3>Redes Sociais</h3>
                        <span> <img src={process.env.PUBLIC_URL + "/assets/images/fb.png"} alt="icone" /> /OticaVida</span>
                        <span> <img src={process.env.PUBLIC_URL + "/assets/images/ig.png"} alt="icone" /> @oticavidarj</span>
                        <span> <img src={process.env.PUBLIC_URL + "/assets/images/tt.png"} alt="icone" /> @oticavidarj</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SecaoContato;