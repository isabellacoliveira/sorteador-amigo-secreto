import { useListaParticipantes } from "../../state/hook/useListaDeParticipantes"

export const ListaParticipantes = () => {
    const participantes: string[] = useListaParticipantes()

    return (
        <ul>
            {participantes.map(participante => <li key={participante}>{participante}</li>)}
        </ul>
    )
}