import { Observable } from "rxjs";

console.clear();

/**
 * Create an Observable
 *
 * Can emmir multiple events. Error can be emmited once, then terminates.
 *
 * constructor method describes when and what to emmit and it's parameter is the observer
**/
const o1 = new Observable((observer) => {
	let counter = 0;

	document.querySelector("#event-square").addEventListener('click', () => {
		counter++;
		observer.next(counter);
	});

	document.querySelector("#error").addEventListener('click', () => {
		observer.error("Hiba objektum vagy részletei");
	});

});

/** We also nned an observer function that runs on the event of Observable emitting one
 *
 * We have deprecated all signatures of subscribe that take more than 1 argument.
 * https://rxjs.dev/deprecations/subscribe-arguments
**/
o1.subscribe({
	next: (res) => console.log('Observable emits', res),
	error: (err) => console.log('Observable error', err),
	complete: () => console.info('complete')
});
