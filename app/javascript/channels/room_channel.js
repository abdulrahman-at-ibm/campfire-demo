import consumer from "./consumer"

const room = consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
		console.log("Connected to chat room.")
		$('.messages').scrollTop($('.messages')[0].scrollHeight)
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
				console.log("Disconnected from chat room.")
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
		$('.messages').append(`<div class="message"><p class="message-content">${data.content}</p><p class="message-date">${data.created_at}</p></div>`)
		$('.messages').scrollTop($('.messages')[0].scrollHeight)
  }
});

$('form').submit(event => {
	room.send({content: event.target.value})
	$('#message_content').val('')
	event.preventDefault()
})