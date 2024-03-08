import {
  BASE_URL,
  describeSWApiValidation,
  SWApiValidationSet
} from "./util";

const validationSet: SWApiValidationSet = [
  {
    // Luke Skywalker - First ID
    id: 1,
    expectedCode: 200,
    expectedBody: {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": `${BASE_URL}/api/planets/1/`,
      "films": [
        `${BASE_URL}/api/films/1/`,
        `${BASE_URL}/api/films/2/`,
        `${BASE_URL}/api/films/3/`,
        `${BASE_URL}/api/films/6/`
      ],
      "species": [],
      "vehicles": [
        `${BASE_URL}/api/vehicles/14/`,
        `${BASE_URL}/api/vehicles/30/`
      ],
      "starships": [
        `${BASE_URL}/api/starships/12/`,
        `${BASE_URL}/api/starships/22/`
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": `${BASE_URL}/api/people/1/`
    }
  },
  //  Tion Medon - Largest ID
  {
    id: 83,
    expectedCode: 200,
    expectedBody:
    {
      "name": "Tion Medon",
      "height": "206",
      "mass": "80",
      "hair_color": "none",
      "skin_color": "grey",
      "eye_color": "black",
      "birth_year": "unknown",
      "gender": "male",
      "homeworld": `${BASE_URL}/api/planets/12/`,
      "films": [
        `${BASE_URL}/api/films/6/`
      ],
      "species": [
        `${BASE_URL}/api/species/37/`
      ],
      "vehicles": [],
      "starships": [],
      "created": "2014-12-20T20:35:04.260000Z",
      "edited": "2014-12-20T21:17:50.498000Z",
      "url": `${BASE_URL}/api/people/83/`
    }
  },
  {
    id: Number.MAX_SAFE_INTEGER,
    expectedCode: 404,
  },
  {
    id: Number.MIN_SAFE_INTEGER,
    expectedCode: 404,
  },
  {
    id: 0,
    expectedCode: 404,
  },
];

describeSWApiValidation({
  endpoint: "people",
  totalEntries: 82,
  validationSet,
});
