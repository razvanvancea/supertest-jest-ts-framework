import { matchers } from "jest-json-schema";
import publicCrocodilesController from "../controller/public-crocodiles.controller";
import { getCrocodileByIdSchema } from "../data/response/get-crocodile-by-id-schema";
expect.extend(matchers);

describe("public Crocodiles", () => {
  describe("GET crocodiles", () => {
    it("GET crocodiles", async () => {
      const res = await publicCrocodilesController.getCrocodiles();
      expect(res.statusCode).toEqual(200);
      expect(res.body.length).toBeGreaterThan(1);
      expect(Object.keys(res.body[0])).toEqual([
        "id",
        "name",
        "sex",
        "date_of_birth",
        "age",
      ]);
    });

    it("GET crocodile by ID", async () => {
      const res = await publicCrocodilesController.getCrocodileById(1);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toMatchSchema(getCrocodileByIdSchema);
    });

    it("GET crocodile by invalid ID", async () => {
        const res = await publicCrocodilesController.getCrocodileById(111111111111);
        expect(res.statusCode).toEqual(404);
      });
  });
});
