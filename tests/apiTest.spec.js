import { user } from "../src/data/users.js";
import { test, expect } from "../src/myFixtures/myFixtures.js";

test.describe("API testing", () => {
  test("GET All Products List", async ({ request }) => {
    //Act
    const response = await request.get("/api/productsList");

    //Assert
    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    //Assert
    expect(responseBody).toHaveProperty("products");
    expect(responseBody.products.length).toBeGreaterThan(0);
    expect(Array.isArray(responseBody.products)).toBeTruthy();

    console.log(responseBody);
  });

  test("POST To Verify Login with valid details @api", async ({ request }) => {
    const response = await request.post("/api/verifyLogin", {
      data: {
        email: user.email,
        password: user.validPassword,
      },
    });

    expect(response.status()).toBe(200);
  });

  test("GET All Products List using POST method", async ({ request }) => {
    //Act
    const response = await request.post("/api/productsList");

    const responseBody = await response.json();
    
    //Assert
    expect(responseBody.responseCode).toBe(405);
    expect(responseBody.message).toStrictEqual(
      "This request method is not supported."
    );

    console.log(responseBody);
  });
    
    test(`GET user account detail by email: ${user.email}`, async ({ request }) => {
        const response = await request.get(`/api/getUserDetailByEmail?email=${user.email}`);

        expect(response.status()).toBe(200);

        const responseBody = await response.json();

        expect(responseBody).toMatchObject({
          responseCode: 200,
          user: {
            id: expect.any(Number),
            name: expect.any(String),
            email: user.email,
            title: expect.any(String),
            birth_day: expect.any(String),
            birth_month: expect.any(String),
            birth_year: expect.any(String),
            first_name: expect.any(String),
            last_name: expect.any(String),
            company: expect.any(String),
            address1: expect.any(String),
            address2: expect.any(String),
            country: expect.any(String),
            state: expect.any(String),
            city: expect.any(String),
            zipcode: expect.any(String),
            },
            
        });

        expect(responseBody).toHaveProperty("user");

        console.log(responseBody);
    });
    
});
