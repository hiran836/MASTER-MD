const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👑",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `╭───────────────◎◎▷
👋𝐇𝐄𝐋𝐋𝐎 ...........................👑

> ᗯᗴᒪᑕOᗰ TO ᗰᗩᔕTEᖇ ᗰᗪ ᗰᑌᒪTIᗪᗴᐯIᑕᗴ ᗯᕼᗩTՏᗩᑭᑭ ᗷOT☢︎︎

☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎☺︎︎☻︎
𝗟𝗢𝗢𝗞𝗜𝗡𝗚 𝗡𝗢𝗪 ☟︎︎︎☟︎︎︎☟︎︎︎☟︎︎︎

> ᗰᗩSTEᖇ 𝕄𝔻 𝔹𝕆𝕋 𝕆𝕎𝔼ℕ𝔼ℝ 𝔸𝔹𝕆𝕌𝕋»

> ➪𝐌𝐘 𝐑𝐄𝐀𝐋 𝐍𝐀𝐌𝐄☞︎︎︎𝚪𝐔𝐒𝚮 𝚳𝚫𝐒𝚻𝚵𝚪

> ➪𝐈'𝐌 𝐅𝐑𝐎𝐌☞︎︎︎ 𝚳𝚮 𝚴𝚫𝐆𝚸𝐔𝚪

> ➪𝐌𝐘 𝐀𝐆𝐄☞︎︎︎ ♕︎20 TO 25.♕︎


> 𝗠𝗬 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗡𝗨𝗠𝗕𝗘𝗥☟︎︎︎☟︎︎︎☟︎︎︎☟︎︎︎

 *https://wa.me//+917020728211?text=__𝑯𝑬𝒀★𝚪𝐔𝐒𝚮-𝚳𝚫𝐒𝚻𝚵𝚪_☯️_𝗪𝗛𝗔𝗧'𝗦_𝗨𝗣_𝗕𝗥𝗢🥰_🙏🏻*_

> 𝐨𝐰𝐧𝐞𝐫 : 𝚪𝐔𝐒𝚮 𝚳𝚫𝐒𝚻𝚵𝚪☯️
╰───────────────◎◎▷
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀsᴛᴇʀ ᴍᴅ👑
`
await conn.sendMessage(from,{image:{url: `https://cdn.ironman.my.id/i/5b21iy.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
