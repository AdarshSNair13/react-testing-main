import {describe,it,expect} from "vitest"
import { USER_API, add, fetchUser, isAuthenticated, languages, reverseString, user } from "./helper"

describe("add fuction", () => {
    it("returns 1 + 1 = 2", () => {
        expect(add(1,1)).toBe(2);
    })
    it("check strings", () => {
        expect(add("1","1")).toBe(0);
    })
})

describe("reverseString", () => {
    it("if reverseString properly", () => {
        expect(reverseString("ab")).toBe("ba");
    })
    it("if reverseString is define", () => {
        expect(reverseString).toBeDefined();
    })
})

describe("checking API", () => {
    it("user api properly", () => {
        expect(USER_API).toBe("https://api.com/user");
    })
})

describe("lanugages", () => {
    it("check languages equal", () => {
        expect(languages).toEqual( ["JS","CSS","HTML"]);
    })
})

describe("user", () => {
    it("check user object equal", () => {
        expect(user).toEqual( {
            name:"Anu",
            age:20
        });
    })
})

describe("user", () => {
    it("check user object equal", () => {
        expect(user).toHaveProperty("name");
        expect(user).toHaveProperty("age");
    })
})

// describe("API", () => {
//     it("check api", async () => {
//         const data = await fetchUser();
//         expect(data).toHaveProperty("title")
//         expect(data).toHaveProperty("userId")
//         expect(data).toHaveProperty("id")
//     })
// })

describe("isAutheticated", () => {
    it("if user is logged in", () => {
        expect(isAuthenticated(true)).toBeTruthy();
    })

    it("if user is logged not in?",() => {
        expect(() => isAuthenticated(false)).toThrow();
    })
})