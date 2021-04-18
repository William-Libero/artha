const app = require('./config/custom-express');

require('./config/custom-express');

app.listen(process.env.PORT || 8000, () => {
    console.log('Server rodando!');
});