function waitingFn(timeInMs) {

    const futureTime = Date.now() + timeInMs;
    while (futureTime > Date.now()) {


    }

}
debugger;
waitingFn(3000);

connsole.log("Funtion has endend");