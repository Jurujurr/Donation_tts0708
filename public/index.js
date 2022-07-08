document.getElementById("donationButton").onclick = function () {
  var userNickname = document.getElementById("userId").value;
  var coin_amount = document.getElementById("coinAmount").value;
  var userMsg = document.getElementById("userMsg").value;

  var coin_type = document.querySelector(
    'input[name="coinType"]:checked'
  ).value;

  location.href =
    "DonaTTS.html?" +
    userNickname +
    "/" +
    coin_amount +
    "/" +
    userMsg +
    "/" +
    coin_type;

  window.open("/DonaTTS.html", "_blank", "width=500,height=600");
};
