// $(() => {
//
//     $().onscroll(scrollFunction)
//
//
//     function scrollFunction() {
//         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//             $("#myBtn").style.display = "block";
//         } else {
//             $("#myBtn").css('display' , 'none') ;
//         }
//     }
//
//     function topFunction() {
//         $.body.scrollTop = 0;
//         $.documentElement.scrollTop = 0;
//     }
//
// })

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}