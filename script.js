// TODO: STEP 0
(function () {
    // Array of category short_names
    var categoryShortNames = ["L", "D", "S", "A", "P"];

    // Generate a random index to select a category short_name
    var randomIndex = Math.floor(Math.random() * categoryShortNames.length);

    // Select a random category short_name
    var randomCategoryShortName = categoryShortNames[randomIndex];

    // Update onclick attribute to use randomCategoryShortName
    document.getElementById("specials").setAttribute("onclick", "$dc.loadMenuItems('" + randomCategoryShortName + "');");
})();
