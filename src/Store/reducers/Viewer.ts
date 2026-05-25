export interface ViewerState {
  imgVisible: boolean;
  images: string[];
  pdfVisible: boolean;
  pdf: string | null;
}

const initialState: ViewerState = {
  imgVisible: false,
  images: [],
  pdfVisible: false,
  pdf: null,
};

export type ViewerAction =
  | { type: 'IMG_VISIBLE'; images: string[] }
  | { type: 'IMG_HIDDEN'; images: string[] }
  | { type: 'PDF_VISIBLE'; pdf: string }
  | { type: 'PDF_HIDDEN'; pdf: string | null };

const reducer = (state: ViewerState = initialState, action: ViewerAction): ViewerState => {
  switch (action.type) {
    case 'IMG_VISIBLE':
      console.log('image viewer visible');
      return {
        ...state,
        imgVisible: true,
        images: [...action.images],
      };
    case 'IMG_HIDDEN':
      return {
        ...state,
        imgVisible: false,
        images: action.images,
      };
    case 'PDF_VISIBLE':
      return {
        ...state,
        pdfVisible: true,
        pdf: action.pdf,
      };
    case 'PDF_HIDDEN':
      return {
        ...state,
        pdfVisible: false,
        pdf: action.pdf,
      };
    default:
      return state;
  }
};

export default reducer;
