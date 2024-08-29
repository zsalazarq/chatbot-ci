import { addKeyword } from "@builderbot/bot";
import mainFlow from "../../app"
import matriculasFlow from "./matriculasFlow"

const cronogramaMatriculasFlow = addKeyword(['b', 'cronograma'])
    .addAnswer('Cronograma de matrículas para Junio:')
    .addAnswer(
        ['Habilitaciones: Por confirmar',
            'Matrículas: Por confirmar',
            'Inicio de clases: Por confirmar']
    )
    .addAnswer('¿Deseas volver al menú de matrículas? (Sí/No)', { capture: true },
        async (ctx, { gotoFlow }) => {
            const option = ctx.body.toLowerCase()
            switch(option) {
              case 'si': return gotoFlow(matriculasFlow)
              default: return gotoFlow(mainFlow)
            }  
        }
    )

export default cronogramaMatriculasFlow