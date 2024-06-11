export default function makeNode(dat) {
    let data = dat | null;
    let left = null;
    let right = null;
    return {data, left, right};
};