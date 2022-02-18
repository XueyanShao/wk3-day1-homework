$(document).ready(function() {
    
// $("th").click(function() {
//     $("th").filter(function() {
//         var content = $(this).css("background-color") == "rgb(238,255,230)";
//         return content
//     });
//     $(content).css("background-color","green");
//     })

$("td").click(function() {
    var content = $(this).text();
    var col = $(this).index();
    var cliff = $("th").eq(col).text();
        if (content != "Not Available") {
                $(this).css("cursor","pointer")
                $(this).toggleClass("highlight");
                

            if($(this).hasClass("highlight")) {
                $("#displaySelected").css({
                    "visibility":"visible",
                    "margin-top":"2em"
                }) 
                $("#result").append("<p>"+content+" at "+cliff+"</p>");
            } 
            else {

                $("#result p:contains('" +content+ "')").remove();

                }
                    if($("#result").has("p").length==false) {
                    $("#displaySelected").css({
                         "visibility":"hidden",
                        "margin-top":"0"
                })
             } 
                 }
             
            })

})

