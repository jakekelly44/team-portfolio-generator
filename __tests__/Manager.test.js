const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Office Number using constructor", () => {
    const testValue = 44;
    const emp = new Manager("Jake", 1, "jake@jake.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});

test("getRole() functions", () => {
    const testValue = "Manager";
    const emp = new Manager("Jake", 1, "jake@jake.com");
    expect(emp.getRole()).toBe(testValue);
});

test("Get Office Number using getOffice()", () => {
    const testValue = 44;
    const emp = new Manager("Jake", 1, "jake@jake.com", testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
});