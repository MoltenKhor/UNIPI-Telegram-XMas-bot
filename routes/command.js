/**
 * Commands
 * =====================
 * Write / and see commands of bot
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @link:       https://github.com/telegraf/telegraf
 * @changelog:  0.1 initial release
 *
 */
module.exports = function(bot, config, request) {
    /**
     * Command: tweet
     * =====================
     * Send random tweet from api.ptkdev.io/v1/tweet.json
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     * @todo:       - Add errors manager
     *
     */
    function tweet(ctx) {
        request('http://api.ptkdev.io/v1/tweets.json', function(error, response, json) {
            if (error)
                return error;
            obj = JSON.parse(json);
            tweet = obj.tweets[Math.floor(Math.random() * obj.tweets.length)];
            ctx.reply(tweet);
        });
    }
    bot.command('tweet', tweet);

    /**
     * Command: murales
     * =====================
     * Send random murales from api.ptkdev.io/v1/murales.json
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     * @todo:       - Add errors manager
     *
     */
    function murales(ctx) {
        request('http://api.ptkdev.io/v1/murales.json', function(error, response, json) {
            if (error)
                return error;

            obj = JSON.parse(json);
            murales_url = obj.murales[Math.floor(Math.random() * obj.murales.length)];
            ctx.reply(murales_url);
        });
    }
    bot.command('murales', murales);

    /**
     * Command: insulta
     * =====================
     * Send random insult to my friends
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     * @todo:       - Add /insulta [@name]
     * 				- Add /insulta [random]
     *
     */
    function insulta(ctx) {
        var insulta = [
            "@fgaudo sei un coglione...",
            "@Fearuin sei una merda."
        ];
        ctx.reply(insulta[Math.floor(Math.random() * insulta.length)]);
    }
    bot.command('insulta', insulta);

    /**
     * Command: email
     * =====================
     * Send random insult to my friends. Example: /email hi patryk
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     * @todo:       Implement this command, at moment not work. Use smtp from config.js
     *
     */
    function email(ctx) {
        ctx.reply("Email inviata");
    }
    bot.command('email', email);

    /**
     * Command: social
     * =====================
     * Send list of my social network
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    function social(ctx) {
        ctx.reply("Facebook: https://fb.me/ptkdev\nTwitter: https://twitter.com/ptkdev\nInstagram: https://instagram.com/ptkdev");
    }
    bot.command('social', social);

    /**
     * Command: help
     * =====================
     * Send list of bot commands
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    function help(ctx) {
        ctx.reply("/tweet - invia un tweet casuale di @ptkdev\n/murales - invia un murales fotografato da @ptkdev\n/social - lista dei social dove trovare @ptkdev\n/email - scrive un messaggio a info@ptkdev.it\n/help - lista comandi e suggerimenti\n\nParole chiave a cui risponde: roku, chi ci pensa, postazioni e altre ancora che devi scoprire :)");
    }
    bot.command('help', help);
};