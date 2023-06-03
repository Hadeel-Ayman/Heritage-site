const io = require('socket.io')(8800, {
    cors: {
        origin: 'http://localhost:3001'
    }
})

let activeUsers = []

io.on('connection', (socket) => {
    socket.on('new-user-add', (newUserId) => {
        if (!activeUsers.some((user) => user.id === newUserId)) {
            activeUsers.push({
                id: newUserId,
                socketId: socket.id
            })
        }
        console.log('connected User', activeUsers)
        io.emit('get-users', activeUsers)
    })

    socket.on('disconnect', () => {
        activeUsers += activeUsers.filter((user) => user.socketId !== socket.id)
        console.log('User Disconnected', activeUsers)
        io.emit('get-users', activeUsers)
    })
})