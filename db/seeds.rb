# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Server.delete_all
Channel.delete_all
ChannelMembership.delete_all
ServerMembership.delete_all
Message.delete_all

user1 = User.create({username: "demo_user", password: "123456"})
user2 = User.create({username: "Cha0s The0ry", password: "123456"})
user3 = User.create({username: "Nite", password: "123456"})
user4 = User.create({username: "LionHeart829", password: "123456"})
user5 = User.create({username: "CrazyG3rbil", password: "123456"})
user6 = User.create({username: "Exovius", password: "123456"})
# user6 = User.create({username: "natthebat", password: "123456"})
user7 = User.create({username: "Aaron", password: "123456"})
user8 = User.create({username: "RichieTheRich", password: "123456"})

server1 = Server.create({server_name: "VIP Lounge", creator_id: user7.id})
server2 = Server.create({server_name: "ProgrammerPlace", creator_id: user8.id})
server3 = Server.create({server_name: "The Chat Room", creator_id: user2.id})
server4 = Server.create({server_name: "HelpRoom", creator_id: user2.id})
server5 = Server.create({server_name: "Random Stuff", creator_id: user5.id})

channel1 = Channel.create({channel_name: "VIP Chat", server_id: server1.id})
channel2 = Channel.create({channel_name: "VIP Questions", server_id: server1.id})
channel3 = Channel.create({channel_name: "VIP Random", server_id: server1.id})

channel4 = Channel.create({channel_name: "Lets Talk Code", server_id: server2.id})
channel5 = Channel.create({channel_name: "Bugs4Dayz", server_id: server2.id})
channel6 = Channel.create({channel_name: "Language Debates", server_id: server2.id})
channel7 = Channel.create({channel_name: "Stack Debates", server_id: server2.id})

channel8 = Channel.create({channel_name: "Main Chat Room", server_id: server3.id})
channel9 = Channel.create({channel_name: "Secondary Chat Room", server_id: server3.id})

channel10 = Channel.create({channel_name: "RandomChannel", server_id: server4.id})

channel11 = Channel.create({channel_name: "Chat Room", server_id: server5.id})
channel12 = Channel.create({channel_name: "Conversational Community", server_id: server5.id})
channel13 = Channel.create({channel_name: "Spam Space", server_id: server5.id})
channel14 = Channel.create({channel_name: "TalkTime", server_id: server5.id})
channel15 = Channel.create({channel_name: "Random Convo", server_id: server5.id})


ServerMembership.create({user_id: user7.id , server_id: server1.id})
ServerMembership.create({user_id: user2.id , server_id: server1.id})
ServerMembership.create({user_id: user5.id , server_id: server1.id})
ServerMembership.create({user_id: user8.id , server_id: server1.id})

ChannelMembership.create({user_id: user7.id , channel_id: channel1.id})
ChannelMembership.create({user_id: user5.id , channel_id: channel1.id})
ChannelMembership.create({user_id: user2.id , channel_id: channel1.id})


ChannelMembership.create({user_id: user7.id , channel_id: channel2.id})
ChannelMembership.create({user_id: user5.id , channel_id: channel2.id})
ChannelMembership.create({user_id: user2.id , channel_id: channel2.id})
ChannelMembership.create({user_id: user8.id , channel_id: channel2.id})


ChannelMembership.create({user_id: user7.id , channel_id: channel3.id})
ChannelMembership.create({user_id: user8.id , channel_id: channel3.id})

ServerMembership.create({user_id: user8.id , server_id: server2.id})
ServerMembership.create({user_id: user4.id , server_id: server2.id})
ServerMembership.create({user_id: user1.id , server_id: server2.id})

ChannelMembership.create({user_id: user8.id , channel_id: channel4.id})
ChannelMembership.create({user_id: user1.id , channel_id: channel4.id})


ChannelMembership.create({user_id: user8.id , channel_id: channel5.id})
ChannelMembership.create({user_id: user4.id , channel_id: channel5.id})
ChannelMembership.create({user_id: user1.id , channel_id: channel5.id})


ChannelMembership.create({user_id: user8.id , channel_id: channel6.id})
ChannelMembership.create({user_id: user4.id , channel_id: channel6.id})


ChannelMembership.create({user_id: user8.id , channel_id: channel7.id})
ChannelMembership.create({user_id: user4.id , channel_id: channel7.id})
ChannelMembership.create({user_id: user1.id , channel_id: channel7.id})


ServerMembership.create({user_id: user2.id , server_id: server3.id})
ServerMembership.create({user_id: user1.id , server_id: server3.id})
ServerMembership.create({user_id: user4.id , server_id: server3.id})
ServerMembership.create({user_id: user8.id , server_id: server3.id})
ServerMembership.create({user_id: user6.id , server_id: server3.id})

ChannelMembership.create({user_id: user2.id , channel_id: channel8.id})
ChannelMembership.create({user_id: user4.id , channel_id: channel8.id})
ChannelMembership.create({user_id: user6.id , channel_id: channel8.id})


ChannelMembership.create({user_id: user2.id , channel_id: channel9.id})
ChannelMembership.create({user_id: user1.id , channel_id: channel9.id})
ChannelMembership.create({user_id: user4.id , channel_id: channel9.id})
ChannelMembership.create({user_id: user8.id , channel_id: channel9.id})
ChannelMembership.create({user_id: user6.id , channel_id: channel9.id})


ServerMembership.create({user_id: user2.id , server_id: server4.id})
ServerMembership.create({user_id: user5.id , server_id: server4.id})

ChannelMembership.create({user_id: user2.id , channel_id: channel10.id})
ChannelMembership.create({user_id: user5.id , channel_id: channel10.id})


ServerMembership.create({user_id: user5.id , server_id: server5.id})
ServerMembership.create({user_id: user1.id , server_id: server5.id})
ServerMembership.create({user_id: user2.id , server_id: server5.id})
ServerMembership.create({user_id: user3.id , server_id: server5.id})
ServerMembership.create({user_id: user4.id , server_id: server5.id})
ServerMembership.create({user_id: user6.id , server_id: server5.id})
ServerMembership.create({user_id: user7.id , server_id: server5.id})
ServerMembership.create({user_id: user8.id , server_id: server5.id})

ChannelMembership.create({user_id: user5.id , channel_id: channel11.id})
ChannelMembership.create({user_id: user4.id , channel_id: channel11.id})
ChannelMembership.create({user_id: user8.id , channel_id: channel11.id})


ChannelMembership.create({user_id: user5.id , channel_id: channel12.id})
ChannelMembership.create({user_id: user6.id , channel_id: channel12.id})


ChannelMembership.create({user_id: user5.id , channel_id: channel13.id})
ChannelMembership.create({user_id: user2.id , channel_id: channel13.id})
ChannelMembership.create({user_id: user3.id , channel_id: channel13.id})
ChannelMembership.create({user_id: user4.id , channel_id: channel13.id})


ChannelMembership.create({user_id: user5.id , channel_id: channel14.id})
ChannelMembership.create({user_id: user1.id , channel_id: channel14.id})
ChannelMembership.create({user_id: user6.id , channel_id: channel14.id})
ChannelMembership.create({user_id: user7.id , channel_id: channel14.id})
ChannelMembership.create({user_id: user3.id , channel_id: channel14.id})
ChannelMembership.create({user_id: user8.id , channel_id: channel14.id})


ChannelMembership.create({user_id: user5.id , channel_id: channel15.id})
ChannelMembership.create({user_id: user1.id , channel_id: channel15.id})
ChannelMembership.create({user_id: user2.id , channel_id: channel15.id})
ChannelMembership.create({user_id: user3.id , channel_id: channel15.id})
ChannelMembership.create({user_id: user4.id , channel_id: channel15.id})
ChannelMembership.create({user_id: user6.id , channel_id: channel15.id})
ChannelMembership.create({user_id: user7.id , channel_id: channel15.id})
ChannelMembership.create({user_id: user8.id , channel_id: channel15.id})
