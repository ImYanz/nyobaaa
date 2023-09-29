let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f9651215f27097e2f6e90.jpg'
let sewa = `👋🏻𝐇𝐚𝐥𝐨 𝐊𝐚𝐤 𝐍𝐚𝐦𝐚𝐤𝐮 𝐀𝐝𝐚𝐥𝐚𝐡 𝐀𝐌𝐔𝐑𝐀 - 𝐌𝐃, 𝐀𝐤𝐮 𝐚𝐝𝐚𝐥𝐚𝐡 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐲𝐚𝐧𝐠 𝐝𝐢 𝐏𝐫𝐨𝐠𝐫𝐚𝐦 𝐦𝐞𝐧𝐠𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐍𝐨𝐝𝐞𝐉𝐬 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐬𝐢𝐬𝐭𝐞𝐧 𝐕𝐢𝐫𝐭𝐮𝐚𝐥 𝐀𝐮𝐭𝐨-𝐑𝐞𝐩𝐥𝐲 𝐝𝐢 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩.\n\n┏━───═[ *MENU AWAL* ]\n┃ *言 allmenu*\n┃ *言 mainmenu*\n┃ *言 aimenu*\n┃ *言 groupmenu*\n┃ *言 gamemenu*\n┃ *言 rpgmenu*\n┃ *言 stikermenu*\n┃ *言 makermenu*\n┃ *言 animanga*\n┃ *言 nsfwmenu*\n┃ *言 internet*\n┃ *言 downloadmenu*\n┃ *言 toolsmenu*\n┃ *言 islamic*\n┃ *言 quotesmenu*\n┃ *言 random*\n┃ *言 ownermenu*\n┗━━━━━━━━━═┅═━━━━━━━━\n\n_2023 © HenzzXD_
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['menu2']
handler.tags = ['main']
handler.command = /^(menu|help|bot|hai)$/i

export default handler
