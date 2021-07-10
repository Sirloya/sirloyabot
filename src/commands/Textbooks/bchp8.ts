import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import { MessageType } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'bchp8',
            description: 'Dwnload chp8',
            aliases: ['chp8'],
            category: 'textbooks',
            usage: `${client.config.prefix}trigger [image | @mention]`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        M.reply('https://drive.google.com/file/d/1tDsgXgtTzWuq1xa9PA4ZB8mWO1jqji2e/view?usp=sharing \n\n\n Fajana paro ! Kanna Hotnaro ! \n\n           *Sir Loya*')

    }
}
