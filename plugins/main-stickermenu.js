let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0ca381849e95396ae0481.jpg'
let sewa = `
╔━━━『 *Sticker Menu* 』
┃ ⬡ .attp <teks>
┃ ⬡ .bonk
┃ ⬡ .getexif
┃ ⬡ .qc
┃ ⬡ .sticker
┃ ⬡ .s
┃ ⬡ .toimg
┃ ⬡ .tovideo
┃ ⬡ .ttp2
┃ ⬡ .ttp
┃ ⬡ .wm
╚━━━━━━━━━━━━✧
 _2023 © HenzzXD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['stikermenu']
handler.tags = ['main']
handler.command = /^(stikermenu)$/i

export default handler