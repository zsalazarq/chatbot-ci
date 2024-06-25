const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])

const flowDocs = addKeyword(['doc', 'documentacion', 'documentación']).addAnswer(
    [
        '📄 Aquí encontras las documentación recuerda que puedes mejorarla',
        'https://bot-whatsapp.netlify.app/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowTuto = addKeyword(['tutorial', 'tuto']).addAnswer(
    [
        '🙌 Aquí encontras un ejemplo rapido',
        'https://bot-whatsapp.netlify.app/docs/example/',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowGracias = addKeyword(['gracias', 'grac']).addAnswer(
    [
        '🚀 Puedes aportar tu granito de arena a este proyecto',
        '[*opencollective*] https://opencollective.com/bot-whatsapp',
        '[*buymeacoffee*] https://www.buymeacoffee.com/leifermendez',
        '[*patreon*] https://www.patreon.com/leifermendez',
        '\n*2* Para siguiente paso.',
    ],
    null,
    null,
    [flowSecundario]
)

const flowDiscord = addKeyword(['discord']).addAnswer(
    ['🤪 Únete al discord', 'https://link.codigoencasa.com/DISCORD', '\n*2* Para siguiente paso.'],
    null,
    null,
    [flowSecundario]
)

const flowCertificaciones = addKeyword(['c','certificados','diplomas']).addAnswer(
    ['Recuerde, que para quienes estudiaron en el Centro de Idiomas de la UAC tienen máximo 2 años para tramitar el certificado y diploma, a partir de la fecha de haber terminado de estudiar el nivel y haber aprobado; pasado ese tiempo debe aplicar a un examen de suficiencia.',
    'Para los estudiantes que dieron el *EXAMEN DE SUFICIENCIA*, tiene solo 3 meses para solicitar su certificado y diploma a partir del mes que dio el examen.',
    '\n 	Quienes estudiaron antes de noviembre de 2022 el idioma en su Filial, deben solicitar los requisitos y códigos de pago con los secretarios de su Filial con quienes harán el trámite directamente.',
    '\n*A.* Requerimientos y pasos']
)

const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer('🙌 Hola bienvenido al Centro de Idiomas')
    .addAnswer(
        [
            'Gracias por contactar al Centro de Idiomas, que consulta desea realizar: ',
            '👉 *A.* Matrículas',
            '👉 *B.* Examenes (suficiencia y reubicación)',
            '👉 *C.* Certificados/diplomas',
            '👉 *D.* Visaciones',
        ],
        null,
        null,
        [flowDocs, flowGracias, flowCertificaciones, flowDiscord]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot(
        {
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB,    
        }
    )

    QRPortalWeb()
}

main()
