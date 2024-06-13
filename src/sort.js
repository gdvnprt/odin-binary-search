export default function sortArr(array) {
    //sort array
    let sorted = array.sort(function(a, b){return a - b});
    //remove duplicates
    let i = 0;
    while (i < sorted.length - 1) {
        if(sorted[i] === sorted[i + 1]) {
            sorted.splice(i, 1);
            i--;
        };
        i++;
    };
    return sorted;
};