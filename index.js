const http = require('http');
const fs = require('fs');
const port = 3000;
let cursor = 0;

function getcurrent(request, response) {
  let data;
  try {
    data = JSON.parse(fs.readFileSync('data.json', {encoding: 'utf-8'}));
  } catch( err ) {
    console.error(`Can't read data.json: ` + err);
    data = [];
  }
  if(cursor >= data.length) {
    cursor = 0;
  }

  const item = data[cursor] || {};
  cursor++;

  const ts = new Date().getTime();

  const temp = item.temp || 80;
  const a1 =   item.a1   || 0;
  const h1 =   item.h1   || 0;
  const l1 =   item.l1   || 0;
  const s1 =   item.s1   || 0;
  const m1 =   item.m1   || 0;
  const n1 =   item.n1   || 0;
  const f1 =   item.f1   || 0;
  const d1_1 = item.d1_1 ? 1 : 0;
  const d1_2 = item.d1_2 ? 1 : 0;
  const d1_3 = item.d1_3 ? 1 : 0;

  const a2 =   item.a2   || 0;
  const h2 =   item.h2   || 0;
  const l2 =   item.l2   || 0;
  const s2 =   item.s2   || 0;
  const m2 =   item.m2   || 0;
  const n2 =   item.n2   || 0;
  const f2 =   item.f2   || 0;
  const d2_1 = item.d2_1 ? 1 : 0;
  const d2_2 = item.d2_2 ? 1 : 0;
  const d2_3 = item.d2_3 ? 1 : 0;

  const a3 =   item.a3   || 0;
  const h3 =   item.h3   || 0;
  const l3 =   item.l3   || 0;
  const s3 =   item.s3   || 0;
  const m3 =   item.m3   || 0;
  const n3 =   item.n3   || 0;
  const f3 =   item.f3   || 0;
  const d3_1 = item.d3_1 ? 1 : 0;
  const d3_2 = item.d3_2 ? 1 : 0;
  const d3_3 = item.d3_3 ? 1 : 0;

  let resp = `TS:${ts}|T:${temp}|A1:${a1}|H1:${h1}|L1:${l1}|S1:${s1}|M1:${m1}|N1:${n1}|F1:${f1}|D1_1:${d1_1}|D1_2:${d1_2}|D1_3:${d1_3}`;
  resp +=                      `|A2:${a2}|H2:${h2}|L2:${l2}|S2:${s2}|M2:${m2}|N2:${n2}|F2:${f2}|D2_1:${d2_1}|D2_2:${d2_2}|D2_3:${d2_3}`;
  resp +=                      `|A3:${a3}|H3:${h3}|L3:${l3}|S3:${s3}|M3:${m3}|N3:${n3}|F3:${f3}|D3_1:${d3_1}|D3_2:${d3_2}|D3_3:${d3_3}`;

  response.end(resp);
}


const requestHandler = (request, response) => {
  console.log(request.url);
  if(request.url === '/getcurrent') {
    getcurrent(request, response);
    return;
  }

  response.end('unknown path');
};

const server = http.createServer(requestHandler);
server.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
