let handler = async (m, { conn }) => {
let sewa = `
*❏––––––『 𝐒𝐂𝐑𝐈𝐏𝐓 𝐁𝐎𝐓 』––––––❏*

Mau Scriptnya? 
Pm owner ku kak wa.me/6285711324080

note: script ini gratis jadi jangan di jual belikan
kalo ada yang menjual nya harap hubungi saya
wa.me/6285711324080

Jangan lupa sv no owner ya kak
Jangan spam owner kak

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sc|script)$/i

export default handler