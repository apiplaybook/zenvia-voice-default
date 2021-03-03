import cron from 'node-cron'
import { checkAndSendSMSUseCase } from './UseCases/CheckAndSendSMS/index'

// A cada hora será feita uma checagem no banco de dados se há a necessidade de enviar SMS de voz, caso tiver, será enviado
cron.schedule('* * * *', () => {
	checkAndSendSMSUseCase.execute()
})
