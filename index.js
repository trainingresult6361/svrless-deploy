const app = require("./routes");

// PORT is in all uppercase, this is deliberate as its a CONFIG, so other developers will know rightaway
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening to PORT - ${PORT}`);
});
