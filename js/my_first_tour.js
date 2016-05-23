 // Define the tour!
    var tour = {
      id: "hello-hopscotch",
      steps: [
        {
          title: "My Header",
          content: "This is the header of my page.",
          target: document.querySelector("#link1 > area"),
          placement: "right"
        }
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);
        