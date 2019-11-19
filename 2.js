let warehouse = [
1, 1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 9, 9, 10
];


let products = [
2, 10, 10, 3, 8, 9, 1, 2, 1, 4, 1, 2, 2, 3, 7, 10, 8, 2, 3, 4, 4, 4, 4, 4, 5, 6, 7, 10
];


function warehousesCount(products, warehouse)
{
	let productsMap = createMapFromArray(products);
	let warehouseMap = createMapFromArray(warehouse);

	let resultMap = new Map();


	for (let vol = 1; vol <= 10; vol++) {

		let productCount = productsMap.get(vol);
		let warehouseCount = warehouseMap.get(vol);

		if(productCount === undefined) {
			resultMap.set(vol, 0);
		} else if (productCount <= warehouseCount) {
			resultMap.set(vol, 1);
		} else {
			let count = Math.floor(productCount / warehouseCount) + (productCount % warehouseCount);
			resultMap.set(vol, count);
		}
	}


	return Math.max(...resultMap.values());
}

function createMapFromArray(arr)
{
	let map = new Map();

	for(let itm of arr) {
		let count = map.get(itm);


		if(typeof count === 'undefined') {
			map.set(itm, 1);
		}else{
			count = Number(count);
			map.set(itm, ++count);
		}
	}

	return map;
}

console.log(warehousesCount(products, warehouse));