$(".servicesCard").height($(".servicesColumn").height());

$(".projectsColumn")
.hover(function () {

    console.log("hovered over this: \n", this)

    $(this).fadeTo("slow", 0.65, function(){
        console.log("done")
    });

},function () {
    $(this).fadeTo("slow", 1);

});














