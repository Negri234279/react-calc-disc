/**
 * 
 * @param {string} data Datos del formulario
 * @param {number} weightTotal Peso discos total
 * @param {string} index Indice repeticion funcion
 */
export const createDisc = (data, weightTotal, index) => {

	const generateDisc = document.querySelector(`#container-${index}`);
	let weightPlates = (weightTotal - data.weightBar) / 2,
		numDisc25 = data.disc25,
		numDisc20 = data.disc20,
		numDisc15 = data.disc15,
		numDisc10 = data.disc10,
		numDisc5 = data.disc5,
		numBumper = parseInt(data.bumper);

	if (weightTotal.toString().endsWith('2')) weightPlates += 0.25;
	else if (weightTotal.toString().endsWith('5')) weightPlates += 0.5;
	else if (weightTotal.toString().endsWith('7')) weightPlates += 0.75;

    if (numBumper === 20) {
        weightPlates -= 10;
        generateDisc.insertAdjacentHTML('beforeend', '<div id="container-disc-b10"></div>');
    } else if (numBumper === 30) {
        weightPlates -= 15;
        generateDisc.insertAdjacentHTML('beforeend', '<div id="container-disc-b15"></div>');
    }
	
    while (weightPlates > 0) {
        switch (true) {
			case weightPlates >= 25 && numDisc25 > 0:
				weightPlates -= 25;
				numDisc25 -= 1;
				generateDisc.insertAdjacentHTML('beforeend','<div id="container-disc-25"></div>');
				break;
			case weightPlates >= 20 && numDisc20 > 0:
				weightPlates -= 20;
				numDisc20 -= 1;
				generateDisc.insertAdjacentHTML('beforeend','<div id="container-disc-20"></div>');
				break;
			case weightPlates >= 15 && numDisc15 > 0:
				weightPlates -= 15;
				numDisc15 -= 1;
				generateDisc.insertAdjacentHTML('beforeend','<div id="container-disc-15"></div>');
				break;
			case weightPlates >= 10 && numDisc10 > 0:
				weightPlates -= 10;
				numDisc10 -= 1;
				generateDisc.insertAdjacentHTML('beforeend','<div id="container-disc-10"></div>');
				break;
			case weightPlates >= 5 && numDisc5 > 0:
				weightPlates -= 5;
				numDisc5 -= 1;
				generateDisc.insertAdjacentHTML('beforeend','<div id="container-disc-5"></div>'	);
				break;
			case weightPlates >= 2.5:
				weightPlates -= 2.5;
				generateDisc.insertAdjacentHTML('beforeend','<div id="container-disc-2"></div>');
				break;
			case weightPlates >= 1.25:
				weightPlates -= 1.25;
				generateDisc.insertAdjacentHTML('beforeend','<div id="container-disc-1"></div>');
				break;
			default:
				weightPlates = 0;
				break;
		}
    }

}