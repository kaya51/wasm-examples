import { initializeImageMagick } from './magick-wasm/dist/index.js';

const magickLocation = chrome.runtime.getURL('magick-wasm/dist/magick.wasm');

fetch(magickLocation)
	.then(response => response.bytes())
	.then(bytes => initializeImageMagick(bytes));
