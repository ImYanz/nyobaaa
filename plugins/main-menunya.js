let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0ca381849e95396ae0481.jpg'
let sewa = `
╔━━━『 *Main Menu* 』
┃ ⬡ .ai
┃ ⬡ .openai
┃ ⬡ .sewa
┃ ⬡ .simi
┃ ⬡ .bannedlist
┃ ⬡ .botstatus
┃ ⬡ .owner
┃ ⬡ .creator
┃ ⬡ .listgc
┃ ⬡ .ping
┃ ⬡ .report
┃ ⬡ .request
┃ ⬡ .rules
┃ ⬡ .runtime
┃ ⬡ .sewa
┃ ⬡ .sewa
┃ ⬡ .server
┃ ⬡ .totalfitur
┃ ⬡ .tqto
┃ ⬡ .user
┃ ⬡ .afk
┃ ⬡ .ceksn
┃ ⬡ .daftar
┃ ⬡ .register
┃ ⬡ .fakespam
┃ ⬡ .botstatus
┃ ⬡ .menfess
┃ ⬡ .menu
┃ ⬡ .menu2
┃ ⬡ .unregister
┃ ⬡ .profile
┃ ⬡ .store
╚━━━━━━━━━━━━✧
 _2023 © HenzzXD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['mainmenu']
handler.tags = ['main']
handler.command = /^(mainmenu)$/i

export default handler