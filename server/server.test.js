const request = require("supertest");
const app = require("./server");
const mockData = {
  pager: {
    totalItems: 78732,
    currentPage: 1,
    pageSize: 10,
    totalPages: 7874,
    startPage: 1,
    endPage: 10,
    startIndex: 0,
    endIndex: 9,
    pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  pageOfItems: [
    {
      id: 1,
      number: "DGJ DGJ JMPT"
    },
    {
      id: 2,
      number: "EGJ DGJ JMPT"
    },
    {
      id: 3,
      number: "FGJ DGJ JMPT"
    },
    {
      id: 4,
      number: "DHJ DGJ JMPT"
    },
    {
      id: 5,
      number: "EHJ DGJ JMPT"
    },
    {
      id: 6,
      number: "FHJ DGJ JMPT"
    },
    {
      id: 7,
      number: "DIJ DGJ JMPT"
    },
    {
      id: 8,
      number: "EIJ DGJ JMPT"
    },
    {
      id: 9,
      number: "FIJ DGJ JMPT"
    },
    {
      id: 10,
      number: "DGK DGJ JMPT"
    }
  ]
};
describe("GET / ", () => {
  test("It should respond with an array of possible phone number and pager", async () => {
    const response = await request(app)
      .get("/api/getalphaNnumericphoneNumbers")
      .query({ page: 1, phoneNumber: "345-345-5678" });
    expect(response.body).toEqual(mockData);
    expect(response.statusCode).toBe(200);
  });
});
