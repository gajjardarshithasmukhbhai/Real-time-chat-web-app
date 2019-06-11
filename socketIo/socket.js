var socket=io.connect('http://localhost:4040/chat');
var user=document.getElementById('name1').value;
var data=document.getElementById('data1').value;
var btn=document.getElementById('click');
var me=document.getElementById('me');
var handleuser=document.getElementById('user');
function myfunction(){
	console.log('hello');
	console.log("gajajr daxa",user,data);

	socket.emit('chat',{
		message:"gajjar",
		user:"darshit",
	});
}

// listen
socket.on('chat',(data)=>{
	me.innerHTML='<h1>'+data.message+'</h1>';
	// handleuser+='<p>'+data.user+'</p>';
});

