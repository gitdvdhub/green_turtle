import SecaoCapa from "./Sections/SecaoCapa";
import SecaoProdutos from "./Sections/SecaoProdutos";
import SecaoSobre from "./Sections/SecaoSobre";
import SecaoContato from "./Sections/SecaoContato";

function Main () {
    return (
        <main>
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContato />
        </main>
    );
}

export default Main;    
