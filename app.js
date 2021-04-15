const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/user');
const { sequelize } = require('./models');

dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 3000;
app.set('port', port);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// DB config
sequelize.sync();

console.log(sequelize.sync);

// Routes
app.use('/user', userRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //   res.render('error');
  res.json({ message: 'error' });
});

module.exports = app;
