const initialState = {
    imgVisible: false,
    images:[],
    pdfVisible: false,
    pdf:null,
}


const reducer = (state = initialState, action) => {
    //work of reduer is on basis of action change the state
    console.log(action)
    switch(action.type){
        case action.type = 'IMG_VISIBLE':
            console.log('imgae viewer visible')
            return {
                ...state,
                imgVisible:true,
                images: [...action.images],
            }
        case action.type = 'IMG_HIDDEN':
            return {
                ...state,
                imgVisible:false,
                images: action.images,
            }
        case action.type = 'PDF_VISIBLE':
            return {
                ...state,
                pdfVisible:true,
                pdf: action.pdf,
            }
        case action.type = 'PDF_HIDDEN':
            return {
                ...state,
                pdfVisible:false,
                pdf: action.pdf,
            }
        default:
            return state;
    }
}

export default reducer;