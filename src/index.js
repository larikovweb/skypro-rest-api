const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');

const app = express();
const PORT = process.env.API_PORT || 3005;
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Запрос на адрес: ${req.originalUrl}`);
  next();
});

app.use('/user', userRoutes);
app.use('/book', bookRoutes);

async function start() {
  try {
    const {
      MONGO_INITDB_ROOT_USERNAME: username,
      MONGO_INITDB_ROOT_PASSWORD: password,
      MONGO_HOST: host,
    } = process.env;
    const uri = `mongodb://${username}:${password}@${host}/my_db?authSource=admin`;
    await mongoose.connect(uri, {});

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
