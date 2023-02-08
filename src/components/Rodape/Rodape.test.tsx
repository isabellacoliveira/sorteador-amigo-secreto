import { fireEvent, render, screen } from "@testing-library/react";
import {RecoilRoot} from 'recoil'; 
import { useListaParticipantes } from "../../state/hook/useListaDeParticipantes";
import Rodape from "./Rodape";

jest.mock('../../state/hook/useListaDeParticipantes', () => {
    return {
        useListaParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()

// o use navigate não pode retornar uma função direto 
// ele deve retornar uma função que retorna uma função 
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
        // useNavigate: mockNavegacao
    }
})

describe('onde não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue([])
    })

    test('a brincadeira não pode ser inciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()
    })
})

describe('onde existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaParticipantes as jest.Mock).mockReturnValue(['Patricia', 'Gabriel', 'José'])
    })

    test('a brincadeira pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    })

    test('a brincadeira foi iniciada', () => {
        render(
        <RecoilRoot>
            <Rodape />
        </RecoilRoot>
        )
        const botao = screen.getByRole('button')
        fireEvent.click(botao)
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        // podemos dizer que foi chamado com a url que queriamos 
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
    })
})