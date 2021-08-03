# testcafe_redirect


#Setup

1.Open redirect.js and update the absolute path of redirect.html

2.Install the testcafe plugin globally: 

npm install -g testcafe-browser-provider-browserstack

3.Travese to the folder where browserstack local is installed and start the binary: 

./BrowserStackLocal --key <key> --local-identifier TestCafe --daemon start --parallel-runs 10

4.Run the testcafe test : testcafe "browserstack:chrome@84.0:Windows 10" tests/redirect.js
