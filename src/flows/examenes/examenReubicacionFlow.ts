import { addKeyword } from "@builderbot/bot";
import examenesFlow from "./examenesFlow"
import mainFlow from "../../app"

const examenReubicacionFlow = addKeyword(['b', 'reubicación'])
  .addAnswer('Sobre el examen de reubicación:')
  .addAnswer(
    ['EL EXAMEN DE REUBICACIÓN SE RINDE DE FORMA PRESENCIAL, según coordinaciones realizadas con el personal a cargo.',
     '',
     'Este examen es aplicable para:',
     '- Estudiantes del Centro de Idiomas de la UAC desaprobados por dos veces consecutivas en un curso',
     '- Estudiantes que hayan dejado de estudiar por un periodo mayor a tres (03) meses consecutivos',
     '- Estudiantes que procedan de otros centros de idiomas y deseen continuar estudios en el Centro de Idiomas de la UAC',
     '',
     'Requisitos:',
     '1. Pago de S/. 125.00 en entidades financieras CREDINKA (no se aceptan pagos en agentes bancarios)',
     '   - Estudiantes UAC: Código C46100015',
     '   - Estudiantes externos: Código C46100003',
     '2. Copia legalizada de constancia o certificado de estudios (para estudiantes de otros centros)',
     '3. Indicar mes, año y nivel alcanzado (para estudiantes del Centro de Idiomas UAC)',
     '4. Llenar el formulario de reubicación: https://www.uandina.edu.pe/descargas/documentos/2023/formulario-reubicacion.docx',
     '5. Ingresar documentos por Mesa de partes virtual: https://mesadepartes.uandina.edu.pe/']
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

export default examenReubicacionFlow