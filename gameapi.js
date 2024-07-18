const express = require("express");
const cors = require("cors"); // You'll need to install this: npm install cors
const app = express();
const PORT = 4000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Add body parsing middleware

let clients = [];
let gameState = 'none' //can be 'none' or 'running'
let orderPlaced = false
let orderFinished = false

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

app.get('/startSinglePlayer', (req, res) => {
    if(gameState == 'none' || gameState == 'running single'){
        gameState = 'running single'
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }

    console.log(gameState)
})

app.get('/startTwoPlayer', (req, res) => {
    if(gameState == 'none'){
        gameState = 'running multi'
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }

    console.log(gameState)
})

app.get('/gameStatus', (_req,res) => {
    if(gameState == 'none'){
        res.status(200).send('none')
    } else if (gameState == 'running single'){
        res.status(200).send('running single')
    } else if (gameState == 'running multi'){
        res.status(200).send('running multi')
    }

    console.log(gameState)
})

app.get('/notify', (req, res) => {
});

app.get('/placeOrder', (req, res) => {
    if(gameState == 'running multi'){
        console.log('Place Order');
        orderPlaced = true

        clients.forEach(client => {
            client.write(`data: ${JSON.stringify({"message":"place order"})}\n\n`);
        });
        res.sendStatus(200);
    }
})

app.get('/getOrderPlaced', (req, res) => {
    console.log('got order placed: ', orderPlaced)
    res.status(200).send(orderPlaced)
})

app.get('/finishOrder', (req, res) => {
    if(gameState == 'running multi' && orderPlaced){
        orderPlaced = false
        orderFinished = true
    }
    res.sendStatus(200);
})

app.get('/getFinishOrder', (req, res) => {
    console.log('got order finished: ', orderFinished)
    res.status(200).send(orderFinished)
})

app.get('/endGame', (req, res) => {
    if(gameState == 'running multi'){
        gameState = 'none'
    }
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`Webhook server listening on port ${PORT}`);
});
