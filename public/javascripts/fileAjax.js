window.onload = function () {



    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {

            var listenlist = document.getElementById('listenlist');
            var res = JSON.parse(xhr.responseText);

            console.log(res);

            for (var i = 0; i < res.length; i++) {



                var vid_li = document.createElement('li');
                vid_li.setAttribute('class', 'list-group-item text-center');

                var vid_h2 = document.createElement('h2');
                vid_h2.innerHTML = res[i].title;

                var vid_author = document.createElement('h3');
                vid_author.innerHTML = "Author : " + res[i].author;


                var vid_genre = document.createElement('p');
                vid_genre.innerHTML = res[i].genre;

                var vid_a = document.createElement('a');
                vid_a.setAttribute('href', '/files/download/' + res[i].id);
                vid_a.setAttribute('class', "btn btn-primary");
                vid_a.innerHTML = "download content";
                
                var del_btn = document.createElement('a');
                del_btn.setAttribute('href', '/files/delete/' + res[i].id);
                del_btn.setAttribute('class', 'btn btn-danger');
                del_btn.innerHTML = 'Delete file';

                var sentby_p = document.createElement('p');
                sentby_p.innerHTML = "Video sent by : " + res[i].sender;

                listenlist.appendChild(vid_li);

                vid_li.appendChild(vid_h2);

                vid_li.appendChild(vid_author);

                vid_li.appendChild(vid_genre);

                vid_li.appendChild(vid_a);
                
                vid_li.appendChild(del_btn);

                vid_li.appendChild(sentby_p);




            }
            ;



        }

    };

    xhr.open("GET", "http://localhost:3000/files/allFiles", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();





};