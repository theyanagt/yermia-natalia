let handler = async (m, {
	command,
	usedPrefix,
	DevMode,
	args
}) => {
	let type = (args[0] || '').toLowerCase()
    let msk = (args[0] || '').toLowerCase()
    let user = global.db.data.users[m.sender]
    let author = global.author
let cok = `
â§ ayambakar ð
ãNeed 2 ayam ð & 1 Coal ð³ï¸
â§ ayamgoreng ð
ãNeed 2 ayam ð & 1 Coal ð³ï¸
â§ oporayam ð
ãNeed 2 ayam ð & 1 Coal ð³ï¸
â§ steak ð¥©
ãNeed 2 sapi ð® & 1 Coal ð³ï¸
â§ rendang ð¥
ãNeed 2 sapi ð® & 1 Coal ð³ï¸
â§ gulaiayam ð²
ãNeed 2 ayam ð & 1 Coal ð³ï¸
â§ babipanggang ð¥ 
ãNeed 2 babi ð & 1 Coal ð³ï¸
â§ ikan bakar ð
ãNeed 2 ikan ð & 1 Coal ð³ï¸
â§ lele bakar ð
ãNeed 2 lele ð & 1 Coal ð³ï¸
â§ nila bakar ð
ãNeed 2 nila ð & 1 Coal ð³ï¸
â§ bawal bakar ð
ãNeed 2 bawal ð & 1 Coal ð³ï¸
â§ udang bakar ð¦
ãNeed 2 udang ð¦ & 1 Coal ð³ï¸
â§ paus bakar ð³
ãNeed 2 paus ð³ & 1 Coal ð³ï¸
â§ kepiting bakar ð¦
ãNeed 2 kepiting ð¦ & 1 Coal ð³ï¸
`

try {
       if (/masak|cook/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(5, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'ayambakar':
            if (user.ayam < count * 2 || user.coal < 1 * count) {
                           user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.ayambakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} ayam bakarð`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ayam bakar\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
				  case 'gulaiayam':
            if (user.ayam < count * 2 || user.coal < 1 * count) {
                            user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.gulai += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Gulai Ayamð`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak gulai ayam\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                  case 'rendang':
            if (user.sapi < count * 2 || user.coal < 1 * count) {
                            user.sapi >= count * 1
                            user.sapi -= count * 2
                            user.coal -= count * 1
                            user.rendang += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Rendang ð`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak dimasak rendang\nAnda butuh 2 sapi dan 1 coal untuk memasak`, m)
					break
                   case 'ayamgoreng':
            if (user.ayam < count * 2 || user.coal < 1 * count) {
                           user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.ayamgoreng += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } ayam gorengð`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ayam goreng\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                        case 'oporayam':
            if (user.lele < count * 2 || user.coal < 1 * count) {
                          user.lele >= count * 1
                            user.lele -= count * 2
                            user.coal -= count * 1
                            user.oporayam += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } opor ayam`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak opor ayam\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                        case 'steak':
            if (user.sapi < count * 2 || user.coal < 1 * count) {
                            user.sapi >= count * 1
                            user.sapi -= count * 2
                            user.coal -= count * 1
                            user.steak += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Steak`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak steak\nAnda butuh 2 sapi dan 1 coal untuk memasak`, m)
				break
             case 'babipanggang':
            if (user.babi < count * 2 || user.coal < 1 * count) {
                            user.babi >= count * 1
                            user.babi -= count * 2
                            user.coal -= count * 1
                            user.babipanggang += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } babi panggang`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak babi panggang\nAnda butuh 2 babi dan 1 coal untuk memasak`, m)
				break
				case 'ikanbakar':
            if (user.ikan < count * 2 || user.coal < 1 * count) {
                           user.ikan >= count * 1
                            user.ikan -= count * 2
                            user.coal -= count * 1
                            user.ikanbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} ikan bakarð`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ikan bakar\nAnda butuh 2 ikan dan 1 coal untuk memasak`, m)
					break
					case 'lelebakar':
            if (user.lele < count * 2 || user.coal < 1 * count) {
                           user.lele >= count * 1
                            user.lele -= count * 2
                            user.coal -= count * 1
                            user.lelebakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} lele bakarð`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak lele bakar\nAnda butuh 2 lele dan 1 coal untuk memasak`, m)
					break
					case 'nilabakar':
            if (user.nila < count * 2 || user.coal < 1 * count) {
                           user.nila >= count * 1
                            user.nila -= count * 2
                            user.coal -= count * 1
                            user.nilabakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} nila bakarð`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak nila bakar\nAnda butuh 2 nila dan 1 coal untuk memasak`, m)
					break
					case 'bawalbakar':
            if (user.bawal < count * 2 || user.coal < 1 * count) {
                           user.bawal >= count * 1
                            user.bawal -= count * 2
                            user.coal -= count * 1
                            user.bawalbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} bawal bakarð`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak bawal bakar\nAnda butuh 2 bawal dan 1 coal untuk memasak`, m)
					break
					case 'udangbakar':
            if (user.udang < count * 2 || user.coal < 1 * count) {
                           user.udang >= count * 1
                            user.udang -= count * 2
                            user.coal -= count * 1
                            user.udangbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} udang bakarð`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak udang bakar\nAnda butuh 2 udang dan 1 coal untuk memasak`, m)
					break
					case 'pausbakar':
            if (user.paus < count * 2 || user.coal < 1 * count) {
                           user.paus >= count * 1
                            user.paus -= count * 2
                            user.coal -= count * 1
                            user.pausbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} paus bakarð`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak paus bakar\nAnda butuh 2 paus dan 1 coal untuk memasak`, m)
					break
					case 'kepitingbakar':
            if (user.kepiting < count * 2 || user.coal < 1 * count) {
                           user.kepiting >= count * 1
                            user.kepiting -= count * 2
                            user.coal -= count * 1
                            user.kepitingbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} kepiting bakarð`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak kepiting bakar\nAnda butuh 2 kepiting dan 1 coal untuk memasak`, m)
					break
                default:
                await conn.sendMessage(m.chat, {
				text: cok,
				footer: author,
				title: 'ã *C O O K I N G* ã',
				buttonText: "C O O K I N G",
				sections: [{
					title: "List Featured",
					rows: [{
				title: "Ayam Bakar ð",
				rowId: ".cook ayambakar",
				description: "Cooking Ayam Bakar"
			},{
				title: "Ayam Goreng ð",
				rowId: ".cook ayambakar",
				description: "Cooking Ayam Goreng"
			},{
				title: "Opor Ayam ð",
				rowId: ".cook oporayam",
				description: "Cooking Opor Ayam"
			},{
				title: "Steak ð¥©",
				rowId: ".cook steak",
				description: "Cooking Steak"
			},{
				title: "Rendang ð¥",
				rowId: ".cook rendang",
				description: "Cooking Rendang"
			},{
				title: "Gulai Ayam ð²",
				rowId: ".cook gulaiayam",
				description: "Cooking Gulai Ayam"
			},{
				title: "Babi Panggang ð¥ ",
				rowId: ".cook babipanggang",
				description: "Cooking Babi Panggang"
			},{
				title: "ikan bakar ð",
				rowId: ".cook ikanbakar",
				description: "Cooking ikan bakar"
			},{
				title: "lele bakar ð",
				rowId: ".cook lelebakar",
				description: "Cooking lele bakar"
			},{
				title: "nila bakar ð",
				rowId: ".cook nilabakar",
				description: "Cooking nila bakar"
			},{
				title: "bawal bakar ð",
				rowId: ".cook bawalbakar",
				description: "Cooking bawal bakar"
			},{
				title: "udang bakar ð¦",
				rowId: ".cook udangbakar",
				description: "Cooking udang bakar"
			},{
				title: "paus bakar ð³",
				rowId: ".cook pausbakar",
				description: "Cooking paus bakar"
			},{
				title: "kepiting bakar ð¦",
				rowId: ".cook kepitingbakar",
				description: "Cooking kepiting bakar"
			}
					]
				}]
			})
            }
        }
    } catch (e) {
        conn.reply(m.chat, `Sepertinya ada yg eror,coba laporin ke owner deh`, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['masak <masakan> <args>']
handler.tags = ['rpg']
handler.command = /^(masak|cook)$/i

export default handler