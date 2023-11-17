#read me

how to use this package, exemple code :

in ur discord bot project u can add this package, it will help u response to a message.

in exemplepackage.js(an exemple file from ur discord bot project):
of course package should be installed in the project.

const { SlashCommandBuilder } = require('discord.js');
const reply = require("formationpackage");

module.exports = {
    data : new SlashCommandBuilder()
    .setName("replyPackage")
    .setDescription("testing package response"),
    async execute(interaction) {
        reply("test message", interaction);
    }
}