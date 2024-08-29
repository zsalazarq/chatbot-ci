import { addKeyword } from "@builderbot/bot";
import examenesFlow from "./examenesFlow"
import mainFlow from "../../app"

const examenSuficienciaFlow = addKeyword(['a', 'suficiencia'])
  .addAnswer('Sobre el examen de suficiencia:')
  .addAnswer(
    ['Este examen lo rinden:',
      '- Alumnos que no tramitaron su certificado y diploma dentro de los 2 años que contempla el reglamento como tiempo límite',
      '- Personas que dominen un idioma',
      '- Personas cuyo diploma ha caducado por tener 10 años o más de antigüedad',
      '',
      'Requisitos:',
      '1. Pago de S/. 310.00 (Código: C46100004 – EXAMEN DE SUFICIENCIA)',
      '2. Llenar el formulario de examen de suficiencia: https://www.uandina.edu.pe/descargas/documentos/2023/formulario-suficiencia.docx',
      '3. Enviar el formulario por mesa de partes virtual: https://mesadepartes.uandina.edu.pe/']
  )
  .addAnswer('¿Deseas volver al menú de exámenes? (Sí/No)', { capture: true },
    async (ctx, { gotoFlow }) => {
      const option = ctx.body.toLowerCase()
      switch(option) {
        case 'si': return gotoFlow(examenesFlow)
        default: return gotoFlow(mainFlow)
      }
    }
  )

export default examenSuficienciaFlow