# SWAPI Integration Tests
Somethings to note is that I was not able to access swapi.dev, receiving a 404. Because of that, I had to pull down an SWAPI docker container.

Overall, I took around 2 hours and 15 minutes, with my breakdown being:
- 45 minutes search for the associated git repo and docker image
- 15 minutes environment setup
- 1 hour writing code for tests
- 15 minutes writing readme

The actual API itself does not have a lot of functionality, allowing you to fetch Star Wars information with either an id or by retrieving everything, using pagination to keep payloads smalls. Because of this, I created some generic reusable test generators that can be used for each endpoint.

I had also provided a way to do data driven testing, by providing and interface that allowed a user to feed in input data. Weirdly though, the pointers to other Starwars objects are dynamically generated, creating a link. The data could be contained in a json, txt, csv or some similar file type, but the dynamic aspect of that would make it more difficult.

## Requirements
- Node
- Docker* (env variable SWAPI_URL can also be provided)

## Setup
```
npm install
```

## Commands
### Running Tests (Docker)
To start Docker:
```
npm run test:docker-start
```

To run tests:
```
npm run test
```

To stop Docker:
```
npm run test:docker-stop
```

Running local tests with 1 Command
```
npm run test:local
```

### Running Tests (URL)
```
SWAPI_URL=<URL> npm run test
```

## Assumptions
1. I am only testing the API, nothing on the documentation site
2. I am not testing the dynamically generating URLs, it seems like a bad way to link relationships anyways
3. The resources provided will not change in the environment I am testing
4. The docker image I am using is "up to date", only having basic features
5. Schema validation is a waste of time, there are more effect ways to ensure the schema is correct
6. My testing for *people* should be enough to demonstrate my ability to test the other endpoints
