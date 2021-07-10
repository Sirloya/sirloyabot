import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'hi1',
            description: 'Well....',
            category: 'referencebooks',
            usage: `${client.config.prefix}hi`,
            dm: true
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        M.reply('Context :1 \n\n chapter1 \n\n chapter2')
    }
}
