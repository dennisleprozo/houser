//this is where im at 4pm? Dude!
const initialState={
 name:"",
 address:"",
 city:"",
 state:"",
 zip:0,
 img_url:"",
 mortgage:0,
 rent:0,
};

//party on!
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMG_URL = "UPDATE_IMG_URL";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";
const CANCEL = "CANCEL";

//make a cancel for Wizard
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NAME:
            return Object.assign({}, 
                state, 
                {name: action.payload});
        case CANCEL:
            state = {
                name:"",
                address:"",
                city:"",
                state:"",
                zip:0,
                img_url:"",
                mortgage:0,
                rent:0,
               };
            }
    }

export function cancel() {
    return {
        type:CANCEL
    };
}

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

//OMG tis 5pm