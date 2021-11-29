/**
 * 
 * @param {number} data props datos formulario
 * @param {number} weightAprox peso formulario
 * @param {string} idContainer #ID box padre grupo discos
 * @param {boolean} checked Estado switch adv opt
 */
export const createDisc = (data, weightAprox, idContainer) => {

    let weightTotal = (weightAprox / 2),
        generateDisc = document.querySelector(idContainer),
        numDisc25 = data.disc25,
        numDisc20 = data.disc20,
        numDisc15 = data.disc15,
        numDisc10 = data.disc10,
        numDisc5 = data.disc5,
        numBumper = data.bumper;

    if (numBumper === 20) {
        weightTotal -= 20;
        generateDisc.insertAdjacentHTML('beforeend', '<div id="container-disc-b10"></div>');
    }

    if (numBumper === 30) {
        weightTotal -= 30;
        generateDisc.insertAdjacentHTML('beforeend', '<div id="container-disc-b15"></div>');
    }

    while (weightTotal > 0) {
        switch (true) {
			case weightTotal >= 25 && numDisc25 > 0:
				weightTotal -= 25;
				numDisc25 -= 1;
				generateDisc.insertAdjacentHTML(
					'beforeend',
					'<div id="container-disc-25"></div>'
				);
				break;
			case weightTotal >= 20 && numDisc20 > 0:
				weightTotal -= 20;
				numDisc20 -= 1;
				generateDisc.insertAdjacentHTML(
					'beforeend',
					'<div id="container-disc-20"></div>'
				);
				break;
			case weightTotal >= 15 && numDisc15 > 0:
				weightTotal -= 15;
				numDisc15 -= 1;
				generateDisc.insertAdjacentHTML(
					'beforeend',
					'<div id="container-disc-15"></div>'
				);
				break;
			case weightTotal >= 10 && numDisc10 > 0:
				weightTotal -= 10;
				numDisc10 -= 1;
				generateDisc.insertAdjacentHTML(
					'beforeend',
					'<div id="container-disc-10"></div>'
				);
				break;
			case weightTotal >= 5 && numDisc5 > 0:
				weightTotal -= 5;
				numDisc5 -= 1;
				generateDisc.insertAdjacentHTML(
					'beforeend',
					'<div id="container-disc-5"></div>'
				);
				break;
			case weightTotal >= 2.5:
				weightTotal -= 2.5;
				generateDisc.insertAdjacentHTML(
					'beforeend',
					'<div id="container-disc-2"></div>'
				);
				break;
			case weightTotal >= 1.25:
				weightTotal -= 1.25;
				generateDisc.insertAdjacentHTML(
					'beforeend',
					'<div id="container-disc-1"></div>'
				);
				break;
			default:
				weightTotal = 0;
				break;
		}
    }

}