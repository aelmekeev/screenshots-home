# Prerequisites

1. install [NodeJS](https://nodejs.org/en/). `8.12.0` was used originally.
1. `npm install -g typescript ts-node`

# Development

## Run locally

1. Run `nom run start`

Application is available on [http://localhost:3000](http://localhost:3000).

## Docker

1. Build image with `docker build -t donotello/screenshots-home`
1. Run container from the image `docker run -p 3000:3000 -d donotello/screenshots-home`

Application is available on [http://192.168.99.100:3000](http://192.168.99.100:3000) where `192.168.99.100` is `docker-machine ip`.

# References

* [Building RESTful Web APIs with Node.js, Express, MongoDB and TypeScript ](https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-1-2-195bdaf129cf) series by Dale Nguyen
* [mongoose documentation](https://mongoosejs.com/docs/guide.html)