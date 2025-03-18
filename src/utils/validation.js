const validateBodySchema = (validateSchema) => {
  return async (req, res, next) => {
    try {
      await validateSchema.validateAsync(req.body, {
        abortEarly: false,
      });

      next();
    } catch (error) {
      console.log("Error from body validation");
      const errorMsg = error.details.map((err) => {
        return err.message;
      });
      return res.status(400).json({ error: errorMsg });
    }
  };
};

export { validateBodySchema };
