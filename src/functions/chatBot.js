async function chatBot(message, input, uuid) {
    if (!message)
        throw new ReferenceError('slicy-discordbot => "message" is not defined');
    if (!input) throw new ReferenceError('slicy-discordbot => "input" is not defined');
    const fetch = require("node-fetch");
    fetch(
        `https://api.monkedev.com/fun/chat?msg=${encodeURIComponent(
            input
        )}&uid=${uuid || message.author.id}`
    )
        .then((res) => res.json())
        .then(async (json) => {
            return message.reply(json.response);
        });
}
module.exports = chatBot;
