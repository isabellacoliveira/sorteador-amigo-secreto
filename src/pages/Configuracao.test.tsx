import { render } from "@testing-library/react";
import React from "react"; 
import {RecoilRoot} from 'recoil'; 
import Configuracao from "./Configuracao";

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('a pagina de configuração', () => {
    test('deve ser renderizada corretamente', () => {
        // vamos fazer um teste de snapshoot 
        // vamos pegar o container que esse componente foi renderizado 
        const { container } = render(
            <RecoilRoot>
                <Configuracao />
            </RecoilRoot>
        )

        expect(container).toMatchSnapshot()
    })
})