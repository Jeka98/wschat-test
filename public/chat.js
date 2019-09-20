const socket = io.connect('http://localhost:9090');

const message = document.querySelector('#message');
const handle = document.querySelector('#handle');
const btn = document.querySelector('#send');
const output = document.querySelector('#output');
const feedback = document.querySelector('#feedback');

btn.addEventListener('click', () => {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value,
  });
});

message.addEventListener('keypress', () => {
  socket.emit('typing', handle.value);
});

socket.on('chat', (data) => {
  output.innerHTML += `<p><strong> ${data.handle}:</strong> ${data.message}</p>`;
  feedback.innerHTML = '';
});

socket.on('typing', (data) => {
  feedback.innerHTML = `<p> <em> ${data} is typing a message... </em> </p>`;
});
