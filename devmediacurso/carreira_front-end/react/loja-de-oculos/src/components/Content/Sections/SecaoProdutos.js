
function SecaoProdutos() {
    return (
        <section className="secao-produtos">
            <div className="secao-produtos-content">
                <h2>NOSSOS PRODUTOS</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                <div className="cards">
                    <div className="card">
                        <h2>Óculos de grau</h2>
                        <img src={process.env.PUBLIC_URL + "/assets/images/oculos01.png"} alt="Óculos de grau" />
                        <p>R$ 500,00</p>
                    </div>
                    <div className="card">
                        <h2>Óculos de sol</h2>
                        <img src={process.env.PUBLIC_URL + "/assets/images/oculos03.png"} alt="Óculos de sol" />
                        <p>R$ 700,00</p>
                    </div>
                    <div className="card">
                        <h2>Lentes transition</h2>
                        <img src={process.env.PUBLIC_URL + "/assets/images/oculos02.png"} alt="Lentes transition" />
                        <p>R$ 750,00</p>
                    </div>
                    <div className="card">
                        <h2>Óculos infantil</h2>
                        <img src={process.env.PUBLIC_URL + "/assets/images/oculos04.png"} alt="Óculos infantil" />
                        <p>R$ 500,00</p>
                    </div>
                </div>
                <p>Todos os nossos produtos incluem:</p>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    );
}

export default SecaoProdutos;