let startTime: any;
function start() {
	startTime = performance.now();
}
async function stop() {
	const end = performance.now();
	const runtime = end - startTime;
	console.log('benchmark runtime', runtime, 'ms');
	const response = {
		millis: runtime
	};
	fetch('/submitResults', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(response)
	});
}
export const bench = {
	start,
	stop
};
