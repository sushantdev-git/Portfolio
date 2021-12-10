
var initialState = {
    visible: false,
    images:[],
}


const reducer = (state = initialState, action) => {
    //work of reduer is on basis of action change the state
    switch(action.type){
        case action.type = "VISIBLE":
            return {
                ...state,
                visible:true,
                images: [...action.images],
            }
        case action.type = "HIDDEN":
            return {
                ...state,
                visible:false,
                images: action.images,
            }
        default:
            return state;
    }
}

export default reducer;