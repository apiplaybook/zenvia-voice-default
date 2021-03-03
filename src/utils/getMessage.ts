const transformMoney = (value: number) => {
	const money = value.toString().split('.')
	return `${money[0]} reais e ${money[1]} centavos`
}

const valueWithInterest = (value: number, interest: number) => {
	return value + value * interest
}

export const getMessage = (name: string, value: number, index: number): string => {
	switch (index) {
		case 0:
			return `Olá ${name}, sou da Bo Boletos e estou aqui pra te informar que já fazem que o prazo de pagamento da sua dívida de ${transformMoney(
				valueWithInterest(value, 0.05)
			)} com nós venceu há 30 dias, logo foi adicionado 5% de juros. Estamos abertos a negociação, se tiver interesse entre em contato: 0800 0001. Obrigado pela atenção.`
		case 1:
			return `Olá ${name}, sou da Bo Boletos e estou aqui pra te informar que seu débito venceu há 15 dias, aproveite para quitar com juros baixo antes que ele aumente. Obrigado pela atenção.`
		case 2:
			return `Olá ${name}, sou da Bo Boletos e estou aqui pra te informar que seu boleto de ${transformMoney(
				value
			)} venceu há 3 dias, caso se esqueceu ainda pode pagar para evitar problemas futuros. Obrigado pela atenção.`
		case 3:
			return `Olá ${name}, sou da Bo Boletos e estou aqui pra te informar que seu boleto de ${transformMoney(
				value
			)} vence hoje, não esqueça de quitá-lo para evitar juros. Caso já tenha pago, desconsidere esta mensagem. Obrigado pela atenção.`
		case 4:
			return `Olá ${name}, sou da Bo Boletos e estou aqui pra te avisar que você tem mais 5 dias para que o pagamento da sua dívida de ${transformMoney(
				value
			)} vença. Quite-a em dia para evitar juros. Caso já tenha pago, desconsidere esta mensagem. Obrigado pela atenção.`

		default:
			return ''
	}
}
