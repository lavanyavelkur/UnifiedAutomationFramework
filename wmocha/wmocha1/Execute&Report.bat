CALL npm test run ./wdio-config.js
CALL allure serve allure-results/&& clean node_modules/.bin/allure open

