const Intern = require("../lib/Intern");

test("Set School using constructor", () => {
    const testValue = "Arizona";
    const emp = new Intern("Jake", 1, "jake@jake.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("getRole() functions", () => {
    const testValue = "Intern";
    const emp = new Intern("Jake", 1, "jake@jake.com", "Arizona");
    expect(emp.getRole()).toBe(testValue);
});

test("Get School using getSchool()", () => {
    const testValue = "Arizona";
    const emp = new Intern("Jake", 1, "jake@jake.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});