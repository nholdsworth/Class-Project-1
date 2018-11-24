$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAQ53ca_s_uXVyKNZrRFTYSIfbgJhJKAZQ",
        authDomain: "cheap-date-fc5c4.firebaseapp.com",
        databaseURL: "https://cheap-date-fc5c4.firebaseio.com",
        projectId: "cheap-date-fc5c4",
        storageBucket: "cheap-date-fc5c4.appspot.com",
        messagingSenderId: "196759091475"
    };

    firebase.initializeApp(config);

    // On click function for use to submit their recipe request based on the ingredients in their fridge.
    $(document).on("click", "#find-recipes", function (event) {
        // prevent the page from refreshing
        event.preventDefault();
        // storing the user input in whatsInTheFridge variable so that it can be concatenated into the spoonacular search endpoint URL
        let whatsInTheFridge = $("#ingredient-input").val().trim();
        console.log(whatsInTheFridge);

        // creating a vairable to store the relevant URL for the user search
        let whatsInTheFridgeURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=" + whatsInTheFridge + "&limitLicense=false&number=5&ranking=1";

        $.ajax({
            beforeSend: function (request) {
                request.setRequestHeader("X-Mashape-Key", "7GGhuyabBLmsh1ZtFyQTxuQTZTV2p1PiOUYjsnMu93Ly1yeUOW");
            },
            dataType: "Json",
            method: "GET",
            url: whatsInTheFridgeURL

        }).then(function (response) {
            let results = response;
            console.log(results);

            for (var i = 0; i < results.length; i++) {

                let recipeDiv = $("#dinner-table");
                let recipeTitle = results[i].title;
                let recipeID = results[i].id;
                let titleText = $("<h4>").text(recipeTitle);
                let recipePrefix = "https://spoonacular.com/recipes/";

                let recipeImage = $("<img>");
                recipeImage.attr({
                    class: "img-fluid img-thumbnail shadow rounded",
                    src: results[i].image,
                    value: recipeID,
                })

                recipeDiv.prepend(titleText);
                recipeDiv.prepend(recipeImage);

            }

        });

    });

});
