/*! For license information please see main.f2a0c37e.chunk.js.LICENSE.txt */
(this.webpackJsonp = this.webpackJsonp || []).push([
	['main'],
	{
		'./src/app/bench.ts'(e, n, t) {
			let s;
			t.r(n),
				t.d(n, 'bench', function() {
					return o;
				});
			const o = {
				start() {
					s = performance.now();
				},
				async stop() {
					const e = performance.now() - s;
					console.log('benchmark runtime', e, 'ms');
					const n = { millis: e };
					fetch('http://127.0.0.1:8080/submitResults', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(n)
					});
				}
			};
		},
		'./src/app/index.tsx'(e, n, t) {
			t.r(n);
			let s = t('./node_modules/react/index.js'),
				o = t.n(s),
				c = t('./node_modules/react-dom/index.js'),
				r = t('../node_modules/@payfit/midnight/dist/index.es.js'),
				i = t('./src/app/bench.ts');
			const a = new Array(1000).fill(!0);
			i.bench.start(),
				Object(c.render)(
					o.a.createElement(
						() =>
							o.a.createElement(
								o.a.Fragment,
								null,
								a.map((e, n) =>
									o.a.createElement(r.Box, {
										width: 10,
										height: 30,
										margin: 1,
										backgroundColor: 'blue100',
										key: n
									})
								)
							),
						null
					),
					document.getElementById('root')
				),
				i.bench.stop();
		},
		0(e, n, t) {
			t('./node_modules/react-dev-utils/webpackHotDevClient.js'),
				(e.exports = t('./src/app/index.tsx'));
		}
	},
	[[0, 'runtime', 'vendors~main']]
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL21haW4uZjJhMGMzN2UuY2h1bmsuanMiLCJzb3VyY2VzIjpbIi4uL3N0YXRpYy9tYWluLmYyYTBjMzdlLmNodW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIih0aGlzLndlYnBhY2tKc29ucD10aGlzLndlYnBhY2tKc29ucHx8W10pLnB1c2goW1tcIm1haW5cIl0se1wiLi9zcmMvYXBwL2JlbmNoLnRzXCI6ZnVuY3Rpb24oZSxuLHQpe1widXNlIHN0cmljdFwiO2xldCBzO3QucihuKSx0LmQobixcImJlbmNoXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIG99KSk7Y29uc3Qgbz17c3RhcnQ6ZnVuY3Rpb24oKXtzPXBlcmZvcm1hbmNlLm5vdygpfSxzdG9wOmFzeW5jIGZ1bmN0aW9uKCl7Y29uc3QgZT1wZXJmb3JtYW5jZS5ub3coKS1zO2NvbnNvbGUubG9nKFwiYmVuY2htYXJrIHJ1bnRpbWVcIixlLFwibXNcIik7Y29uc3Qgbj17bWlsbGlzOmV9O2ZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDgwL3N1Ym1pdFJlc3VsdHNcIix7bWV0aG9kOlwiUE9TVFwiLGhlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJ9LGJvZHk6SlNPTi5zdHJpbmdpZnkobil9KX19fSxcIi4vc3JjL2FwcC9pbmRleC50c3hcIjpmdW5jdGlvbihlLG4sdCl7XCJ1c2Ugc3RyaWN0XCI7dC5yKG4pO3ZhciBzPXQoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qc1wiKSxvPXQubihzKSxjPXQoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanNcIikscj10KFwiLi4vbm9kZV9tb2R1bGVzL0BwYXlmaXQvbWlkbmlnaHQvZGlzdC9pbmRleC5lcy5qc1wiKSxpPXQoXCIuL3NyYy9hcHAvYmVuY2gudHNcIik7Y29uc3QgYT1uZXcgQXJyYXkoMTAwKS5maWxsKCEwKTtpLmJlbmNoLnN0YXJ0KCksT2JqZWN0KGMucmVuZGVyKShvLmEuY3JlYXRlRWxlbWVudCgoKT0+by5hLmNyZWF0ZUVsZW1lbnQoby5hLkZyYWdtZW50LG51bGwsYS5tYXAoKGUsbik9Pm8uYS5jcmVhdGVFbGVtZW50KHIuQm94LHt3aWR0aDoxMCxoZWlnaHQ6MzAsbWFyZ2luOjEsYmFja2dyb3VuZENvbG9yOlwiYmx1ZTEwMFwiLGtleTpufSkpKSxudWxsKSxkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpLGkuYmVuY2guc3RvcCgpfSwwOmZ1bmN0aW9uKGUsbix0KXt0KFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZGV2LXV0aWxzL3dlYnBhY2tIb3REZXZDbGllbnQuanNcIiksZS5leHBvcnRzPXQoXCIuL3NyYy9hcHAvaW5kZXgudHN4XCIpfX0sW1swLFwicnVudGltZVwiLFwidmVuZG9yc35tYWluXCJdXV0pOyJdLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlUm9vdCI6IiJ9
