fetch('url', {
    method: 'GET',
    mode: 'same-origin'
})
    .then( (response) => {
        if (response.status !== 200) {
            throw new Error('status network not 200');
        }
        return( response.json() );
    })
    .then( (response) => {

    })
    .catch( (error) => {
        
        console.log(error);    
    });
    