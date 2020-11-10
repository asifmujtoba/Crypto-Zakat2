const axios = require('axios');

let resource_url = 'https://testnet-api.smartbit.com.au/v1/blockchain/address/';

let address = ["mycX2Xr69GRj5ayfD5AkPXv79g4PNCe8xq",
"mk2bqDr6TRg66QWE5UGhLhMXTt8qVLvYhz",
"mmirc8HduRMeMXyHJ4mXRyLBufd1UfxPQU",
"mponpLS2MSEeeZL8s32KiSyfd5ERiqKkZ6",
"mnZ422eDCUtpvzfr9tsxpjrxV1FH4N7HL5",
"mijHY44NzQF6edeXJvYfd6CkAEmzjXarSN",
"mwh55v1ZuFfFc4LLfjXv2Rrmb5gvvgM5BL",
"msMY3vmHaRLsXLzkQuc3iVNyJWGYMjk5kk",
"mpDHZKL3HMYmY7nR5eMygdRAwaRSiwZkP6",
"moEn1E6J8tFAnYTxGh2z3nqG5NAKXpyFry",
"n3W676nFkAE1A5r4a5dDRdvyaiVGEKhqb4",
"myfgdpwtKBP56Ba4TuUvHRciGGRfQY88r8",
"mgrBZDLwpEcR8u4Vn1qFkac29eUTbdZAY1",
"mtSALgCuEH7UhFDDZWnGhdkmfKeHkjwdZP",
"mmRT1WLkyd4cLesMCd2dU35ajK4dsA7so7",
"msQoa3RhakCtKAGsCUJyYgFyAXXteQ7fYe",
"miFMaM9Pfu3cGLSxRnqt7yRGxXjbEC6UrV",
"mx4wb3yAoVhGviHNPP7Rmq3ArRmkkB7NZ9",
"msdyxsRxTtinMRSoiUqSwudv6b7tRD5wp4",
"n1AJvHtAv93fCeeU9Hq11DrmFE3LtGF9RC",
"msF1GEh7yWf7BSwWKEzqBvR67JjMmFGJJn",
"mrGR1vGG5Ki7PKY7Jk1AMMJbMRNanw2WQC",
"mu9FczEVd9RVCh5dsMweokgNmkU15wTLMr",
"mkVbCYdekVAoGn7KxbvwoTeDJgXHSm2a1d",
"mjqNQVhEVyceW6DJ4NMC4CCbfgQnJi6amd",
"muYhwnWEh6GU2hcWTMggUVHvVx9Cyngcak",
"mvyNamLSVeL98rQiDNUW4NU9Wf4cYeRhS3",
"mrNisaBMXnGbp3iC4pDrYrNKuzR2j4sicZ",
"mwSpqi6Awhh7Dn51BepYip6VAvbR8hYpgw",
"n39TfqkD8MgzHqed4WRgnwrnuEu6DwLrRJ",
"n1Nx4aHqg6eqpw6kU5FmC4j3r4cqTp3WqD",
"mtaS469dMRjVBHu6SE2zshcc9zpFGoKLiB",
"morxb5EksDbZTsKWMFtWC9qr9WpTTiLWSn",
"n22NHQHe8CJE8LcRSPUJ8L4Chwsr49pZpA",
"mvecEdUkuEiyYd64mUkUSohqLiUYQ75zVK",
"ms5SNcqp5DPZYZa426X8o9G6yEfi1CrXGD",
"n1qZqRLSHr5AHsGTmX59ok5Yb4hAvSLpFP",
"muXM5XazdKYc2cbT2qrYSECby9WyMKGeub"];
address.forEach(element => {
resource_url += element + ",";
});
var url = resource_url.slice(0, -1) + "/wallet";


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
    //req.result = body.data;
    console.log(body.data.wallet.transactions);
}
catch(error){
    console.log(error);
}
};

getData(options); 