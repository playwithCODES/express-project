import { ZodError } from "zod";

const validate = (schema) => (req, res, next) => {
  try {
    const parsedData = schema.parse(req.body);

    // 🔥 THIS IS THE KEY LINE
    req.validatedData = parsedData;

    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        errors: error.format(),
      });
    }
    next(error);
  }
};

export default validate;
