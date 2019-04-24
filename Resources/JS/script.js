/*Variables*/
  var SetBoundsButton = document.getElementById('SetBounds');
  var GuessButton = document.getElementById('GuessButton');
  var RandomizationButton = document.getElementById('Randomization');
  var EventLog = document.getElementById('EventLog');
  var RealNumber;
  var GuessCounter = 0;
  var LowBound;
  var HighBound;
  var Randomization = false;
  console.log("Variables Initialized");
/*Functions*/
  var SetBounds = function() {
    LowBound = document.getElementById('LowerBound').value;
    HighBound = document.getElementById('UpperBound').value;
    RealNumber = Math.round((Math.random()*(HighBound-LowBound))+LowBound);
    GuessCounter = 0;
    Randomization = false;
    console.log(LowBound + " Has Been Set as LowBound");
    console.log(HighBound + " Has Been Set as HighBound");
    console.log(RealNumber + " Has Been Set as RealNumber");
    console.log("Randomization is " + Randomization);
  };
  var LogBounds = function() {
    if (LowBound < 0 || HighBound > 4e+31) {
      var node = document.createElement("li");
      var textnode = document.createTextNode("Please Change the lower bound to a non-negative number or change the Higher Bound to a number less than 4e31");
      node.appendChild(textnode);
      EventLog.appendChild(node);
    }
    else if (HighBound > 9e+10 && HighBound < 4e+31) {
      var node = document.createElement("li");
      var textnode = document.createTextNode("Warning: Sometimes, at higher upper bounds, the selected number will register as 'Infinity'. In this case, all inputed values will be 'Too Low'. At slightly more absurd guesses (9e+999), the Event Log will fail to display the number.");
      node.appendChild(textnode);
      EventLog.appendChild(node);
    }
    else {
      var node = document.createElement("li");
      var textnode = document.createTextNode("Bounds Set!");
      node.appendChild(textnode);
      EventLog.appendChild(node);
    }
  };
  var HigherOrLower = function() {
    if (LowBound < 0 || HighBound > 4e+31) {
      var node = document.createElement("li");
      var textnode = document.createTextNode("Error: Lower Bound is < 0 or Higher Bound is > 4e+31");
      node.appendChild(textnode);
      EventLog.appendChild(node);
    }
    else {
      var GuessValue = document.getElementById('GuessValue').value;
      var Value = GuessValue - RealNumber;
      GuessCounter ++;
      if (Value > 0) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(GuessValue + ", Too High");
        node.appendChild(textnode);
        EventLog.appendChild(node);
      }
      else if (Value < 0) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(GuessValue + ", Too Low");
        node.appendChild(textnode);
        EventLog.appendChild(node);
      }
      else if (Value === 0 && GuessCounter === 1){
        var node = document.createElement("li");
        var textnode = document.createTextNode(GuessValue + ", Correct! ");
        var textnode2 = document.createTextNode("You took " + GuessCounter + " Guess.");
        node.appendChild(textnode);
        node.appendChild(textnode2);
        EventLog.appendChild(node);
      }
      else {
        var node = document.createElement("li");
        var textnode = document.createTextNode(GuessValue + ", Correct! ");
        var textnode2 = document.createTextNode("You took " + GuessCounter + " Guesses.");
        node.appendChild(textnode);
        node.appendChild(textnode2);
        EventLog.appendChild(node);
      }
      console.log("Guess Counter is Now: " + GuessCounter);
    }
  };
  var Randomize = function() {
    if (Randomization === true) {
      Randomization = false;
      var node = document.createElement("li");
      var textnode = document.createTextNode("Randomization is Now " + Randomization);
      node.appendChild(textnode);
      EventLog.appendChild(node);
    }
    else if (Randomization === false) {
      Randomization = true;
      var node = document.createElement("li");
      var textnode = document.createTextNode("Randomization is Now " + Randomization);
      node.appendChild(textnode);
      EventLog.appendChild(node);
    }
    console.log("Randomization is Now: " + Randomization);
  };
  var Randomizer = function() {
    if (Randomization === true) {
      RealNumber = Math.round((Math.random()*(HighBound-LowBound))+LowBound);
      console.log("RealNumber has changed to: " + RealNumber);
    }
  };
/*Event Listeners*/
  SetBoundsButton.addEventListener('click', SetBounds);
  SetBoundsButton.addEventListener('click', LogBounds);
  GuessButton.addEventListener('click', HigherOrLower);
  GuessButton.addEventListener('click', Randomizer);
  RandomizationButton.addEventListener('click', Randomize);
