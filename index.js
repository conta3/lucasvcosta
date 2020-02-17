var tmi = require('tmi.js');
var options = 
{
	options: 
	{
		debug: true
	},
	connection: 
	{
		cluster: "aws",
		reconnect: true
	},
	identity: 
	{
		username: "lucasvcosta",
		password: "oauth:59coep27fdllkftghps2d1jceexnmh",  
	},
	channels: ['#gaules', '#marcobc', '#johnpittertv', '#jeffaocs', '#mibrtv', '#marcaorx', '#Vovo', '#furiatv', '#stereonline', '#skipnho', '#saullo', '#mch_agg',] //ADICIONA OS CANAIS AQ COM '#NOME'
};

var client = new tmi.client(options);

	client.connect();
	client.on("connected", function (address, port)
	{
		console.log("address: " + address + " port: " + port);
		client.action("999mateus", "Hello 999mateus!")
	});
