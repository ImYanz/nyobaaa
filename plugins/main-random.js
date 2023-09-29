let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0ca381849e95396ae0481.jpg'
let sewa = `
╔━━━『 *Random Menu* 』
┃ ⬡ .nekopoi
┃ ⬡ .asupan
┃ ⬡ .blackpink
┃ ⬡ .bocil
┃ ⬡ .bts
┃ ⬡ .china
┃ ⬡ .cosplay
┃ ⬡ .geayubi
┃ ⬡ .gensin
┃ ⬡ .hentai
┃ ⬡ .indonesia
┃ ⬡ .japan
┃ ⬡ .korea
┃ ⬡ .malaysia
┃ ⬡ .thailand
┃ ⬡ .vietnam
╚━━━━━━━━━━━━✧
 _2023 © HenzzXD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['random']
handler.tags = ['main']
handler.command = /^(random)$/i

export default handler