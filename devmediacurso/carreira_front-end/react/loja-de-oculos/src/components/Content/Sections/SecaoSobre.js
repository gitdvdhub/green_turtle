function SecaoSobre() {
    return (
        <section className="secao-sobre">
            <div className="secao-sobre-content">
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                <div>
                    <img src={process.env.PUBLIC_URL + '/assets/images/loja.png'} alt="Loja" />
                    <div>
                        <h3>Nossas Filiais</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/assets/images/atendimento.png'} alt="Atendimento" />
                    <div>
                        <h3>Atendimento flexível</h3>
                        <p>Nossa equipe possui é treinada para te atender</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SecaoSobre;