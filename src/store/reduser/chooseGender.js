export const MAIL = 'MAIL';
export const FEMAIL = 'FEMAIL';
export const EITHER = 'EITHER';

export const chooseGender = (state = EITHER, action) => {
    if (action.type === FEMAIL) {
        return FEMAIL
    } else if(action.type === MAIL){
        return MAIL
    } else if(action.type === EITHER){
        return EITHER
    } else {
        return state
    }
}
