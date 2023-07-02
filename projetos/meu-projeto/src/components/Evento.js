import Button from './evento/Button'

export default function Evento() {

    function meuEvento() {
        alert("Ativando o primeiro evento")
    }

    function segundoEvento() {
        alert("Ativando o segundo evento")
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    );
}