//jquery UI - <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
 

/*

*/
function jqueryVsVanilla(){
    // Get element
    document.querySelector("e1"); //document.getElementById("e1").textContent = "hi";
    //vs
    $("#e1").text("hi");

    
    // Fade
    var elem = document.querySelector("e1"); 
    elem.style.display = "block";
    requestAnimationFrame(() => elem.style.display.opacity = 1);
    //vs
    $("#e1").fadeIn();


    // Animate
    var elem = document.querySelector("e1"); 
    elem.animate([
        {
            transform: "translate..."
        },
    ]);
    //vs
    $("#e2").animate(
    {
        opacity: 0.5,
        height: "40px"
    }, 3000);

    
    // AJAX
    var elem = document.querySelector("e1"); 
    fetch("http://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
        // do stuff
    });
    //vs
    $.ajax("http://api.quotable.io/random", {
        success: (data) => {
            // do stuff
        }
    });
}

/*
/// <reference path="./jquery-3.4.1.js" />
*/
//import "https://code.jquery.com/jquery-3.6.0.min.js"; // module only
$("button").on("click",function(){
    var version = $().jquery;
    alert("You are running jQuery version: " + version);
});
/*
$.noConflict();
jQuery(document).ready(function(){
var jq = $.noConflict();
jQuery(document).ready(function($){
  $("button").click(function(){
    $("p").text("jQuery is still working!");
  });
});
*/
/*
$(this).hide() - hides the current element.
$("p").hide() - hides all <p> elements.
$(".test").hide() - hides all elements with class="test".
$("#test").hide() - hides the element with id="test".
*/

// after loaded - Hide div and p elements on click
$(document).ready(function(){
    var version = $().jquery;

    var $div = $('<div />').prependTo('body');
    $div.attr('id', 'holdy');
    //document.getElementById("e1").textContent = "hi";
    $("#holdy").text("You are running jQuery version: " + version);
    $("#holdy").hide("slow");
    $("#holdy").show(1000).addClass("red");

    $("body").hide("slow"); // toggle
    $("body").show(10000);

    
    //$("#e1").on("click mouseenter", function () {});
    //$("#e1").off("click");
    //$("#e1").one("click mouseenter", function () {});
    $("#e1").click(function (e) { 
        e.preventDefault();
        //e.stopPropagation();
        e.stopImmediatePropagation(); // don't move on after this script
        $("#e1").text("hey - id: " + e.target.id); //or append
        
    });
    
    $("div").click(function(){
        $(this).hide(1000);
    });
    $("p").click(function(){
        $(this).toggle();
    });
    $("p").mouseenter(function(){
        $(this).css("background-color", "#cccccc");
        $(this).css(
        {
            "font-size": "16px",
        });
        $(this).text("Click me");
    });



    // form events - focus, blur, change
    // effects - fade, slide, stop, delay
    // animate
    $("#e2").on("click",function(){
        //e.preventDefault();
        //e.stopPropagation();
        //e.stopImmediatePropagation(); // don't move on after this script

        $("#e2").animate(
        {
            opacity: 0.5,
            height: "40px"
        }, 3000, "linear", function () 
        {
            $(this).after("<div>Anim done</div>");
            
            $("#e2").animate(
                {
                    opacity: 1,
                    height: "20px"
                }, 3000);
        });
        /*
        $("#e1")
        .animate({ opacity: 0.5}, 3000)
        .animate({ height: "40px"}, 3000);
        */
    });
    
    //$("div").animate({left: '250px'});
    // Chaining
    //$("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    
    //traverse -   $("span").parent();
    //$("#e1").paren


    // AJAX
    // Insert HTML
    $("#jqueryinsert").load("./jqueryinsert.html");
    /*
    return fetch(RANDOM_QUOTE)
    .then(respon => respon.json())
    .then(data => data.content)
    */
    $.get("http://api.quotable.io/random", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status + "\nJSON: " + data.json() + "\nContent: " + data.content);
        //alert("Data: " + data + "\nStatus: " + status);
        $("#e1").append(data.content); //or append
    });
    //$.post
    /*
    $("button").click(function(){
        $.getJSON("demo_ajax_json.js", function(result){
            $.each(result, function(i, field){
            $("div").append(field + " ");
            });
        });
    });
    */

});
// after loaded...
$(function(){
  
});

// AJAX
// Insert HTML
$(function() { $("#jqueryinsert").load("./jqueryinsert.html"); }); //<h1>jquery insert</h1>


//jquery UI
//label - for="date", input text
//datepicker
//$("#e1").text("hey - id: " + e.target.id);


// table filter
/*
$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
*/