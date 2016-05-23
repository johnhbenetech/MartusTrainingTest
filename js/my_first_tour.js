 // Define the tour!
    var tour = {
      id: "hello-hopscotch",
      steps: [
        {
          title: "My Header",
          content: "This is the header of my page.",
          target: document.getElementsByName("link1")[0].value,
          placement: "right"
        }
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);
        