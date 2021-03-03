import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class FindDebtByDatesUseCase {
	execute(datetimes: string[]) {
		// Busca no banco de dados todas as dívidas de acordo com as datas do array
		const found = datetimes.map((datetime) =>
			prisma.divida.findMany({
				where: { dataVencimento: datetime },
				select: { dividendo: true, valor: true },
			})
		)

		// Retorna as informações
		return Promise.all(found).then(function (results) {
			return results
		})
	}
}
