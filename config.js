//Sc by Xyro base Clara MD
//Di Tulis Ulang VynaChan
//Buat lu semua yang jual sc ini gua ga bakal share lagi!

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285711324080', '美HenzzXD', true] //Ganti aja
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285711324080' //Ganti
global.packname = '© Sticker by'
global.author = 'AMURA-MD'
global.namebot = 'AMURA - MD'
global.wm = '© AMURA MD By HenzzXD'
global.stickpack = '© Sticker by'
global.stickauth = 'AMURA - MD'
// Link Sosmed
global.sig = 'https://instagram.com/henzz4368?igshid=MzNlNGNkZWQ4Mg=='
global.sgh = 'https://github.com/henzz4368'
global.sgc = 'https://chat.whatsapp.com/LgWi6muEW77JE05p0mmBWd'
// Donasi
global.psaweria = 'https://shoplinks.to/henzz-store'
global.ptrakterr = 'https://shoplinks.to/henzz-store'
global.povo = '0857-1132-4080'
// Info Wait
global.wait = '⏳ Proses...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'UnlimitedXyroineeKey'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "sdzxwuowyB",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})