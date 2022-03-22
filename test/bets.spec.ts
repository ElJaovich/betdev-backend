import request from "supertest";
import app from "../src/app/app";

/* ---- testing bet by user route ---- */
describe("/betByUser", () => {
	test("should return 200 OK", async () => {
		const response = await request(app)
			.get("/betByUser")
			.expect(200)
			.expect("Content-Type", /application\/json/);
	});
});

/* ---- testing bet by user id route ---- */
describe("/betByUser/:id", () => {
	test("should return 403 { code: 43097 , details: Invalid Id}", async () => {
		const response = await request(app)
			.get("/betByUser/1234")
			.expect(403)
			.expect("Content-Type", /application\/json/);

		expect(response.body).toHaveProperty("code", "43097");
		expect(response.body).toHaveProperty("details");
		expect(response.body.details).toBe("Invalid Id");
	});

	test("should return 200 OK", async () => {
		const response = await request(app)
			.get("/betByUser/2211ebd7-c9da-42d7-a1f8-dbac1e503fc8")
			.expect(200)
			.expect("Content-Type", /application\/json/);
	});
});

/* ---- testing odd route ---- */
describe("/odd/:id", () => {
	test("should return 403 { code: 43097 , details: Invalid Id}", async () => {
		const response = await request(app)
			.get("/odd/1234")
			.expect(403)
			.expect("Content-Type", /application\/json/);

		expect(response.body).toHaveProperty("code", "43097");
		expect(response.body).toHaveProperty("details");
		expect(response.body.details).toBe("Invalid Id");
	});

	test("should return 200 OK", async () => {
		const response = await request(app)
			.get("/odd/2211ebd7-c9da-42d7-a1f8-dbac1e503fc8")
			.expect(200)
			.expect("Content-Type", /application\/json/);
	});
});

/* ---- testing bet option route ---- */
describe("/bet/option", () => {
	test("should return 403 { code: 43097 }", async () => {
		const response = await request(app)
			.post("/bet/option")
			.send({
				userId: "1234",
				betId: "1234",
				amountBet: "hola",
			})
			.expect(403)
			.expect("Content-Type", /application\/json/);

		expect(response.body).toHaveProperty("code", "43097");
		expect(response.body).toHaveProperty("details");
		expect(response.body.details).toHaveLength(3);
	});

	test("should return 200", async () => {
		const response = await request(app)
			.post("/bet/option")
			.send({
				userId: "2211ebd7-c9da-42d7-a1f8-dbac1e503fc8",
				betId: "2211ebd7-c9da-42d7-a1f8-dbac1e503fc8",
				amountBet: 100,
			})
			.expect(200)
			.expect("Content-Type", /application\/json/);
	});
});
