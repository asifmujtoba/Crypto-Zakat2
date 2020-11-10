function exchange_rates(req, res, next){
    const axios = require('axios');

    let url = "https://test.bitpay.com/rates";


    let headers = {
        "x-accept-version": "2.0.0",
        "Content-Type": "application/json"
        };
        
    let options = {
        url,
        method: 'GET',
        headers: headers,
        json: true
    };
    
    const getData = async options => {
      try {
        const body = await axios.request(options);
        ex_rate = body.data.data;
        req.session.rate = ex_rate;
        
        next();
      }
      catch(error){
        console.log(error);
        next();
      }
    };
    
    getData(options);
};

module.exports = exchange_rates;