const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'mc.example.com', // 🧠 ← Thay bằng IP hoặc tên server Minecraft bạn muốn treo
  port: 25565,             // Cổng (nếu không biết thì để 25565)
  username: 'AFK_Bot_123', // 🧠 ← Tên acc Minecraft (acc crack nếu server cho phép)
  version: false           // Tự động chọn phiên bản phù hợp
});

bot.on('spawn', () => {
  console.log('✅ Bot đã vào server và đang đứng yên!');
});
