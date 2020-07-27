const Engineer = require("../lib/Engineer");

test("Set GitHub using constructor", () => {
    const testValue = "GitHubJake";
    const emp = new Engineer("Jake", 1, "jake@jake.com", testValue);
    expect(emp.github).toBe(testValue);
});

test("getRole() functions", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Jake", 1, "jake@jake.com", "GitHubJake");
    expect(emp.getRole()).toBe(testValue);
});

test("Get GitHub name using getGitHub()", () => {
    const testValue = "GitHubJake";
    const emp = new Engineer("Jake", 1, "jake@jake.com", testValue);
    expect(emp.getGitHub()).toBe(testValue);
});