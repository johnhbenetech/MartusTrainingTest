 // Define the tour!
    var tour = {
      id: "hello-hopscotch",
      steps: [
        {
          title: "My Header",
          content: "This is the header of my page.",
          target: "link1",
          placement: "bottom",
		  onNext: function() {
			var xhr = new XMLHttpRequest();  
			xhr.onreadystatechange = function() {
				if (xhr.readyState == XMLHttpRequest.DONE) {
					alert(xhr.responseText);
				}
			}
			xhr.open("POST", "https://paste.ee/api", true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
			xhr.send("key=0dedeb9f5699ef19ae6ff4f12ff8e694&paste=Moved to next step");
		  }
		},
		{
			title: "Woooo",
			content: "Yeah",
			target: "link1",
			placement: "right"
		}
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);
        