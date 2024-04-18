
const express = require("express");
const Gpio = require("onoff").Gpio;

const { exec } = require('child_process');

const app = express();

app.set('view engine', 'ejs')
app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }))

const let4 = new Gpio(4, 'out');
const let17 = new Gpio(17, 'out');
const let27 = new Gpio(27, 'out');
const let22 = new Gpio(22, 'out');
const let23 = new Gpio(23, 'out');


const let2 = new Gpio(2, 'out');
const let6 = new Gpio(6, 'out');
const let13 = new Gpio(13, 'out');
const let19 = new Gpio(19, 'out');
const let16 = new Gpio(16, 'out');

let2 = new Gpio(2, 'out');
const let8 = new Gpio(8, 'out');
const let11 = new Gpio(11, 'out');
const let9 = new Gpio(9, 'out');
const let10 = new Gpio(10, 'out');

const setServoArray = (arr) => {
        let17.writeSync(arr[0]);
        let27.writeSync(arr[1]);
        let22.writeSync(arr[2]);
        let23.writeSync(arr[3]);
}

const setServoArray2 = (arr) => {
        let6.writeSync(arr[0]);
        let13.writeSync(arr[1]);
        let19.writeSync(arr[2]);
        let23.writeSync(arr[3]);
}

const setServoArray3 = (arr) => {
        let8.writeSync(arr[0]);
        let11.writeSync(arr[1]);
        let9.writeSync(arr[2]);
        let10.writeSync(arr[3]);
}

const stepSequence = [
        [1,0,0,0],
        [1,1,0,0],
        [0,1,0,0],
        [0,1,1,0],
        [0,0,1,0],
        [0,0,1,1],
        [0,0,0,1],
        [1,0,0,1],
];

app.get("/", (_req, res) => {
        res.render("index");
});

app.get("/procurement", (_req, res) => {
        res.render("procurement");
});

app.get("/studiengaenge", (_req, res) => {
        res.render("studiengaenge");
});

app.get("/enginefwd", (_req, res) => {
        stepperDir = 1;
        res.status(200).send("Motor dreht sich jetzt");
});

app.get("/enginebwd", (_req, res) => {
        stepperDir = -1;
        res.status(200).send("Motor dreht sich jetzt");
});

app.get("/enginestp", (_req, res) => {
        stepperDir = 0;
        res.status(200).send("Motor dreht sich jetzt");
});

app.get("/test", (_req, res) => {
        stepperDir = 2;
        res.status(200).send("Motor dreht sich jetzt");
});

app.get("/test2", (_req, res) => {
        stepperDir = 3;
        res.status(200).send("Motor dreht sich jetzt");
});


app.get("/pull", (_req, res) => {
        var yourscript = exec('sh pull.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                res.status(404).send(`exec error: ${error}`);
                console.log(`exec error: ${error}`);
            }
        }).then(()=>{res.status(200).send("Code pulled successfully");})
});

app.listen(3000, () => {
        console.log("Der Arduino Server ist gestartet auf Port 3000");
});

app.get("/rotateonce", (req, res) => {
        const steps = 5000;    
        try {
            const result = executeSingleRotation(steps)
            res.status(200);
        } catch (error) {
            console.error("Fehler beim Drehen des Motors:", error);
            res.status(500).send("Ein Fehler ist aufgetreten");
        }
    });

var stepCount = 0;
var stepperDir = 0;
var engineselection = 1;

const executeSingleRotation = (steps) => {
        let stepCounter = 0;
        if(engineselection==1) stepperDir = 1;
        if(engineselection==2) stepperDir = 2;
        if(engineselection==3) stepperDir = 3;

        const interval = setInterval(() => {
        console.log(stepCounter);
        if (stepCounter >= steps) {
                stepperDir = 0;
                clearInterval(interval);
                resetStepper();
        } else {
                stepCounter++;
        }
        }, 1);

        engineselection++;

        if (engineselection>3) {
            engineselection = 1;    
        }
    };

const stepMotorForward = () => {
        stepCount = stepCount - 1
        if (stepCount < 0) {
                stepCount = 7;
        }
        setServoArray(stepSequence[stepCount]);
}

const stepMotorForward2 = () => {
        stepCount = stepCount + 1
        if (stepCount > 7) {
                stepCount = 0;
        }
        setServoArray2(stepSequence[stepCount]);
}

const stepMotorForward3 = () => {
        stepCount = stepCount + 1
        if (stepCount > 7) {
                stepCount = 0;
        }
        setServoArray2(stepSequence[stepCount]);
}

const updateStepper = () => {
        if (stepperDir == 1) stepMotorForward();
        if (stepperDir == 2) stepMotorForward2();
        if (stepperDir == 3) stepMotorForward3();
        if (stepperDir == 0) resetStepper();
}

const resetStepper = () => {
        setServoArray([0,0,0,0]);
        setServoArray2([0,0,0,0]);
        setServoArray3([0,0,0,0]);
        
}
setInterval(updateStepper, 1);