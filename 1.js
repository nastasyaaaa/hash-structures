/*
Задан массив чисел. Вывести все неразрывные подмассивы, которые не содержат повторяющихся элементов. (2 балла)
Например дано {1,2,1,3},
Ответ
1
2
3
12
21
13
213
*/


function findSubArrays(array)
{
	let start = 0;
	let end = 0;
	let subArrays = new Set();
	let set = new Set();
	let result = [];


	while(start <= end && start < array.length ) {

		if( set.has(array[end]) || typeof array[end] === 'undefined' ) {
			start++;
			end = start;
			
			set.clear();
			continue;
		}

		set.add( array[end] );
		
		// if(end !== array.length - 1) {
			end++;
		// }

		// push array made from current set into subArrays set
		// stringify to JSON to compare elements within set, because cannot compare arrays (objects)
		subArrays.add( JSON.stringify([...set.values()]) );
	}

	// parse each subArray from JSON to array and push it to result array
	for (let subArray of subArrays.values()){
		result.push(JSON.parse(subArray));
	}

	return result;
}

console.log(findSubArrays([1,2,1,3, 2]));
