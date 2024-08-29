import { addKeyword } from "@builderbot/bot";
import visacionesFlow from "./visacionesFlow";
import mainFlow from "../../app"

const pasosValidacionFlow = addKeyword(['b', 'validación'])
.addAnswer('Pasos para la validación:')
.addAnswer(
    ['1. Enviar en formato PDF el diploma emitido por el CI-UAC o visación vigente al personal administrativo:',
    '   Sheyla Vargas',
    '   Correo electrónico: svargas@uandina.edu.pe',
    '   Celular: 957752282',
    '2. El personal administrativo validará el documento en el sistema ERP.',
    '3. Se aceptan visaciones con una antigüedad máxima de 3 meses.']
)
.addAnswer('¿Deseas volver al menú de visaciones? (Sí/No)', { capture: true },
    async (ctx, { gotoFlow }) => {
        const option = ctx.body.toLowerCase()
            switch(option) {
              case 'si': return gotoFlow(visacionesFlow)
              default: return gotoFlow(mainFlow)
            }  
    }
)

export default pasosValidacionFlow