//variable
var date= null;
var x = 0
var y = 0

let pays = $('#pays').val()
let op = $('#op').val()
let opcode = $('#opcode').val()
let = new Date($('#datepicker').val()+' '+$('#timepicker').val()).getHours();
y = new Date($('#datepicker').val()+' '+$('#timepicker2').val()).getHours();


// axios.get(defaultAPI+"countries/")
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });


  // fetch(defaultAPI+"countries/",{
  //   //mode: 'no-cors',
  //   //credentials: 'include',
  //   method: 'GET',
  //   //headers: headers
  // })
  // .then(response => console.log(response.body))
  // //.then(response => response.data.json())
  // .then(json => {
  //   // console.log(json);
  //   console.log(json);
  // });



// $.getJSON(defaultAPI+"countries/", function(res){
$.getJSON("https://restcountries.eu/rest/v2/all", function(res){
    // console.log(res)
    $.each(res, function(index, value){
        //ajouter ligne
        //ajouter cellules
        //console.log(value)
        $('#pays').append($("<option></option>")
                    .attr("value", value.name)
                    .text(value.name));
    });
});


var paramRequest = (url, data) =>{
  // parametresai POST
  // roaming countrie date debut date fin
  console.log("url : "+url)
  console.log("data : "+data)
  $.ajax({
    type: "POST",
    url: url,
    data: data,
    success: (success) => {
      console.log(success)
    },
    dataType: "JSON"
  });
}
			

			
