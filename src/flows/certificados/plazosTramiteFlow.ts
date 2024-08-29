import { addKeyword } from "@builderbot/bot";
import certificadosFlow from "./certificadosFlow"
import mainFlow from "../../app"

const plazosTramiteFlow = addKeyword(['a', 'plazos'])
    .addAnswer('Plazos para el trámite de certificados y diplomas:')
    .addAnswer(
        ['- Para quienes estudiaron en el Centro de Idiomas de la UAC: máximo 2 años para tramitar el certificado y diploma, a partir de la fecha de haber terminado de estudiar el nivel y haber aprobado.',
        '- Para los estudiantes que dieron el EXAMEN DE SUFICIENCIA: solo 3 meses para solicitar su certificado y diploma a partir del mes que dio el examen.']
    )
    .addAnswer('¿Deseas volver al menú de certificados y diplomas? (Sí/No)', { capture: true },
        async (ctx, { gotoFlow }) => {
            const option = ctx.body.toLowerCase()
            switch(option) {
              case 'si': return gotoFlow(certificadosFlow)
              default: return gotoFlow(mainFlow)
            } 
        }
    )

export default plazosTramiteFlow