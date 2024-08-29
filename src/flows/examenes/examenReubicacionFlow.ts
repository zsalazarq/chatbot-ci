import { addKeyword } from "@builderbot/bot";
import examenesFlow from "./examenesFlow"
import mainFlow from "../../app"

const examenReubicacionFlow = addKeyword(['b', 'reubicación'])
  .addAnswer('Información sobre el examen de reubicación:')
  .addAnswer('Lo sentimos, no se proporcionó información específica sobre el examen de reubicación.')
  .addAnswer('¿Deseas volver al menú de exámenes? (Sí/No)', { capture: true },
    async (ctx, { gotoFlow }) => {
      const option = ctx.body.toLowerCase()
      switch(option) {
        case 'si': return gotoFlow(examenesFlow)
        default: return gotoFlow(mainFlow)
      }
    }
  )

export default examenReubicacionFlow