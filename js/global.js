// database
const chochetTon = 40000;
const normalpaperPackage100 = 1350;
const normalpaperPackage80 = 1150;
const normalpaperPackage70 = 1100;
const carbonpaperFirst = 900;
const carbonpapermiddle = 1000;
const carbonpaperLast = 900;
const offsetprinting = 60;
const offsetmargin = 1.4;
const digitalprinting = 2;
const normalcoveringUnit = 2.5;
const wireCoveringunit = 4;
const hardcoverunit = 7;
const sewcoverunit = 4;
const solofanFace = 0.5;
const UVprice = 300;
const stickerPrice = 10;
const C4env = 1.75;
const Americanenv = 0.75;
// Paper Sizes vars
const LargeOH = 50;
const LargeOW = 34;
const LargeDH = 48;
const LargeDW = 32;
const gayrH = 44;
const gayrW = 33;
//printing paper vars
const gayrHP = 42;
const gayrWP = 29.7;
let productWidth = 0;
let productHeight = 0;
let unitPrice = 0;
let qtyPrice = 0;
function detect() {
  if ($(window).width() <= 850) {
    $(".product-selected").click(function () {
      if ($(".nav.nav-tab.products-tabs").css("display", "none")) {
        $(".nav.nav-tab.products-tabs").css("display", "flex");
      }
    });
    $(".nav-link.products-item").click(function () {
      if ($(window).width() <= 850) {
        $(".product-selected").html($(this).html());
        $(".nav.nav-tab.products-tabs").css("display", "none");
      } else {
      }
    });
  } else {
    $(".nav.nav-tab.products-tabs").css("display", "flex");
  }
}
function Printingprice(ptr_price){
ptr_price.printingType = "";
let Multi = offsetmargin
if(ptr_price.finalQTY >= 1000)
{
  Multi =  (ptr_price.finalQTY / 1000) * (25/1000);
  Multi = offsetmargin - Multi
}

console.log(Multi)
if (Multi < 1.2 ){
  Multi = 1.2;
}

  



ptr_price.printingPrice = Math.ceil(ptr_price.finalQTY / 1000) * ptr_price.faces*Multi *ptr_price.colors * offsetprinting ;

}
detect();
$(window).resize(function () {
  if ($(window).width() > 850) {
    $(".nav.nav-tab.products-tabs").css("display", "flex");
  } else {
    detect();
  }
});

function PrintingpaperDetect(obj_pr){
  
  var Swidd = Math.floor((LargeOH / obj_pr.width)) * Math.floor((LargeOW / obj_pr.height))
  var Lwidd = Math.floor((LargeOH / obj_pr.height)) * Math.floor((LargeOW / obj_pr.width))
  if ((( LargeOH / obj_pr.height ) < (LargeOH / obj_pr.width)) && Swidd > Lwidd || (obj_pr.width === 10.5 && obj_pr.height === 14.8)) {
    let optH = obj_pr.height;
    obj_pr.height = obj_pr.width;
    obj_pr.width = optH;
  }
  if (
    (obj_pr.width >= 15 && obj_pr.height >= 20 && obj_pr.qty >= 1000) ||
    (obj_pr.width >= 10 && obj_pr.height >= 20 && obj_pr.qty >= 3000) ||
    (obj_pr.width >= 10 && obj_pr.height <= 20 && obj_pr.qty >= 3000) ||
    (obj_pr.width <= 10 && obj_pr.height <= 20 && obj_pr.qty >= 6000)
  ) {
    let countLH = LargeOH / obj_pr.height;
    let countLW = LargeOW / obj_pr.width;

      //Offset 70
      obj_pr.finalQTY = Math.floor(countLH) * Math.floor(countLW);
      obj_pr.finalQTY = Math.ceil(obj_pr.qty / obj_pr.finalQTY);
      if (obj_pr.weight === 100){
        obj_pr.paperPrice = Math.ceil(
          ((obj_pr.finalQTY / 4) * (normalpaperPackage100 / 500)) * 1.2
        );
      }
      else if (obj_pr.weight === 70){
        obj_pr.paperPrice = Math.ceil(
          ((obj_pr.finalQTY / 4) * (normalpaperPackage70 / 500)) * 1.2
        );
      }
      else{
        obj_pr.paperPrice = Math.ceil(
          ((obj_pr.finalQTY / 4) * (normalpaperPackage80 / 500)) * 1.2
        );
      }
     
      obj_pr.printingPrice =
      Math.ceil(obj_pr.finalQTY / 1000) *
        obj_pr.faces *
        obj_pr.colors *
        offsetprinting;
        
 return obj_pr;
    
  } else {
    let countLH = LargeDH / obj_pr.height;
    let countLW = LargeDW / obj_pr.width;
   
      //Digital 70
      obj_pr.finalQTY = Math.floor(countLH) * Math.floor(countLW);
      obj_pr.finalQTY = Math.ceil(obj_pr.qty / obj_pr.finalQTY);
      if (obj_pr.weight === 100){
        obj_pr.paperPrice = Math.ceil(
          ((obj_pr.finalQTY / 4) * (normalpaperPackage100 / 500)) * 1.5
        );
      }
      else if (obj_pr.weight === 70){
        obj_pr.paperPrice = Math.ceil(
          ((obj_pr.finalQTY / 4) * (normalpaperPackage70 / 500)) * 1.5
        );
      }
      else{
        obj_pr.paperPrice = Math.ceil(
          ((obj_pr.finalQTY / 4) * (normalpaperPackage80 / 500)) * 1.5
        );
      }
      if (obj_pr.faces === 1) {
        if (obj_pr.finalQTY > 300){
          obj_pr.printingPrice =
          Math.ceil(obj_pr.finalQTY / 1000) *
          obj_pr.faces *
          obj_pr.colors *
          offsetprinting;
        }
        else{
          obj_pr.printingPrice = obj_pr.finalQTY * digitalprinting1face;
        }
    
      } else {
        if (obj_pr.finalQTY > 300){
          obj_pr.printingPrice =
          Math.ceil(obj_pr.finalQTY / 1000) *
          obj_pr.faces *
          obj_pr.colors *
          offsetprinting;
        }
        else{
          obj_pr.printingPrice = obj_pr.finalQTY * digitalprinting2face;
        }
       
      }
      return obj_pr;
  }
}
function envDetect(obj_env){
  if (obj_env.size === "C4"){
    if(obj_env.qty > 500){
      obj_env.finalprice = ((obj_env.qty * C4env) + (Math.ceil(obj_env.qty/1000) * obj_env.faces *obj_env.colors * offsetprinting) )
    }
    else{
      obj_env.finalprice = ((obj_env.qty * C4env) + (obj_env.qty * obj_env.faces * digitalprinting1face))
    }
  
  }
  else {
    if(obj_env.qty > 500){
      obj_env.finalprice = ((obj_env.qty * Americanenv) + (Math.ceil(obj_env.qty/1000) * obj_env.faces *obj_env.colors * offsetprinting) )
    }
    else{
      obj_env.finalprice = ((obj_env.qty * Americanenv) + (obj_env.qty * obj_env.faces * digitalprinting1face))
    }
  }
  return obj_env;
}

function Cochetsizedetect(obj_coch) {
  var Swidd = Math.floor((LargeOH / obj_coch.width)) * Math.floor((LargeOW / obj_coch.height))
  var Lwidd = Math.floor((LargeOH / obj_coch.height)) * Math.floor((LargeOW / obj_coch.width))
  if ((( LargeOH / obj_coch.height ) < (LargeOH / obj_coch.width)) && Swidd > Lwidd || (obj_coch.width === 10.5 && obj_coch.height === 14.8)) {
    let optH = obj_coch.height;
    obj_coch.height = obj_coch.width;
    obj_coch.width = optH;
  }
  if (
    (obj_coch.width >= 20 && obj_coch.height >= 29 && obj_coch.qty >= 1000) ||
    (obj_coch.height >= 20 && obj_coch.width >= 29 && obj_coch.qty >= 1000) ||
    (obj_coch.width >= 15 && obj_coch.height >= 20 && obj_coch.qty >= 1000) ||
    (obj_coch.width >= 10 && obj_coch.height >= 20 && obj_coch.qty >= 3000) ||
    (obj_coch.width >= 10 && obj_coch.height <= 20 && obj_coch.qty >= 3000) ||
    (obj_coch.width <= 10 && obj_coch.height <= 20 && obj_coch.qty >= 6000) 
  ) {
    // ptr_price.printingType = "offset"
    let countLH = LargeOH / obj_coch.height;
    let countLW = LargeOW / obj_coch.width; 
    let countGH = gayrH / obj_coch.height;
    let countGW = gayrW / obj_coch.width;
    if (countLH - Math.floor(countLH) > countGH - Math.floor(countGH)) {
      //Offset gayr
      obj_coch.finalQTY = Math.floor(countGH) * Math.floor(countGW);
      obj_coch.finalQTY = Math.ceil(obj_coch.qty / obj_coch.finalQTY);
      obj_coch.paperPrice = Math.ceil(
        ((obj_coch.finalQTY / 4) * obj_coch.weight * 88 * 66 * chochetTon) /
          10000000000
      );
     
      // obj_coch.printingPrice =
      //    Math.ceil(obj_coch.finalQTY / 1000) *
      //   obj_coch.faces *
      //   obj_coch.colors *
      //   offsetprinting;
      
    } else {
      //Offset 70
      // ptr_price.printingType = "offset"
      obj_coch.finalQTY = Math.floor(countLH) * Math.floor(countLW);
      obj_coch.finalQTY = Math.ceil(obj_coch.qty / obj_coch.finalQTY);
      obj_coch.paperPrice = Math.ceil(
        ((obj_coch.finalQTY / 4) * obj_coch.weight * 70 * 100 * chochetTon) /
          10000000000
      );
      // obj_coch.printingPrice =
      //  Math.ceil(obj_coch.finalQTY / 1000) *
      //   obj_coch.faces *
      //   obj_coch.colors *
        
      //   offsetprinting;
      
    }
  } else {
    let countLH = LargeDH / obj_coch.height;
    let countLW = LargeDW / obj_coch.width;
    let countGH = gayrH / obj_coch.height;
    let countGW = gayrW / obj_coch.width;
    if (countLH - Math.floor(countLH) > countGH - Math.floor(countGH)) {
      //Digital gayr
      // ptr_price.printingType = "digital"
      obj_coch.finalQTY = Math.floor(countGH) * Math.floor(countGW);
      obj_coch.finalQTY = Math.ceil(obj_coch.qty / obj_coch.finalQTY);
      obj_coch.paperPrice = Math.ceil(
        ((obj_coch.finalQTY / 4) * obj_coch.weight * 88 * 66 * chochetTon) /
          10000000000
      );
      obj_coch.printingPrice = obj_coch.finalQTY * faces * digitalprinting; 
    } else {
      //Digital 70
      // ptr_price.printingType = "digital"
      obj_coch.finalQTY = Math.floor(countLH) * Math.floor(countLW);
      obj_coch.finalQTY = Math.ceil(obj_coch.qty / obj_coch.finalQTY);
      obj_coch.paperPrice = Math.ceil(
        ((obj_coch.finalQTY / 4) * obj_coch.weight * 70 * 100 * chochetTon) /
          10000000000
      );
      obj_coch.printingPrice = obj_coch.finalQTY * faces * digitalprinting;   
    }
  }
  return obj_coch;
}
function Stickersizedetect(obj_stick) {
  // let finalQTY = 0;
  var Swidd = Math.floor((LargeOH / obj_stick.width)) * Math.floor((LargeOW / obj_stick.height))
  var Lwidd = Math.floor((LargeOH / obj_stick.height)) * Math.floor((LargeOW / obj_stick.width))
  if ((( LargeOH / obj_stick.height ) < (LargeOH / obj_stick.width)) && Swidd > Lwidd || (obj_stick.width === 10.5 && obj_stick.height === 14.8)) {
    let optH = obj_stick.height;
    obj_stick.height = obj_stick.width;
    obj_stick.width = optH;
  }
  if (
    (obj_stick.width >= 15 && obj_stick.height >= 20 && obj_stick.qty >= 1000) ||
    (obj_stick.width >= 10 && obj_stick.height >= 20 && obj_stick.qty >= 5000) ||
    (obj_stick.width <= 10 && obj_stick.height <= 20 && obj_stick.qty >= 10000)
  ) {
    let countLH = LargeOH / obj_stick.height;
    let countLW = LargeOW / obj_stick.width;
    
    obj_stick.finalQTY = Math.floor(countLH) * Math.floor(countLW);
    obj_stick.finalQTY = Math.ceil(obj_stick.qty / obj_stick.finalQTY);
    obj_stick.paperPrice = Math.ceil(
        ((obj_stick.finalQTY / 4)  ) * stickerPrice
      );
      obj_stick.printingPrice =
        Math.ceil(obj_stick.finalQTY / 1000) *
        1.3 *
        obj_stick.colors *
        offsetprinting;
      return obj_stick;
    
  } else {
    let countLH = LargeDH / obj_stick.height;
    let countLW = LargeDW / obj_stick.width;
    
    obj_stick.finalQTY = Math.floor(countLH) * Math.floor(countLW);
    obj_stick.finalQTY = Math.ceil(obj_stick.qty / obj_stick.finalQTY);
    obj_stick.paperPrice = Math.ceil(
        ((obj_stick.finalQTY / 4)  )* 1.52 * stickerPrice
      );
      if(obj_stick.finalQTY > 500){
        obj_stick.printingPrice =
        Math.ceil(obj_stick.finalQTY / 1000) *
        1.3 *
        obj_stick.colors *
        offsetprinting;
      }
      else{
        obj_stick.printingPrice = obj_stick.finalQTY * digitalprinting1face;
      }
     
        return obj_stick;
    
  }
}
function DfatersizeDetect(obj_dftr){
  if ((obj_dftr.height <= 50 && obj_dftr.width <= 35) || (obj_dftr.width <= 50 && obj_dftr.height <= 35)) {
    var LengthD = 100 / obj_dftr.height
    var WidthD = 70 / obj_dftr.width
    var LengthDS = 100 / obj_dftr.width
    var WidthFs = 70 / obj_dftr.height
    var count01 = Math.floor(LengthD) * Math.floor(WidthD)
    var count02 = Math.floor(LengthDS) * Math.floor(WidthFs)
    
    if (count01 > count02){
      obj_dftr.papergenralQty =  obj_dftr.qty/count01
      obj_dftr.finalcount = count01
    }
    else{
      obj_dftr.papergenralQty =  obj_dftr.qty/count02
      obj_dftr.finalcount = count02
    }
    if (obj_dftr.copies === 0){
      obj_dftr.paperPrice = (obj_dftr.papergenralQty * 100) * (normalpaperPackage80 / 500)
      obj_dftr.printingPrice = Math.ceil(((obj_dftr.papergenralQty * 100) / 4) / 1000) * offsetprinting * obj_dftr.colors * 1.5
    }
    else if (obj_dftr.copies === 1){
      obj_dftr.paperPrice = (((obj_dftr.papergenralQty * 50)) * (carbonpaperFirst / 500)) + ((obj_dftr.papergenralQty * 50)* (carbonpaperLast / 500))
      obj_dftr.printingPrice = Math.ceil(((obj_dftr.papergenralQty * 50 * 2) / 4) / 1000) * offsetprinting * obj_dftr.colors * 1.5
    }
    else if (obj_dftr.copies === 2){
      obj_dftr.paperPrice = ((obj_dftr.papergenralQty * 50) * (carbonpaperFirst / 500)) + ((obj_dftr.papergenralQty * 50)* (carbonpaperLast / 500)) + ((obj_dftr.papergenralQty * 50) * (carbonpapermiddle / 500))
      obj_dftr.printingPrice = Math.ceil(((obj_dftr.papergenralQty * 50 * 3) / 4) / 1000) * offsetprinting * obj_dftr.colors * 1.5
    }
    else {
      obj_dftr.paperPrice = ((obj_dftr.papergenralQty * 25) * (carbonpaperFirst / 500)) + ((obj_dftr.papergenralQty * 25)* (carbonpaperLast / 500)) + ((obj_dftr.papergenralQty * 25 * (obj_dftr.copies - 1)) * (carbonpapermiddle / 500) )
      obj_dftr.printingPrice = Math.ceil(((obj_dftr.papergenralQty * 25 * obj_dftr.copies) / 4) / 1000) * offsetprinting * obj_dftr.colors * 1.5
    }
    
    obj_dftr.coveringPrice = obj_dftr.qty * normalcoveringUnit
    
  }
  else{
    //Error
  }
 

}

// --------------------------------------------- Ncr Script

$("#ncrDropdown li a").click(function () {
  $("#ncrDropdown button").html($(this).html());
  $(".ncrs-form  .width").hide();
  $(".ncrs-form  .height").hide();
  if ($(this).html() === "A3" || $(this).html() === "40*30") {
    productWidth = 40;
    productHeight = 30;
    $("#ncrDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "A4" || $(this).html() === "20*30") {
    productWidth = 20;
    productHeight = 30;
    $("#ncrDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "A5" || $(this).html() === "15*20") {
    productWidth = 15;
    productHeight = 20;
    $("#ncrDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "A6"|| $(this).html() === "10*15") {
    productWidth = 15;
    productHeight = 10;
    $("#ncrDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "25*17.5") {
    productWidth = 17.5;
    productHeight = 25;
    $("#ncrDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "20*10") {
    productWidth = 10;
    productHeight = 20;
    $("#ncrDropdown").attr("data-detect", $(this).html());
  } 
});
$("#ncrsForm .search-btn").click(function () {
  var obj_dftr = {};
  $("#ncrsForm .form-control").each(function () {
    let Classname1 = $(this).parent().attr("id");
    if ($(this).val() != "") {
      $("#ncrsForm " + "#" + Classname1).removeClass("empty");
      if ($("#ncrDropdown").attr("data-detect") != "none") {
        $("#ncrsForm").removeClass("empty");
        if ($("#ncrsForm .width").css("display") == "none") {
          obj_dftr.width = productWidth;
          obj_dftr.height = productHeight;
          obj_dftr.qty =    Number($("#ncrsForm #qty-textbox").val());
          obj_dftr.copies = Number($("#ncrsForm #copies-textbox").val());
          obj_dftr.colors = Number($("#ncrsForm #colors-textbox").val());
          DfatersizeDetect(obj_dftr);
          qtyPrice = obj_dftr.printingPrice + obj_dftr.paperPrice + obj_dftr.coveringPrice;
          $("#ncrsForm .price-container").css("display", "flex");
         
          unitPrice = qtyPrice / obj_dftr.qty;
          $("#ncrsForm #unitPrice").html(unitPrice.toFixed(2));
          $("#ncrsForm #qtyPrice").html(Math.ceil(qtyPrice));
          
        } else {
          obj_dftr.width = Number($("#ncrsForm #width-textbox").val());
          obj_dftr.height = Number($("#ncrsForm #height-textbox").val());
          obj_dftr.qty = Number($("#ncrsForm #qty-textbox").val());
          obj_dftr.copies = Number($("#ncrsForm #copies-textbox").val());
          obj_dftr.colors = Number($("#ncrsForm #colors-textbox").val());
          
          DfatersizeDetect(obj_dftr);
          qtyPrice = obj_dftr.printingPrice + obj_dftr.paperPrice + obj_dftr.coveringPrice;
          $("#ncrsForm .price-container").css("display", "flex");
         
          unitPrice = qtyPrice / obj_dftr.qty;
          $("#ncrsForm #unitPrice").html(unitPrice.toFixed(2));
          $("#ncrsForm #qtyPrice").html(qtyPrice);
          
          
        }
        
      } else {
        $("#ncrDropdown").addClass("empty");
      }
    } else {
      $("#cardsFrom " + "#" + Classname1).addClass("empty");
    }
  });
});
$("#ncrDropdown li:nth-child(11) a").click(function () {
  $(".ncrs-form .width").show();
  $(".ncrs-form .height").show();
});

// cards Script

$("#cardsDropdown li a").click(function () {
  var obj_coch = {};
  $("#cardsDropdown button").html($(this).html());
  $(".cards-form .width").hide();
  $(".cards-form .height").hide();
  if ($(this).html() === "9*5") {
    productWidth = 5;
    productHeight = 9;
    $("#cardsDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "9*5") {
    productWidth = 5;
    productHeight = 9;
    $("#cardsDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "9.5*5.5") {
    productWidth = 5.5;
    productHeight = 9.5;
    $("#cardsDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "7*11") {
    productWidth = 7;
    productHeight = 11;
    $("#cardsDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "A5") {
    productWidth = 14.8;
    productHeight = 21;
    $("#cardsDropdown").attr("data-detect", $(this).html());
  } else {
    $("#cardsDropdown").attr("data-detect", $(this).html());
  }
});
$("#cardsFrom .search-btn").click(function () {
  var obj_coch = {};
  $("#cardsFrom .form-control").each(function () {
    let Classname1 = $(this).parent().attr("id");
    if ($(this).val() != "") {
      $("#cardsFrom " + "#" + Classname1).removeClass("empty");
      if ($("#cardsDropdown").attr("data-detect") != "none") {
        $("#cardsDropdown").removeClass("empty");
        if ($("#cardsFrom .width").css("display") == "none") {
          obj_coch.width = productWidth;
          obj_coch.height = productHeight;
          obj_coch.qty = Number($("#cardsFrom #qty-textbox").val());
          obj_coch.faces = Number($("#cardsFrom  #faces-textbox").val());
          obj_coch.colors = 4;
          obj_coch.weight = 350;
          // obj_coch.paperPrice = 0;
          // obj_coch.finalQTY = 0;
          // obj_coch.printingPrice = 0;
          Cochetsizedetect(obj_coch);
          qtyPrice = Math.ceil(
            (obj_coch.paperPrice + obj_coch.printingPrice) * 1.75
          );
          $("#cardsFrom .price-container").css("display", "flex");
          if ($("#cardsFrom #solofanCheck").prop("checked") === true) {
            qtyPrice =
              qtyPrice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
          }
          if ($("#cardsFrom #uvCheck").prop("checked") === true) {
            qtyPrice = qtyPrice + Math.ceil(obj_coch.qty / 1000) * UVprice;
          }
          unitPrice = qtyPrice / obj_coch.qty;
          $("#cardsFrom #unitPrice").html(unitPrice.toFixed(2));

          if (qtyPrice < 35) {
            qtyPrice = 35;
            $("#cardsFrom #qtyPrice").html(qtyPrice);
          } else {
            $("#cardsFrom #qtyPrice").html(qtyPrice);
          }
        } else {
          obj_coch.width = Number($("#cardsFrom #width-textbox").val());
          obj_coch.height = Number($("#cardsFrom #height-textbox").val());
          obj_coch.qty = Number($("#cardsFrom #qty-textbox").val());
          obj_coch.faces = Number($("#cardsFrom  #faces-textbox").val());
          obj_coch.colors = 4;
          obj_coch.weight = 350;
          // obj_coch.paperPrice = 0;
          // obj_coch.finalQTY = 0;
          // obj_coch.printingPrice = 0;
          Cochetsizedetect(obj_coch);
          $("#cardsFrom .price-container").css("display", "flex");

          qtyPrice = Math.ceil(
            (obj_coch.paperPrice + obj_coch.printingPrice) * 1.75
          );
          if ($("#cardsFrom #solofanCheck").prop("checked") === true) {
            qtyPrice =
              qtyPrice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
          }
          if ($("#cardsFrom #uvCheck").prop("checked") === true) {
            qtyPrice = qtyPrice + Math.ceil(obj_coch.qty / 1000) * UVprice;
          }
          unitPrice = qtyPrice / obj_coch.qty;
          $("#cardsFrom #unitPrice").html(unitPrice.toFixed(2));

          if (qtyPrice < 35) {
            qtyPrice = 35;
            $("#cardsFrom #qtyPrice").html(qtyPrice);
          } else {
            $("#cardsFrom #qtyPrice").html(qtyPrice);
          }
        }
      } else {
        $("#cardsDropdown").addClass("empty");
      }
    } else {
      $("#cardsFrom " + "#" + Classname1).addClass("empty");
    }
  });
});

$("#cardsDropdown li:nth-child(5) a").click(function () {
  $(".cards-form .width").show();
  $(".cards-form .height").show();
});

// folders
$("#foldersFrom .search-btn").click(function () {
  var obj_coch = {};
  obj_coch.width = 32;
  obj_coch.height = 45;
  obj_coch.qty = Number($("#foldersFrom #qty-textbox").val());
  obj_coch.faces = Number($("#foldersFrom #faces-textbox").val());
  obj_coch.colors = Number($("#foldersFrom #colors-textbox").val())
  obj_coch.weight = 300;
  Cochetsizedetect(obj_coch);
  qtyPrice = Math.ceil(
    obj_coch.paperPrice + obj_coch.printingPrice + (obj_coch.qty * 2)
  );
  
  if ($("#foldersFrom #solofanCheck").prop("checked") === true) {
    qtyPrice = qtyPrice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
  }
  if ($("#foldersFrom #uvCheck").prop("checked") === true) {
    qtyPrice = qtyPrice + Math.ceil(obj_coch.qty / 1000) * UVprice;
  }
  unitPrice = qtyPrice / obj_coch.qty;
  $("#foldersFrom #unitPrice").html(unitPrice.toFixed(2));
  $("#foldersFrom .price-container").css("display", "flex");
  if (qtyPrice < 35) {
    qtyPrice = 35;
    $("#foldersFrom #qtyPrice").html(qtyPrice);
  } else {
    $("#foldersFrom #qtyPrice").html(qtyPrice);
  }
});

// magazine Script

$("#magazineDropdown li a").click(function () {
  $(".magazine-form .width").hide();
  $(".magazine-form .height").hide();
  $("#magazineDropdown button").html($(this).html());
  if ($(this).html() === "A4") {
    productWidth = 21;
    productHeight = 29.7;
    $("#magazineDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "A5") {
    productWidth = 14.8;
    productHeight = 21; 
    $("#magazineDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "A6") {
    productWidth = 10.5;
    productHeight = 14.8;
    $("#magazineDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "24*16") {
    productWidth = 16;
    productHeight = 24;
    $("#magazineDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "20*10") {
    productWidth = 10;
    productHeight = 20;
    $("#magazineDropdown").attr("data-detect", $(this).html());
  } 
});
$("#magazineFrom .search-btn").click(function () {
  $("#magazineFrom .form-control").each(function () {
    var obj_pr = {};
    var obj_coch = {};
    let insideprice = 0;
    let coverprice = 0;
    let coveringprice = 0;
    let Classname1 = $(this).parent().attr("id");
    if ($(this).val() != "") {
      $("#magazineFrom " + "#" + Classname1).removeClass("empty");
      if ($("#magazineDropdown").attr("data-detect") != "none") {
        $("#magazineDropdown").removeClass("empty");
        // inside
        if ($("#magazineFrom #intypeDropdown button").attr("data-detect") === "coche"){
          if ($("#magazineFrom .width").css("display") == "none"){
            obj_coch.width = productWidth;
            obj_coch.height = productHeight;
          }
          else{
            obj_coch.width =  Number($("#magazineFrom #width-textbox").val());
            obj_coch.height = Number($("#magazineFrom #height-textbox").val());
          }
          if (Number($("#magazineFrom #qty-textbox").val()) >= 500){
            obj_coch.qty = (Number($("#magazineFrom #inqty-textbox").val()) * Number($("#magazineFrom #qty-textbox").val()));
            
          }
          else{
            obj_coch.qty = (Number($("#magazineFrom #inqty-textbox").val()) );
           
          }
          
          obj_coch.weight = Number($("#magazineFrom #inweight-textbox").val());
          obj_coch.colors = Number($("#magazineFrom #incolor-textbox").val());
          obj_coch.faces =  Number($("#magazineFrom #infaces-textbox").val());
          Cochetsizedetect(obj_coch);
          
          if (Number($("#magazineFrom #qty-textbox").val()) >= 500){
            insideprice = Math.ceil((obj_coch.printingPrice + obj_coch.paperPrice) * 1.2);
          }
          else {
            insideprice = Math.ceil((obj_coch.printingPrice + obj_coch.paperPrice) * Number($("#magazineFrom #qty-textbox").val()) * 1.2);
          }
          
          if ($("#magazineFrom #insolofanCheck").prop("checked") === true) {
            insideprice =
            insideprice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
          }
          if ($("#magazineFrom #inuvCheck").prop("checked") === true) {
            insideprice = insideprice + Math.ceil(obj_coch.qty / 1000) * UVprice;
          }
          
        }
        else if ($("#magazineFrom #intypeDropdown button").attr("data-detect") === "printing"){
          if ($("#magazineFrom .width").css("display") == "none"){
            obj_pr.width = productWidth;
            obj_pr.height = productHeight;
          }
          else{
            obj_pr.width = Number($("#magazineFrom #width-textbox").val());
            obj_pr.height = Number($("#magazineFrom #height-textbox").val());

          }
          if (Number($("#magazineFrom #qty-textbox").val()) >= 500){
            obj_pr.qty =    (Number($("#magazineFrom #inqty-textbox").val()) * Number($("#magazineFrom #qty-textbox").val()));
          }
          else{
            obj_pr.qty =    (Number($("#magazineFrom #inqty-textbox").val()) );
          }
          obj_pr.weight = Number($("#magazineFrom #inweight-textbox").val());
          obj_pr.colors = Number($("#magazineFrom #incolor-textbox").val());
          obj_pr.faces =  Number($("#magazineFrom #infaces-textbox").val());
          PrintingpaperDetect(obj_pr);
         
          if (Number($("#magazineFrom #qty-textbox").val()) >= 500){
            insideprice = Math.ceil(((obj_pr.printingPrice + obj_pr.paperPrice) ) )
          }
          else {
            insideprice = Math.ceil(((obj_pr.printingPrice + obj_pr.paperPrice) * Number($("#magazineFrom #qty-textbox").val())) )
          }
          
        
        }
        // cover  
        obj_coch = {};
       
          if ($("#magazineFrom .width").css("display") == "none"){
            obj_coch.width = productWidth;
            obj_coch.height = productHeight;
          }
          else{
            obj_coch.width =  Number($("#magazineFrom #width-textbox").val());
            obj_coch.height = Number($("#magazineFrom #height-textbox").val());
          }
    
          obj_coch.qty =    Number($("#magazineFrom #qty-textbox").val());
          obj_coch.weight = Number($("#magazineFrom #coverweight-textbox").val());
          obj_coch.colors = Number($("#magazineFrom #covercolor-textbox").val());
          obj_coch.faces =  Number($("#magazineFrom #coverfaces-textbox").val());
          Cochetsizedetect(obj_coch)
          coverprice = Math.ceil((obj_coch.printingPrice + obj_coch.paperPrice) * 1.2);
            if ($("#magazineFrom #coversolofanCheck").prop("checked") === true) {
              coverprice =
              coverprice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
          }
          
          if ($("#magazineFrom #coveruvCheck").prop("checked") === true) {
            coverprice = coverprice + Math.ceil(obj_coch.qty / 1000) * UVprice;
          }
          if ($("#magazineFrom #coveringDropdown button").attr("data-detect") === "daboos"){
            coveringprice = Number($("#magazineFrom #qty-textbox").val()) * normalcoveringUnit
            coverprice = coverprice*2
          }
          else if ($("#magazineFrom  #coveringDropdown button").attr("data-detect") === "hard"){
            coveringprice = Number($("#magazineFrom #qty-textbox").val()) * hardcoverunit
            coverprice = coverprice*2
          }
          else if ($("#magazineFrom  #coveringDropdown button").attr("data-detect") === "wire"){
            coveringprice = Number($("#magazineFrom #qty-textbox").val()) * wireCoveringunit
            coverprice = coverprice*2
          }
          else if ($("#magazineFrom  #coveringDropdown button").attr("data-detect") === "sew"){
            coveringprice = Number($("#magazineFrom #qty-textbox").val()) * sewcoverunit
            coverprice = coverprice*2
          }
          qtyPrice = Math.ceil(coverprice + coveringprice + insideprice)
          $("#magazineFrom .price-container").css("display", "flex");
          $("#magazineFrom #qtyPrice").html(qtyPrice);
          unitPrice = qtyPrice / obj_coch.qty;
          $("#magazineFrom #unitPrice").html(unitPrice.toFixed(2));
         
    }
  } else {
      $("#magazineFrom " + "#" + Classname1).addClass("empty");
    }
   
  
  });

});

$("#magazineDropdown li:nth-child(6) a").click(function () {
  $(".magazine-form .width").show();
  $(".magazine-form .height").show();
});
$(".magazine-form #coveringDropdown li a").click(function () {
  $(".magazine-form #coveringDropdown button").html($(this).html());
  $(".magazine-form #coveringDropdown button").attr("data-detect" , $(this).attr("data-detect"))
});
$(".magazine-form #intypeDropdown li a").click(function () {
  $(".magazine-form #intypeDropdown button").html($(this).html());
  $(".magazine-form #intypeDropdown button").attr("data-detect",$(this).attr("data-detect"))
});

// flyers Script
$("#flyerDropdown li a").click(function () {
  $("#flyerDropdown button").html($(this).html());
  $(".flyer-form .width").hide();
  $(".flyer-form .height").hide();
  if ($(this).html() === "A3") {
    productWidth = 29.7;
    productHeight = 42;
    $("#flyerDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "A4") {
    productWidth = 29.7;
    productHeight = 21;
    $("#flyerDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "A5") {
    productWidth = 14.8;
    productHeight = 21;
    $("#flyerDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "A6") {
    productWidth = 10.5;
    productHeight = 14.8;
    $("#flyerDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "24*16") {
    productWidth = 16;
    productHeight = 24;
    $("#flyerDropdown").attr("data-detect", $(this).html());
  }
  else if ($(this).html() === "20*10") {
    productWidth = 10;
    productHeight = 20;
    $("#flyerDropdown").attr("data-detect", $(this).html());
  } else {
    $("#flyerDropdown").attr("data-detect", $(this).html());
  }
});
$("#flyerDropdown li:nth-child(7) a").click(function () {
  $(".flyer-form .width").show();
  $(".flyer-form .height").show();
});
$("#flyerForm .search-btn").click(function () {
  var obj_coch = {};
  $("#flyerForm .form-control").each(function () {
    let Classname1 = $(this).parent().attr("id");
    if ($(this).val() != "") {
      $("#flyerForm " + "#" + Classname1).removeClass("empty");
      if ($("#flyerDropdown").attr("data-detect") != "none") {
        $("#flyerDropdown").removeClass("empty");
        if ($("#flyerForm .width").css("display") == "none") {
          obj_coch.width = productWidth;
          obj_coch.height = productHeight;
          obj_coch.qty = Number($("#flyerForm #qty-textbox").val());

          obj_coch.faces = Number($("#flyerForm  #faces-textbox").val());
          obj_coch.colors = Number($("#flyerForm  #colors-textbox").val());
          obj_coch.weight = Number($("#flyerForm  #weight-textbox").val());
          Cochetsizedetect(obj_coch);
          Printingprice(obj_coch);
          
          qtyPrice = Math.ceil(
            (obj_coch.paperPrice + obj_coch.printingPrice)  
          );
          $("#flyerForm .price-container").css("display", "flex");
          if ($("#flyerForm #solofanCheck").prop("checked") === true) {
            qtyPrice =
              qtyPrice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
          }
          if ($("#flyerForm #uvCheck").prop("checked") === true) {
            qtyPrice = qtyPrice + Math.ceil(obj_coch.qty / 1000) * UVprice;
          }
          unitPrice = qtyPrice / obj_coch.qty;
          $("#flyerForm #unitPrice").html(unitPrice.toFixed(2));

          if (qtyPrice < 35) {
            qtyPrice = 35;
            $("#flyerForm #qtyPrice").html(qtyPrice);
          } else {
            $("#flyerForm #qtyPrice").html(qtyPrice);
          }
        } else {
          obj_coch.width = Number($("#flyerForm #width-textbox").val());
          obj_coch.height = Number($("#flyerForm #height-textbox").val());
          obj_coch.qty = Number($("#flyerForm #qty-textbox").val());
          obj_coch.faces = Number($("#flyerForm  #faces-textbox").val());
          obj_coch.colors = Number($("#flyerForm  #colors-textbox").val());
          obj_coch.weight = Number($("#flyerForm  #weight-textbox").val());
          // obj_coch.paperPrice = 0;
          // obj_coch.finalQTY = 0;
          // obj_coch.printingPrice = 0;
          Cochetsizedetect(obj_coch);
          Printingprice(obj_coch);
          

          $("#flyerForm .price-container").css("display", "flex");

          qtyPrice = Math.ceil(
            (obj_coch.paperPrice + obj_coch.printingPrice) * 1.2
          );
          if ($("#flyerForm #solofanCheck").prop("checked") === true) {
            qtyPrice =
              qtyPrice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
          }
          if ($("#flyerForm #uvCheck").prop("checked") === true) {
            qtyPrice = qtyPrice + Math.ceil(obj_coch.qty / 1000) * UVprice;
          }
          $("#flyerForm #qtyPrice").html(qtyPrice);
          unitPrice = qtyPrice / obj_coch.qty;
          $("#flyerForm #unitPrice").html(unitPrice.toFixed(2));
        }
      } else {
        $("#flyerDropdown").addClass("empty");
      }
    } else {
      $("#flyerForm " + "#" + Classname1).addClass("empty");
    }
  });
});

// sticker Script
$("#stickerDropdown li a").click(function () {
  $("#stickerDropdown button").html($(this).html());
  $(".sticker-form .width").hide();
  $(".sticker-form .height").hide();
  if ($(this).html() === "A3") {
    productWidth = 29.7;
    productHeight = 42;
    $("#stickerDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "A4") {
    productWidth = 29.7;
    productHeight = 21;
    $("#stickerDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "A5") {
    productWidth = 14.8;
    productHeight = 21;
    $("#stickerDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "A6") {
    productWidth = 10.5;
    productHeight = 14.8;
    $("#stickerDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "24*16") {
    productWidth = 16;
    productHeight = 24;
    $("#stickerDropdown").attr("data-detect", $(this).html());
  }
  else if ($(this).html() === "20*10") {
    productWidth = 10;
    productHeight = 20;
    $("#stickerDropdown").attr("data-detect", $(this).html());
  }
  else if ($(this).html() === "ربع") {
    productWidth = 33;
    productHeight = 48;
    $("#stickerDropdown").attr("data-detect", $(this).html());
  } else {
    $("#stickerDropdown").attr("data-detect", $(this).html());
  }
});

$("#stickerDropdown li a").click(function () {
  $("#stickerDropdown button").html($(this).html());
  $(".sticker-form .width").hide();
  $(".sticker-form .height").hide();
});

$("#stickerFrom .search-btn").click(function () {
  $("#stickerFrom .form-control").each(function () {
    var obj_stick = {};
    let Classname1 = $(this).parent().attr("id");
    if ($(this).val() != "") {
      $("#stickerFrom " + "#" + Classname1).removeClass("empty");
      if ($("#stickerDropdown").attr("data-detect") != "none") {
        $("#stickerDropdown").removeClass("empty");
        if ($("#stickerFrom .width").css("display") == "none") {
          obj_stick.width = productWidth;
          obj_stick.height = productHeight;
          obj_stick.qty = Number($("#stickerFrom #qty-textbox").val());
          obj_stick.colors = Number($("#stickerFrom  #colors-textbox").val());
          Stickersizedetect(obj_stick);
          qtyPrice = Math.ceil(
            (obj_stick.paperPrice + obj_stick.printingPrice)
          );
          $("#stickerFrom .price-container").css("display", "flex");
          if ($("#stickerFrom #solofanCheck").prop("checked") === true) {
            qtyPrice =
              qtyPrice + obj_stick.finalQTY *  solofanFace;
          }
          if ($("#stickerFrom #uvCheck").prop("checked") === true) {
            qtyPrice = qtyPrice + Math.ceil(obj_stick.qty / 1000) * UVprice;
          }
          unitPrice = qtyPrice / obj_stick.qty;
          $("#stickerFrom #unitPrice").html(unitPrice.toFixed(2));
         
          $("#stickerFrom #qtyPrice").html(qtyPrice);
          
        } else {
          obj_stick.width = Number($("#stickerFrom #width-textbox").val());
          obj_stick.height = Number($("#stickerFrom #height-textbox").val());
          obj_stick.qty = Number($("#stickerFrom #qty-textbox").val());
          obj_stick.colors = Number($("#stickerFrom  #colors-textbox").val());
          Stickersizedetect(obj_stick);
          $("#stickerFrom .price-container").css("display", "flex");

          qtyPrice = Math.ceil(
            (obj_stick.paperPrice + obj_stick.printingPrice)
          );
          if ($("#stickerFrom #solofanCheck").prop("checked") === true) {
            qtyPrice =
              qtyPrice + obj_stick.finalQTY * solofanFace;
          }
          if ($("#stickerFrom #uvCheck").prop("checked") === true) {
            qtyPrice = qtyPrice + Math.ceil(obj_stick.qty / 1000) * UVprice;
          }
          unitPrice = qtyPrice / obj_stick.qty;
          $("#stickerFrom #unitPrice").html(unitPrice.toFixed(2));
          $("#stickerFrom #qtyPrice").html(qtyPrice);
        }
      } else {
        $("#stickerDropdown").addClass("empty");
      }
    } else {
      $("#stickerFrom " + "#" + Classname1).addClass("empty");
    }
  });
});

$("#stickerDropdown li:nth-child(6) a").click(function () {
  $(".sticker-form .width").show();
  $(".sticker-form .height").show();
});

// notebook Script


$("#notebookDropdown li a").click(function () {
  $(".magazine-form .width").hide();
  $(".magazine-form .height").hide();
  $("#notebookDropdown button").html($(this).html());
  if ($(this).html() === "A4") {
    productWidth = 21;
    productHeight = 29.7;
    $("#notebookDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "A5") {
    productWidth = 14.8;
    productHeight = 21; 
    $("#notebookDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "A6") {
    productWidth = 10.5;
    productHeight = 14.8;
    $("#notebookDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "24*16") {
    productWidth = 16;
    productHeight = 24;
    $("#notebookDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "20*10") {
    productWidth = 10;
    productHeight = 20;
    $("#notebookDropdown").attr("data-detect", $(this).html());
  } 
});
$("#notebookFrom .search-btn").click(function () {
  $("#notebookFrom .form-control").each(function () {
    var obj_pr = {};
    var obj_coch = {};
    let insideprice = 0;
    let coverprice = 0;
    let coveringprice = 0;
    let Classname1 = $(this).parent().attr("id");
    if ($(this).val() != "") {
      $("#notebookFrom " + "#" + Classname1).removeClass("empty");
      if ($("#notebookDropdown").attr("data-detect") != "none") {
        $("#notebookDropdown").removeClass("empty");
        // inside
       
        
          if ($("#notebookFrom .width").css("display") == "none"){
            obj_pr.width = productWidth;
            obj_pr.height = productHeight;
          }
          else{
            obj_pr.width = Number($("#notebookFrom #width-textbox").val());
            obj_pr.height = Number($("#notebookFrom #height-textbox").val());

          }
          obj_pr.qty = (Number($("#notebookFrom #inqty-textbox").val()) * Number($("#notebookFrom #qty-textbox").val()));
          obj_pr.weight = Number($("#notebookFrom #inweight-textbox").val());
          obj_pr.colors = Number($("#notebookFrom #incolor-textbox").val());
          obj_pr.faces =  Number($("#notebookFrom #infaces-textbox").val());
          PrintingpaperDetect(obj_pr);
          insideprice = Math.ceil(((obj_pr.printingPrice + obj_pr.paperPrice)  * 1.2) )
        
        
        // cover  
        obj_coch = {};
       
          if ($("#notebookFrom .width").css("display") == "none"){
            obj_coch.width = productWidth;
            obj_coch.height = productHeight;
          }
          else{
            obj_coch.width =  Number($("#notebookFrom #width-textbox").val());
            obj_coch.height = Number($("#notebookFrom #height-textbox").val());
          }
    
          obj_coch.qty =    Number($("#notebookFrom #qty-textbox").val());
          obj_coch.weight = Number($("#notebookFrom #coverweight-textbox").val());
          obj_coch.colors = Number($("#notebookFrom #covercolor-textbox").val());
          obj_coch.faces =  Number($("#notebookFrom #coverfaces-textbox").val());
          Cochetsizedetect(obj_coch)
          coverprice = Math.ceil((obj_coch.printingPrice + obj_coch.paperPrice) * 1.2);
            if ($("#notebookFrom #coversolofanCheck").prop("checked") === true) {
              coverprice =
              coverprice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
          }
          
          if ($("#notebookFrom #coveruvCheck").prop("checked") === true) {
            coverprice = coverprice + Math.ceil(obj_coch.qty / 1000) * UVprice;
          }
          if ($("#notebookFrom #coveringDropdown button").attr("data-detect") === "daboos"){
            coveringprice = Number($("#notebookFrom #qty-textbox").val()) * normalcoveringUnit
            coverprice = coverprice*2
          }
          else if ($("#notebookFrom  #coveringDropdown button").attr("data-detect") === "hard"){
            coveringprice = Number($("#notebookFrom #qty-textbox").val()) * hardcoverunit
            coverprice = coverprice*2
          }
          else if ($("#notebookFrom  #coveringDropdown button").attr("data-detect") === "wire"){
            coveringprice = Number($("#notebookFrom #qty-textbox").val()) * wireCoveringunit
            coverprice = coverprice*2
          }
          else if ($("#notebookFrom  #coveringDropdown button").attr("data-detect") === "sew"){
            coveringprice = Number($("#notebookFrom #qty-textbox").val()) * sewcoverunit
            coverprice = coverprice*2
          }
          qtyPrice = Math.ceil(coverprice + coveringprice + insideprice)
          $("#notebookFrom .price-container").css("display", "flex");
          $("#notebookFrom #qtyPrice").html(qtyPrice);
          unitPrice = qtyPrice / obj_coch.qty;
          $("#notebookFrom #unitPrice").html(unitPrice.toFixed(2));
       
    }
  } else {
      $("#notebookFrom " + "#" + Classname1).addClass("empty");
    }
   
  
  });

});

$("#notebookFrom li:nth-child(6) a").click(function () {
  $(".notebook-form .width").show();
  $(".notebook-form .height").show();
});
$(".notebook-form #coveringDropdown li a").click(function () {
  $(".notebook-form #coveringDropdown button").html($(this).html());
  $(".notebook-form #coveringDropdown button").attr("data-detect" , $(this).attr("data-detect"))
});



// Env Script

let EnvD = ""
$("#envelopeDropdown li a").click(function () {
  $("#envelopeDropdown button").html($(this).html());
  if ($(this).html() === "امريكاني") {
    EnvD = "امريكاني";
    $("#envelopeDropdown").attr("data-detect", $(this).html());
  } 
  else{
    EnvD = "C4";
  }
});
$("#envelopeFrom .search-btn").click(function () {
  $("#envelopeFrom .form-control").each(function () {
    var obj_env = {};
    let Classname1 = $(this).parent().attr("id");
    if ($(this).val() != "") {
      $("#envelopeFrom " + "#" + Classname1).removeClass("empty");
      if ($("#envelopeDropdown").attr("data-detect") != "none") {
        $("#envelopeDropdown").removeClass("empty");
        obj_env.qty = Number($("#envelopeFrom #qty-textbox").val());
        obj_env.faces = Number($("#envelopeFrom #faces-textbox").val());
        obj_env.colors = Number($("#envelopeFrom #colors-textbox").val());
        obj_env.size = EnvD;
        envDetect(obj_env);
        $("#envelopeFrom .price-container").css("display", "flex");
        $("#envelopeFrom #unitPrice").html((obj_env.finalprice / obj_env.qty).toFixed(2));
        $("#envelopeFrom #qtyPrice").html(Math.ceil(obj_env.finalprice));
      } else {
        $("#envelopeDropdown").addClass("empty");
      }
    } else {
      $("#envelopeFrom " + "#" + Classname1).addClass("empty");
    }
   
  
  });

});
let letterheadW = 0;
// letterhead Script
$("#letterheadDropdown li a").click(function () {

  $("#letterheadDropdown button").html($(this).html());
  if ($(this).html() === "100 Gm") {
    letterheadW = 100;
    $("#letterheadDropdown").attr("data-detect", $(this).html());
  } else if ($(this).html() === "80 Gm") {
    letterheadW = 80;
    $("#letterheadDropdown").attr("data-detect", $(this).html());
  }  else {
    letterheadW = 70;
    $("#letterheadDropdown").attr("data-detect", $(this).html());
  }
});

$("#letterheadFrom .search-btn").click(function () {
  
  $("#letterheadFrom .form-control").each(function () {
    var obj_pr = {};
    let Classname1 = $(this).parent().attr("id");
    if ($(this).val() != "") {
      $("#letterheadFrom " + "#" + Classname1).removeClass("empty");
      if ($("#letterheadDropdown").attr("data-detect") != "none") {
        $("#letterheadDropdown").removeClass("empty");
        obj_pr.qty = Number($("#letterheadFrom #qty-textbox").val());
        obj_pr.faces = 1;
        obj_pr.colors = Number($("#letterheadFrom #colors-textbox").val());
        obj_pr.width = 21;
        obj_pr.height = 29.7;
        obj_pr.weight = letterheadW;
        PrintingpaperDetect(obj_pr);
        qtyPrice = Math.ceil(
          (obj_pr.paperPrice + obj_pr.printingPrice) 
        );
        $("#letterheadFrom .price-container").css("display", "flex");
        $("#letterheadFrom #unitPrice").html((qtyPrice / obj_pr.qty).toFixed(2));
        $("#letterheadFrom #qtyPrice").html(Math.ceil(qtyPrice));
      } else {
        $("#letterheadDropdown").addClass("empty");
      }
    } else {
      $("#letterheadFrom " + "#" + Classname1).addClass("empty");
    }
   
  
  });

});
$("#letterheadDropdown li a").click(function () {
  $("#letterheadDropdown button").html($(this).html());
});

// books Script

$("#booksDropdown li a").click(function () {
  $(".books-form .width").hide();
  $(".books-form .height").hide();
  $("#booksDropdown button").html($(this).html());
  if ($(this).html() === "A4") {
    productWidth = 21;
    productHeight = 29.7;
    $("#booksDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "A5") {
    productWidth = 14.8;
    productHeight = 21; 
    $("#booksDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "A6") {
    productWidth = 10.5;
    productHeight = 14.8;
    $("#booksDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "24*16") {
    productWidth = 16;
    productHeight = 24;
    $("#booksDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "20*10") {
    productWidth = 10;
    productHeight = 20;
    $("#booksDropdown").attr("data-detect", $(this).html());
  } 
});
$("#booksFrom .search-btn").click(function () {
  $("#booksFrom .form-control").each(function () {
    var obj_pr = {};
    var obj_coch = {};
    let insideprice = 0;
    let coverprice = 0;
    let coveringprice = 0;
    let Classname1 = $(this).parent().attr("id");
    if ($(this).val() != "") {
      $("#booksFrom " + "#" + Classname1).removeClass("empty");
      if ($("#booksDropdown").attr("data-detect") != "none") {
        $("#booksDropdown").removeClass("empty");
        // inside
        if ($("#booksFrom #intypeDropdown button").attr("data-detect") === "coche"){
          if ($("#booksFrom .width").css("display") == "none"){
            obj_coch.width = productWidth;
            obj_coch.height = productHeight;
          }
          else{
            obj_coch.width =  Number($("#booksFrom #width-textbox").val());
            obj_coch.height = Number($("#booksFrom #height-textbox").val());
          }
          if (Number($("#booksFrom #qty-textbox").val()) >= 500){
            obj_coch.qty = (Number($("#booksFrom #inqty-textbox").val()) *Number($("#booksFrom #qty-textbox").val()));
          }
          else{
            obj_coch.qty =    (Number($("#booksFrom #inqty-textbox").val()) );
          }
          
          obj_coch.weight = Number($("#booksFrom #inweight-textbox").val());
          obj_coch.colors = Number($("#booksFrom #incolor-textbox").val());
          obj_coch.faces =  Number($("#booksFrom #infaces-textbox").val());
          Cochetsizedetect(obj_coch)
          if (Number($("#booksFrom #qty-textbox").val()) >= 500){
            insideprice = Math.ceil((obj_coch.printingPrice + obj_coch.paperPrice) * 1.2);
          }
          else {
            insideprice = Math.ceil((obj_coch.printingPrice + obj_coch.paperPrice) * Number($("#booksFrom #qty-textbox").val()) * 1.2);
          }
          
          if ($("#booksFrom #insolofanCheck").prop("checked") === true) {
            insideprice =
            insideprice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
          }
          if ($("#booksFrom #inuvCheck").prop("checked") === true) {
            insideprice = insideprice + Math.ceil(obj_coch.qty / 1000) * UVprice;
          }
          
        }
        else if ($("#booksFrom #intypeDropdown button").attr("data-detect") === "printing"){
          if ($("#booksFrom .width").css("display") == "none"){
            obj_pr.width = productWidth;
            obj_pr.height = productHeight;
          }
          else{
            obj_pr.width = Number($("#booksFrom #width-textbox").val());
            obj_pr.height = Number($("#booksFrom #height-textbox").val());

          }
          if (Number($("#booksFrom #qty-textbox").val()) >= 500){
            obj_pr.qty =    (Number($("#booksFrom #inqty-textbox").val()) *Number($("#booksFrom #qty-textbox").val()));
          }
          else{
            obj_pr.qty =    (Number($("#booksFrom #inqty-textbox").val()) );
          }
          obj_pr.weight = Number($("#booksFrom #inweight-textbox").val());
          obj_pr.colors = Number($("#booksFrom #incolor-textbox").val());
          obj_pr.faces =  Number($("#booksFrom #infaces-textbox").val());
          PrintingpaperDetect(obj_pr);
         
          if (Number($("#booksFrom #qty-textbox").val()) >= 500){
            insideprice = Math.ceil(((obj_pr.printingPrice + obj_pr.paperPrice)  * 1.2) )
          }
          else {
            insideprice = Math.ceil(((obj_pr.printingPrice + obj_pr.paperPrice) * Number($("#booksFrom #qty-textbox").val()) * 1.2) )
          }
          
        
        }
        // cover  
        obj_coch = {};
       
          if ($("#booksFrom .width").css("display") == "none"){
            obj_coch.width = productWidth;
            obj_coch.height = productHeight;
          }
          else{
            obj_coch.width =  Number($("#booksFrom #width-textbox").val());
            obj_coch.height = Number($("#booksFrom #height-textbox").val());
          }
    
          obj_coch.qty =    Number($("#booksFrom #qty-textbox").val());
          obj_coch.weight = Number($("#booksFrom #coverweight-textbox").val());
          obj_coch.colors = Number($("#booksFrom #covercolor-textbox").val());
          obj_coch.faces =  Number($("#booksFrom #coverfaces-textbox").val());
          Cochetsizedetect(obj_coch)
          coverprice = Math.ceil((obj_coch.printingPrice + obj_coch.paperPrice) * 1.2);
            if ($("#booksFrom #coversolofanCheck").prop("checked") === true) {
              coverprice =
              coverprice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
          }
          
          if ($("#booksFrom #coveruvCheck").prop("checked") === true) {
            coverprice = coverprice + Math.ceil(obj_coch.qty / 1000) * UVprice;
          }
          if ($("#booksFrom #coveringDropdown button").attr("data-detect") === "daboos"){
            coveringprice = Number($("#booksFrom #qty-textbox").val()) * normalcoveringUnit
            coverprice = coverprice*2
          }
          else if ($("#booksFrom  #coveringDropdown button").attr("data-detect") === "hard"){
            coveringprice = Number($("#booksFrom #qty-textbox").val()) * hardcoverunit
            coverprice = coverprice*2
          }
          else if ($("#booksFrom  #coveringDropdown button").attr("data-detect") === "wire"){
            coveringprice = Number($("#booksFrom #qty-textbox").val()) * wireCoveringunit
            coverprice = coverprice*2
          }
          else if ($("#booksFrom  #coveringDropdown button").attr("data-detect") === "sew"){
            coveringprice = Number($("#booksFrom #qty-textbox").val()) * sewcoverunit
            coverprice = coverprice*2
          }
          qtyPrice = Math.ceil(coverprice + coveringprice + insideprice)
          $("#booksFrom .price-container").css("display", "flex");
          $("#booksFrom #qtyPrice").html(qtyPrice);
          unitPrice = qtyPrice / obj_coch.qty;
          $("#booksFrom #unitPrice").html(unitPrice.toFixed(2));
       
    }
  } else {
      $("#booksFrom " + "#" + Classname1).addClass("empty");
    }
   
  
  });

});

$("#booksDropdown li:nth-child(6) a").click(function () {
  $(".books-form .width").show();
  $(".books-form .height").show();
});
$(".books-form #coveringDropdown li a").click(function () {
  $(".books-form #coveringDropdown button").html($(this).html());
  $(".books-form #coveringDropdown button").attr("data-detect" , $(this).attr("data-detect"))
});
$(".books-form #intypeDropdown li a").click(function () {
  $(".books-form #intypeDropdown button").html($(this).html());
  $(".books-form #intypeDropdown button").attr("data-detect",$(this).attr("data-detect"))
});

// another Script

$("#anotherpaperDropdown li a").click(function () {
  $("#anotherpaperDropdown button").html($(this).html());
  $(".anotherpaper-form .width").hide();
  $(".anotherpaper-form .height").hide();
});
$("#anotherpaperDropdown li:nth-child(7) a").click(function () {
  $(".anotherpaper-form .width").show();
  $(".anotherpaper-form .height").show();
});
$(".anotherpaper-form #intypeDropdown li a").click(function () {
  $(".anotherpaper-form #intypeDropdown button").html($(this).html());
});




$("#anotherpaperDropdown li a").click(function () {
  $(".magazine-form .width").hide();
  $(".magazine-form .height").hide();
  $("#anotherpaperDropdown button").html($(this).html());
  if ($(this).html() === "A4") {
    productWidth = 21;
    productHeight = 29.7;
    $("#anotherpaperDropdown").attr("data-detect", $(this).html());
  }
  else if ($(this).attr("data-detect") === "rob3"){
    productWidth = 33;
    productHeight = 48;
    $("#anotherpaperDropdown").attr("data-detect", $(this).attr("data-detect"));
  } 
  else if ($(this).html() === "A3") {
    productWidth = 29.7;
    productHeight = 42;
    $("#anotherpaperDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "A5") {
    productWidth = 14.8;
    productHeight = 21; 
    $("#anotherpaperDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "A6") {
    productWidth = 10.5;
    productHeight = 14.8;
    $("#anotherpaperDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "24*16") {
    productWidth = 16;
    productHeight = 24;
    $("#anotherpaperDropdown").attr("data-detect", $(this).html());
  } 
  else if ($(this).html() === "20*10") {
    productWidth = 10;
    productHeight = 20;
    $("#anotherpaperDropdown").attr("data-detect", $(this).html());
  } 
});
$("#anotherpaperForm .search-btn").click(function () {
  $("#anotherpaperForm .form-control").each(function () {
    var obj_pr = {};
    var obj_coch = {};
    let Classname1 = $(this).parent().attr("id");
    if ($(this).val() != "") {
      $("#anotherpaperForm " + "#" + Classname1).removeClass("empty");
      if ($("#anotherpaperForm").attr("data-detect") != "none") {
        $("#anotherpaperForm").removeClass("empty");
        // inside
        if ($("#anotherpaperForm #intypeDropdown button").attr("data-detect") === "coche"){
          if ($("#anotherpaperForm .width").css("display") == "none"){
            obj_coch.width = productWidth;
            obj_coch.height = productHeight;
          }
          else{
            obj_coch.width =  Number($("#anotherpaperForm #width-textbox").val());
            obj_coch.height = Number($("#anotherpaperForm #height-textbox").val());
          }
          obj_coch.qty = Number($("#anotherpaperForm #qty-textbox").val())
          obj_coch.weight = Number($("#anotherpaperForm #weight-textbox").val());
          obj_coch.colors = Number($("#anotherpaperForm #colors-textbox").val());
          obj_coch.faces =  Number($("#anotherpaperForm #faces-textbox").val());
          Cochetsizedetect(obj_coch);
          qtyPrice = Math.ceil((obj_coch.printingPrice + obj_coch.paperPrice) * 1.2);
          if ($("#anotherpaperForm #insolofanCheck").prop("checked") === true) {
            qtyPrice =
            qtyPrice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
          }
          if ($("#anotherpaperForm #inuvCheck").prop("checked") === true) {
            qtyPrice = qtyPrice + Math.ceil(obj_coch.qty / 1000) * UVprice;
          }
          unitPrice = qtyPrice / obj_coch.qty;
        }
        else if ($("#anotherpaperForm #intypeDropdown button").attr("data-detect") === "printing"){
          if ($("#anotherpaperForm .width").css("display") == "none"){
            obj_pr.width = productWidth;
            obj_pr.height = productHeight;
          }
          else{
            obj_pr.width = Number($("#anotherpaperForm #width-textbox").val());
            obj_pr.height = Number($("#anotherpaperForm #height-textbox").val());

          }
          obj_pr.qty = Number($("#anotherpaperForm #qty-textbox").val())
          obj_pr.weight = Number($("#anotherpaperForm #weight-textbox").val());
          obj_pr.colors = Number($("#anotherpaperForm #colors-textbox").val());
          obj_pr.faces =  Number($("#anotherpaperForm #faces-textbox").val());
          PrintingpaperDetect(obj_pr);
          qtyPrice = Math.ceil(((obj_pr.printingPrice + obj_pr.paperPrice) ) )
          unitPrice = qtyPrice / obj_pr.qty;
        }
          $("#anotherpaperForm .price-container").css("display", "flex");
          $("#anotherpaperForm #qtyPrice").html(qtyPrice);
          
          $("#anotherpaperForm #unitPrice").html(unitPrice.toFixed(2));
         
    }
  } else {
      $("#anotherpaperForm " + "#" + Classname1).addClass("empty");
    }
   
  
  });

});

$("#anotherpaperDropdown li:nth-child(8) a").click(function () {
  $(".anotherpaper-form .width").show();
  $(".anotherpaper-form .height").show();
});
$(".anotherpaper-form #coveringDropdown li a").click(function () {
  $(".anotherpaper-form #coveringDropdown button").html($(this).html());
  $(".anotherpaper-form #coveringDropdown button").attr("data-detect" , $(this).attr("data-detect"))
});
$(".anotherpaper-form #intypeDropdown li a").click(function () {
  $(".anotherpaper-form #intypeDropdown button").html($(this).html());
  $(".anotherpaper-form #intypeDropdown button").attr("data-detect",$(this).attr("data-detect"))
});
