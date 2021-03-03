export const getDatetimes = () => {
	// Retorna um array coms as datas
	return [-30, -15, -3, 0, 5].map((days) => {
		// Pega o dia de hoje
		const date = new Date()

		// Soma com o período em questão
		date.setDate(date.getDate() + days)

		// Transforma do jeito que o Brasil vê as datas e divide pelo espaço
		const generatedDatetime = date.toLocaleString('pt-BR').split(' ')

		// Captura a data e o horário atual
		const finalDate = generatedDatetime[0].split('/')

		// Retorna a data organizada no padrão do banco de dados
		return `${finalDate[2]}-${finalDate[1]}-${finalDate[0]}T00:00:00Z`
	})
}
