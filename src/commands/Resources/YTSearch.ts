import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import yts from 'yt-search'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'yts',
            description: 'Searches YT',
            category: 'resources',
            aliases: ['ytsearch'],
            usage: `${client.config.prefix}yts [term]`,
            dm: true,
            baseXp: 20
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('Please provide a search term')
        const term = joined.trim()
        const { videos } = await yts(term)
        if (!videos || videos.length <= 0) return void M.reply(`No Matching videos found for the term *${term}*`)
        const length = videos.length < 10 ? videos.length : 10
        let text = `š *Results*\n\n`
        for (let i = 0; i < length; i++) {
            text += `*#${i + 1}*\nš *Title:* ${videos[i].title}\nš *Channel:* ${
                videos[i].author.name
            }\n š *Duration:* ${videos[i].duration}\nš *URL:* ${videos[i].url}\n\n`
        }
        this.client.sendMessage(M.from, text, MessageType.extendedText, {
            quoted: M.WAMessage,
            contextInfo: {
                externalAdReply: {
                    title: `Search Term: ${term}`,
                    body: `š° ${this.client.config.name} š°`,
                    mediaType: 2,
                    thumbnailUrl: videos[0].thumbnail,
                    mediaUrl: videos[0].url
                }
            }
        })
    }
}
