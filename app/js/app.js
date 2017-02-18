//create database ref 
var dbref= new Firebase('https://noticeboard-8dd7f.firebaseio.com/');
var noticeRef = dbref.child('notice');

//load older conatcts as well as any newly added one...
noticeRef.on('child_added', function(snap) {
  console.log('added', snap.key(), snap.val());
  document.querySelector('#noticeList').innerHTML += (noticeHtmlFromObject(snap.val()));
});


//save contact
document.querySelector('#btn_submit').addEventListener("click", function( event ) {  
  event.preventDefault();

  if( document.querySelector('#group').value != '' || document.querySelector('#notice').value != '' ){
    noticeRef
      .push({
        name: document.querySelector('option').value,
        announcement: document.querySelector('#notice').value,
        
      })
      noticeForm.reset();
      document.querySelector('#notice').value ='wrong answer';
  } else {
    alert('Please fill atleast name or email!');
  }
  //document.querySelector('#notice').value ='wrong answer';
}, false);

//prepare notice object's HTML
function noticeHtmlFromObject(notice){
  console.log( notice );
  var html = '';
  html += '<li class="list-group-item contact">';
    html += '<div>';
      html += '<p class="lead">'+notice.name+'</p>';
      
      html += '<p><small>'+notice.announcement+'</small></p>';
      html += '<a href="javascript:" ng-click="edit($index)">Edit</a> |<a href="#" ng-click="del($index)">Delete</a>';
    html += '</div>';
  html += '</li>';
  return html;
}



