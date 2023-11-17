async function reply(interaction, message) {
    if(!interaction) throw TypeError("you must input a valid interaction");
    if(!message) throw TypeError("you must input a valid message!");

    await interaction.reply(message);
}

module.exports = reply;