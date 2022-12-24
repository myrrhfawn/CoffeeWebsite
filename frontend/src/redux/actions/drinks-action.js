export function drinksFetchDataSuccess(drinks){
    return {
        type: "DRINKS_FETCH_DATA_SUCCESS",
        drinks
    }
};

export function drinksFetchData(url){
    

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
};