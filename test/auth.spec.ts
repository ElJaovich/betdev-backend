import request from "supertest";
import app from "../src/app/app";

/* ---- testing login route ---- */
describe("/login", () => {
  test("should return 403 { code: 43097 }", async () => {
    const response = await request(app)
      .post("/login")
      .send({
        email: "josaegmail.com",
        password: "",
      })
      .expect(403)
      .expect("Content-Type", /application\/json/);

    expect(response.body).toHaveProperty("code", "43097");
    expect(response.body).toHaveProperty("details");
    expect(response.body.details).toHaveLength(2);
  });

  test("should return 200", async () => {
    const response = await request(app)
      .post("/login")
      .send({
        email: "joseangel171001@gmail.com",
        password: "1234",
      })
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

/* ---- testing register route ----*/
describe("/register", () => {
  test("should return 403 { code: 43097 }", async () => {
    const response = await request(app)
      .post("/register")
      .send({
        role: "adminUser",
        name: "(Jose Angel-Cortez)",
        email: "joseangel171001gmail.com",
        password: "hola()*",
        birthDate: "17/10/2001",
        firstQuestion: "¿nombre de tu gato?*+-",
        firstResponse: "el niño+-*",
        secondQuestion: "¿Lenguaje Favorito?*+-",
        secondResponse: "JavaScript+-*",
      })
      .expect(403)
      .expect("Content-Type", /application\/json/);

    expect(response.body).toHaveProperty("code", "43097");
    expect(response.body).toHaveProperty("details");
    expect(response.body.details).toHaveLength(9);
  });

  test("should return 200", async () => {
    const response = await request(app)
      .post("/register")
      .send({
        role: "admin",
        name: "Jose Angel",
        email: "joseangel171001@gmail.com",
        password: "cortezmata55",
        birthDate: "2001-10-17",
        firstQuestion: "¿nombre de tu gato?",
        firstResponse: "el niño",
        secondQuestion: "¿Lenguaje Favorito?",
        secondResponse: "JavaScript",
      })
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

/* ---- testing verify user route ----*/
describe("/verify/user", () => {
  test("should return 403 { code: 43097 }", async () => {
    const response = await request(app)
      .post("/verify/user")
      .send({
        name: "(Jose Angel-Cortez)",
      })
      .expect(403)
      .expect("Content-Type", /application\/json/);

    expect(response.body).toHaveProperty("code", "43097");
    expect(response.body).toHaveProperty("details");
    expect(response.body.details).toHaveLength(1);
  });

  test("should return 200", async () => {
    const response = await request(app)
      .post("/verify/user")
      .send({
        email: "joseangel171001@gmail.com",
      })
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

/* ---- testing verify question route ----*/
describe("/verify/questions/:id", () => {
  test("should return 403 { code: 43097 }", async () => {
    const response = await request(app)
      .post("/verify/questions/1234")
      .send({
        firstResponse: "el niño*-+",
        secondResponse: "JavaScript*-+",
      })
      .expect(403)
      .expect("Content-Type", /application\/json/);

    expect(response.body).toHaveProperty("code", "43097");
    expect(response.body).toHaveProperty("details");
    expect(response.body.details).toHaveLength(2);
  });

  test("should return 403 { code: 43097 , details: Invalid Id}", async () => {
    const response = await request(app)
      .post("/verify/questions/1234")
      .send({
        firstResponse: "el niño",
        secondResponse: "JavaScript",
      })
      .expect(403)
      .expect("Content-Type", /application\/json/);

    expect(response.body).toHaveProperty("code", "43097");
    expect(response.body).toHaveProperty("details");
    expect(response.body.details).toBe("Invalid Id");
  });

  test("should return 200", async () => {
    const response = await request(app)
      .post("/verify/questions/2211ebd7-c9da-42d7-a1f8-dbac1e503fc8")
      .send({
        firstResponse: "el niño",
        secondResponse: "JavaScript",
      })
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

/* ---- testing reset password route ----*/
describe("/reset/password/:id", () => {
  test("should return 403 { code: 43097 }", async () => {
    const response = await request(app)
      .put("/reset/password/1234")
      .send({
          password: "hola()*",
      })
      .expect(403)
      .expect("Content-Type", /application\/json/);

    expect(response.body).toHaveProperty("code", "43097");
    expect(response.body).toHaveProperty("details");
    expect(response.body.details).toHaveLength(1);
  });

  test("should return 403 { code: 43097 , details: Invalid Id}", async () => {
    const response = await request(app)
      .put("/reset/password/1234")
      .send({
        password: "hola",
      })
      .expect(403)
      .expect("Content-Type", /application\/json/);

    expect(response.body).toHaveProperty("code", "43097");
    expect(response.body).toHaveProperty("details");
    expect(response.body.details).toBe("Invalid Id");
  });

  test("should return 200", async () => {
    const response = await request(app)
      .put("/reset/password/2211ebd7-c9da-42d7-a1f8-dbac1e503fc8")
      .send({
        password: "hola",
      })
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

/* ---- testing logut route ---- */
describe("/logout", () => {
  test("should return 200 OK", async () => {
    const response = await request(app)
      .put("/logout")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});
