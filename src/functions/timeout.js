async function timeout(message, msgToDelete, time = 10000) {
    if(!message) throw new ReferenceError('slicy-discordbot => "message" is not defined')
    if(typeof time !== "number") throw new SyntaxError('slicy-discordbot => typeof "time" must be number')
    if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) return console.log(`error: Discord Client need "MANAGE_MESSAGES" to work properly.`)
    msgToDelete.react('🗑')
    const filter = (reaction, user) => {
        return reaction.emoji.name === '🗑' && user.id === message.author.id;
    };
    
    msgToDelete.awaitReactions(filter, { max: 1, time: time, errors: ['time'] })
        .then(collected => {
            msgToDelete.delete()
        })
        .catch(err => {
            msgToDelete.reactions.removeAll()
        });
}

module.exports = timeout;