const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5001;
const userRoute = require('./routes/user_route');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/users', userRoute);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});