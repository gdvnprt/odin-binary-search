export default function sortArr(array) {
    //sort array
    let sorted = array.sort(function(a, b){return a - b});
    //remove duplicates
    for(let i = 0; i < sorted.length - 1; i++) {
        if(sorted[i] === sorted[i + 1]) {
            sorted = sorted.splice(i, 1)
            i--;
        };
    };
    return sorted;
};