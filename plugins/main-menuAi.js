let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0ca381849e95396ae0481.jpg
let sewa = `
╔━━━『 *AI Menu* 』
┃ ⬡ .beauty
┃ ⬡ .tocartoon
┃ ⬡ .dalle
┃ ⬡ .gpt
┃ ⬡ .hairstyle
┃ ⬡ .openai
┃ ⬡ .ocr
┃ ⬡ .pixardif
┃ ⬡ .remini
┃ ⬡ .color
┃ ⬡ .hdr
┃ ⬡ .toanime
┃ ⬡ .txt2img
┃ ⬡ .blur
╚━━━━━━━━━━━━✧
 _2023 © HenzzXD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['aimenu']
handler.tags = ['main']
handler.command = /^(aimenu)$/i

export default handler