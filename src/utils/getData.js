

const checkResponse = response => {
    
    if (response.status !== 200){
        console.log(`Error with Request! ${response.status}`);
        return;
    }
    return response.json();
};

export const getQuizData = () =>{

    return fetch(`http://jservice.io/api/category?id=105`)
    .then(checkResponse)
    .catch( err =>{
        throw new Error(`Fetch getQuizData failed ${err}`)
    })
}