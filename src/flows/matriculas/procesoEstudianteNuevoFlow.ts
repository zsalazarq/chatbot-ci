import { addKeyword } from "@builderbot/bot";
import mainFlow from "../../app"
import matriculasFlow from "./matriculasFlow"

const procesoEstudianteNuevoFlow = addKeyword(['c', 'nuevo'])
    .addAnswer('Proceso para estudiante nuevo:')
    .addAnswer('Si usted no es alumno de la universidad, escriba un correo electrónico pidiendo el formato para habilitar la matrícula, en las fechas que indica el cronograma de matrículas a:')
    .addAnswer(
        ['Ps. Ruth Roxana Sánchez Salazar / rsanchezs@uandina.edu.pe',
        'Ing. Sheyla Vargas O. / svargas@uandina.edu.pe']
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

export default procesoEstudianteNuevoFlow