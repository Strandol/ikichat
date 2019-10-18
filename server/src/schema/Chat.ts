import mongoose, { Schema } from 'mongoose'

const chatSchema = new Schema({
	title: String
})

const Chat = mongoose.model('Chat', chatSchema)

export default Chat
