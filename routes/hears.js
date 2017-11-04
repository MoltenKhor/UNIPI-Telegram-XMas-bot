/**
 * Hears
 * =====================
 * If i write "hi" bot response "hello"
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @link:       http://telegraf.js.org/#/?id=hears
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
module.exports = function (bot, config, request) {
	bot.hears(/chi ci pensa/i, (ctx) => ctx.reply('Ci pensa Patryk!'));
	bot.hears(/chi lo fa/i, (ctx) => ctx.reply('Lo può fare Patryk!'));
	bot.hears(/chi lo può fare/i, (ctx) => ctx.reply('Lo può fare Patryk!'));
	bot.hears(/roku/i, (ctx) => ctx.reply('È una merda!'));
	bot.hears(/incidente/i, (ctx) => ctx.reply('Se vuoi ti do 20€'));
	bot.hears(/iphone x/i, (ctx) => ctx.reply('Oh Filippo ma l\'hai preso sto iphone?! Daje stì 1359euri! #NoPovery'));
	bot.hears(/da spostare una macchina/i, (ctx) => ctx.reply('Chiamate Petrucci!!!'));
	bot.hears(/angelica losi/i, (ctx) => ctx.reply('Ti amo!'));
	bot.hears(/postazioni/i, (ctx) => ctx.reply('Se è un progetto di merda sicuramente non in sede'));
	bot.hears(/mozzarelle/i, (ctx) => ctx.reply('Raga avete già ordinato le mozzarelle da Bruno?! Sbrigatevi entro le 13:00!!!'));
};
