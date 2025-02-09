module.exports = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: formatJoiError(error) });
  }
  next();
};

function formatJoiError(error) {
  return error.details.map((err) => err.message.replace(/\\/g, "")).join(", ");
}
