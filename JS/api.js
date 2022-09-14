
const url = 'https://economia.awesomeapi.com.br/last/';

const coins = 'EUR-BRL';

fetch(url + coins).then(function (response){
    return response.json();
}).then(function (data){
    const  euro_to_real = data.EURBRL

    let estaData = new Date(euro_to_real.create_date)

    document.getElementById('title').innerHTML = euro_to_real.name
    document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
    document.getElementById('maxvalue').innerHTML = parseFloat(euro_to_real.high).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    document.getElementById('minvalue').innerHTML = parseFloat(euro_to_real.low).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

})