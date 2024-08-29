import { addKeyword } from "@builderbot/bot";
import mainFlow from "../../app"
import matriculasFlow from "./matriculasFlow"

const cronogramaMatriculasFlow = addKeyword(['b', 'cronograma'])
    .addAnswer('*Octubre*')
    .addAnswer(
        ['Habilitaciones: Del 24 al 30 de septiembre, 2024',
            'Matrículas: 01, 02 y 03 de octubre, 2024',
            'Inicio de clases: 07 de octubre, 2024']
    ).addAnswer('*Noviembre*')
    .addAnswer(
        ['Habilitaciones: Del 25 al 30 de octubre, 2024',
            'Matrículas: 01, 02, 03 y 04 de noviembre, 2024',
            'Inicio de clases: 06 de noviembre, 2024']
    ).addAnswer('*Diciembre*')
    .addAnswer(
        ['Habilitaciones: Del 25 al 29 de noviembre, 2024',
            'Matrículas: 02 y 03 de diciembre, 2024',
            'Inicio de clases: 04 de diciembre, 2024']
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