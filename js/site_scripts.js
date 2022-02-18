//Javascript Code to Create the Partner Section
      var partners = []; //empty array to store partners
      var filenames = []; //empty array to store filenames
      var partnerList = []; //empty array to store html list that contains an image
      var image; //variable to store the assembled image list codes
      var openList = "<li id='partner'>"; //variable to contain open list
      var closeList = "</li>"; //variable to contain close list

      //create a loop to create 6 partner images
      for (var i = 0; i < 6; i++) {
        filenames.push("partner" + (i + 1)); //generate filenames
        partners.push("<img src='partners/" + filenames[i] + ".png'>");
        image = openList + partners[i] + closeList; //Assemble
        partnerList.push(image); //store partner image
      }
      //Display images from the array into the partner section
      document.getElementById("partners").innerHTML = partnerList.join(" ");