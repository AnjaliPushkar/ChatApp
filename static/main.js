console.log('hello')

var socket = io();
    socket.on('connect', function() {
    	console.log('connected')
        // socket.emit('my event', {data: 'I\'m connected!'});
    });

function send(){
	var inputBox = document.getElementById('inputBox')
	socket.emit('msg', inputBox.value)
	inputBox.value = ''
}

socket.on('push', function(data){
	var msgBox = document.getElementById('msgBox')
	msgBox.innerHTML += '<p>'+ data +'</p>'
})

function getWeather(){
	//url = 'http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=d7781781cfda2a582cd6743fd48dfa8c'
	url = '/users'
	fetch(url).then(function(res){
		res.json().then(function(data){
			console.log(data)
		})
	})

}