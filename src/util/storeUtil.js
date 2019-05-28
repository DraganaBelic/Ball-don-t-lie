export function getValueAppPropertyStore(state, key) {
    if (state.firstState) {
        const property = state.firstState.filter(function (property) {
            return property.key === key;
        });   
        return (property && property.length !== 0) ? property[0].value : null;
    }
    return null;
}