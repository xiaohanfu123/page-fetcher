const input = process.argv.slice(2);
const web = input[0];
const newLocation = input[1];
const request = require('request');
const fs = require('fs')



const fetch = (web, newLocation) => {
    request(web, (error, response, body) => {

        fs.writeFile(newLocation, body, (error) => {
            if (error) {
                console.log(error)
            }
        }
        )

    });
}

fetch(web, newLocation)
