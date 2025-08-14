const { Telegraf } = require("telegraf");

const TOKEN = "8383527794:AAGCXP_ycXV5HhoxZLxIJe5zSAm5VIALktw";

const bot = new Telegraf(TOKEN);

bot.start((ctx) =>
  ctx.reply("Hi, I'm Currency Free Bot, please click on the button Open",)
);

bot.launch();
