exports.run = (client, msg, mes, start) => {
	let dd = client.datadog;
	dd.increment(msg.cmd.help.name, 1);
};