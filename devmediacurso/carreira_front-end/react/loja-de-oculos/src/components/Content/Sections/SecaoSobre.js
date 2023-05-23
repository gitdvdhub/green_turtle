function SecaoSobre() {
    return (
        <section className="secao-sobre">
            <div className="secao-sobre-content max-width">
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                <div className="cards">
                    <img src={process.env.PUBLIC_URL + '/assets/images/loja.png'} alt="Loja" />
                    <div>
                        <h2>Nossas Filiais</h2>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div>
                        <h2>Atendimento flexível</h2>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/images/atendimento.png'} alt="Atendimento" />
                </div>
            </div>
        </section>
    );
}

export default SecaoSobre;