import { createBot, createProvider, createFlow, addKeyword, MemoryDB } from '@builderbot/bot'
import { BaileysProvider } from '@builderbot/provider-baileys'
import matriculasFlow from './flows/matriculas/matriculasFlow'
import examenesFlow from './flows/examenes/examenesFlow'
import certificadosFlow from './flows/certificados/certificadosFlow'
import visacionesFlow from './flows/visaciones/visacionesFlow'
import idiomasHorariosFlow from './flows/matriculas/idiomasHorariosFlow'
import cronogramaMatriculasFlow from './flows/matriculas/cronogramaMatriculasFlow'
import procesoEstudianteNuevoFlow from './flows/matriculas/procesoEstudianteNuevoFlow'
import procesoMatriculaFlow from './flows/matriculas/procesoMatriculaFlow'
import examenSuficienciaFlow from './flows/examenes/examenSuficienciaFlow'
import examenReubicacionFlow from './flows/examenes/examenReubicacionFlow'
import plazosTramiteFlow from './flows/certificados/plazosTramiteFlow'
import pasosSeguirFlow from './flows/certificados/pasosSeguirFlow'
import infoFilialesFlow from './flows/certificados/infoFilialesFlow'
import requisitosVisacionFlow from './flows/visaciones/requisitosVisacionFlow'
import pasosValidacionFlow from './flows/visaciones/pasosValidacionFlow'

const mainFlow = addKeyword(['hola', 'menu', 'inicio'])
  .addAnswer('Bienvenido al Centro de Idiomas de la Universidad Andina del Cusco. ¿En qué puedo ayudarte?')
  .addAnswer(
    ['Selecciona una opción:',
      '1. Matrículas',
      '2. Exámenes',
      '3. Certificados / Diplomas',
      '4. Visaciones'],
    { capture: true },
    async (ctx, { gotoFlow }) => {
      const option = ctx.body
      switch (option) {
        case '1': return gotoFlow(matriculasFlow)
        case '2': return gotoFlow(examenesFlow)
        case '3': return gotoFlow(certificadosFlow)
        case '4': return gotoFlow(visacionesFlow)
        default: return gotoFlow(mainFlow)
      }
    }
  )

const main = async () => {
  const adapterDB = new MemoryDB()
  const adapterFlow = createFlow([
    mainFlow,
    matriculasFlow,
    idiomasHorariosFlow,
    cronogramaMatriculasFlow,
    procesoEstudianteNuevoFlow,
    procesoMatriculaFlow,
    examenesFlow,
    examenSuficienciaFlow,
    examenReubicacionFlow,
    certificadosFlow,
    plazosTramiteFlow,
    pasosSeguirFlow,
    infoFilialesFlow,
    visacionesFlow,
    requisitosVisacionFlow,
    pasosValidacionFlow
  ])
  const adapterProvider = createProvider(BaileysProvider)

  const { httpServer } = await createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  })

  httpServer(3000) // Start the HTTP server on port 3000
}

main()

export default mainFlow