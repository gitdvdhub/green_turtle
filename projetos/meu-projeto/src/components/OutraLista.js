import PropTypes from 'prop-types'

export default function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de Coisas boas</h3>
            {
                (itens.length > 0) ? (itens.map((item, index) => <p key={index}>{item}</p>)) 
                : (<p>Não há itens na lista!</p>)
                
            }
        </>
    );
}

OutraLista.propTypes = {
    itens: PropTypes.array
}

OutraLista.defaultProps = {
    itens: [0],
}