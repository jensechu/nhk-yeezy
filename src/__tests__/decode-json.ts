import * as encodedJSON from "./fixtures/encoded-json.json";
import * as decodedJSON from "./fixtures/decoded-json.json";
import decodeJSON from "../decode-json";

test("decodeJSON returns decoded JSON", () => {
  expect(decodeJSON(encodedJSON)).toBe(
    JSON.parse('"' + `${decodedJSON}` + '"')
  );
});
