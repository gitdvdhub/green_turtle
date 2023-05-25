function Pessoa({nome, idade, profissao, foto, namorada}) {
    return (
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            <p>Namorada: {namorada}</p>
        </div>
    );
}

export default Pessoa;