import supertest from "supertest";
import server from "../../app";

const requestWithSupertest = supertest(server);

describe('GET "/"', () => {
  test('GET "/" returns all wash types', async () => {
    const res = await requestWithSupertest.get("/washes");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual([
      {
        id: 1,
        title: "Standard Wash",
        type: "shoes",
        price: 50,
      },
      {
        id: 2,
        title: "White Shoes",
        type: "shoes",
        price: 70,
      },
      {
        id: 3,
        title: "Leather",
        type: "shoes",
        price: 80,
      },
      {
        id: 4,
        title: "Suede",
        type: "shoes",
        price: 110,
      },
      {
        id: 5,
        title: "Nubuck",
        type: "shoes",
        price: 110,
      },
      {
        id: 6,
        title: "",
        type: "carpet",
        price: 100,
      },
    ]);
  });
});

describe('GET "/:id"', () => {
  test('GET "/:id" returns given wash type', async () => {
    const res = await requestWithSupertest.get("/washes/1");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({
      id: 1,
      title: "Standard Wash",
      type: "shoes",
      price: 50,
    });
  });
});

describe('PUT "/:id"', () => {
  test('PUT "/:id" updates wash type and returns it', async () => {
    const res = await requestWithSupertest.put("/washes/1").send({
      id: 1,
      title: "Standard Wash",
      type: "shoes",
      price: 50,
    });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({
      id: 1,
      title: "Standard Wash",
      type: "shoes",
      price: 50,
    });
  });
});

describe('POST "/"', () => {
  test('POST "/" adds new wash type and returns the added item', async () => {
    const res = await requestWithSupertest.post("/washes").send({
      title: "Standard",
      type: "carpet",
      price: 20,
    });
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
    expect(res.body).toEqual({
      id: 7,
      title: "Standard",
      type: "carpet",
      price: 20,
    });
  });
});
