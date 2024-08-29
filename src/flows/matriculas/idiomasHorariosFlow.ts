import { addKeyword } from "@builderbot/bot";
import mainFlow from "../../app"
import matriculasFlow from "./matriculasFlow"

const idiomasHorariosFlow = addKeyword(['a', 'idiomas', 'horarios'])
    .addAnswer('Idiomas ofrecidos y horarios:')
    .addAnswer(
        ['Inglés:',
        '- Básico (3 meses)',
        '- Intermedio (3 meses)',
        'Portugués:',
        '- Básico (3 meses)',
        '- Intermedio (3 meses)',
        'Quechua:',
        '- Básico (2 meses)',
        '- Intermedio (1 mes)',
        '- Avanzado (1 mes)',
        '',
        'Horarios:',
        '7:00 – 10:00 H',
        '10:00 – 13:00 H',
        '15:00 – 18:00 H',
        '18:00 – 21:00 H']
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

export default idiomasHorariosFlow;
