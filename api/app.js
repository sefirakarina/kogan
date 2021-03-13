var express = require('express');
var cors = require('cors');
var fetch = require("node-fetch");
var app = express();


const fetchItems = async (path) => {

    return await new Promise((resolve, reject) => {
        fetch("http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com" + path)
        .then(res=>res.json())
        .then((data) => {
            resolve(data);
        })
        .catch(() => {
            reject(); 
        })
  
    })

}

const getCubicWeight = (item) =>{
    var height = item['size']['height'] ;
    var length = item['size']['length'] ;
    var width = item['size']['width'] ;

    return ((height * length * width) / 1000000 ) * 250;
}

const processData = (data) => {
    var airConCount = 0 ;
    var totalCubicWeight = 0;
    data['objects'].map((item) => {
        if(item['category'] == 'Air Conditioners'){
            airConCount += 1;
            item['cubic_weight'] = getCubicWeight(item);
            totalCubicWeight += item['cubic_weight'];
        }
    })
    data['avg_cubic_weight'] = totalCubicWeight / airConCount ;
    return data
}


const getAllData = async (res, path, instances) =>{

    var data = await fetchItems(path) ; 
    var newData = data['objects'].concat(instances) ; 

    return (data['next']) ? await getAllData(res, data['next'], newData) : instances ; 
    
}

app.get('/avg-cubic-weight/', cors(), async (req, res)  =>  {


    var items =  await getAllData(res, '/api/products/1', []) ;
    var totalCubicWeight = 0 ;

    var airCons = items.filter( (item) => {
        return item.category === 'Air Conditioners';
    });

    airCons.map((airCon) => {
        totalCubicWeight += getCubicWeight(airCon) ; 
    })
    
    res.json({'avg_weight': totalCubicWeight/airCons.length}) ; 
})


app.get('/items/', cors(), async (req, res)  =>  {

    const data = await fetchItems(req.query.path) ;
    var instances = processData(data);
    res.json(instances) ; 
})



app.listen(8000, function () {
    console.log('listening to port 8000...')
})