export default function flatten(list) {
    // eslint-disable-next-line unicorn/no-array-reduce
    return list.reduce((flat, toFlatten) => {
        return flat.concat(
            toFlatten.children ? flatten(toFlatten.children) : toFlatten
        );
    }, []);
}
