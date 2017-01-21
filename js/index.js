//Run some jQuery
$(document).ready(function(){
  //When search is clicked run code
  $('#search').click(function(){
    //Gets search input
   var searchTerm= $('#searchTerm').val();
    //API url with searchTerm
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    //Wikipedia API ajax call
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType: "json",
      success: function(data){
       // Get heading console.log(data[1][0]);
       // Get description console.log(data[2][0]);
       // Get link console.log(data[3][0]);
        $('#output').html('');
     for(var i=0;i<data[1].length;i++){
        $('#output').prepend("<li><h3><a href= "+data[3][i]+" target='_blank'>"+data[1][i] +"</a></h3><p>"+data[2][i]+"</p></li>");
       
     }
      $('#searchTerm').val('');  
      },
      error: function(errorMessage){
        alert("Error");
      }    
    });
    
  });
  $('#searchTerm').keypress(function(e){
    if(e.which == 13){
      $('#search').click();
    }
  });
});