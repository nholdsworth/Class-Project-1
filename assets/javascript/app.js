//Javascript - Class Project 1, Group 1

$(document).ready(function(){
    //event listener
    $("button").click(function(){

        //ajax call
        $.ajax({
            url: "https://api.imgflip.com/get_memes",
            method: "GET"
        }).then(function(response) {
            console.log(response);

            let results = response.data.memes;
            console.log(results);

            //loops through array
            for (var i = 0; i < results.length; i++) {

                //create div to house images, add classes
                let imageDiv = $("<div>");
                imageDiv.addClass("d-inline-block iDiv");

                //create image tags, adds necessary attributes to each image
                let memeImage = $("<img>");
                memeImage.attr("id", results[i].id);
                memeImage.attr("name", results[i].name);
                memeImage.attr("src", results[i].url);

                //set image widths to be uniform
                memeImage.attr("width", "350");
                memeImage.attr("height", "200");

                //add class in case we need for CSS later
                memeImage.addClass("memeImage");

                //append images to div
                imageDiv.append(memeImage);
                
                //display in html
                $("#memeDisplay").append(imageDiv);
                    
            }
        });
    });
});