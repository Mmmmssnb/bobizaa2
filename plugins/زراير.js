let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '╭────────────────────
│🦹 هاي يا , ${conn.getName(m.sender)}!
:› PẻⱢấy GaMẻ ~🧛
*೫ༀༀༀༀༀༀ𝑴𝑨𝑳𝑰𝑲ༀༀༀༀༀༀༀお*
│🧛 مالك بيحبك  ✔️ البوت أون لاين الآن 
يمكنك إستخدامه عبر كتابة menu.
*೫ༀༀༀༀༀༀ𝑴𝑨𝑳𝑰𝑲ༀༀༀༀༀༀༀお*
 ده رقمي الاساسي بس طاير 🧛💜
 https://wa.me/+201030825867
*೫ༀༀༀༀༀༀ𝑴𝑨𝑳𝑰𝑲ༀༀༀༀༀༀༀお*
  ده الروم بتاعي 🧛💜
 https://chat.whatsapp.com/CUyxsz7kb7nCJLIocNoGeC 🧛💜
 *೫ༀༀༀༀༀༀ𝑴𝑨𝑳𝑰𝑲ༀༀༀༀༀༀༀお*
 › FẻNŚsh GaMẻ ~🧛
╰────────────────────'
            },
            body: {
              text: '😎 افتح القائمة بواسطة الزر\n🧛 𝑴𝑨𝑳𝑰𝑲🍷🇰🇼 \n https://wa.me/+201030825867 '
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس هنا صديقي 🧛',
                    sections: [
                      {
                        title: 'قوائم البوت',
                        highlight_label: 'اختار',
                        rows: [
                          {
                            header: 'فوتوشوب',
                            title: '.الفوتوشوب',
                            description: '',
                            id: '.الفوتوشوب'
                          },
                          {
                            header: 'قسم الاستيكرات',
                            title: '.استيكرات',
                            description: '',
                            id: '.استيكرات'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['مميزات']
handler.tags = ['main']
handler.command = ['مميزات']

export default handler
