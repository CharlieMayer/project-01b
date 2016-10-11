$("#counter").hide();
    $('.clothes').on("click", function(){
  var OrgPrice =$(this).data("price");
  var discountprice= $(this).data("discountprice");
  var sale= $(this).data("sale");
  var finalprice=(OrgPrice - discountprice);
  console.log(OrgPrice+"//"+discountprice+"//"+finalprice);
  if (sale==true) {

      alert("This item is on sale!" + "The discount is" + finalprice);

    }
  else {
      alert("No dice");
    };

  $("#counter").show();
    var currentTotal= parseInt($("#counter").html());
    var newTotal= (currentTotal +1);
    $("#counter").text(newTotal);
  });
  });
