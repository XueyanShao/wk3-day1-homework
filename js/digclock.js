   //Create a time data function
      function currentTime() {
        var d = new Date(); //Get current date
        var hr = d.getHours(); //Get current hours
        var min = d.getMinutes(); //Get current minutes
        var sec = d.getSeconds(); //Get current seconds
        var ampm; //Declare empty variable to store AM or PM
        var utc = d.getUTCHours(); //Get Greenwich time
        var timezone; //Declare empty variable to store timezone
        //Add 0 to single digits for seconds
        if (sec < 10) {
          sec = "0" + sec;
        }
        //Add 0 to single digits for minutes
        if (min < 10) {
          min = "0" + min;
        }
        //Determine timezone
        if (utc - hr >= 0) {
          if (utc - hr == 8) {
            timezone = "PST";
          } else if (utc - hr == 6) {
            timezone = "CST";
          } else if (utc - hr == 5) {
            timezone = "EST";
          } else {
            timezone = "unknown";
          }
        } else {
          if (utc + 24 - hr == 8) {
            timezone = "PST";
          } else if (utc + 24 - hr == 6) {
            timezone = "CST";
          } else if (utc + 24 - hr == 5) {
            timezone = "EST";
          } else {
            timezone = "unknown";
          }
        }
        //Determine AM or PM string
        if (hr == 12) {
          ampm = "PM"; //Set to PM
        } else if (hr > 12) {
          hr -= 12; //Deduct 12 hours greater than 12
          ampm = "PM"; //Set to PM
        } else {
          ampm = "AM"; //Set to AM
        }
        //Assemble time format to display
        var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timezone;
        //Display current local time and time zone on HTML elements
        document.getElementById("clock").innerText = time; //Adding time
        //Run time data function every 1 second
        setInterval(currentTime, 1000); //setting timer
      }
      //Initial run of time data function
      currentTime();