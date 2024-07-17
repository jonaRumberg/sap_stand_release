const express = require("express");
const cors = require("cors"); // You'll need to install this: npm install cors
const app = express();
const PORT = 4000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Add body parsing middleware

let clients = [];

let orders = [
                    {
                        status: 0,
                        date: '18.12.2004',
                        type: 'Glucose',
                        quant: 2,
                    },
                    {
                        status: 2,
                        date: '19.12.2004',
                        type: 'Glucose',
                        quant: 4,
                    },
                    {
                        status: 2,
                        date: '20.12.2004',
                        type: 'Glucose',
                        quant: 4,
                    }

                ];

app.get('/events', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'X-Accel-Buffering': 'no'
    });
    
    // Send an initial message to keep the connection alive
    res.write('data: {"message": "Connected"}\n\n');
    
    clients.push(res);
    req.on('close', () => {
        clients = clients.filter(client => client !== res);
    });
});

app.get('/notify', (req, res) => {
    console.log('Send notification to clients');
    orders.push(
                    {
                        status: 1,
                        date: '18.12.2004',
                        type: 'Glucose',
                        quant: 2,
                    }
                )

    clients.forEach(client => {
        client.write(`data: ${JSON.stringify({"message":"reload"})}\n\n`);
    });
    res.sendStatus(200);
});

app.get('/orders', (req, res) => {
    res.status(200).send(JSON.stringify(orders));
});

app.listen(PORT, () => {
    console.log(`Webhook server listening on port ${PORT}`);
});
