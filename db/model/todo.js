const todo = new mongoose.Schema({
  task: { type: String, reqqired: true },
  isDel: { type: Boolean, defaoult: false },
  isCompleted: { type: Boolean, defaoult: false },
});

module.exports = mongoose.model("Todo", todo);
