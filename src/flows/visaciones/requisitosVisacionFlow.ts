import { addKeyword } from "@builderbot/bot";
import visacionesFlow from "./visacionesFlow";
import mainFlow from "../../app"

const requisitosVisacionFlow = addKeyword(['a', 'requisitos'])
    .addAnswer('Requisitos para visaciones:')
    .addAnswer(
        ['1. Certificado o diploma original con antigüedad no mayor a 10 años.',
        '2. Copia a colores del certificado o diploma, legalizado por notario público.',
        '3. Constancia de autenticidad del certificado (no mayor a 3 meses).',
        '4. Resolución directoral de autorización del Ministerio de Educación (solo para certificados nacionales).',
        '5. Pago de S/. 104.00:',
        '   - Código C46100023 para certificados de otros centros de estudio',
        '   - Código C46100009 para certificados internacionales',
        '6. Llenar el formulario: https://www.uandina.edu.pe/descargas/documentos/2023/formulario-visacion.docx',
        '7. Enviar por Mesa de partes virtual: https://mesadepartes.uandina.edu.pe/']
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

export default requisitosVisacionFlow