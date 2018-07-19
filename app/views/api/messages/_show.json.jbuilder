json.messages do
  json.set! message.id do
    json.extract! message, :id, :channel_id, :author_id, :body
    json.author message.author
  end
end

json.channels do
  json.set! message.channel.id do
    json.extract! message.channel, :id, :name, :message_ids
  end
end
