
var notice = new Firebase('https://noticeboard-8dd7f.firebaseio.com/');

function saveToList(event) {
    if (event.which == 13 || event.keyCode == 13) { // as the user presses the enter key, we will attempt to save the data
        var notice = document.getElementById('notice').value.trim();
        var group = document.getElementById('group').value.trim();
        if (notice.length > 0 && group.length > 0 ) {
        	var li1 = '<li>' + notice + '</li>';
            var li2 = '<li>' + group + '</li>';
            document.getElementById('favMovies').innerHTML += li;
        }
        document.getElementById('notice').value = '';
        document.getElementById('group').value = '';
        return false;
    }
}