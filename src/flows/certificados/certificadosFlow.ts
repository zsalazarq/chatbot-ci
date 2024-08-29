import { addKeyword } from "@builderbot/bot";
import plazosTramiteFlow from "./plazosTramiteFlow";
import pasosSeguirFlow from "./pasosSeguirFlow";
import infoFilialesFlow from "./infoFilialesFlow";
import mainFlow from "../../app"

const certificadosFlow = addKeyword(['3', 'certificados', 'diplomas'])
	.addAnswer('Información sobre certificados y diplomas:')
	.addAnswer(
		['A. Plazos para el trámite',
			'B. Pasos a seguir',
			'C. Información para filiales',
			'D. Volver al menú principal'],
		{ capture: true },
		async (ctx, { gotoFlow }) => {
			const option = ctx.body.toLowerCase()
			switch (option) {
				case 'a': return gotoFlow(plazosTramiteFlow)
				case 'b': return gotoFlow(pasosSeguirFlow)
				case 'c': return gotoFlow(infoFilialesFlow)
				case 'd': return gotoFlow(mainFlow)
				default: return false
			}
		}
	)

export default certificadosFlow