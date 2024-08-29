import { addKeyword } from "@builderbot/bot";
import examenSuficienciaFlow from "./examenSuficienciaFlow"
import examenReubicacionFlow from "./examenReubicacionFlow"
import mainFlow from "../../app"

const examenesFlow = addKeyword(['2', 'examenes', 'exámenes'])
    .addAnswer('Información sobre exámenes:')
    .addAnswer(
        ['A. Examen de suficiencia',
        'B. Examen de reubicación',
        'C. Volver al menú principal'],
        { capture: true },
        async (ctx, { gotoFlow }) => {
            const option = ctx.body.toLowerCase()
            switch(option) {
                case 'a': return gotoFlow(examenSuficienciaFlow)
                case 'b': return gotoFlow(examenReubicacionFlow)
                case 'c': return gotoFlow(mainFlow)
                default: return gotoFlow(examenesFlow)
            }
        }
    )

export default examenesFlow