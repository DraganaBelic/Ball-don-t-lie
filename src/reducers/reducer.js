
export default function login (state = [], action) {
    switch (action.type) {
        case 'LOGIN':
            let username = action.username;
            let password = action.password;
           return state = [...state, username, password]
           
        case 'GET_ALL_PLAYERS':
            return state = [...state]
            
        case 'GET_ALL_TEAMS':
            return state = [...state]

        case 'GET_TEAM_BY_ID':
            return state = [...state]

        case 'SET_TEAM_AS_FAVOURITE':
            let favourite = action.favourite
            return state = [...state, favourite]
            
        case 'AddEditGlobalPropInStore':
                const property = action.property;
                let edit = state.filter(function (stateProperty) {
                    return stateProperty.key === property.key;
                })[0];
                if (!edit) {
                    return [...state, property];
                } else {
                    return state.map(stateProperty =>
                        stateProperty.key === property.key ? {...action.property} : stateProperty
                    );
                }

        default: 
        return state
    }

    
    
}


