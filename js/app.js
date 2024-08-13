// console.log("Hello");
// Initialize ityped
window.ityped.init(document.querySelector('.ityped'), {
    strings: [
        'Front-end Developer',
        'UI/UX Developer',
        'WordPress Developer',
        'Shopify Developer',
        'Webflow Developer',
        'Web Developer'
    ],
    loop: true,
    typeSpeed: 100,       // Typing speed in milliseconds (adjust as needed)
    backSpeed: 80,        // Speed at which the text is erased (optional)
    backDelay: 1000,      // Delay before starting to erase (optional)
    startDelay: 500,      // Delay before starting typing (optional)
});




    /* Whatsapp Chat Widget by www.bloggermix.com */
$(document).on("click", "#send-it", function () {
  var a = document.getElementById("chat-input");
  if ("" != a.value) {
    var b = $("#get-number").text(),
      c = document.getElementById("chat-input").value,
      d = "https://web.whatsapp.com/send",
      e = b,
      f = "&text=" + c;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      var d = "whatsapp://send";
    var g = d + "?phone=+27 6 63387396" + e + f;
    window.open(g, "_blank");
  }
}),
  $(document).on("click", ".informasi", function () {
    (document.getElementById("get-number").innerHTML = $(this)
      .children(".my-number")
      .text()),
      $(".start-chat,.get-new").addClass("show").removeClass("hide"),
      $(".home-chat,.head-home").addClass("hide").removeClass("show"),
      (document.getElementById("get-nama").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-nama")
        .text()),
      (document.getElementById("get-label").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-label")
        .text());
  }),
  $(document).on("click", ".close-chat", function () {
    $("#whatsapp-chat").addClass("hide").removeClass("show");
  }),
  $(document).on("click", ".blantershow-chat", function () {
    $("#whatsapp-chat").addClass("show").removeClass("hide");
  });


    /* Update WhatsApp Number */
    var whatsappNumber = "+923222571721"; // Replace with your WhatsApp number
  
    /* WhatsApp Chat Widget by www.bloggermix.com */
    $(document).on("click", ".start-chat", function () {
      var message = "Hi, I'm interested in your products. Can you provide more information?";
      var encodedMessage = encodeURIComponent(message);
      var whatsappURL = "https://api.whatsapp.com/send?phone=" + whatsappNumber + "&text=" + encodedMessage;
      window.open(whatsappURL, "_blank");
    });
  
    // The rest of your JavaScript code here...
