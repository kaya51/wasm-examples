import {
	initializeImageMagick,
	ImageMagick,
	Magick,
	MagickFormat,
	Quantum,
} from './magick-wasm/dist/index.js';

const magickLocation = chrome.runtime.getURL('magick-wasm/dist/magick.wasm');

fetch(magickLocation)
	.then(response => response.bytes())
	.then(bytes => initializeImageMagick(bytes))
	.then(() => {
		console.log(Magick.imageMagickVersion);
		console.log('Delegates:', Magick.delegates);
		console.log('Features:', Magick.features);
		console.log('Quantum:', Quantum.depth);

		console.log('');
		ImageMagick.read('logo:', image => {
			image.resize(100, 100);
			image.blur(1, 5);
			console.log(image.toString());

			image.write(MagickFormat.Jpeg, data => {
				console.log(data.length);
			});
		});
	});
