const express = require('express');
const sequelize = require('./config/connections');
const postRoutes = require('./controllers/api/post-routes'); 
const commentRoutes = require('./controllers/api/comment-routes');
const userRoutes = require('./controllers/api/userRoutes');
const dashboardRoutes = require('./controllers/api/dashboard-routes');
// const home = require('./controllers/');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/user', userRoutes);
app.use('/dashboard', dashboardRoutes);
// app.use('/', homeRoutes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});