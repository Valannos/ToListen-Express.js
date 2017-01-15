/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




window.onload = function () {



    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {

            var listenlist = document.getElementById('listenlist');
            var res = JSON.parse(xhr.responseText);

            console.log(res);

            for (var i = 0; i < res.length; i++) {

                var del_btn = document.createElement('a');
                del_btn.setAttribute('href', '/links/delete/' + res[i].id);
                del_btn.setAttribute('class', 'btn btn-danger');
                del_btn.innerHTML = 'Delete link';

                var vid_li = document.createElement('li');
                vid_li.setAttribute('class', 'list-group-item text-center');

                var vid_h2 = document.createElement('h2');
                vid_h2.innerHTML = res[i].title;

                var vid_author = document.createElement('h3');
                vid_author.innerHTML = "Author : " + res[i].author;


                var vid_genre = document.createElement('p');
                vid_genre.innerHTML = res[i].genre;

                var vid_a = document.createElement('a');
                vid_a.setAttribute('href', res[i].url);
                vid_a.setAttribute('class', 'btn btn-primary');
                vid_a.innerHTML = "See video : ";

                var sentby_p = document.createElement('p');
                sentby_p.innerHTML = "Video sent by : " + res[i].sender;

                listenlist.appendChild(vid_li);

                vid_li.appendChild(vid_h2);

                vid_li.appendChild(vid_author);

                vid_li.appendChild(vid_genre);

                vid_li.appendChild(sentby_p);

                vid_li.appendChild(vid_a);



                vid_li.appendChild(del_btn);




            }
            ;



        }

    };

    xhr.open("GET", "http://localhost:3000/links/mytolisten", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();





};