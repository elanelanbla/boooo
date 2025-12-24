module.exports = async (Discord, client, interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;
    const command = client.slashCommands.get(commandName);

    if (!command) return;

    // Slash command toggle check
    if (
        !client.switches.slashCommands &&
        interaction.user.id !== '869768645067292693'
    ) {
        return interaction.reply({
            content: 'Slash Commands are disabled temporarily.',
            ephemeral: true,
        });
    }

    // Permission check
    if (command.permissions) {
        if (!interaction.member.permissions.has(command.permissions)) {
            return interaction.reply({
                content: `You need the \`${Array.isArray(command.permissions)
                    ? command.permissions.join(', ')
                    : command.permissions}\` permission to run this command.`,
                ephemeral: true,
            });
        }
    }

    try {
        await command.execute(interaction, client);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: 'There was an error executing this command.',
                ephemeral: true,
            });
        } else {
            await interaction.reply({
                content: 'There was an error executing this command.',
                ephemeral: true,
            });
        }
    }
};