CALL npm test run ./wdio.conf.js
CALL sleep 150
CALL node weather.js

//CALL artillery run --output report.json artilery.yml

//CALL artillery report --output report.html report.json

//CALL node perflat.js
//CALL autocannon http://127.0.0.1:6000

