import request from "supertest";
import app from "../src/app/app";

/* ---- testing get admin bet user route ---- */
describe("/admin/bet get", () => {
	test("should return 200 OK", async () => {
		const response = await request(app).get("/admin/bet").expect(200);
	});
});

/* ---- testing get admin bet id route ---- */
describe("/admin/bet/:id get", () => {
	test("should return 403 { code: 43097 , details: Invalid Id}", async () => {
		const response = await request(app)
			.get("/admin/bet/1234")
			.expect(403)
			.expect("Content-Type", /application\/json/);

		expect(response.body).toHaveProperty("code", "43097");
		expect(response.body).toHaveProperty("details");
		expect(response.body.details).toBe("Invalid Id");
	});

	test("should return 200 OK", async () => {
		const response = await request(app)
			.get("/admin/bet/2211ebd7-c9da-42d7-a1f8-dbac1e503fc8")
			.expect(200)
			.expect("Content-Type", /application\/json/);
	});
});

/* ---- testing post admin bet route ---- */
describe("/admin/bet post", () => {
	test("should return 403 { code: 43097 }", async () => {
		const response = await request(app)
			.post("/admin/bet")
			.send({
				sport: "Futbol()",
				nameEvent: "Real Madrid vs Fc Barcelona*-+()",
				options: [
					{
						betOption: "2a",
						nameOption: "Fc()/*- Barcelona",
					},
					{
						betOption: "2a",
						nameOption: "Real/()*- Madrid",
					},
				],
			})
			.expect(403)
			.expect("Content-Type", /application\/json/);

		expect(response.body).toHaveProperty("code", "43097");
		expect(response.body).toHaveProperty("details");
		expect(response.body.details).toHaveLength(6);
	});

	test("should return 200", async () => {
		const response = await request(app)
			.post("/admin/bet")
			.send({
				sport: "Futbol",
				nameEvent: "Real Madrid vs Fc Barcelona",
				options: [
					{
						betOption: 2,
						nameOption: "Fc Barcelona",
					},
					{
						betOption: 2,
						nameOption: "Real Madrid",
					},
				],
			})
			.expect(200)
			.expect("Content-Type", /application\/json/);
	});
});

/* ---- testing put admin bet route ---- */
describe("/admin/bet/:id put", () => {
	test("should return 403 { code: 43097 }", async () => {
		const response = await request(app)
			.put("/admin/bet/1234")
			.send({
				sport: "Futbol()",
				nameEvent: "Real Madrid vs Fc Barcelona*-+()",
				options: [
					{
						betOption: "2a",
						nameOption: "Fc()/*- Barcelona",
					},
					{
						betOption: "2a",
						nameOption: "Real/()*- Madrid",
					},
				],
			})
			.expect(403)
			.expect("Content-Type", /application\/json/);

		expect(response.body).toHaveProperty("code", "43097");
		expect(response.body).toHaveProperty("details");
		expect(response.body.details).toHaveLength(6);
	});

	test("should return 403 { code: 43097, details: Invalid Id }", async () => {
		const response = await request(app)
			.put("/admin/bet/1234")
			.send({
				sport: "Futbol",
				nameEvent: "Real Madrid vs Fc Barcelona",
				options: [
					{
						betOption: 2,
						nameOption: "Fc Barcelona",
					},
					{
						betOption: 2,
						nameOption: "Real Madrid",
					},
				],
			})
			.expect(403)
			.expect("Content-Type", /application\/json/);
	});

	test("should return 200 ok", async () => {
		const response = await request(app)
			.put("/admin/bet/2211ebd7-c9da-42d7-a1f8-dbac1e503fc8")
			.send({
				sport: "Futbol",
				nameEvent: "Real Madrid vs Fc Barcelona",
				options: [
					{
						betOption: 2,
						nameOption: "Fc Barcelona",
					},
					{
						betOption: 2,
						nameOption: "Real Madrid",
					},
				],
			})
			.expect(200)
			.expect("Content-Type", /application\/json/);
	});
});

/* ---- testing put finish bet route ---- */
describe("/admin/finish/bet/:id put", () => {
	test("should return 403 { code: 43097 }", async () => {
		const response = await request(app)
			.put("/admin/finish/bet/1234")
			.send({
				options: [
					{
						id: "2a",
						result: "Fc()/*- Barcelona",
					},
					{
						id: "2a",
						result: "Real/()*- Madrid",
					},
				],
			})
			.expect(403)
			.expect("Content-Type", /application\/json/);

		expect(response.body).toHaveProperty("code", "43097");
		expect(response.body).toHaveProperty("details");
		expect(response.body.details).toHaveLength(4);
	});

	test("should return 403 { code: 43097, details: Invalid Id }", async () => {
		const response = await request(app)
			.put("/admin/finish/bet/1234")
			.send({
				options: [
					{
						id: "2211ebd7-c9da-42d7-a1f8-dbac1e503fc8",
						result: "won",
					},
					{
						id: "2211ebd7-c9da-42d7-a1f8-dbac1e503fc8",
						result: "won",
					},
				],
			})
			.expect(403)
			.expect("Content-Type", /application\/json/);
	});

	test("should return 403 { code: 43097, details: only won }", async () => {
		const response = await request(app)
			.put("/admin/finish/bet/2211ebd7-c9da-42d7-a1f8-dbac1e503fc8")
			.send({
				options: [
					{
						id: "2211ebd7-c9da-42d7-a1f8-dbac1e503fc8",
						result: "won",
					},
					{
						id: "2211ebd7-c9da-42d7-a1f8-dbac1e503fc8",
						result: "won",
					},
				],
			})
			.expect(403)
			.expect("Content-Type", /application\/json/);
			expect(response.body.details).toBe("only owe a winning result");
	});

	test("should return 200 ok", async () => {
		const response = await request(app)
			.put("/admin/finish/bet/2211ebd7-c9da-42d7-a1f8-dbac1e503fc8")
			.send({
				options: [
					{
						id: "2211ebd7-c9da-42d7-a1f8-dbac1e503fc8",
						result: "won",
					},
					{
						id: "2211ebd7-c9da-42d7-a1f8-dbac1e503fc8",
						result: "lost",
					},
				],
			})
			.expect(200)
			.expect("Content-Type", /application\/json/);
	});
});

/* ---- testing delete admin bet id route ---- */
describe("/admin/bet/:id get", () => {
	test("should return 403 { code: 43097 , details: Invalid Id}", async () => {
		const response = await request(app)
			.delete("/admin/bet/1234")
			.expect(403)
			.expect("Content-Type", /application\/json/);

		expect(response.body).toHaveProperty("code", "43097");
		expect(response.body).toHaveProperty("details");
		expect(response.body.details).toBe("Invalid Id");
	});

	test("should return 200 OK", async () => {
		const response = await request(app)
			.delete("/admin/bet/2211ebd7-c9da-42d7-a1f8-dbac1e503fc8")
			.expect(200)
			.expect("Content-Type", /application\/json/);
	});
});
