CALL npx wdio run ./wdio.conf.js
CALL allure serve allure-results/&& clean node_modules/.bin/allure open