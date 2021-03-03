import { getMessage } from './../../utils/getMessage'
import { sendVoiceSMSUseCase } from './../SendVoiceSMS/index'
import { getDatetimes } from './../../utils/getDatetimes'
import { findDebtByDatesUseCase } from './../FindDebtByDates/index'

export class CheckAndSendSMSUseCase {
	async execute() {
		// Gera um array com as datas dos respectivos torpedos de voz que precisam ser enviados
		const datetimes = getDatetimes()

		// Busca no banco de dados as dívidas com essas datas e retorna um array
		const debts = await findDebtByDatesUseCase.execute(datetimes)

		// Efetua as chamadas para as pessoas com dívidas
		debts.forEach((debtsArray, index) => {
			debtsArray.forEach(async (debt) => {
				await sendVoiceSMSUseCase.execute(
					debt.dividendo.celular,
					getMessage(debt.dividendo.nome, debt.valor, index)
				)
			})
		})
	}
}
