module.exports =async(client) => {

    client.user.setPresence({
        game: {
            name: "Notif One Piece"
        }
    })
}