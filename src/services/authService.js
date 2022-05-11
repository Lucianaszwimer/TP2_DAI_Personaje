const getSignedToken = () => {
    const userId = getRandomString();
    const userMail = `${userId}@example.com`;
    const token = jwt.sign(
      {
        payload: "custom payload",
        userEmail: userMail,
      },
      process.env.AUTH0_HS256_KEY,
      {
        issuer: "http://personaje.ort/",
        subject: userId,
        audience: ["http://localhost/"],
        expiresIn: 60 * 24 * 24,
      }
    );
  
    return token;
  };
  
  console.log(getSignedToken());
  