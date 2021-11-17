const user = new mongoose.Schema({
  name: { type: String, reqqired: true },
  email: { type: String, reqqired: true },
  password: { type: String, reqqired: true },
});

module.exports = mongoose.model("User", user);
