//DOCUMENT READY
$(document).ready(function() {


    var searchTerm = $('#').text();
    var page = $('#').text();
    var startDate = $('#').text();
    var endDate = $('#').text();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
      'api-key': "93d530ac0e9e4b9ca655037aa3802081",
      'q': searchTerm,
      'begin_date': "startDate",
      'end_date': "endDate",
      'page': 5
    });


    

    $.ajax({
      url: queryURL,
      method: 'GET',
    }).then(function(response) {
 
        console.log(response);








    });

    














});