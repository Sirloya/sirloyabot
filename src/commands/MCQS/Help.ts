import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'mcqs',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['h']
        })
    }

   run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
         M.reply('🌸_*Sir Loyanganba Irungbam BOT*_🌸 \n\n🌸Handcrafted by *Satyam Mayengbam* with Love🌸 \n\n🌸 *Textbook for Biology* 🌸: \n🌸Type the command below to get the file!🌸 \n🎀 *!bchp2*-Chapter 2: SEXUAL REPRODUCTION IN FLOWERING PLANTS🎀 \n🎀 *!bchp3*-Chapter 3: HUMAN REPRODUCTION🎀 \n🎀 *!bchp4*-Chapter 4: REPRODUCTIVE HEALTH🎀 \n🎀 *!bchp5*-Chapter 5: PRINCIPLES OF INHERITANCE AND VARIATION🎀 \n🎀 *!bchp6*-Chapter 6: MOLECULAR BASIS OF INHERITANCE🎀 \n🎀 *!bchp7*-Chapter 7: EVOLUTION 🎀\n🎀 *!bchp8*-Chapter 8: HUMAN HEALTH AND DISEASE🎀 \n🎀 *!bchp9*-Chapter 9: STRATEGIES FOR ENHANCEMENT IN FOOD PRODUCTION🎀 \n🎀 *!bchp10*-Chapter 10: MICROBES IN HUMAN WELFARE🎀 \n🎀 *!bchp11*-Chapter 11: BIOTECHNOLOGY : PRINCIPLES AND PROCESSES🎀 \n🎀 *!bchp12*-Chapter 12: BIOTECHNOLOGY AND ITS APPLICATIONS🎀 \n🎀 *!bchp13*-Chapter 13: ORGANISMS AND POPULATIONS🎀 \n🎀 *!bchp14*-Chapter 14: ECOSYSTEM🎀 \n🎀 *!bchp15*-Chapter 15: BIODIVERSITY AND CONSERVATION🎀 \n🎀 *!bchp16*-Chapter 16: ENVIRONMENTAL ISSUES🎀 \n🎀 *!bchp17*-Chapter 17: BREATHING AND EXCHANGE OF GASES🎀')
         M.reply('🌸 *Notes by Sir Loyanganba:* \n\n🎀 *!nchp2*-Chapter 2🎀 \n🎀 *!nchp3*-Chapter 3🎀')
         M.reply('🌸 *Reference Books for Biology Class12* 🌸 \n\n *!bref1*:Elemnpentary Bilogy Vol2 Trueman')

   }
 }
