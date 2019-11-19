function sumMatrixes(firstMatrix, secondMatrix)
{
	let sumMatrix = new Map();
	let rows = new Set([...firstMatrix.keys(), ...secondMatrix.keys()].sort());


	for (let row of rows) {

		let fPairs = getPairsFromMap(firstMatrix, row);
		let sPairs = getPairsFromMap(secondMatrix, row);

		let rowMap = new Map();
		let columns = new Set([...fPairs.keys(), ...sPairs.keys()]);

		for(let column of columns) {

			let firstVal = getValueFromMap(fPairs, column);
			let secondVal = getValueFromMap(sPairs, column);

			rowMap.set(column, firstVal + secondVal);
		}

		sumMatrix.set(row, rowMap);
	}

	return sumMatrix;
}

function getPairsFromMap(map, key)
{
	let pairsMap = map.get(key);
	return pairsMap !== undefined ? pairsMap : new Map();
}

function getValueFromMap(map, key)
{
	let value = map.get(key);
	return value !== undefined ? value : 0;
}


let first = new Map();
let second = new Map();

first.set(0, (new Map()).set(0, 1));
first.set(2, (new Map()).set(2, 2).set(3, 8));


second.set(0, (new Map()).set(0, 2).set(1, 1));
second.set(1, (new Map().set(1, 1)));

console.log('first matrix', first);
console.log('second matrix', second);

console.log('sum of matrix', sumMatrixes(first, second));