json.extract! channel, :id, :channel_name, :server_id
json.message_ids channel.messages.pluck(:id)  
