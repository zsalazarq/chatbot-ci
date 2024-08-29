import { addKeyword } from "@builderbot/bot";
import mainFlow from "../../app"
import matriculasFlow from "./matriculasFlow"

const procesoEstudianteNuevoFlow = addKeyword(['matricula', 'nuevo'])
  .addAnswer('Proceso de matrícula para estudiantes nuevos:')
  .addAnswer([
    'CASO 1: ESTUDIANTE DE LA UAC',
    'Si es estudiante nuevo para el Centro de Idiomas (sede central Cusco):',
    '- Solicite la habilitación del idioma por correo a: kespinoza@uandina.edu.pe',
    '- Asunto: *"HABILITACIÓN DE IDIOMA"*',
    '- Incluya en el correo: Apellidos y nombres, Código de estudiante UAC, Número de celular, Idioma seleccionado',
    '- Nota: Las habilitaciones se solicitan por única vez al iniciar el idioma',
    '',
    'CASO 2: ESTUDIANTE EXTERNO',
    'Si no es estudiante de la Universidad Andina del Cusco:',
    '- Solicite el formato de matrícula al correo: kespinoza@uandina.edu.pe'
  ])
  .addAnswer('¿Desea volver al menú de matrículas? (Sí/No)', { capture: true },
    async (ctx, { gotoFlow }) => {
      const option = ctx.body.toLowerCase()
      switch(option) {
        case 'si': return gotoFlow(matriculasFlow)
        default: return gotoFlow(mainFlow)
      }
    }
  )

export default procesoEstudianteNuevoFlow