# Симулятор регистратора

## Работа симулятора

Запуск 

    npm start

Данные последовательно выводятся из файла `data.json`

Симулятор работает по адресу `localhost:3000/getcurrent`

## Пример получения данных



```js
var getCurrentUrl = 'http://localhost:3000/getcurrent';
var current_data = {};

function updateCurrent() {
  function onDataReceived(current_text) {
    let rows = current_text.split('\r\n');
    let cols = rows[0].split('|');

    current_data.ts = parseInt(cols[0].substr(3));

    current_data.T = parseInt(cols[1].substr(2));

    current_data.A1 = parseInt(cols[2].substr(3)) / 1000.0;
    current_data.H1 = parseInt(cols[3].substr(3)) / 1000.0;
    current_data.L1 = parseInt(cols[4].substr(3)) / 1000.0;
    current_data.S1 = parseInt(cols[5].substr(3)) / 1000.0;
    current_data.M1 = parseInt(cols[6].substr(3)) / 1000.0;
    current_data.N1 = parseInt(cols[7].substr(3)) / 1000.0;
    current_data.F1 = parseInt(cols[8].substr(3)) / 1000.0;

    current_data.D1_1 = cols[9].substr(5, 1);
    current_data.D1_2 = cols[10].substr(5, 1);
    current_data.D1_3 = cols[11].substr(5, 1);

    current_data.A2 = parseInt(cols[12].substr(3)) / 1000.0;
    current_data.H2 = parseInt(cols[13].substr(3)) / 1000.0;
    current_data.L2 = parseInt(cols[14].substr(3)) / 1000.0;
    current_data.S2 = parseInt(cols[15].substr(3)) / 1000.0;
    current_data.M2 = parseInt(cols[16].substr(3)) / 1000.0;
    current_data.N2 = parseInt(cols[17].substr(3)) / 1000.0;
    current_data.F2 = parseInt(cols[18].substr(3)) / 1000.0;

    current_data.D2_1 = cols[19].substr(5, 1);
    current_data.D2_2 = cols[20].substr(5, 1);
    current_data.D2_3 = cols[21].substr(5, 1);

    current_data.A3 = parseInt(cols[22].substr(3)) / 1000.0;
    current_data.H3 = parseInt(cols[23].substr(3)) / 1000.0;
    current_data.L3 = parseInt(cols[24].substr(3)) / 1000.0;
    current_data.S3 = parseInt(cols[25].substr(3)) / 1000.0;
    current_data.M3 = parseInt(cols[26].substr(3)) / 1000.0;
    current_data.N3 = parseInt(cols[27].substr(3)) / 1000.0;
    current_data.F3 = parseInt(cols[28].substr(3)) / 1000.0;

    current_data.D3_1 = cols[29].substr(5, 1);
    current_data.D3_2 = cols[30].substr(5, 1);
    current_data.D3_3 = cols[31].substr(5, 1);

    document.getElementById('result').innerHTML = JSON.stringify(current_data);
  }
  fetch(getCurrentUrl, {
    method: 'GET',
    mode: 'cors'
  }).then(
    function (response) {
      response.text().then(onDataReceived);
    },
    function (error) {
      document.getElementById('result').innerHTML = 'Ошибка загрузки: ' + error;
    }
  );
}


document.getElementById('load').addEventListener('click', 
  function() {
    updateCurrent();
  }
)
```