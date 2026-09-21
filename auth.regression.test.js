// auth.regression.test.js

const { login } = require("./auth");

describe("Regression Test - Login", () => {

    test("Login fails when password is incorrect", () => {
        expect(login("admin", "9999")).toBe(false);
    });

    test("Login fails when username is empty", () => {
        expect(login("", "123")).toBe(false);
    });

    test("Login fails when password is empty", () => {
        expect(login("admin", "")).toBe(false);
    });

    test("Login fails when password contains special characters", () => {
        expect(login("admin", "123@")).toBe(false);
    });

    test("Login fails when account is locked", () => {
        expect(login("locked", "123")).toBe(false);
    });

});
