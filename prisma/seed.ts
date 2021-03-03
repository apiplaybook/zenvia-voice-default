import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
	// Inserção das pessoas
	await prisma.pessoa.create({ data: { nome: 'Pessoa 1', celular: '+11999999999' } })
	await prisma.pessoa.create({ data: { nome: 'Pessoa 2', celular: '+11999999999' } })
	await prisma.pessoa.create({ data: { nome: 'Pessoa 3', celular: '+11999999999' } })
	await prisma.pessoa.create({ data: { nome: 'Pessoa 4', celular: '+11999999999' } })

	console.log('Pessoas criadas.')

	// Inserção das dividas
	await prisma.divida.create({
		data: { valor: 251.59, dataVencimento: '2021-02-01T00:00:00Z', dividendoId: 1 },
	})
	await prisma.divida.create({
		data: { valor: 2051.49, dataVencimento: '2021-02-16T00:00:00Z', dividendoId: 2 },
	})
	await prisma.divida.create({
		data: { valor: 521.97, dataVencimento: '2021-02-28T00:00:00Z', dividendoId: 3 },
	})
	await prisma.divida.create({
		data: { valor: 151.58, dataVencimento: '2021-03-03T00:00:00Z', dividendoId: 4 },
	})
	await prisma.divida.create({
		data: { valor: 2311.19, dataVencimento: '2021-03-08T00:00:00Z', dividendoId: 1 },
	})

	console.log('Dívidas criadas.')
}

main().catch((e) => console.error(e))
