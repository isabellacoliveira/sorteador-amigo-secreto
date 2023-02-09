import { realizarSorteio } from "./RealizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {
        const participantes = [
            'Melissa', 
            'Giovanna', 
            'Bárbara',
            'Letícia', 
            'Helena',
            'Isabella'
        ]

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            // vamos pegar o amigo secreto desse participante 
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})