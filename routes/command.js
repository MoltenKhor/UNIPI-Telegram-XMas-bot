/**
 * Commands
 * =====================
 * Write / and see commands of bot
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 *
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @link:       http://telegraf.js.org/#/?id=command
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */

 //insert above some key words that triggers the funny answer fro Gauss
var impossibilita = ["18", "30", "lode", "fisica", "analisi", "laurearmi", "laurea", "esame", "esami", "appello", "appelli", "sessione", "cfu", "dottorato"];

module.exports = function(bot, config, request) {


    /**
     * Command: email
     * =====================
     *
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.2
     * @changelog:  0.1 initial release
     *              0.2 work email
     * @todo:       Implement this command, at moment not work. Use smtp from config.js
     *
     */
    function lettera(ctx) {
        const nodemailer = require('nodemailer');
        let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        let email_array = [];
        let email_from = 'babbo.unipi@gmail.com';  //this is an inizialized email so that the use won't need to use his personal information to send messages
        let email_text = ctx.update.message.text;
        email_text = email_text.replace("/email ", "");
        if (typeof email_text === "undefined" || email_text.trim() == "") {
            ctx.reply("Inserisci un testo valido, esempio:\n/email text text text text text");
        } else {
            let smtp_config = {
                host: config.smtp_server,
                port: config.smtp_port,
                secure: config.smtp_ttls,
                auth: {
                    user: config.smtp_user,
                    pass: config.smtp_pass
                }
            };
            let transporter = nodemailer.createTransport(smtp_config);

            var mail_options = {
                from: email_from,
                to: config.smtp_user,
                subject: 'BOT: Email from ' + email_from,
                text: email_text
            };

            transporter.sendMail(mail_options, function(error, info) {
                if (error) {
                    ctx.reply("Errore... " + error);
                    ctx.reply("Riprova usando il formato:\n/email text text text text text");
                } else {
                  if(impossibilita.some(el => email_text.includes(el))){

                    var rand = Math.floor(Math.random()*5);
                    var random_answer = "";
                    switch(rand){
                      case 0: random_answer = "No senti eh... porto regali, mica faccio miracoli!"; break;
                      case 1: random_answer = "Eeh ora chiedi troppo..."; break;
                      case 2: random_answer = "Non credo di essere la persona giusta a cui chiederlo..."; break;
                      case 4: random_answer = "Si certo... aspetta che prendo la bacchetta magica..."; break;
                      default: random_answer = "Cavolo vedo che non scherzi con le richieste!";
                    }
                    ctx.reply(random_answer + "Dai, non fare quella faccia... Sto mandandi i miei elfi a cercare una soluzione :)")
                  }
                  else ctx.reply("Lettera imbucata! I miei elfi sono già a lavoro per te.");
                }
            });
        }
    }
    bot.command('lettera', lettera);

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
        ctx.reply("Facebook Sinistr Per...: https://www.facebook.com/sinistraper\nFacebook Ingegneria in Movimento: https://www.facebook.com/IngegneriaInMovimentoSinistraPer\nSito Web: http://www.sinistraper.org");
    }
    bot.command('social', social);

    /**
     * Command: info
     * =====================
     * Send information about the game and rules
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    function info(ctx) {
        ctx.reply("Questo bot è stato creato dalla rappresentanza studentesca \"Ingegneria in Movimento\". Ha lo copo di raccogliere pareri e idee o problematiche riscontrate in università, ma anche diffondere pensieri o racconti tra noi studenti. \nLe lettere sono in forma anonima e nessuna delle vostre informazioni personali saranno pubblicate, i vostri dati sono al sicuro!\nGiocate in modo corretto, moderate i termini... ma soprattutto buon divertimento!");
        ctx.reply("usa il comando /social per consultare i nostri social network.");
    }
    bot.command('info', info);

    function support(ctx){
      ctx.reply("Hai riscontrato bug, difetti, incorrettezze o semplicemente vuoi dirmi la tua? contattami via mail all\'indirizzo marco.pontone@gmail.com\nCore credits: @ptkdev");
    }
    bot.command('support', support);

    /**
     * Command: start
     * =====================
     * Send "Ciao!" and help message
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    function start(ctx) {
        ctx.reply('Benvenuto nel Bot di Santa Gauss!\nQuest\'anno affdati a me per ricevere una gioia, inviami una lettera di natale con il comando /lettera e accanto il messaggio e farò il possibile per realizzare il tuo desiderio.\nAule sistemate, nuovi spazi per studiare o qualsiasi cosa tu voglia nell\'Università di Pisa. Raccontaci la tua?\n\nLe lettere più carine e divertenti verranno pubblicate e appese su un albero di natale in Università!');
        help(ctx);
    }
    bot.command('start', start);

    function help(ctx){
      ctx.reply("/lettera messaggio - Per inviarmi una Letterina;\n/social - Per consultare i social di rappresentanza;\n/info - Per consultare il regolamento del gioco;\n/suppoert - Se vuoi contattare lo sviluppatore;")
    }
    bot.command("help", help);
};
