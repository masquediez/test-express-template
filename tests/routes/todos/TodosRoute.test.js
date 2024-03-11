const request = require("supertest");
const app = require("../../../src/server");

describe("GET /v1/todos/all", () => {
  test("responds with json", async () => {
    const response = await request(app)
      .get("/v1/todos/all")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual([]);
  });

  test("responds with json", async () => {
    const response = await request(app)
      .get("/v1/todos/byid")
      .expect("Content-Type", /json/)
      .query({ todoId: "1" })
      .expect(200);

    expect(response.body.todo.id).toBe("1");
  });
});
