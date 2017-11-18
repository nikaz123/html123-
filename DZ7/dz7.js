(function () {
    'use strict';

    let smallPictures = document.querySelectorAll('#images img');

    let bigPicture = document.querySelector('.bigPicture'),

        count = smallPictures.length;



    smallPictures.forEach(function (smallPicture, n) {
        smallPicture.index = n;
    });


    images.onclick = function (event) {
      showPhoto(event.target.index);
    };


    function showPhoto(index) {
        if (index + 1) {

            let src = smallPictures[index].getAttribute('src');
            bigimg.setAttribute('src', src);
            bigPicture.style.display = 'block';

        }
    }

    bigPicture.onclick = function (event) {
        bigPicture.style.display = 'none';
    }


}());