const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "nuke",
    description: 'nukes a channel',
    cooldowns: 100,
    execute(message, args, client, Discord, ProfileData, user, userQuery, master){
        const link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bZSle1XmET-H9Raq7HZA-7L5JH-zQnEeJKsCam2rcsZmjrLcs2nyTDds1hVNMqS11ck&usqp=CAU"
        message.channel.clone().then(channel => channel.send(link + ' ☢️ Channel nuked ☢️'));
        message.channel.delete();
    }
}