export function drinksFetchDataSuccess(drinks){
    return {
        type: "DRINKS_FETCH_DATA_SUCCESS",
        drinks
    }
};

export function varietiesFetchDataSuccess(varieties){
    return {
        type: "VARIETIES_FETCH_DATA_SUCCESS",
        varieties
    }
};

export function FetchData(type){

    const url = "http://localhost:8000/api/"+ type +"/";
    if(type == "drinklist"){
        return (dispatch) => {
            fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(drinks => dispatch(drinksFetchDataSuccess(drinks)))
        }
    }else if(type == "varietylist"){
        return (dispatch) => {
            fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(varieties => dispatch(varietiesFetchDataSuccess(varieties)))
        }
    }
    
};