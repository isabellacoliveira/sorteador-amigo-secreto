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