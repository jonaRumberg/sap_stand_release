const express = require("express");
const Gpio = require("onoff").Gpio;

const app = express();

app.set('view engine', 'ejs')
app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }))

const let4 = new Gpio(4, 'out');
const let17 = new Gpio(17, 'out');
const let27 = new Gpio(27, 'out');
const let22 = new Gpio(22, 'out');
const let23 = new Gpio(23, 'out');

const setServoArray = (arr) => {
    let17.writeSync(arr[0]);
    let27.writeSync(arr[1]);
    let22.writeSync(arr[2]);
    let23.writeSync(arr[3]);
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
    rotateMotorOnce('forward', 512); // Eine volle Umdrehung vorwärts besteht aus 512 Schritten
    res.status(200).send("Motor dreht sich jetzt");
});

app.get("/enginebwd", (_req, res) => {
    rotateMotorOnce('backward', 512); // Eine volle Umdrehung rückwärts besteht aus 512 Schritten
    res.status(200).send("Motor dreht sich jetzt");
});

app.get("/enginestp", (_req, res) => {
    resetStepper();
    res.status(200).send("Motor gestoppt");
});

app.listen(3000, () => {
    console.log("Der Arduino Server ist gestartet auf Port 3000");
});

const rotateMotorOnce = (direction, steps) => {
    let stepCount = 0;
    const delayBetweenSteps = 5; // Verzögerung zwischen jedem Schritt in Millisekunden

    const step = () => {
        if (stepCount < steps) {
            if (direction === 'forward') {
                stepCount++;
                if (stepCount > 7) {
                    stepCount = 0;
                }
            } else if (direction === 'backward') {
                stepCount--;
                if (stepCount < 0) {
                    stepCount = 7;
                }
            }
            setServoArray(stepSequence[stepCount]);
            setTimeout(step, delayBetweenSteps);
        } else {
            resetStepper(); // Stepper zurücksetzen, wenn alle Schritte abgeschlossen sind
        }
    };

    step(); // Starten des Drehens
};

const resetStepper = () => setServoArray([0,0,0,0]);
