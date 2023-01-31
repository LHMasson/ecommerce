const app = require('./app');

app.listn(process.env.PORT, () => {
    console.log(`server startrd on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode `);
})