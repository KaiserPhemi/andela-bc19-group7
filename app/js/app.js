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



<<<<<<< HEAD
var favMovies = new Firebase('https://moviefire.firebaseio.com/movies');
 
function saveToList(event) {
    if (event.which == 13 || event.keyCode == 13) { // as the user presses the enter key, we will attempt to save the data
        var notice = document.getByClassName('notice').value.trim();
        var group = document.getElementById('dropdownMenuButton').value.trim();
        if (notice.length > 0 && group.length > 0 ) {
        	var li1 = '<li>' + notice + '</li>';
            var li2 = '<li>' + group + '</li>';
            document.getElementById('favMovies').innerHTML += li;
        }
        document.getElementByClassName('notice').value = '';
        document.getElementById('dropdownMenuButton').value = '';
        var movieName = document.getElementById('movieName').value.trim();
        if (movieName.length > 0) {
            saveToFB(movieName);
        }
        document.getElementById('movieName').value = '';

        return false;
    }
};
 
function saveToFB(movieName) {
    // this will save data to Firebase
    favMovies.push({
        name: movieName
    });
};
 
function refreshUI(list) {
    var lis = '';
    for (var i = 0; i < list.length; i++) {
        lis += '<li data-key="' + list[i].key + '">' + list[i].name + '</li>';
    };
    document.getElementById('favMovies').innerHTML = lis;
};
 
// this will get fired on inital load as well as when ever there is a change in the data
favMovies.on("value", function(snapshot) {
    var data = snapshot.val();
    var list = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            name = data[key].name ? data[key].name : '';
            if (name.trim().length > 0) {
                list.push({
                    name: name,
                    key: key
                })
            }
        }
    }
    // refresh the UI
    refreshUI(list);
});
=======
>>>>>>> 2f5568c2e95c02d751ef945077452ad9dad3a517
