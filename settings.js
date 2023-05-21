/**
   * Made By Code Crew Team 🕴️
   * Subscribe NZRLAFNDI
   * Follow https://github.com/NzrlAfndi
*/

const fs = require('fs')
const chalk = require('chalk')

global.ownerNumber = ['50664570362']
global.ownerName = '𝕲𝖆𝖟𝖆 𝕭𝖔𝖙'

global.botName = '𝕲𝖆𝖟𝖆 𝕭𝖔𝖙'
global.footer = '𝕲𝖆𝖟𝖆 𝕭𝖔𝖙'
global.thumb = 'https://telegra.ph/file/1464e9e92026f9151ff96.jpg'
global.payment = 'https://telegra.ph/file/1464e9e92026f9151ff96.jpg'

global.packname = '𝕾𝖙𝖎𝖈𝖐𝖊𝖗❜𝖘'
global.author = '𝕯𝖊𝕾𝖙𝖊𝖛𝖊'

global.prefa = ['?']

global.quotes = {
  welcome: 'Espero que te sientas como en casa aquí y no olvides seguir siempre las reglas existentes.',
  leave: 'Que sus obras de adoración sean aceptadas por Él.'
}

global.mess = (type, m) => {
  let msg = {
    done: 'Done',
    wait: 'Wait, in progress',
    owner: 'Perintah ini hanya dapat digunakan oleh Owner!',
    premium: 'Perintah ini hanya dapat digunakan oleh Premium!',
    group: 'Perintah ini hanya dapat digunakan di group!',
    private: 'Perintah ini hanya dapat digunakan di private chat!',
    admin: 'Perintah ini hanya dapat digunakan oleh admin group!',
    botAdmin: 'Bot bukan admin, tidak dapat mengakses fitur tersebut',
    bot: 'Fitur ini hanya dapat diakses oleh Bot',
    dead: 'Fitur ini sedang dimatikan!',
    media: 'Reply media',
    error: "No Results Found"
  } [type]
  if (msg) return m.reply(msg, m.from, { quoted: m })
}

//===> JANGAN DI HAPUS
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
