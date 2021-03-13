
const uri = 'http://localhost:8000' ; 

/**
 * fetch list of items in the specified page
 */
export const fetchItems = async (path) => {

    var params = new URLSearchParams();
    params.append('path', path);

    return await new Promise((resolve, reject) => {
        fetch(uri + '/items/?'  + params.toString())
            .then(res=>res.json())
            .then((data) => {
                resolve(data);
            })
            .catch((errors)=>{
                reject(errors);
            })
    })
}

/**
 * get the average cubic weight of all air conditioners
 * in all pages
 */
export const fetchAvgCubicWeight = async () => {

    return await new Promise((resolve, reject) => {
        fetch(uri + '/avg-cubic-weight/')
            .then(res=>res.json())
            .then((data) => {
                resolve(data['avg_weight']);
            })
            .catch((errors)=>{
                reject(errors);
            })
    })
}