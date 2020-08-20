   $('#myModal').on('shown.bs.modal', function () {
   $('#myInput').trigger('focus')
   })

   //Counter to keep track of new post id
   incdiv = 0
   
   // Function for posting the images on the html page
   function preview_image(event) {

   // Uploading the images from the file explorer of device
   var reader = new FileReader();
   reader.onload = function(){

      // fetches the current data
      var today = new Date()

   // Creating a div for the new post and setting the attributes for new div
   var div = document.createElement('div');
         div.style.width = "32rem";
         div.className = 'card'

         // Setting new postId
         div.id = 'postid'+incdiv

         // creating a parent div to insert new post every time as first child
         parent = document.getElementById('newdiv')
         document.getElementById('newdiv').insertBefore(div,parent.firstChild);
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
   output.src = reader.result;
   }
   reader.readAsDataURL(event.target.files[0]);
   incdiv=incdiv+1
   }
