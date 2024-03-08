import * as axios from "axios";

export const BASE_URL = process.env.SWAPI_URL ?? "http://localhost:8000";
axios.defaults.baseURL = BASE_URL + "/api";
axios.defaults.validateStatus = () => true;

export type SWApiValidationSet = {
  id: number,
  expectedCode: number,
  expectedBody?: {},
}[]

interface GetAllResponse {
  count: number,
  next: string | null,
  results: {}[],
}

const NOT_FOUND_RESPONSE = {
  "detail": "Not found"
};

const INVALID_PAGES = [
  Number.MIN_SAFE_INTEGER,
  0,
  Number.MAX_SAFE_INTEGER,
];

export const describeSWApiValidation = ({
  endpoint,
  totalEntries,
  validationSet
}: {
  endpoint: string,
  totalEntries: number,
  validationSet: SWApiValidationSet,
}) => {
  describe(`api/${endpoint}`, () => {
    test(`getAll fetches ${totalEntries} entries`, async () => {
      let res = await axios.get(endpoint);
      let initialData: GetAllResponse = res.data;
      expect(res.status).toEqual(200);
      expect(initialData.count).toEqual(totalEntries);

      let resultsCount = res.data.results.length;
      while (res.data.next !== null) {
        res = await axios.get(res.data.next);
        const data: GetAllResponse = res.data;
        resultsCount += data.results.length;
      }
      expect(resultsCount).toEqual(totalEntries);
    });

    test("accessing an invalid resource results in a 404", async () => {
      let { status, data } = await axios.get(`${endpoint}/invalid`);
      expect(status).toEqual(404);
      expect(data).toMatchObject(NOT_FOUND_RESPONSE);
    });

    test.each(INVALID_PAGES)(
      "accessing an invalid page '%i' results in a 404",
      async (pageIndex) => {
        let { status, data } = await axios.get(`${endpoint}/?page=${pageIndex}`);
        expect(status).toEqual(404);
        expect(data).toMatchObject(NOT_FOUND_RESPONSE);
      })

    test("can fetch the schema", async () => {
      let { status, data } = await axios.get(`${endpoint}/schema`);
      expect(status).toEqual(200);
      expect(data).toBeDefined();
    });

    if(validationSet.length <= 0) {
      return;
    }
    test.each(validationSet)(
      "getting id($id) responds with code $expectedCode with the expected response body",
      async ({ id, expectedCode, expectedBody }) => {
        let { status, data } = await axios.get(`${endpoint}/${id}`);
        expect(status).toEqual(expectedCode);

        if (!expectedBody) {
          expectedBody = NOT_FOUND_RESPONSE;
        }
        expect(data).toMatchObject(expectedBody);
      })
  });
}
