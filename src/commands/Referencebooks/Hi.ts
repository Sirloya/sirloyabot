import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'bref1',
            description: 'Well....',
            category: 'referencebooks',
            usage: `${client.config.prefix}hi`,
            dm: true
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        M.reply('https://drive.google.com/u/0/uc?id=1bQ0zs_QzFzQ0q5XqFu4mY3ITEPa_jlo_&export=download  \n\n\n   Kanna Hotnaro !! \n\n           *Sir loya*')
    }
}
