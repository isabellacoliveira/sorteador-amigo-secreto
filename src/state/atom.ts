import { atom } from 'recoil'; 

export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    // deve ter um estado inicial padrão , é uma lista de nomes vazia 
    default: []
})

export const erroState = atom<string>({
    key: 'erroState', 
    default: ''
})

// lugar para armazenar o resultado
export const resultadoAmigoSecreto = atom<Map<string, string>>({
    key: 'resultadoAmigoSecreto', 
    default: new Map()
})