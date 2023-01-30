$(document).ready(function() {
    $(".clickImage").click((e) =>{
        $("#changeImage").attr("src",`${e.target.src}`);
    })
})