const express = require('express');
const homeRoutes = require('./routes/htmlRoutes/homeRoutes');
const dbRoutes = require('./routes/apiRoutes/dbRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path,join(__dirname, 'public')));
app.use(require('./api', dbRoutes));
app.use(require('/', homeRoutes));

app.listen(PORT,()=>console.log(`Now listeing on http://localhost:${PORT}`));