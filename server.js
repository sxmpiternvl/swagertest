const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors());

const apiProxy = createProxyMiddleware({
  target: 'https://freeapi.miniprojectideas.com',
  changeOrigin: true,
});

app.use('/', apiProxy);

app.listen(3000, () => {
  console.log('Proxy server running on port 3000');
});
