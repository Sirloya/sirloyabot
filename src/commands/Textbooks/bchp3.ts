import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import { MessageType } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'bchp3',
            description: 'Dwnload chp3',
            aliases: ['chp3'],
            category: 'textbooks',
            usage: `${client.config.prefix}trigger [image | @mention]`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        M.reply('https://drive.google.com/file/d/1cg5xoTX-QnIm65c2Az2bFMwKa-wUbBnO/view?usp=sharing \n\n\n Fajana paro ! Kanna Hotnaro ! \n\n           *Sir Loya*')

    }
}
