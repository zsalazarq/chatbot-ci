import { addKeyword } from "@builderbot/bot";
import certificadosFlow from "./certificadosFlow"
import mainFlow from "../../app"

const infoFilialesFlow = addKeyword(['c', 'filiales'])
    .addAnswer('Información para filiales:')
    .addAnswer(
        ['Quienes estudiaron antes de noviembre de 2022 el idioma en su Filial, deben solicitar los requisitos y códigos de pago con los secretarios de su Filial:',
        '- Filial Sicuani: sssicuani@uandina.edu.pe',
        '- Filial Quillabamba: ssquillabamba@uandina.edu.pe',
        '- Filial Puerto Maldonado: fmaldonado@uandina.edu.pe']
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

export default infoFilialesFlow
