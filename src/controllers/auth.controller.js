import authService from "../services/auth.service.js";

const login = (req, res) => {
  authService.login();
  res.send("login");
};

const register = async (req, res) => {
    
  try {
    const data = await authService.register(req.body);

    res.send(data);

  } catch (error) {

    res.status(error.status|| 400).send(error.message);
  }
};

export default { login, register };
