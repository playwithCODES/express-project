import { verifyJWT } from "../utils/jwt.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(req.headers.authorization);
  let token;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token=authHeader.split(" ")[1];
  }else{
    const cookie = req.headers.cookie;
    if (!cookie) return res.status(401).send("User not authenticated");
    token=cookie.split("=")[1];
  }

  if (!token) return res.status(401).send("User not authenticated");

  try {
    console.log("TOKEN:", token);
    const data = await verifyJWT(token);
      console.log("DECODED:", data);
    req.user = data;

    next();
  } catch (error) {
    res.status(401).send("Invalid token");
  }
};

export default auth;

