// auth.smoke.test.js

const { login } = require("./auth");

test("Smoke Test - login successfully with admin/123", () => {
    expect(login("admin", "123")).toBe(true);
});
