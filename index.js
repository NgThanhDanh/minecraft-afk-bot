const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'NTDSMP1165.aternos.me', // 🧠 ← Thay bằng IP hoặc tên server Minecraft bạn muốn treo
  port: 51261,             // Cổng (nếu không biết thì để 25565)
  username: 'BoMayCanTat', // 🧠 ← Tên acc Minecraft (acc crack nếu server cho phép)
  version: false           // Tự động chọn phiên bản phù hợp
});

bot.on('spawn', () => {
  console.log('✅ Bot đã vào server và đang đứng yên!');
});
