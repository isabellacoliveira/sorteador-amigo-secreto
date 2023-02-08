import { Cabecalhos, ImagemLogo, Participante } from "./styles"

const Cabecalho = () => {
    return (
        <Cabecalhos>
            <ImagemLogo className="imagem-logo" role="img" aria-label='Logo do Sorteador'></ImagemLogo>
            <Participante className='participante' src="/imagens/participante.png" alt="Participante com um presente na mão" />
        </Cabecalhos>
    )
}

export default Cabecalho