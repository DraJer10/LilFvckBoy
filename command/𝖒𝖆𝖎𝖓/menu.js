require('../../settings')
const { getBuffer, muptime, jsonformat } = require('../../lib/Function')
const os = require('os')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

module.exports = {
  name: "menu", 
  cmd: ['menu'],
  category: 'main',
  start: async (mom, m, { commands, args, prefix, text, toUpper }) => {
    const { pushName, sender } = m
    
    let teks = `👤 𝖀𝖘𝖊𝖗 : @${m.sender.split('@')[0]} 👋\n🤖 𝕭𝖔𝖙 : ${global.botName}\n🏢 𝕾𝖊𝖗𝖛𝖊𝖗 : ${os.hostname}\n🖥️ 𝕻𝖑𝖆𝖙𝖋𝖔𝖗𝖒 : ${os.platform}\n⏰ 𝖀𝖕𝖙𝖎𝖒𝖊 : ${muptime(process.uptime())}\n${readmore}\n`
    
    for (let type of commands.type) {
      teks += `*${toUpper(type)} 𝖒𝖊𝖓𝖚 🎈*\n`
      teks += `${commands.list[type].filter(v => v.type !== "hide").map((cmd) => `• ${prefix + cmd.name}`).join("\n")}\n`
      teks += `\n`
    }
    
    let but = [{buttonId: `.sc`, buttonText: {displayText: 'Script 📚'}, type: 1}, {buttonId: `.owner`, buttonText: {displayText: 'Owner 👤'}, type: 1},]
    mom.sendMessage(m.from, { image: await getBuffer(global.thumb), caption: teks, footer: global.footer, buttons: but, mentions: [m.sender]}, { quoted: m })
  }
}

async function mentions(teks, mems = [], id) {
  if (id == null || id == undefined || id == false) {
  let res = mom.sendMessage(from, { text: teks, mentions: mems })
  return res
  } else {
  let res = mom.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
  return res
  }
  }