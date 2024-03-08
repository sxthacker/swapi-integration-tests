import {
  BASE_URL,
  describeSWApiValidation,
  SWApiValidationSet,
} from "./util";

const validationSet: SWApiValidationSet = [
  {
    id: 1,
    expectedCode: 200,
    expectedBody: {
      "title": "A New Hope",
      "episode_id": 4,
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      "director": "George Lucas",
      "producer": "Gary Kurtz, Rick McCallum",
      "release_date": "1977-05-25",
      "characters": [
        `${BASE_URL}/api/people/1/`,
        `${BASE_URL}/api/people/2/`,
        `${BASE_URL}/api/people/3/`,
        `${BASE_URL}/api/people/4/`,
        `${BASE_URL}/api/people/5/`,
        `${BASE_URL}/api/people/6/`,
        `${BASE_URL}/api/people/7/`,
        `${BASE_URL}/api/people/8/`,
        `${BASE_URL}/api/people/9/`,
        `${BASE_URL}/api/people/10/`,
        `${BASE_URL}/api/people/12/`,
        `${BASE_URL}/api/people/13/`,
        `${BASE_URL}/api/people/14/`,
        `${BASE_URL}/api/people/15/`,
        `${BASE_URL}/api/people/16/`,
        `${BASE_URL}/api/people/18/`,
        `${BASE_URL}/api/people/19/`,
        `${BASE_URL}/api/people/81/`
      ],
      "planets": [
        `${BASE_URL}/api/planets/1/`,
        `${BASE_URL}/api/planets/2/`,
        `${BASE_URL}/api/planets/3/`
      ],
      "starships": [
        `${BASE_URL}/api/starships/2/`,
        `${BASE_URL}/api/starships/3/`,
        `${BASE_URL}/api/starships/5/`,
        `${BASE_URL}/api/starships/9/`,
        `${BASE_URL}/api/starships/10/`,
        `${BASE_URL}/api/starships/11/`,
        `${BASE_URL}/api/starships/12/`,
        `${BASE_URL}/api/starships/13/`
      ],
      "vehicles": [
        `${BASE_URL}/api/vehicles/4/`,
        `${BASE_URL}/api/vehicles/6/`,
        `${BASE_URL}/api/vehicles/7/`,
        `${BASE_URL}/api/vehicles/8/`
      ],
      "species": [
        `${BASE_URL}/api/species/1/`,
        `${BASE_URL}/api/species/2/`,
        `${BASE_URL}/api/species/3/`,
        `${BASE_URL}/api/species/4/`,
        `${BASE_URL}/api/species/5/`
      ],
      "created": "2014-12-10T14:23:31.880000Z",
      "edited": "2014-12-20T19:49:45.256000Z",
      "url": `${BASE_URL}/api/films/1/`
    }
  }
]

describeSWApiValidation({
  endpoint: "films",
  totalEntries: 6,
  validationSet,
});
