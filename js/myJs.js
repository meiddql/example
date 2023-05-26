const textConfig = {
    text1: "Hello Nhàn!",
    text2: "Q Muốn Hỏi Nhàn Một Câu Hỏi <3",
    text3: "Do U love Me ._.",
    text4: "Nếu Nhàn không trả lời mà thoát ra tức là muốn làm gợiu Q rồi đó nha :v",
    text5: "Q mơ à???",
    text6: "Tất Nhiên Là Có <3",
    text7: "Lí do Nhàn thích Q đi :vvvv",
    text8: "Gửi cho Q <3",
    text9: "Vì Nhàn thích Q lâu rồi :v ",
    text10: "Q biết mà ^^ But Q not love Nhàn",
    text11:
      "Bất ngờ chưa bà già :v",
    text12: "BYEEEE <3",
  };
  
  $(document).ready(function () {
    // process bar
    setTimeout(function () {
      firstQuestion();
      $(".spinner").fadeOut();
      $("#preloader").delay(350).fadeOut("slow");
      $("body").delay(350).css({
        overflow: "visible",
      });
    }, 600);
  
    $("#text3").html(textConfig.text3);
    $("#text4").html(textConfig.text4);
    $("#no").html(textConfig.text5);
    $("#yes").html(textConfig.text6);
  
    function firstQuestion() {
      $(".content").hide();
      Swal.fire({
        title: textConfig.text1,
        text: textConfig.text2,
        imageUrl: "img/pic1.jpg",
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("img/main.jpg")',
        imageAlt: "Custom image",
      }).then(function () {
        $(".content").show(200);
      });
    }
  
    // switch button position
    function switchButton() {
      var audio = new Audio("sound/quack.mp3");
      audio.play();
      var leftNo = $("#no").css("left");
      var topNO = $("#no").css("top");
      var leftY = $("#yes").css("left");
      var topY = $("#yes").css("top");
      $("#no").css("left", leftY);
      $("#no").css("top", topY);
      $("#yes").css("left", leftNo);
      $("#yes").css("top", topNO);
    }
    // move random button póition
    function moveButton() {
      var audio = new Audio("sound/quack.mp3");
      audio.play();
      if (screen.width <= 600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
      } else {
        var x = Math.random() * 500;
        var y = Math.random() * 500;
      }
      var left = x + "px";
      var top = y + "px";
      $("#no").css("left", left);
      $("#no").css("top", top);
    }
  
    var n = 0;
    $("#no").mousemove(function () {
      if (n < 1) switchButton();
      if (n > 1) moveButton();
      n++;
    });
    $("#no").click(() => {
      if (screen.width >= 900) switchButton();
    });
  
    // generate text in input
    function textGenerate() {
      var n = "";
      var text = " " + textConfig.text9;
      var a = Array.from(text);
      var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
      var count = textVal.length;
      if (count > 0) {
        for (let i = 1; i <= count; i++) {
          n = n + a[i];
          if (i == text.length + 1) {
            $("#txtReason").val("");
            n = "";
            break;
          }
        }
      }
      $("#txtReason").val(n);
    }
  
    // show popup
    $("#yes").click(function () {
      var audio = new Audio("sound/tick.mp3");
      audio.play();
      Swal.fire({
        title: textConfig.text7,
        html: true,
        width: 900,
        padding: "3em",
        html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
        background: '#fff url("img/tim.jpg")',
        backdrop: `
                      rgba(0,0,123,0.4)
                      url("img/gif1.gif")
                      left top
                      no-repeat
                    `,
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonColor: "#fe8a71",
        cancelButtonColor: "#f6cd61",
        confirmButtonText: textConfig.text8,
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            width: 900,
            confirmButtonText: textConfig.text12,
            background: '#fff url("img/tiim.jpg")',
            title: textConfig.text10,
            text: textConfig.text11,
            confirmButtonColor: "#83d0c9",
          });
        }
      });
  
      $("#txtReason").focus(function () {
        var handleWriteText = setInterval(function () {
          textGenerate();
        }, 10);
        $("#txtReason").blur(function () {
          clearInterval(handleWriteText);
        });
      });
    });
  });
  