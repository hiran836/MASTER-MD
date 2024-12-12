const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "💨",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '𝗣𝗶𝗻𝗴𝗶𝗻𝗴...💨' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*✮⃝𝚳𝚫𝐒𝚻𝚵𝚪-𝐒𝚸𝚵𝚵𝐃📍: ${ping}𝚳𝐒*` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴜsʜ ᴍᴀsᴛᴇʀ