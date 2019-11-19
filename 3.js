function minRemovals(first, second)
{
	const firstMap = createMapFromString(first);
	const secondMap = createMapFromString(second);
	
	let biggest = null;
	let smallest = null;
	let removalsCount = 0;

	if(firstMap.size > secondMap.size) {
		biggest = firstMap;
		smallest = secondMap;
	}else {
		biggest = secondMap;
		smallest = firstMap;
	}

	for(let char of biggest.keys()) {

		let biggestCount = biggest.get(char);
		let smallestCount = smallest.get(char);

		biggestCount = biggestCount === undefined ? 0 : Number(biggestCount);
		smallestCount = smallestCount === undefined ? 0 : Number(smallestCount);

		if(biggestCount > smallestCount) {
			removalsCount += biggestCount - smallestCount;

		}else if( smallestCount > biggestCount ) {
			removalsCount += smallestCount - biggestCount;

		}
	}

	return removalsCount;
}


function createMapFromString(str)
{
	let map = new Map();

	for(let itm of str) {
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


console.log(minRemovals('abcssd', 'basad'));
