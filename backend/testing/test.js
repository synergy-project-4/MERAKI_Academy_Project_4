const mongoose = require('mongoose');
const app = require('../server');
const superTest = require("supertest");
const User = require("../db/models/user")
const Product = require("../db/models/productSchema")
jest.setTimeout(30000);

// jest.useFakeTimers()
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};
mongoose.connect("mongodb://localhost:27017/Testing", options)

beforeAll(async () => {
    await User.remove()
    await Product.remove()
});
afterEach(async () => {
    await User.remove();
    await Product.remove()
})
afterAll(async () => {
    await User.remove();
    await Product.remove()
    await mongoose.connection.close()
});
test('should', () => {
    expect(1).toBe(1)
})


describe(" Testing User module", () => {
    it("check if the model defined ", () => {
        expect(User).toBeDefined()
    })
    it(" should save a User", async () => {
        const userInfo = {
            firstName: "mostafa",
            lastName: "jalamneh",
            city: 26,
            email: "a@a",
            password: "123",
            confirmPassword: "123",
            admin: false,
            notification: "test",
        }
        const user = new User(userInfo);
        await user.save();
        const checkUser = await User.findOne({ firstName: "mostafa" })

        expect(checkUser.firstName).toBe(userInfo.firstName)
    })
});

describe(" testing User APIS", () => {
    const user = {
        firstName: "mostafa",
        lastName: "jalamneh",
        city: "a",
        email: "a@a",
        password: "123",
        confirmPassword: "123",
        admin: false,
        notification: "test",
    }
    it(" should able to create a user", async () => {
        const newUser = await superTest(app).post("/register").send(user);
        expect(typeof newUser.body).toEqual(typeof user);
        expect(newUser.body).toHaveProperty("_id");
        expect(newUser.statusCode).toBe(201);
    })
})

describe(" Testing Product module", () => {
    it("check if the model defined ", () => {
        expect(Product).toBeDefined()
    })
    it(" should save a Product", async () => {
        const productInfo = {
            title: "aa",
            tags: "ee",
            description: "test",
            price: 11,
            quantity: 1,
            date: "1/2",
            location: "amman",
            image: "https://static.bhphotovideo.com/explora/sites/default/files/ts-space-sun-and-solar-viewing-facts-versus-fiction.jpg",
            shortDescription: "aaa",
            ready: false,
            rejected: false,
            sold: false
        }
        const product = new Product(productInfo);
        await product.save();
        const checkTitle = await Product.findOne({ title: "aa" })
        const checkTags = await Product.findOne({ tags: "ee" })

        expect(checkTitle.title).toBe(productInfo.title)
        expect(checkTags.tags).toBe(productInfo.tags)
    })
});

