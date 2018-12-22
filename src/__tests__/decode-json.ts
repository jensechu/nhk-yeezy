import * as encodedJSON from "./fixtures/encoded-json.json";
import * as decodedJSON from "./fixtures/decoded-json.json";
import decodeJSON from "../decode-json";

test("decodeJSON returns decoded JSON", () => {
  expect(decodeJSON(JSON.stringify(encodedJSON))).toEqual(decodedJSON.default);
});
