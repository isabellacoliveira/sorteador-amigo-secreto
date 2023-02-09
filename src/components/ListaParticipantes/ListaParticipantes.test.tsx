import {render, screen} from '@testing-library/react'; 
import {RecoilRoot} from 'recoil'; 
import { useListaParticipantes } from '../../state/hook/useListaParticipantes';
import { ListaParticipantes } from './ListaParticipantes';

// vamos simular o comportamento daquele hook aqui 
// quando alguem pedir essa lista de participantes 
jest.mock('../../state/hook/useListaParticipantes', () => {
    // vamos mockar 
    return {
        // quando alguem usar essa lista de participantes ela vai se comportar como uma função 
        useListaParticipantes: jest.fn()
    }
})

describe('uma lista vazia de participantes', () => {
    // antes de cada teste 
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })

    test('deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
    
            )
            const itens  = screen.queryAllByRole('listitem')
            expect(itens).toHaveLength(0);
    });
})

describe('uma lista preenchida de participantes', () => {
    const participantes = ['Bárbara', 'Vinicius']

    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
    
            )
            const itens  = screen.queryAllByRole('listitem')
            // vamos esperar que a lista tenha o tamanho de participantes 
            expect(itens).toHaveLength(participantes.length);
    });
})