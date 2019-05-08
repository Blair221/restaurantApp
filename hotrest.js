// Dependencies
var express = require("express");
var path = require("path");



// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//obj
var reservations = [
  {
    reservationName: "first person",
    phoneNumber: "1324234234",
    email: "werwer@gmail.com",
    uniqueID: 23
  }
];

var waitingList = [

];

//routing
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
  
});

app.get("/make", function (req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// Displays all reservations
app.get("/api/reservations", function (req, res) {
  return res.json(reservations);
});


//api's

// Displays all reservations
app.get("/api/reservations", function (req, res) {
  return res.json(reservations);
});

// Displays waiting list
app.get("/api/waitinglist", function (req, res) {
  return res.json(waitingList);

});

// Create New reservation or waiting list
app.post("/api/reservations", function (req, res) {

  var newReservation = req.body;

  console.log(newReservation);
  if (reservations.length < 5) {
    reservations.push(newReservation);
    res.json(newReservation);
  }
  else {

    waitingList.push(newReservation);
    res.json(newReservation);
  }
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
