const app = require('./config/custom-express');

require('./config/custom-express');

app.listen(3001, () => {
    console.log('Server rodando!');
});