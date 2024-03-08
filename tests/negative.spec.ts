import * as axios from "axios";
// init axios settings
import "./util";

describe("invalid api", () => {
  test("accessing an invalid route results in a 404", async () => {
      let { status } = await axios.get("invalid");
      expect(status).toEqual(404);
      // There currently is no graceful error
  });
});
