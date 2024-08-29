import { addKeyword } from "@builderbot/bot";
import certificadosFlow from "./certificadosFlow"
import mainFlow from "../../app"

const pasosSeguirFlow = addKeyword(['b', 'pasos'])
    .addAnswer('Pasos a seguir para obtener certificados y diplomas:')
    .addAnswer(
        ['1. Realizar los pagos en CREDINKA o Caja Sullana:',
        '   - C4610008 – CERTIFICADO – S/.69.00',
        '   - C4610005 – DIPLOMA – S/.104.00',
        '2. Llenar el formulario de emisión de Certificado y Diploma: https://www.uandina.edu.pe/centro-idiomas/#1609211722406-71397bb4-648fe5c1-3a28d44b-c561',
        '3. Adjuntar los vouchers dentro del formulario',
        '4. Enviar el formulario por mesa de partes virtual: https://mesadepartes.uandina.edu.pe/',
        '5. Para recoger el diploma, traer 02 Fotografías tamaño pasaporte (con terno oscuro en fondo blanco)',
        '',
        'Nota: El pre-requisito para sacar el diploma es tener el certificado.']
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

export default pasosSeguirFlow