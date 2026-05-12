import { ZodError } from "zod";

const validate = (schema) => (req, res, next) => {
  try {
    const parsedData = schema.parse(req.body);

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
