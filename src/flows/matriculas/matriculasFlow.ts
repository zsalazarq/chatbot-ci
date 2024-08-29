import { addKeyword } from "@builderbot/bot";
import idiomasHorariosFlow from "./idiomasHorariosFlow"
import cronogramaMatriculasFlow from "./cronogramaMatriculasFlow"
import procesoEstudianteNuevoFlow from "./procesoEstudianteNuevoFlow"
import procesoMatriculaFlow from "./procesoMatriculaFlow"
import mainFlow from "../../app"

const matriculasFlow = addKeyword(['1', 'matriculas', 'matrícula'])
    .addAnswer('Información sobre matrículas:')
    .addAnswer(
        ['A. Idiomas ofrecidos y horarios',
        'B. Cronograma de matrículas',
        'C. Proceso para estudiante nuevo',
        'D. Proceso para la matrícula',
        'E. Volver al menú principal'],
        { capture: true },
        async (ctx, { gotoFlow }) => {
            const option = ctx.body.toLowerCase()
            switch(option) {
                case 'a': return gotoFlow(idiomasHorariosFlow)
                case 'b': return gotoFlow(cronogramaMatriculasFlow)
                case 'c': return gotoFlow(procesoEstudianteNuevoFlow)
                case 'd': return gotoFlow(procesoMatriculaFlow)
                case 'e': return gotoFlow(mainFlow)
                default: return false
            }
        }
    ).addAnswer('¿Deseas volver al menú de matrículas? (Sí/No)', { capture: true },
        async (ctx, { gotoFlow }) => {
            const option = ctx.body.toLowerCase()
            switch(option) {
              case 'si': return gotoFlow(matriculasFlow)
              default: return gotoFlow(mainFlow)
            } 
        }
    )

export default matriculasFlow