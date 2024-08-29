import { addKeyword } from "@builderbot/bot";
import mainFlow from "../../app"
import matriculasFlow from "./matriculasFlow"

const procesoMatriculaFlow = addKeyword(['d', 'proceso'])
    .addAnswer('Proceso para la matrícula:')
    .addAnswer(
        ['1. Los pagos se realizan en las entidades financieras de CREDINKA y Caja Sullana.',
        '2. Código de pago: C46100001 – Pensión Ciclo intensivo Sede Central – S/. 363.00',
        '3. Una vez realizado el pago, para registrar su matrícula ingrese con su cuenta al Sistema ERP University.',
        '4. En el ERP University:',
        '   • Buscar el ícono gestión de idiomas',
        '   • Ingresar la información del voucher de pago',
        '   • Elegir el idioma, elegir grupo según horario',
        '   • Registrar su matrícula',
        '5. Puede ver el siguiente video como guía de matrícula: https://youtu.be/Y8qaIkE1p_g']
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

export default procesoMatriculaFlow