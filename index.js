const express = require('express');
const sequelize = require('./config/connection');

const postRoutes = require('./routes/api/post-routes'); 
const commentRoutes = require('./routes/api/comment-routes');
const userRoutes = require('./routes/api/userRoutes');
const dashboardRoutes = require('./routes/api/dashboard-routes');
const homeRoutes = require('./routes/homeRoutes');
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
app.use('/', homeRoutes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});