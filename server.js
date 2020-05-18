const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        // ...Express server handlers

        // Fallback handler
        server.get('*', (req, res) => {
            return handle(req, res);
        });

        // Listen on the default port (3000)
        server.listen(port, err => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    });