import { addKeyword } from "@builderbot/bot";
import requisitosVisacionFlow from "./requisitosVisacionFlow";
import pasosValidacionFlow from "./pasosValidacionFlow";
import mainFlow from "../../app"

const visacionesFlow = addKeyword(['4', 'visaciones'])
    .addAnswer('Información sobre visaciones:')
    .addAnswer(
        ['A. Requisitos',
        'B. Pasos para la validación',
        'C. Volver al menú principal'],
        { capture: true },
        async (ctx, { gotoFlow }) => {
            const option = ctx.body.toLowerCase()
            switch(option) {
                case 'a': return gotoFlow(requisitosVisacionFlow)
                case 'b': return gotoFlow(pasosValidacionFlow)
                case 'c': return gotoFlow(mainFlow)
                default: return false
            }
        }
    )

export default visacionesFlow