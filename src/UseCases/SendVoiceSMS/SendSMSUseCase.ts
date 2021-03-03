import { api } from '../../services/api'

export class SendVoiceSMSUseCase {
	execute(numero_destino: string, mensagem: string) {
		api
			.post(
				'/tts',
				{
					numero_destino,
					mensagem,
				},
				{
					headers: {
						'Content-Type': 'application/json',
						'access-token': `${process.env.VOICE_TOKEN}`,
					},
				}
			)
			.then((res: any) => {
				const { sucesso } = res.data

				// Verificação de êxito
				if (sucesso === true) {
					console.log('Sucesso ao ligar para ' + numero_destino)
				} else {
					console.log('Erro ao ligar para ' + numero_destino)
				}
			})
			.catch((error: any) => {
				// Caso não seja possível chamar a API de voz, exibe um status de erro no console
				console.log('Error:', error)

				// Retorna uma resposta de erro para quem chamou nossa API
				console.log('Erro desconhecido ao chamar a API de voz.')
			})
	}
}
