import { verifyJWT } from "../utils/jwt.js";

const auth = async (req, res, next) => {
  try {
    const token = req.cookies?.authToken; // ✅ correct cookie name

    if (!token) {
      return res.status(401).send("User not authenticated");
    }

    const decoded = await verifyJWT(token); // ✅ verify
    req.user = decoded; // ✅ fix
    next();
  } catch (error) {
    return res.status(401).send("Invalid token");
  }
};

export default auth;
