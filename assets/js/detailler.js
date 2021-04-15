//variable
var date= null;
// const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
let pays = $('#pays').val()
let op = $('#op').val()
let opcode = $('#opcode').val()
let = new Date($('#datepicker').val()+' '+$('#timepicker').val()).getHours();
let y = new Date($('#datepicker2').val()+' '+$('#timepicker2').val()).getHours();


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
  
  console.log("url : "+url),
  console.log("data : "+data),
  fetch(url, {
    method: 'OPTIONS',
    Access: 'POST',
    referrerPolicy: 'strict-origin-when-cross-origin',
    headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
        },
    body: JSON.stringify(data),
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}  


























// Example POST method implementation:
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     type: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'no-cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       "Accept": "application/json",
//   },
//       // 'Content-Type': 'applica
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into 
// }