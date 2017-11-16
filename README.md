# PTKDev Telegram Bot
[![License](https://img.shields.io/badge/license-GLPv3-brightgreen.svg)]()
[![powered by telegraf](https://img.shields.io/badge/powered%20by-telegraf-46aef7.svg)](https://github.com/telegraf/telegraf)
[![Version](https://img.shields.io/badge/version-v0.2%20BETA-lightgrey.svg)]()
[![Use on Telegram](https://img.shields.io/badge/try%20bot%20on-Telegram-blue.svg)](https://bot.ptkdev.io)
[![Slack Chat](https://img.shields.io/badge/chat%20on-Slack-orange.svg)](https://slack.ptkdev.io)
[![Paypale Donate](https://img.shields.io/badge/donate-PayPal-red.svg)](https://paypal.me/ptkdev)

[![https://bot.ptkdev.io](https://ptkdev.it/img/bot/ptkdev-telegram-bot.png)](https://bot.ptkdev.io)

## Setup
You need [Node.js](https://nodejs.org/) (> 8.1) to run this bot.

1. Create a bot via [@BotFather](https://t.me/BotFather) and grab a **token**. Plese do not create bot with name `@ptkdev_bot2` or similar. Use `@test1234` name for tests.
2. Clone this repository (unstable) or [download stable version](https://github.com/ptkdev/ptkdev-telegram-bot/releases).
3. Install dependencies via `npm install`.
4. Copy root file `config.js.tpl` to `config.js`, fill it properly.
5. Start the bot via `npm run start`.

## Commands
Command                 | Role       | Available at | Description
----------------------- | ---------- | ------------ | -----------------
`/tweet`                | _Everyone_ | _Everywhere_ | Send random tweet of @ptkdev twitter account
`/murales`              | _Everyone_ | _Everywhere_ | Send random murales of @ptkdev ig account
`/social`               | _Everyone_ | _Everywhere_ | Send list of my social
`/stickers`             | _Everyone_ | _Everywhere_ | Send one of stickers.ptkdev.it
`/email <text>`         | _Everyone_ | _In-Bot_     | Send email to info@ptkdev.it
`<text>`                | _Everyone_ | _Groups_     | Response at random word: roku, chi lo fa, etc...
`/help` \| `/start`     | _Everyone_ | _In-Bot_     | How to use the bot.

# License

GNU GENERAL PUBLIC LICENSE

Copyright (c) 2017 Patryk Rzucidło (PTKDev)
