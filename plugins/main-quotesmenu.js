let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0ca381849e95396ae0481.jpg'
let sewa = `
╔━━━『 *Quotes Menu* 』
┃ ⬡ .bacot
┃ ⬡ .bucin
┃ ⬡ .dare
┃ ⬡ .galau
┃ ⬡ .gombal
┃ ⬡ .hacker
┃ ⬡ .q-islam
┃ ⬡ .quotes
┃ ⬡ .katabijak
┃ ⬡ .motivasi
┃ ⬡ .pantun
┃ ⬡ .senja
┃ ⬡ .truth
┃ ⬡ .videoquotes
┃ ⬡ .videogalau
╚━━━━━━━━━━━━✧
 _2023 © HenzzXD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['quotesmenu']
handler.tags = ['main']
handler.command = /^(quotesmenu)$/i

export default handler