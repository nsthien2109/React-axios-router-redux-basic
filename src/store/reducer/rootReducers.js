
const initialState = {
    user: [
        {
            id: 1,name : 'NST'
        },
        {
            id : 2, name : 'HELO'
        }
    ]
}

const rootReducer = (state = initialState, actions) =>{
    switch (actions.type){
        case 'DELETE_USER':
            let user = state.user;
            user = user.filter(user => user.id !== actions.payload.id);
            return {
                ...state, user
            };
        case 'CREATE_USER' : 
        console.log("Ẹ");
            var id = Math.floor(Math.random() * 1000);
            var newUser = {
                id : id,
                name : `UNKNOW ${id}`
            };
            return {
                ...state, user :[...state.user, newUser]
            };
    }
    return state;
}

export default rootReducer;