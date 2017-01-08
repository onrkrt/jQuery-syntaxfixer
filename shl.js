/*********************************************************
 The plugin is written for studying
 And not capable for use real life projects, also this codes are not finished
 if you want to use it, you must find another resources
 *********************************************************/

(function($){
  
  $.fn.shl= function(){
    var text = this.text();
    text = text.replace(/\bfalse\b/g,"<span class='t'>false</span>");
    text = text.replace(/\breturn\b/g,"<span class='s'>return</span>");
    text = text.replace(/\bif\b/g,"<span class='f'>if</span>");
    text = text.replace(/\belse\b/g,"<span class='f'>else</span>");
    text = text.replace(/\bfor\b/g,"<span class='f'>for</span>");
    text = text.replace(/\bwhile\b/g,"<span class='f'>while</span>");
    text = text.replace(/(\bfunction\b)|(\bfunction{)/g,"<span class='t'>function</span>");
    text = text.replace(/{/g,"{<br>");
    text = text.replace(/}/g,"<br>}<br>");
    text = text.replace(/\n/g,"<br>");
    text = text.replace(/; /g,";<br>");
    text = text.replace(/\bvar\b/,"<span class='s'>var</span>")
    text = text.replace(/\btrue\b/,"<span class='t'>true</span>")
    $(".code-shl").html("");
    $(".code-shl").append(text);
    this.css({
      "background":"black",
      "color":"white",
      "font-weight":"bold",
      "padding-left":"10px",
      "line-height":"25px",
    })
    return this;
  };
}(jQuery));

$(".code-shl").shl();