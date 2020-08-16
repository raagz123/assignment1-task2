incdiv = 0
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


function preview_image(event) {
var reader = new FileReader();
reader.onload = function(){

	var today = new Date()

	console.log(today)

  var div = document.createElement('div');
       div.style.width = "32rem";
       div.className = 'card'
       div.id = 'postid'+incdiv
       document.getElementById('newdiv').insertBefore(div,document.getElementById('newdiv').firstChild);
document.getElementById('postid'+incdiv).innerHTML +=" <h10 class=' card-content'>\
                  <img src='images/Logo2.png' height='30' class='round' alt=''> <strong> Saiyajin_Pride </strong>\
               </h10>\
               <p class='paid-text card-content' > "+today+"</p>\
               <img  height='500' id='file"+incdiv+"' class='card-img-top card-image' alt='...'>\
               <p>\
                  <a href='#' class=''> <i class='far fa-heart insta-button'></i></a>\
                  <a href='#' class=''> <i class='far fa-comment insta-button'></i></a>\
                  <a href='#' class=''> <i class='far fa-paper-plane insta-button'></i></a>\
               </p>\
               <p class='card-text'>745 likes</p>\
               <div class='comment-section comment-bar'>\
               <form action='.'>\
                  <div class='input-group'>\
                     <input type='text' class='form-control comment'placeholder='Add a Comment ...' >\
                     <div class='input-group-append'>\
                        <button class='btn post-button ' type='submit'> Post </button>\
                     </div>\
                  </div>\
               </form>\
            </div>\
               ";
  var output = document.getElementById('file'+incdiv);
  // console.log(output)
  output.src = reader.result;
}
reader.readAsDataURL(event.target.files[0]);
incdiv=incdiv+1
}
