globalThis.Function = new Proxy(Function, {
	apply(target, thisArg, argsArray) {
		throw new Error(`Function.apply is used with args: ${ argsArray }`);
	},
	construct(target, args, newTarget) {
		throw new Error(`Function constructor is used with args: ${ args }`);
	}
});

globalThis.eval = new Proxy(eval, {
	apply(target, thisArg, argsArray) {
		throw new Error(`eval is used with args: ${ argsArray }`);
	}
});

function trapTimer(fnName, originalFn) {
	return new Proxy(originalFn, {
		apply(target, thisArg, argsArray) {
			if (typeof argsArray[0] === 'string') {
				throw new Error(`${ fnName } called with string: ${ argsArray[0] }`);
			}
			return Reflect.apply(target, thisArg, argsArray);
		}
	});
}

globalThis.setTimeout = trapTimer('setTimeout', setTimeout);
globalThis.setInterval = trapTimer('setInterval', setInterval);

if (typeof setImmediate === 'function') {
	globalThis.setImmediate = trapTimer('setImmediate', setImmediate);
}
