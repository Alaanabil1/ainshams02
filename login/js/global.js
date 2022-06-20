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
const digitalprinting = 1.5;
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
        $(".product-selected").click(function() {
            if ($(".nav.nav-tab.products-tabs").css("display", "none")) {
                $(".nav.nav-tab.products-tabs").css("display", "flex");
            }
        });
        $(".nav-link.products-item").click(function() {
            if ($(window).width() <= 850) {
                $(".product-selected").html($(this).html());
                $(".nav.nav-tab.products-tabs").css("display", "none");
            } else {}
        });
    } else {
        $(".nav.nav-tab.products-tabs").css("display", "flex");
    }
}

function Printingprice(ptr_price) {
    // let Multi = offsetmargin;

    // if (ptr_price.printingType == "offset") {
    //     Multi = offsetmargin;
    // } else if (ptr_price.printingType == "digital") {
    //     Multi = digitalprinting;
    // }

    // if (ptr_price.finalQTY >= 1000) {
    //     Multi = (ptr_price.finalQTY / 1000) * (25 / 1000);
    //     Multi = offsetmargin - Multi;
    // }

    // if (ptr_price.printingType == "offset") {
    //     // if (Multi < 1.2) {
    //     //     Multi = 1.2;
    //     // }
    // } else if (ptr_price.printingType == "digital") {}

    if (ptr_price.printingType == "offset") {
        if (ptr_price.faces) {
            ptr_price.printingPrice =
                Math.ceil(ptr_price.finalQTY / 1000) *
                ptr_price.faces *
                ptr_price.colors *
                offsetprinting;
        } else {
            ptr_price.printingPrice =
                Math.ceil(ptr_price.finalQTY / 1000) *
                ptr_price.colors *
                offsetprinting;
        }
    } else if (ptr_price.printingType == "digital") {
        if (ptr_price.faces) {
            ptr_price.printingPrice =
                Math.ceil(ptr_price.finalQTY) * ptr_price.faces * digitalprinting;
        } else {
            ptr_price.printingPrice = Math.ceil(ptr_price.finalQTY) * digitalprinting;
        }
    }
}

detect();

$(window).resize(function() {
    if ($(window).width() > 850) {
        $(".nav.nav-tab.products-tabs").css("display", "flex");
    } else {
        detect();
    }
});

function PrintingpaperDetect(obj_pr) {
    var Swidd =
        Math.floor(LargeOH / obj_pr.width) * Math.floor(LargeOW / obj_pr.height);
    var Lwidd =
        Math.floor(LargeOH / obj_pr.height) * Math.floor(LargeOW / obj_pr.width);
    if (
        (LargeOH / obj_pr.height < LargeOH / obj_pr.width && Swidd > Lwidd) ||
        (obj_pr.width === 10.5 && obj_pr.height === 14.8)
    ) {
        let optH = obj_pr.height;
        obj_pr.height = obj_pr.width;
        obj_pr.width = optH;
    }
    if ($(`${obj_pr.classname} #p_type`).val() === "offset") {
        let countLH = LargeOH / obj_pr.height;
        let countLW = LargeOW / obj_pr.width;

        //Offset 70
        obj_pr.finalQTY = Math.floor(countLH) * Math.floor(countLW);
        obj_pr.finalQTY = Math.ceil(obj_pr.qty / obj_pr.finalQTY);
        if (obj_pr.weight === 100) {
            obj_pr.paperPrice = Math.ceil(
                (obj_pr.finalQTY / 4) * (normalpaperPackage100 / 500)
            );
        } else if (obj_pr.weight === 70) {
            obj_pr.paperPrice = Math.ceil(
                (obj_pr.finalQTY / 4) * (normalpaperPackage70 / 500)
            );
        } else {
            obj_pr.paperPrice = Math.ceil(
                (obj_pr.finalQTY / 4) * (normalpaperPackage80 / 500)
            );
        }

        // obj_pr.printingPrice =
        // Math.ceil(obj_pr.finalQTY / 1000) *
        //   obj_pr.faces *
        //   obj_pr.colors *
        //   offsetprinting;
        obj_pr.printingType = "offset";
        return obj_pr;
    } else {
        let countLH = LargeDH / obj_pr.height;
        let countLW = LargeDW / obj_pr.width;

        //Digital 70
        obj_pr.finalQTY = Math.floor(countLH) * Math.floor(countLW);
        obj_pr.finalQTY = Math.ceil(obj_pr.qty / obj_pr.finalQTY);
        if (obj_pr.weight === 100) {
            obj_pr.paperPrice = Math.ceil(
                (obj_pr.finalQTY / 4) * (normalpaperPackage100 / 500)
            );
        } else if (obj_pr.weight === 70) {
            obj_pr.paperPrice = Math.ceil(
                (obj_pr.finalQTY / 4) * (normalpaperPackage70 / 500)
            );
        } else {
            obj_pr.paperPrice = Math.ceil(
                (obj_pr.finalQTY / 4) * (normalpaperPackage80 / 500)
            );
        }
        obj_pr.printingType = "digital";
        // if (obj_pr.faces === 1) {
        //     if (obj_pr.finalQTY > 300) {
        //         // obj_pr.printingPrice =
        //         // Math.ceil(obj_pr.finalQTY / 1000) *
        //         // obj_pr.faces *
        //         // obj_pr.colors *
        //         // offsetprinting;
        //         obj_pr.printingType = "offset";
        //     } else {
        //         // obj_pr.printingPrice = obj_pr.finalQTY * digitalprinting1face;
        //         obj_pr.printingType = "digital";
        //     }
        // } else {
        //     if (obj_pr.finalQTY > 300) {
        //         // obj_pr.printingPrice =
        //         // Math.ceil(obj_pr.finalQTY / 1000) *
        //         // obj_pr.faces *
        //         // obj_pr.colors *
        //         // offsetprinting;
        //         obj_pr.printingType = "offset";
        //     } else {
        //         // obj_pr.printingPrice = obj_pr.finalQTY * digitalprinting2face;
        //         obj_pr.printingType = "digital";
        //     }
        // }

        return obj_pr;
    }
}

function envDetect(obj_env) {
    if (obj_env.size === "C4") {
        if (obj_env.qty > 500) {
            obj_env.finalprice =
                obj_env.qty * C4env +
                Math.ceil(obj_env.qty / 1000) *
                obj_env.faces *
                obj_env.colors *
                offsetprinting;
        } else {
            obj_env.finalprice =
                obj_env.qty * C4env + obj_env.qty * obj_env.faces * digitalprinting;
        }
    } else {
        if (obj_env.qty > 500) {
            obj_env.finalprice =
                obj_env.qty * Americanenv +
                Math.ceil(obj_env.qty / 1000) *
                obj_env.faces *
                obj_env.colors *
                offsetprinting;
        } else {
            obj_env.finalprice =
                obj_env.qty * Americanenv +
                obj_env.qty * obj_env.faces * digitalprinting;
        }
    }
    return obj_env;
}

function Cochetsizedetect(obj_coch) {
    var Swidd =
        Math.floor(LargeOH / obj_coch.width) *
        Math.floor(LargeOW / obj_coch.height);
    var Lwidd =
        Math.floor(LargeOH / obj_coch.height) *
        Math.floor(LargeOW / obj_coch.width);
    if (
        (LargeOH / obj_coch.height < LargeOH / obj_coch.width && Swidd > Lwidd) ||
        (obj_coch.width === 10.5 && obj_coch.height === 14.8)
    ) {
        let optH = obj_coch.height;
        obj_coch.height = obj_coch.width;
        obj_coch.width = optH;
    }
    if ($(`${obj_coch.classname} #p_type`).val() === "offset") {
        obj_coch.printingType = "offset";
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
            obj_coch.printingType = "offset";
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
            obj_coch.printingType = "digital";
            obj_coch.finalQTY = Math.floor(countGH) * Math.floor(countGW);
            obj_coch.finalQTY = Math.ceil(obj_coch.qty / obj_coch.finalQTY);
            obj_coch.paperPrice = Math.ceil(
                ((obj_coch.finalQTY / 4) * obj_coch.weight * 88 * 66 * chochetTon) /
                10000000000
            );
            // obj_coch.printingPrice = obj_coch.finalQTY * faces * digitalprinting;
        } else {
            //Digital 70
            obj_coch.printingType = "digital";
            obj_coch.finalQTY = Math.floor(countLH) * Math.floor(countLW);
            obj_coch.finalQTY = Math.ceil(obj_coch.qty / obj_coch.finalQTY);
            obj_coch.paperPrice = Math.ceil(
                ((obj_coch.finalQTY / 4) * obj_coch.weight * 70 * 100 * chochetTon) /
                10000000000
            );
            // obj_coch.printingPrice = obj_coch.finalQTY * faces * digitalprinting;
        }
    }
    return obj_coch;
}

function Stickersizedetect(obj_stick) {
    // let finalQTY = 0;
    var Swidd =
        Math.floor(LargeOH / obj_stick.width) *
        Math.floor(LargeOW / obj_stick.height);
    var Lwidd =
        Math.floor(LargeOH / obj_stick.height) *
        Math.floor(LargeOW / obj_stick.width);
    if (
        (LargeOH / obj_stick.height < LargeOH / obj_stick.width && Swidd > Lwidd) ||
        (obj_stick.width === 10.5 && obj_stick.height === 14.8)
    ) {
        let optH = obj_stick.height;
        obj_stick.height = obj_stick.width;
        obj_stick.width = optH;
    }
    if (
        (obj_stick.width >= 15 &&
            obj_stick.height >= 20 &&
            obj_stick.qty >= 1000) ||
        (obj_stick.width >= 10 &&
            obj_stick.height >= 20 &&
            obj_stick.qty >= 5000) ||
        (obj_stick.width <= 10 && obj_stick.height <= 20 && obj_stick.qty >= 10000)
    ) {
        let countLH = LargeOH / obj_stick.height;
        let countLW = LargeOW / obj_stick.width;

        obj_stick.finalQTY = Math.floor(countLH) * Math.floor(countLW);
        obj_stick.finalQTY = Math.ceil(obj_stick.qty / obj_stick.finalQTY);
        obj_stick.paperPrice = Math.ceil((obj_stick.finalQTY / 4) * stickerPrice);
        // obj_stick.printingPrice =
        //   Math.ceil(obj_stick.finalQTY / 1000) *
        //   1.3 *
        //   obj_stick.colors *
        //   offsetprinting;
        obj_stick.printingType = "offset";

        return obj_stick;
    } else {
        let countLH = LargeDH / obj_stick.height;
        let countLW = LargeDW / obj_stick.width;

        obj_stick.finalQTY = Math.floor(countLH) * Math.floor(countLW);
        obj_stick.finalQTY = Math.ceil(obj_stick.qty / obj_stick.finalQTY);
        obj_stick.paperPrice = Math.ceil(
            (obj_stick.finalQTY / 4) * 1.52 * stickerPrice
        );
        if (obj_stick.finalQTY > 500) {
            // obj_stick.printingPrice =
            // Math.ceil(obj_stick.finalQTY / 1000) *
            // 1.3 *
            // obj_stick.colors *
            // offsetprinting;
            obj_stick.printingType = "offset";
        } else {
            // obj_stick.printingPrice = obj_stick.finalQTY * digitalprinting1face;
            obj_stick.printingType = "digital";
        }

        return obj_stick;
    }
}

function DfatersizeDetect(obj_dftr) {
    if (
        (obj_dftr.height <= 50 && obj_dftr.width <= 35) ||
        (obj_dftr.width <= 50 && obj_dftr.height <= 35)
    ) {
        var LengthD = 100 / obj_dftr.height;
        var WidthD = 70 / obj_dftr.width;
        var LengthDS = 100 / obj_dftr.width;
        var WidthFs = 70 / obj_dftr.height;
        var count01 = Math.floor(LengthD) * Math.floor(WidthD);
        var count02 = Math.floor(LengthDS) * Math.floor(WidthFs);

        if (count01 > count02) {
            obj_dftr.papergenralQty = obj_dftr.qty / count01;
            obj_dftr.finalcount = count01;
        } else {
            obj_dftr.papergenralQty = obj_dftr.qty / count02;
            obj_dftr.finalcount = count02;
        }
        if (obj_dftr.copies === 0) {
            obj_dftr.paperPrice =
                obj_dftr.papergenralQty * 100 * (normalpaperPackage80 / 500);
            obj_dftr.printingPrice =
                Math.ceil((obj_dftr.papergenralQty * 100) / 4 / 1000) *
                offsetprinting *
                obj_dftr.colors;
        } else if (obj_dftr.copies === 1) {
            obj_dftr.paperPrice =
                obj_dftr.papergenralQty * 50 * (carbonpaperFirst / 500) +
                obj_dftr.papergenralQty * 50 * (carbonpaperLast / 500);
            obj_dftr.printingPrice =
                Math.ceil((obj_dftr.papergenralQty * 50 * 2) / 4 / 1000) *
                offsetprinting *
                obj_dftr.colors;
        } else if (obj_dftr.copies === 2) {
            obj_dftr.paperPrice =
                obj_dftr.papergenralQty * 50 * (carbonpaperFirst / 500) +
                obj_dftr.papergenralQty * 50 * (carbonpaperLast / 500) +
                obj_dftr.papergenralQty * 50 * (carbonpapermiddle / 500);
            obj_dftr.printingPrice =
                Math.ceil((obj_dftr.papergenralQty * 50 * 3) / 4 / 1000) *
                offsetprinting *
                obj_dftr.colors;
        } else {
            obj_dftr.paperPrice =
                obj_dftr.papergenralQty * 25 * (carbonpaperFirst / 500) +
                obj_dftr.papergenralQty * 25 * (carbonpaperLast / 500) +
                obj_dftr.papergenralQty *
                25 *
                (obj_dftr.copies - 1) *
                (carbonpapermiddle / 500);
            obj_dftr.printingPrice =
                Math.ceil((obj_dftr.papergenralQty * 25 * obj_dftr.copies) / 4 / 1000) *
                offsetprinting *
                obj_dftr.colors;
        }

        obj_dftr.coveringPrice = obj_dftr.qty * normalcoveringUnit;
    } else {
        //Error
    }
}

// --------------------------------------------- Ncr Script

$("#ncrDropdown li a").click(function() {
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
    } else if ($(this).html() === "A6" || $(this).html() === "10*15") {
        productWidth = 15;
        productHeight = 10;
        $("#ncrDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "25*17.5") {
        productWidth = 17.5;
        productHeight = 25;
        $("#ncrDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "20*10") {
        productWidth = 10;
        productHeight = 20;
        $("#ncrDropdown").attr("data-detect", $(this).html());
    }
});

var modal = document.getElementById("myModal2");

var globleindex = 0;
var arr_orders = [];

$("#ordertableForm .btn-clear").click(function() {
    if (confirm("هل تريد مسح كل المنتجات ؟؟")) {
        $("#ordertable").empty();
        $("#priceall").html("");
        globleindex = 0;
        arr_orders = [];
        $("#ordertable").append(`
        <thead>
        <tr>
            <th class="col" scope="col">النوع</th>
            <th class="col" scope="col">المقاس </th>
            <th class="col" scope="col">الكمية</th>
            <th class="col" scope="col">السعر</th>
            <th class="col" scope="col">المزيد</th>
            <th class="col" scope="col">مسح النتج</th>
        </tr>
    </thead>
    <tbody id="orderbody">

    </tbody>
      `);
    } else {}
});

$(".btn-new").click(function() {});

$(".btn-send-order").click(function() {
    if (confirm("هل تريد انشاء طلب جديد ؟؟")) {
        if (arr_orders.length > 0) {
            var arr_orders_check = [];
            var index_check_order = 0;
            for (
                var index_inner = 0; index_inner < arr_orders.length; index_inner++
            ) {
                if (arr_orders[index_inner] != "") {
                    arr_orders_check[index_check_order] = arr_orders[index_inner];
                    index_check_order++;
                }
            }
            if (arr_orders_check.length > 0) {
                create_new_order(arr_orders_check);
            } else {
                alertMSG("لا توجد منتجات");
            }
        } else {
            alertMSG("لا توجد منتجات");
        }
    } else {}
});

async function clients() {
    Loading_page_set();

    var get_all_users = await GET_DATA_TABLES(database_fixed_link, "users");

    if (get_all_users) {
        for (var index = 0; index < get_all_users.length; index++) {
            $("#client-tablebody").append(`<tr>
            <td data-label="التسلسل">${get_all_users[index].id}</td>
            <td data-label="الإسم">${get_all_users[index].name}</td> 
            <td data-label="التليفون">${get_all_users[index].phone} </td> 
            <td data-label="البريد">${get_all_users[index].email} </td> 
            <td data-label="النوع">${get_all_users[index].type} </td> 
            <td data-label="اسم المستخدم">${get_all_users[index].username} </td> 
            <td data-label="كلمة السر">${get_all_users[index].password_value} </td> 
            <td data-label="الصلاحيات">${get_all_users[index].role_id} </td> 
       
        </tr>
        `);
        }
    }
    Loading_page_clear();
}
var get_all_orders_static = [];
var get_all_users_static = [];

async function orders_func(status_condition, fin_condition) {
    Loading_page_set();

    var get_all_orders = await GET_DATA_TABLES(database_fixed_link, "orders");
    var get_all_sub_orders = await GET_DATA_TABLES(
        database_fixed_link,
        "sub_orders"
    );
    var get_all_users = await GET_DATA_TABLES(database_fixed_link, "users");
    var get_all_invoice = await GET_DATA_TABLES(database_fixed_link, "invoice");

    // select_client

    if (($("#start").val() && $("#end").val()) || $("#select_client").val()) {
        if (get_all_orders) {
            var transition = [];
            var transition_index = 0;
            get_all_orders.forEach((element) => {
                if ($("#select_client").val()) {
                    if (
                        element.timestamp >= $("#start").val() &&
                        element.timestamp <= $("#end").val() &&
                        element.users_id == $("#select_client").val()
                    ) {
                        transition[transition_index] = element;
                        transition_index++;
                    } else if (element.users_id == $("#select_client").val()) {
                        transition[transition_index] = element;
                        transition_index++;
                    }
                } else {
                    if (
                        element.timestamp >= $("#start").val() &&
                        element.timestamp <= $("#end").val()
                    ) {
                        transition[transition_index] = element;
                        transition_index++;
                    }
                }
            });
            get_all_orders = [];
            get_all_orders = transition;
        }
    }

    if (status_condition) {
        if (get_all_orders) {
            var transition = [];
            var transition_index = 0;
            get_all_orders.forEach((element) => {
                if (element.order_status_id == status_condition) {
                    transition[transition_index] = element;
                    transition_index++;
                }
            });
            get_all_orders = [];
            get_all_orders = transition;
        }
    }

    if (fin_condition) {
        if (get_all_orders) {
            var transition = [];
            var transition_index = 0;
            get_all_orders.forEach((element) => {
                get_all_invoice.forEach((element_inv) => {
                    if (element.id == element_inv.order_id) {
                        if (element_inv.status == fin_condition) {
                            transition[transition_index] = element;
                            transition_index++;
                        }
                    }
                });
            });
            get_all_orders = [];
            get_all_orders = transition;
        }
    }

    if (get_all_orders) {
        $("#all_fin").val(0);
        $("#paid_fin").val(0);
        $("#remain_fin").val(0);
        $("#num_fin").val(0);

        get_all_orders.forEach((element) => {
            get_all_invoice.forEach((element_inv) => {
                if (element.id == element_inv.order_id) {
                    $("#num_fin").val(Number($("#num_fin").val()) + 1);
                    element.inv_id = element_inv.id;
                    element.inv_fees = element_inv.fees;
                    element.inv_paid = element_inv.paid;
                    element.inv_discount = element_inv.discount;
                    element.inv_remain = element_inv.remain;
                    element.inv_status = element_inv.status;
                    $("#all_fin").val(
                        Number($("#all_fin").val()) + Number(element.inv_fees)
                    );
                    $("#paid_fin").val(
                        Number($("#paid_fin").val()) + Number(element.inv_paid)
                    );
                    $("#remain_fin").val(
                        Number($("#remain_fin").val()) + Number(element.inv_remain)
                    );
                }
            });
            if (get_all_sub_orders) {
                element.sub_orders = [];
                element.sub_orders_index = 0;
                get_all_sub_orders.forEach((element_sub) => {
                    if (element.id == element_sub.order_id) {
                        element.sub_orders[element.sub_orders_index] = element_sub;
                        element.sub_orders_index++;
                    }
                });
            }
        });
    }

    if (get_all_users) {
        $("#select_client").empty();
        $("#select_client").append(`<option value=''><option/>`);

        get_all_users.forEach((element) => {
            if (element.id) {
                $("#select_client").append(
                    `<option value='${element.id}'>${element.name}</option>`
                );
            }

            if (get_all_orders) {
                get_all_orders.forEach((element_order) => {
                    if (element.id == element_order.users_id) {
                        element_order.user_name = element.name;
                        element_order.user_id = element.id;
                    }
                });
            }
        });
    }

    get_all_orders_static = get_all_orders;

    if (get_all_orders) {
        $("#allordertable").empty();
        $("#allordertable").append(`
        <thead>
                                    <tr>
                                        <th scope="col" class="col">التسلسل</th>
                                        <th scope="col" class="col">التاريخ</th>
                                        <th scope="col" class="col">الاسم </th>
                                        <th scope="col" class="col">الحالة</th>
                                        <th scope="col" class="col">النقديات</th>
                                        <th scope="col" class="col">المزيد</th>
                                    </tr>
                                </thead>

                                <tbody id="orders-tablebody">

                                </tbody>`);

        for (var index = 0; index < get_all_orders.length; index++) {
            var data_user = "";
            if (
                get_all_orders[index].user_id == undefined ||
                get_all_orders[index].user_id == "undefined"
            ) {
                data_user = `لا يوجد عميل`;
            } else {
                data_user = `${get_all_orders[index].user_id} - ${get_all_orders[index].user_name}`;
            }
            var arr_status = [];
            arr_status[0] = "انتظار";
            arr_status[1] = "تشغيل";
            arr_status[2] = "جاهز للشحن";
            arr_status[3] = "انتهاء";
            arr_status[4] = "معطل";
            arr_status[5] = "تصميم";
            arr_status[6] = "الغاء";
            arr_status[7] = "في الطريق";

            var result_arr = `
            
            <tr>
      <td data-label="التسلسل">${get_all_orders[index].id}</td>
      <td data-label="التاريخ">${get_all_orders[index].timestamp}</td>
      <td data-label="اسم العميل">${data_user}</td> `;

            result_arr += `<td><select class="form-control" id="statusButton${index}">`;
            result_arr += `<option>${get_all_orders[index].order_status_id} </option>>`;

            for (var index1 = 0; index1 < arr_status.length; index1++) {
                if (arr_status[index1] != get_all_orders[index].order_status_id) {
                    result_arr += `<option>${arr_status[index1]} </option>>`;
                }
            }
            result_arr += `</select> `;

            // element.inv_id = element_inv.id
            // element.inv_fees = element_inv.fees
            // element.inv_paid = element_inv.paid
            // element.inv_discount = element_inv.discount
            // element.inv_remain = element_inv.remain
            // element.inv_status = element_inv.status

            var arr_status_inv = [];

            arr_status_inv[0] = "غير مدفوع";
            arr_status_inv[1] = "مدفوع";
            arr_status_inv[2] = "غير مكتمل";

            result_arr += ` 
      <button id="updateButton${index}" type="button" style="display:block;margin-right:auto; margin-top:10px;" class="btn btn-success" >تحديث</button></td>
      <td>
      <div class="row g-3">
      <div class="col-md-12">
       <label>السعر :</label><input class="form-control" id='feesinv${index}' value='${get_all_orders[index].inv_fees}' /> 
       </div>
       <div class="col-md-12">
        <label>المتبقى :</label><input class="form-control" id='remaininv${index}' value='${get_all_orders[index].inv_remain}' /> 
        </div>
        <div class="col-md-12">
        <label>المدفوع :</label> <input class="form-control" id='paidinv${index}' value='${get_all_orders[index].inv_paid}' />
        </div>
       </div>
       `;

            result_arr += `<select class="form-control" style ="margin-top:10px;" id="statusinv${index}">`;
            result_arr += `<option>${get_all_orders[index].inv_status} </option>>`;

            for (var index1 = 0; index1 < arr_status_inv.length; index1++) {
                if (arr_status_inv[index1] != get_all_orders[index].inv_status) {
                    result_arr += `<option>${arr_status_inv[index1]} </option>>`;
                }
            }
            result_arr += `</select> <button id="updateButton_inv${index}" type="button" style="display:block;margin-right:auto; margin-top:10px;" class="btn btn-success" >تحديث</button></td> `;

            result_arr += ` </td>
      <td> 
      <button id="moreButton${index}" type="button" class="btn btn-primary" style="display: block;width:100%;" data-toggle="modal" data-target="#myModal4.bd-example-modal-lg">المزيد</button></td>
      </tr>
     
      `;

            $("#allordertable").append(result_arr);

            $("#updateButton" + index).click(async function() {
                let text = this.id;
                let result = text.replace("updateButton", "");

                if (confirm("هل تريد تحديث الاوردار ؟؟")) {
                    var COL_DATA =
                        "order_status_id='" + $("#statusButton" + result).val() + "'";
                    await UPDATE_DATA_TABLES_ONE_COL(
                        database_fixed_link,
                        "orders",
                        get_all_orders_static[Number(result)].id,
                        COL_DATA
                    );
                    // orders_func();
                } else {}
            });

            $("#updateButton_inv" + index).click(async function() {
                let text = this.id;
                let result = text.replace("updateButton_inv", "");

                if (confirm("هل تريد تحديث النقدية ؟؟")) {
                    var COL_DATA =
                        "status='" +
                        $("#statusinv" + result).val() +
                        "',fees='" +
                        $("#feesinv" + result).val() +
                        "' ,paid='" +
                        $("#paidinv" + result).val() +
                        "', remain='" +
                        $("#remaininv" + result).val() +
                        "'";
                    await UPDATE_DATA_TABLES_ONE_COL(
                        database_fixed_link,
                        "invoice",
                        get_all_orders_static[Number(result)].inv_id,
                        COL_DATA
                    );
                    // orders_func();
                } else {}
            });

            $("#moreButton" + index).click(function() {
                let text = this.id;
                let result = text.replace("moreButton", "");
                var result_to_add = `               
        <tr>
        <th>تفاصيل</th>
        <th>الحالة</th>
      </tr>
        `;

                $("#moreordertable").empty();
                $("#moreordertable").append(result_to_add);

                var arr_status = [];
                arr_status[0] = "انتظار";
                arr_status[1] = "تشغيل";
                arr_status[2] = "جاهز للشحن";
                arr_status[3] = "انتهاء";
                arr_status[4] = "معطل";
                arr_status[5] = "تصميم";
                arr_status[6] = "الغاء";
                arr_status[7] = "في الطريق";

                for (
                    var index_inner_more = 0; index_inner_more <
                    get_all_orders_static[Number(result)].sub_orders.length; index_inner_more++
                ) {
                    result_to_add = "";

                    result_to_add += "<tr><td>";
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .main_quantity
                    ) {
                        result_to_add += `الكمية : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .main_quantity
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .printingtype
                    ) {
                        result_to_add += `<br>نوع الطباعة : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .printingtype
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .category
                    ) {
                        result_to_add += `<br>نوع  : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .category
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .size
                    ) {
                        result_to_add += `<br>مقاس  : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .size
            }  `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .weight
                    ) {
                        result_to_add += `<br>الوزن  : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .weight
            }  `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .main_color
                    ) {
                        result_to_add += `<br>الوان  : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .main_color
            }  `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .main_faces
                    ) {
                        result_to_add += `<br>عدد الاوجة  : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .main_faces
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .copy
                    ) {
                        result_to_add += `<br>عدد الصور : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .copy
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .main_solofan
                    ) {
                        result_to_add += `<br>سلوفان : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .main_solofan
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .main_uv
                    ) {
                        result_to_add += `<br>UV : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .main_uv
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .cover
                    ) {
                        result_to_add += `<br>الغلاف : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .cover
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .other_color
                    ) {
                        result_to_add += `<br>الوان الداخل : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .other_color
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .other_faces
                    ) {
                        result_to_add += `<br>عدد الاوجة الداخل : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .other_faces
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .other_quantity
                    ) {
                        result_to_add += `<br>كمية الداخل : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .other_quantity
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .other_solofan
                    ) {
                        result_to_add += `<br>سلوفان الداخل : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .other_solofan
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .other_uv
                    ) {
                        result_to_add += `<br>UV الداخل : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .other_uv
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .other_weight
                    ) {
                        result_to_add += `<br>الوزن الداخل : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .other_weight
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .paper_type
                    ) {
                        result_to_add += `<br>نوع ورق الداخل : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .paper_type
            } `;
                    }
                    if (
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .comment
                    ) {
                        result_to_add += `<br> تعليق : ${
              get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                .comment
            } `;
                    }

                    result_to_add += "</td>";
                    result_to_add += "<td>";
                    result_to_add += `<select id="substatusButton${
            get_all_orders_static[Number(result)].sub_orders[index_inner_more]
              .id
          }">`;
                    result_to_add += `<option>${
            get_all_orders_static[Number(result)].sub_orders[index_inner_more]
              .order_id_status
          } </option>>`;

                    for (var index1 = 0; index1 < arr_status.length; index1++) {
                        if (
                            arr_status[index1] !=
                            get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                            .order_id_status
                        ) {
                            result_to_add += `<option>${arr_status[index1]} </option>>`;
                        }
                    }
                    result_to_add += `</select> <button id="subupdateButton${
            get_all_orders_static[Number(result)].sub_orders[index_inner_more]
              .id
          }" type="button" class="btn btn-success" >تحديث</button> `;

                    result_to_add += "</td></tr>";

                    $("#moreordertable").append(result_to_add);

                    $(
                        "#subupdateButton" +
                        get_all_orders_static[Number(result)].sub_orders[index_inner_more]
                        .id
                    ).click(async function() {
                        let text = this.id;
                        let result = text.replace("subupdateButton", "");

                        if (Swal("هل تريد تحديث الاوردار ؟؟")) {
                            var COL_DATA =
                                "order_id_status='" +
                                $("#substatusButton" + result).val() +
                                "'";
                            await UPDATE_DATA_TABLES_ONE_COL(
                                database_fixed_link,
                                "sub_orders",
                                result,
                                COL_DATA
                            );
                            // orders_func();
                        } else {}
                    });
                }
            });
        }
    }
    Loading_page_clear();
}

$(".client-btn").click(async function() {
    Loading_page_set();

    if (confirm("هل تريد اضافة عميل ؟؟")) {
        if ($("#clients_name").val() == "") {
            alertMSG("الاسم غير متواجد");
            Loading_page_clear();

            return;
        }
        if ($("#clients_phone").val() == "") {
            alertMSG("التليفون غير متواجد");
            Loading_page_clear();

            return;
        }
        if ($("#clients_username").val() == "") {
            alertMSG("اسم المستخدم غير متواجد");
            Loading_page_clear();

            return;
        }
        if ($("#clients_password_value").val() == "") {
            alertMSG("كلمة المرور غير متواجد");
            Loading_page_clear();

            return;
        }

        var get_add_data_var_parent = await ADD_DATA_TABLES_ONE_COL(
            database_fixed_link,
            "users", [
                "name",
                "phone",
                "email",
                "type",
                "username",
                "password_value",
                "role_id",
            ], [
                $("#clients_name").val(),
                $("#clients_phone").val(),
                $("#clients_email").val(),
                $("#clients_type").val(),
                $("#clients_username").val(),
                $("#clients_password").val(),
                $("#clients_role").val(),
            ]
        );

        $("#clients_name").val("");
        $("#clients_phone").val("");
        $("#clients_email").val("");
        $("#clients_type").val("");
        $("#clients_username").val("");
        $("#clients_password").val("");
        $("#clients_role").val("");

        var get_all_users = await GET_DATA_TABLES(database_fixed_link, "users");

        $("#client-tablebody").empty();

        $("#clienttable").append(`
        <thead>
        <tr>
            <th class="col" scope="col">التسلسل</th>
            <th class="col" scope="col">الاسم </th>
            <th class="col" scope="col">التليفون</th>
            <th class="col" scope="col">البريد</th>
            <th class="col" scope="col">النوع</th>
            <th class="col" scope="col">اسم المستخدم</th>
            <th class="col" scope="col">كلمة السر</th>
            <th class="col" scope="col">الصلاحيات</th>
        </tr>
    </thead>
    <tbody id="client-tablebody">

    </tbody>
  `);

        for (var index = 0; index < get_all_users.length; index++) {
            $("#client-tablebody").append(`<tr>
      <td data-label="التسلسل">${get_all_users[index].id}</td>
      <td data-label="الإسم">${get_all_users[index].name}</td> 
      <td data-label="التليفون">${get_all_users[index].phone} </td> 
      <td data-label="البريد">${get_all_users[index].email} </td> 
      <td data-label="النوع">${get_all_users[index].type} </td> 
      <td data-label="اسم المستخدم">${get_all_users[index].username} </td> 
      <td data-label="كلمة السر">${get_all_users[index].password_value} </td> 
      <td data-label="الصلاحيات">${get_all_users[index].role_id} </td> 
      
      </tr>
      `);
        }
        Loading_page_clear();

        swal(
            "تم اضافة عميل جديد بتسلسل " + get_all_users[get_all_users.length - 1].id
        );
    } else {}
});

function insert_orders(obj_dftr, formname) {
    $("#" + formname + " .insert-btn").off();
    $("#" + formname + " .insert-btn").click(function() {
        if (confirm("هل تريد اضافة منتج ؟؟")) {
            obj_dftr.qtyPrice = qtyPrice;

            $("#priceall").html(
                Number($("#priceall").val()) + Number(obj_dftr.qtyPrice)
            );

            $("#orderbody").append(`<tr>
      <td data-label="النوع">${obj_dftr.type_order}</td>
      <td data-label="المقاس">${obj_dftr.width} * ${obj_dftr.height} </td> 
      <td data-label="الكمية">${obj_dftr.qty} </td> 
      <td data-label="السعر">${obj_dftr.qtyPrice} جنية</td> 
      <td data-label="المزيد"> 
      <button id="moreButton${globleindex}" type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal2.bd-example-modal-lg">المزيد</button></td>
      <td data-label="مسح"><button id="DeleteButton${globleindex}" type="button" class="btn btn-danger" ">مسح</button></td>
      </tr>
      `);
            //<td> <a class="btn btn-danger " id="DeleteButton">مسح</a> </td>

            arr_orders[globleindex] = obj_dftr;

            if (obj_dftr.type_order == "دفاتر") {
                arr_orders[Number(globleindex)].comment = $(
                    "#ncrsForm .text-btn"
                ).val();
            } else if (obj_dftr.type_order == "كروت") {
                arr_orders[Number(globleindex)].comment = $(
                    "#cardsFrom .text-btn"
                ).val();
            } else if (obj_dftr.type_order == "فولدرات") {
                arr_orders[Number(globleindex)].comment = $(
                    "#foldersFrom .text-btn"
                ).val();
            } else if (obj_dftr.type_order == "بروشور") {
                arr_orders[Number(globleindex)].comment = $(
                    "#magazineFrom .text-btn"
                ).val();
            } else if (obj_dftr.type_order == "فلايرات") {
                arr_orders[Number(globleindex)].comment = $(
                    "#flyerForm .text-btn"
                ).val();
            } else if (obj_dftr.type_order == "استيكرات") {
                arr_orders[Number(globleindex)].comment = $(
                    "#stickerFrom .text-btn"
                ).val();
            } else if (obj_dftr.type_order == "نوت بوك") {
                arr_orders[Number(globleindex)].comment = $(
                    "#notebookFrom .text-btn"
                ).val();
            } else if (obj_dftr.type_order == "نوت بوك") {
                arr_orders[Number(globleindex)].comment = $(
                    "#notebookFrom .text-btn"
                ).val();
            } else if (obj_dftr.type_order == "اظرف") {
                arr_orders[Number(globleindex)].comment = $(
                    "#envelopeFrom .text-btn"
                ).val();
            } else if (obj_dftr.type_order == "ليتر هيد") {
                arr_orders[Number(globleindex)].comment = $(
                    "#letterheadFrom .text-btn"
                ).val();
            } else if (obj_dftr.type_order == "كتب") {
                arr_orders[Number(globleindex)].comment = $(
                    "#booksFrom .text-btn"
                ).val();
            } else if (obj_dftr.type_order == "ورق") {
                arr_orders[Number(globleindex)].comment = $(
                    "#anotherpaperForm .text-btn"
                ).val();
            }

            $("#moreButton" + globleindex).click(function() {
                let text = this.id;
                let result = text.replace("moreButton", "");
                var result_to_add = "";

                if (arr_orders[Number(result)].type_order) {
                    result_to_add += `نوع  : ${arr_orders[Number(result)].type_order} `;
                }
                if (arr_orders[Number(result)].width) {
                    result_to_add += `<br>مقاس  : ${arr_orders[Number(result)].width} * ${
            arr_orders[Number(result)].height
          } `;
                }
                if (arr_orders[Number(result)].weight) {
                    result_to_add += `<br>الوزن  : ${
            arr_orders[Number(result)].weight
          }  `;
                }
                if (arr_orders[Number(result)].colors) {
                    result_to_add += `<br>الوان  : ${
            arr_orders[Number(result)].colors
          }  `;
                }
                if (arr_orders[Number(result)].copies) {
                    result_to_add += `<br>عدد الصور  : ${
            arr_orders[Number(result)].copies
          } `;
                }
                if (arr_orders[Number(result)].faces) {
                    result_to_add += `<br>عدد الاوجة  : ${
            arr_orders[Number(result)].faces
          } `;
                }
                if (arr_orders[Number(result)].printingType) {
                    result_to_add += `<br>نوع الطباعة : ${
            arr_orders[Number(result)].printingType
          }  `;
                }
                if (arr_orders[Number(result)].solofanFace) {
                    result_to_add += `<br>سلوفان : ${
            arr_orders[Number(result)].solofanFace
          } `;
                }
                if (arr_orders[Number(result)].UVprice) {
                    result_to_add += `<br>UV : ${arr_orders[Number(result)].UVprice} `;
                }
                if (arr_orders[Number(result)].qty) {
                    result_to_add += `<br>كمية  : ${arr_orders[Number(result)].qty}  `;
                }
                if (arr_orders[Number(result)].cover) {
                    result_to_add += `<br>غلاف  : ${arr_orders[Number(result)].cover}`;
                }

                if (arr_orders[Number(result)].extra_data) {
                    result_to_add += `<br><br><label style='font-size:15px'>الدخل </label> <br>`;

                    if (arr_orders[Number(result)].extra_data.paper_type) {
                        result_to_add += `<br>نوع الورق : ${
              arr_orders[Number(result)].extra_data.paper_type
            }  `;
                    }
                    if (arr_orders[Number(result)].extra_data.width) {
                        result_to_add += `<br>مقاس : ${
              arr_orders[Number(result)].extra_data.width
            } * ${arr_orders[Number(result)].extra_data.height} `;
                    }
                    if (arr_orders[Number(result)].extra_data.weight) {
                        result_to_add += `<br>الوزن : ${
              arr_orders[Number(result)].extra_data.weight
            }  `;
                    }
                    if (arr_orders[Number(result)].extra_data.colors) {
                        result_to_add += `<br>الوان : ${
              arr_orders[Number(result)].extra_data.colors
            }  `;
                    }
                    if (arr_orders[Number(result)].extra_data.faces) {
                        result_to_add += `<br>عدد الاوجة : ${
              arr_orders[Number(result)].extra_data.faces
            } `;
                    }
                    if (arr_orders[Number(result)].extra_data.solofanFace) {
                        result_to_add += `<br>سلوفان : ${
              arr_orders[Number(result)].extra_data.solofanFace
            }  `;
                    }
                    if (arr_orders[Number(result)].extra_data.UVprice) {
                        result_to_add += `<br>UV : ${
              arr_orders[Number(result)].extra_data.UVprice
            }  `;
                    }
                    if (arr_orders[Number(result)].extra_data.qty) {
                        result_to_add += `<br>الكمية : ${
              arr_orders[Number(result)].extra_data.qty
            }  `;
                    }
                }
                if (arr_orders[Number(result)].comment) {
                    result_to_add += `<br><br><label style='font-size:15px'>تعليق: ${
            arr_orders[Number(result)].comment
          }</label>`;
                }

                if (arr_orders[Number(result)].qtyPrice) {
                    result_to_add += `<br><br><label style='font-size:15px'>سعر المنتج : ${
            arr_orders[Number(result)].qtyPrice
          } جنية</label>`;
                }

                $("#tableForm").html(result_to_add);
            });

            $("#DeleteButton" + globleindex).click(function() {
                let text = this.id;
                let result = text.replace("DeleteButton", "");
                if (confirm("هل تريد مسح المنتج ؟؟")) {
                    $("#priceall").html(
                        Number($("#priceall").html()) - arr_orders[Number(result)].qtyPrice
                    );

                    $(this).closest("tr").remove();
                    arr_orders[Number(result)] = "";
                } else {}
            });

            globleindex++;
        } else {}
    });
}

$("#clientsDropdown .search-btn").click(function() {});
$("#ncrsForm .search-btn").click(function() {
    var obj_dftr = {};
    $("#ncrsForm .form-control").each(function() {
        let Classname1 = $(this).parent().attr("id");
        if ($(this).val() != "") {
            $("#ncrsForm " + "#" + Classname1).removeClass("empty");
            if ($("#ncrDropdown").attr("data-detect") != "none") {
                $("#ncrsForm").removeClass("empty");
                if ($("#ncrsForm .width").css("display") == "none") {
                    obj_dftr.width = productWidth;
                    obj_dftr.height = productHeight;
                    obj_dftr.qty = Number($("#ncrsForm #qty-textbox").val());
                    obj_dftr.copies = Number($("#ncrsForm #copies-textbox").val());
                    obj_dftr.colors = Number($("#ncrsForm #colors-textbox").val());
                    DfatersizeDetect(obj_dftr);
                    qtyPrice =
                        obj_dftr.printingPrice +
                        obj_dftr.paperPrice +
                        obj_dftr.coveringPrice;

                    if ($("#ncrsForm #manualqtyPrice").val()) {
                        qtyPrice = Number($("#ncrsForm #manualqtyPrice").val());
                    }
                    $("#ncrsForm .price-container").css("display", "flex");

                    unitPrice = qtyPrice / obj_dftr.qty;
                    $("#ncrsForm #unitPrice").html(unitPrice.toFixed(2));
                    $("#ncrsForm #qtyPrice").html(Math.ceil(qtyPrice).toFixed(0));
                } else {
                    obj_dftr.width = Number($("#ncrsForm #width-textbox").val());
                    obj_dftr.height = Number($("#ncrsForm #height-textbox").val());
                    obj_dftr.qty = Number($("#ncrsForm #qty-textbox").val());
                    obj_dftr.copies = Number($("#ncrsForm #copies-textbox").val());
                    obj_dftr.colors = Number($("#ncrsForm #colors-textbox").val());

                    DfatersizeDetect(obj_dftr);

                    qtyPrice =
                        obj_dftr.printingPrice +
                        obj_dftr.paperPrice +
                        obj_dftr.coveringPrice;
                    if ($("#ncrsForm #manualqtyPrice").val()) {
                        qtyPrice = Number($("#ncrsForm #manualqtyPrice").val());
                    }

                    $("#ncrsForm .price-container").css("display", "flex");

                    unitPrice = qtyPrice / obj_dftr.qty;
                    $("#ncrsForm #unitPrice").html(unitPrice.toFixed(2));
                    $("#ncrsForm #qtyPrice").html(qtyPrice.toFixed(0));
                }

                $("#ncrsForm .insert-btn").css("display", "block");
                $("#ncrsForm .text-btn").css("display", "block");
                obj_dftr.type_order = "دفاتر";

                insert_orders(obj_dftr, "ncrsForm");
            } else {
                $("#ncrDropdown").addClass("empty");
            }
        } else {
            $("#cardsFrom " + "#" + Classname1).addClass("empty");
        }
    });
});

$("#ncrDropdown li:nth-child(11) a").click(function() {
    $(".ncrs-form .width").show();
    $(".ncrs-form .height").show();
});

// cards Script

$("#cardsDropdown li a").click(function() {
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

$("#cardsFrom .search-btn").click(function() {
    var obj_coch = {};
    $("#cardsFrom .form-control").each(function() {
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
                    obj_coch.classname = "#cardsFrom";
                    Cochetsizedetect(obj_coch);
                    Printingprice(obj_coch);
                    obj_coch.solofanFace = "لا";
                    obj_coch.UVprice = "لا";

                    qtyPrice = Math.ceil(
                        obj_coch.paperPrice +
                        obj_coch.printingPrice +
                        2 * (obj_coch.qty / 100)
                    );
                    $("#cardsFrom .price-container").css("display", "flex");
                    if ($("#cardsFrom #solofanCheck").prop("checked") === true) {
                        qtyPrice =
                            qtyPrice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
                        obj_coch.solofanFace = "نعم";
                    }
                    if ($("#cardsFrom #uvCheck").prop("checked") === true) {
                        qtyPrice = qtyPrice + Math.ceil(obj_coch.qty / 1000) * UVprice;
                        obj_coch.UVprice = "نعم";
                    }

                    if ($("#cardsFrom #manualqtyPrice").val()) {
                        qtyPrice = Number($("#cardsFrom #manualqtyPrice").val());
                    }
                    unitPrice = qtyPrice / obj_coch.qty;
                    $("#cardsFrom #unitPrice").html(unitPrice.toFixed(2));

                    if (qtyPrice < 35) {
                        qtyPrice = 35;
                        $("#cardsFrom #qtyPrice").html(qtyPrice.toFixed(0));
                    } else {
                        $("#cardsFrom #qtyPrice").html(qtyPrice.toFixed(0));
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
                    obj_coch.classname = "#cardsFrom";
                    Cochetsizedetect(obj_coch);
                    Printingprice(obj_coch);
                    obj_coch.solofanFace = "لا";
                    obj_coch.UVprice = "لا";
                    $("#cardsFrom .price-container").css("display", "flex");

                    qtyPrice = Math.ceil(obj_coch.paperPrice + obj_coch.printingPrice);
                    if ($("#cardsFrom #solofanCheck").prop("checked") === true) {
                        qtyPrice =
                            qtyPrice + obj_coch.finalQTY * obj_coch.faces * solofanFace;

                        obj_coch.solofanFace = "نعم";
                    }
                    if ($("#cardsFrom #uvCheck").prop("checked") === true) {
                        qtyPrice = qtyPrice + Math.ceil(obj_coch.qty / 1000) * UVprice;
                        obj_coch.UVprice = "نعم";
                    }
                    if ($("#cardsFrom #manualqtyPrice").val()) {
                        qtyPrice = Number($("#cardsFrom #manualqtyPrice").val());
                    }

                    unitPrice = qtyPrice / obj_coch.qty;
                    $("#cardsFrom #unitPrice").html(unitPrice.toFixed(2));

                    if (qtyPrice < 35) {
                        qtyPrice = 35;
                        $("#cardsFrom #qtyPrice").html(qtyPrice.toFixed(0));
                    } else {
                        $("#cardsFrom #qtyPrice").html(qtyPrice.toFixed(0));
                    }
                }

                $("#cardsFrom .insert-btn").css("display", "block");
                $("#cardsFrom .text-btn").css("display", "block");
                obj_coch.comment = $("#cardsFrom .text-btn").val();

                obj_coch.type_order = "كروت";
                insert_orders(obj_coch, "cardsFrom");
            } else {
                $("#cardsDropdown").addClass("empty");
            }
        } else {
            $("#cardsFrom " + "#" + Classname1).addClass("empty");
        }
    });
});

$("#cardsDropdown li:nth-child(5) a").click(function() {
    $(".cards-form .width").show();
    $(".cards-form .height").show();
});

// folders
$("#foldersFrom .search-btn").click(function() {
    var obj_coch = {};
    obj_coch.width = 32;
    obj_coch.height = 45;
    obj_coch.qty = Number($("#foldersFrom #qty-textbox").val());
    obj_coch.faces = Number($("#foldersFrom #faces-textbox").val());
    obj_coch.colors = Number($("#foldersFrom #colors-textbox").val());
    obj_coch.weight = 300;
    obj_coch.classname = "#foldersFrom";
    Cochetsizedetect(obj_coch);
    Printingprice(obj_coch);
    obj_coch.solofanFace = "لا";
    obj_coch.UVprice = "لا";
    qtyPrice = Math.ceil(obj_coch.paperPrice + obj_coch.printingPrice);

    if ($("#foldersFrom #solofanCheck").prop("checked") === true) {
        qtyPrice = qtyPrice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
        obj_coch.solofanFace = "نعم";
    }
    if ($("#foldersFrom #pocketCheck").prop("checked") === true) {
        qtyPrice = qtyPrice + obj_coch.qty * 0.5;
    }
    if ($("#foldersFrom #windowCheck").prop("checked") === true) {
        if (obj_coch.qty > 1000) {
            qtyPrice = qtyPrice + obj_coch.qty * 0.3;
        } else {
            qtyPrice = qtyPrice + 300;
        }
    }

    if ($("#foldersFrom #uvCheck").prop("checked") === true) {
        qtyPrice = qtyPrice + Math.ceil(obj_coch.qty / 1000) * UVprice;
        obj_coch.UVprice = "نعم";
    }
    if ($("#foldersFrom #manualqtyPrice").val()) {
        qtyPrice = Number($("#foldersFrom #manualqtyPrice").val());
    }
    unitPrice = qtyPrice / obj_coch.qty;
    $("#foldersFrom #unitPrice").html(unitPrice.toFixed(2));
    $("#foldersFrom .price-container").css("display", "flex");
    if (qtyPrice < 35) {
        qtyPrice = 35;
        $("#foldersFrom #qtyPrice").html(qtyPrice.toFixed(0));
    } else {
        $("#foldersFrom #qtyPrice").html(qtyPrice.toFixed(0));
    }

    $("#foldersFrom .insert-btn").css("display", "block");
    $("#foldersFrom .text-btn").css("display", "block");

    obj_coch.comment = $("#foldersFrom .text-btn").val();

    obj_coch.type_order = "فولدرات";

    insert_orders(obj_coch, "foldersFrom");
});

// magazine Script

$("#magazineDropdown li a").click(function() {
    $(".magazine-form .width").hide();
    $(".magazine-form .height").hide();
    $("#magazineDropdown button").html($(this).html());
    if ($(this).html() === "A4") {
        productWidth = 21;
        productHeight = 29.7;
        $("#magazineDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "A5") {
        productWidth = 14.8;
        productHeight = 21;
        $("#magazineDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "A6") {
        productWidth = 10.5;
        productHeight = 14.8;
        $("#magazineDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "24*16") {
        productWidth = 16;
        productHeight = 24;
        $("#magazineDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "20*10") {
        productWidth = 10;
        productHeight = 20;
        $("#magazineDropdown").attr("data-detect", $(this).html());
    }
});

$("#magazineFrom .search-btn").click(function() {
    $("#magazineFrom .form-control").each(function() {
        var obj_pr = {};
        var obj_coch_cover = {};
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
                obj_coch.paper_type = $("#magazineFrom #intypeDropdown button").attr(
                    "data-detect"
                );
                if (
                    $("#magazineFrom #intypeDropdown button").attr("data-detect") ===
                    "كوشيه"
                ) {
                    if ($("#magazineFrom .width").css("display") == "none") {
                        obj_coch.width = productWidth;
                        obj_coch.height = productHeight;
                    } else {
                        obj_coch.width = Number($("#magazineFrom #width-textbox").val());
                        obj_coch.height = Number($("#magazineFrom #height-textbox").val());
                    }
                    // obj_coch.qty =
                    //     Number($("#magazineFrom #inqty-textbox").val()) *
                    //     Number($("#magazineFrom #qty-textbox").val());
                    // if (Number($("#magazineFrom #qty-textbox").val()) >= 500) {
                    //     obj_coch.qty =
                    //         Number($("#magazineFrom #inqty-textbox").val()) *
                    //         Number($("#magazineFrom #qty-textbox").val());
                    // } else {
                    //     obj_coch.qty = Number($("#magazineFrom #inqty-textbox").val());
                    // }

                    obj_coch.weight = Number($("#magazineFrom #inweight-textbox").val());
                    obj_coch.colors = Number($("#magazineFrom #incolor-textbox").val());
                    obj_coch.faces = Number($("#magazineFrom #infaces-textbox").val());
                    obj_coch.classname = "#magazineFrom";
                    // Cochetsizedetect(obj_coch);
                    // Printingprice(obj_coch);
                    for (
                        var i = 0; i < Number($("#magazineFrom #inqty-textbox").val()); i++
                    ) {
                        obj_coch.qty = Number($("#magazineFrom #qty-textbox").val());
                        Cochetsizedetect(obj_coch);
                        Printingprice(obj_coch);
                        insideprice =
                            insideprice +
                            Math.ceil(obj_coch.printingPrice + obj_coch.paperPrice);
                    }
                    obj_coch.solofanFace = "لا";
                    obj_coch.UVprice = "لا";
                    // insideprice = Math.ceil(obj_coch.printingPrice + obj_coch.paperPrice);
                    // if (Number($("#magazineFrom #qty-textbox").val()) >= 500) {
                    //     insideprice = Math.ceil(
                    //         (obj_coch.printingPrice + obj_coch.paperPrice)
                    //     );
                    // } else {
                    //     insideprice = Math.ceil(
                    //         (obj_coch.printingPrice + obj_coch.paperPrice) *
                    //         Number($("#magazineFrom #qty-textbox").val())
                    //     );
                    // }

                    if ($("#magazineFrom #insolofanCheck").prop("checked") === true) {
                        insideprice =
                            insideprice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
                        obj_coch.solofanFace = "نعم";
                    }
                    if ($("#magazineFrom #inuvCheck").prop("checked") === true) {
                        insideprice =
                            insideprice + Math.ceil(obj_coch.qty / 1000) * UVprice;
                        obj_coch.UVprice = "نعم";
                    }
                    obj_coch_cover.extra_data = obj_coch;
                } else if (
                    $("#magazineFrom #intypeDropdown button").attr("data-detect") ===
                    "ورق طبع"
                ) {
                    if ($("#magazineFrom .width").css("display") == "none") {
                        obj_pr.width = productWidth;
                        obj_pr.height = productHeight;
                    } else {
                        obj_pr.width = Number($("#magazineFrom #width-textbox").val());
                        obj_pr.height = Number($("#magazineFrom #height-textbox").val());
                    }

                    // if (Number($("#magazineFrom #qty-textbox").val()) >= 500) {
                    //     obj_pr.qty =
                    //         Number($("#magazineFrom #inqty-textbox").val()) *
                    //         Number($("#magazineFrom #qty-textbox").val());
                    // } else {
                    //     obj_pr.qty = Number($("#magazineFrom #inqty-textbox").val());
                    // }
                    obj_pr.weight = Number($("#magazineFrom #inweight-textbox").val());
                    obj_pr.colors = Number($("#magazineFrom #incolor-textbox").val());
                    obj_pr.faces = Number($("#magazineFrom #infaces-textbox").val());
                    obj_pr.classname = "#magazineFrom";

                    for (
                        var i = 0; i < Number($("#magazineFrom #inqty-textbox").val()); i++
                    ) {
                        obj_pr.qty = Number($("#magazineFrom #qty-textbox").val());
                        PrintingpaperDetect(obj_pr);
                        Printingprice(obj_pr);
                        insideprice =
                            insideprice + Math.ceil(obj_pr.printingPrice + obj_pr.paperPrice);
                    }
                    // if (Number($("#magazineFrom #qty-textbox").val()) >= 500) {
                    //     insideprice = Math.ceil(obj_pr.printingPrice + obj_pr.paperPrice);
                    // } else {
                    //     insideprice = Math.ceil(
                    //         (obj_pr.printingPrice + obj_pr.paperPrice) *
                    //         Number($("#magazineFrom #qty-textbox").val())
                    //     );
                    // }

                    obj_coch_cover.extra_data = obj_pr;
                }
                // cover
                // obj_coch = {};

                if ($("#magazineFrom .width").css("display") == "none") {
                    obj_coch_cover.width = productWidth;
                    obj_coch_cover.height = productHeight;
                } else {
                    obj_coch_cover.width = Number(
                        $("#magazineFrom #width-textbox").val()
                    );
                    obj_coch_cover.height = Number(
                        $("#magazineFrom #height-textbox").val()
                    );
                }

                obj_coch_cover.qty = Number($("#magazineFrom #qty-textbox").val());
                obj_coch_cover.weight = Number(
                    $("#magazineFrom #coverweight-textbox").val()
                );
                obj_coch_cover.colors = Number(
                    $("#magazineFrom #covercolor-textbox").val()
                );
                obj_coch_cover.faces = Number(
                    $("#magazineFrom #coverfaces-textbox").val()
                );
                obj_coch_cover.classname = "#coverMagazine";
                Cochetsizedetect(obj_coch_cover);
                Printingprice(obj_coch_cover);
                obj_coch_cover.solofanFace = "لا";
                obj_coch_cover.UVprice = "لا";

                coverprice = Math.ceil(
                    obj_coch_cover.printingPrice + obj_coch_cover.paperPrice
                );

                if ($("#magazineFrom #coversolofanCheck").prop("checked") === true) {
                    coverprice =
                        coverprice +
                        obj_coch_cover.finalQTY * obj_coch_cover.faces * solofanFace;
                    obj_coch_cover.solofanFace = "نعم";
                }

                if ($("#magazineFrom #coveruvCheck").prop("checked") === true) {
                    coverprice =
                        coverprice + Math.ceil(obj_coch_cover.qty / 1000) * UVprice;
                    obj_coch_cover.UVprice = "نعم";
                }
                obj_coch_cover.cover = $("#magazineFrom #coveringDropdown button").attr(
                    "data-detect"
                );

                if (
                    $("#magazineFrom #coveringDropdown button").attr("data-detect") ===
                    "دبوس"
                ) {
                    coveringprice =
                        Number($("#magazineFrom #qty-textbox").val()) * normalcoveringUnit;
                    coverprice = coverprice * 2;
                } else if (
                    $("#magazineFrom  #coveringDropdown button").attr("data-detect") ===
                    "هارد كافر"
                ) {
                    coveringprice =
                        Number($("#magazineFrom #qty-textbox").val()) * hardcoverunit;
                    coverprice = coverprice * 2;
                } else if (
                    $("#magazineFrom  #coveringDropdown button").attr("data-detect") ===
                    "خياطة"
                ) {
                    coveringprice =
                        Number($("#magazineFrom #qty-textbox").val()) * wireCoveringunit;
                    coverprice = coverprice * 2;
                } else if (
                    $("#magazineFrom  #coveringDropdown button").attr("data-detect") ===
                    "سلك"
                ) {
                    coveringprice =
                        Number($("#magazineFrom #qty-textbox").val()) * sewcoverunit;
                    coverprice = coverprice * 2;
                }
                qtyPrice = Math.ceil(coverprice + coveringprice + insideprice);
                if ($("#magazineFrom #manualqtyPrice").val()) {
                    qtyPrice = Number($("#magazineFrom #manualqtyPrice").val());
                }

                $("#magazineFrom .price-container").css("display", "flex");
                $("#magazineFrom #qtyPrice").html(qtyPrice.toFixed(0));
                unitPrice = qtyPrice / obj_coch_cover.qty;
                $("#magazineFrom #unitPrice").html(unitPrice.toFixed(2));
            }
            $("#magazineFrom .insert-btn").css("display", "block");

            $("#magazineFrom .text-btn").css("display", "block");

            obj_coch_cover.comment = $("#magazineFrom .text-btn").val();

            obj_coch_cover.type_order = "بروشور";
            insert_orders(obj_coch_cover, "magazineFrom");
        } else {
            $("#magazineFrom " + "#" + Classname1).addClass("empty");
        }
    });
});

$("#magazineDropdown li:nth-child(6) a").click(function() {
    $(".magazine-form .width").show();
    $(".magazine-form .height").show();
});

$(".magazine-form #coveringDropdown li a").click(function() {
    $(".magazine-form #coveringDropdown button").html($(this).html());
    $(".magazine-form #coveringDropdown button").attr(
        "data-detect",
        $(this).attr("data-detect")
    );
});

$(".magazine-form #intypeDropdown li a").click(function() {
    $(".magazine-form #intypeDropdown button").html($(this).html());
    $(".magazine-form #intypeDropdown button").attr(
        "data-detect",
        $(this).attr("data-detect")
    );
});

// flyers Script
$("#flyerDropdown li a").click(function() {
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
    } else if ($(this).html() === "20*10") {
        productWidth = 10;
        productHeight = 20;
        $("#flyerDropdown").attr("data-detect", $(this).html());
    } else {
        $("#flyerDropdown").attr("data-detect", $(this).html());
    }
});

$(".btn-conf-send-order").click(async function() {
    var get_all_users = await GET_DATA_TABLES(database_fixed_link, "users");
    var result = `<option value = ''></option>`;

    for (var index = 0; index < get_all_users.length; index++) {
        result += `<option value = '${get_all_users[index].id}'>${get_all_users[index].name} </option>`;
    }

    $("#assign_select_search").html(result);
});

$("#flyerDropdown li:nth-child(7) a").click(function() {
    $(".flyer-form .width").show();
    $(".flyer-form .height").show();
});

$("#flyerForm .search-btn").click(function() {
    var obj_coch = {};
    $("#flyerForm .form-control").each(function() {
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
                    obj_coch.classname = "#flyerForm";
                    Cochetsizedetect(obj_coch);
                    Printingprice(obj_coch);

                    obj_coch.solofanFace = "لا";
                    obj_coch.UVprice = "لا";

                    qtyPrice = Math.ceil(obj_coch.paperPrice + obj_coch.printingPrice);
                    $("#flyerForm .price-container").css("display", "flex");
                    if ($("#flyerForm #solofanCheck").prop("checked") === true) {
                        qtyPrice =
                            qtyPrice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
                        obj_coch.solofanFace = "نعم";
                    }
                    if ($("#flyerForm #uvCheck").prop("checked") === true) {
                        qtyPrice = qtyPrice + Math.ceil(obj_coch.qty / 1000) * UVprice;
                        obj_coch.UVprice = "نعم";
                    }
                    if ($("#flyerForm #manualqtyPrice").val()) {
                        qtyPrice = Number($("#flyerForm #manualqtyPrice").val());
                    }
                    unitPrice = qtyPrice / obj_coch.qty;
                    $("#flyerForm #unitPrice").html(unitPrice.toFixed(2));

                    if (qtyPrice < 35) {
                        qtyPrice = 35;
                        $("#flyerForm #qtyPrice").html(qtyPrice.toFixed(0));
                    } else {
                        $("#flyerForm #qtyPrice").html(qtyPrice.toFixed(0));
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
                    obj_coch.classname = "#flyerForm";
                    Cochetsizedetect(obj_coch);
                    Printingprice(obj_coch);
                    obj_coch.solofanFace = "لا";
                    obj_coch.UVprice = "لا";

                    $("#flyerForm .price-container").css("display", "flex");

                    qtyPrice = Math.ceil(
                        (obj_coch.paperPrice + obj_coch.printingPrice) * 1.2
                    );
                    if ($("#flyerForm #solofanCheck").prop("checked") === true) {
                        qtyPrice =
                            qtyPrice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
                        obj_coch.solofanFace = "نعم";
                    }
                    if ($("#flyerForm #uvCheck").prop("checked") === true) {
                        qtyPrice = qtyPrice + Math.ceil(obj_coch.qty / 1000) * UVprice;
                        obj_coch.UVprice = "نعم";
                    }
                    if ($("#flyerForm #manualqtyPrice").val()) {
                        qtyPrice = Number($("#flyerForm #manualqtyPrice").val());
                    }
                    $("#flyerForm #qtyPrice").html(qtyPrice.toFixed(0));
                    unitPrice = qtyPrice / obj_coch.qty;
                    $("#flyerForm #unitPrice").html(unitPrice.toFixed(2));
                }
            } else {
                $("#flyerDropdown").addClass("empty");
            }

            $("#flyerForm .insert-btn").css("display", "block");
            $("#flyerForm .text-btn").css("display", "block");
            obj_coch.comment = $("#flyerForm .text-btn").val();

            obj_coch.type_order = "فلايرات";
            insert_orders(obj_coch, "flyerForm");
        } else {
            $("#flyerForm " + "#" + Classname1).addClass("empty");
        }
    });
});

// sticker Script
$("#stickerDropdown li a").click(function() {
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
    } else if ($(this).html() === "20*10") {
        productWidth = 10;
        productHeight = 20;
        $("#stickerDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "ربع") {
        productWidth = 32;
        productHeight = 48;
        $("#stickerDropdown").attr("data-detect", $(this).html());
    } else {
        $("#stickerDropdown").attr("data-detect", $(this).html());
    }
});

$("#stickerDropdown li a").click(function() {
    $("#stickerDropdown button").html($(this).html());
    $(".sticker-form .width").hide();
    $(".sticker-form .height").hide();
});

$("#stickerFrom .search-btn").click(function() {
    $("#stickerFrom .form-control").each(function() {
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
                    Printingprice(obj_stick);

                    obj_stick.solofanFace = "لا";
                    obj_stick.UVprice = "لا";
                    qtyPrice = Math.ceil(obj_stick.paperPrice + obj_stick.printingPrice);
                    $("#stickerFrom .price-container").css("display", "flex");
                    if ($("#stickerFrom #solofanCheck").prop("checked") === true) {
                        qtyPrice = qtyPrice + obj_stick.finalQTY * solofanFace;
                        obj_stick.solofanFace = "نعم";
                    }
                    if ($("#stickerFrom #uvCheck").prop("checked") === true) {
                        qtyPrice = qtyPrice + Math.ceil(obj_stick.qty / 1000) * UVprice;
                        obj_stick.UVprice = "نعم";
                    }
                    if ($("#stickerFrom #manualqtyPrice").val()) {
                        qtyPrice = Number($("#stickerFrom #manualqtyPrice").val());
                    }
                    unitPrice = qtyPrice / obj_stick.qty;
                    $("#stickerFrom #unitPrice").html(unitPrice.toFixed(2));

                    $("#stickerFrom #qtyPrice").html(qtyPrice.toFixed(0));
                } else {
                    obj_stick.width = Number($("#stickerFrom #width-textbox").val());
                    obj_stick.height = Number($("#stickerFrom #height-textbox").val());
                    obj_stick.qty = Number($("#stickerFrom #qty-textbox").val());
                    obj_stick.colors = Number($("#stickerFrom  #colors-textbox").val());
                    Stickersizedetect(obj_stick);
                    Printingprice(obj_stick);
                    obj_stick.solofanFace = "لا";
                    obj_stick.UVprice = "لا";
                    $("#stickerFrom .price-container").css("display", "flex");

                    qtyPrice = Math.ceil(obj_stick.paperPrice + obj_stick.printingPrice);
                    if ($("#stickerFrom #solofanCheck").prop("checked") === true) {
                        qtyPrice = qtyPrice + obj_stick.finalQTY * solofanFace;
                        obj_stick.solofanFace = "نعم";
                    }
                    if ($("#stickerFrom #uvCheck").prop("checked") === true) {
                        qtyPrice = qtyPrice + Math.ceil(obj_stick.qty / 1000) * UVprice;
                        obj_stick.UVprice = "نعم";
                    }
                    if ($("#stickerFrom #manualqtyPrice").val()) {
                        qtyPrice = Number($("#stickerFrom #manualqtyPrice").val());
                    }
                    unitPrice = qtyPrice / obj_stick.qty;
                    $("#stickerFrom #unitPrice").html(unitPrice.toFixed(2));
                    $("#stickerFrom #qtyPrice").html(qtyPrice.toFixed(0));
                }
            } else {
                $("#stickerDropdown").addClass("empty");
            }

            $("#stickerFrom .insert-btn").css("display", "block");
            $("#stickerFrom .text-btn").css("display", "block");
            obj_stick.type_order = "استيكرات";

            insert_orders(obj_stick, "stickerFrom");
        } else {
            $("#stickerFrom " + "#" + Classname1).addClass("empty");
        }
    });
});

$("#stickerDropdown li:nth-child(6) a").click(function() {
    $(".sticker-form .width").show();
    $(".sticker-form .height").show();
});

// notebook Script

$("#notebookDropdown li a").click(function() {
    $(".magazine-form .width").hide();
    $(".magazine-form .height").hide();
    $("#notebookDropdown button").html($(this).html());
    if ($(this).html() === "A4") {
        productWidth = 21;
        productHeight = 29.7;
        $("#notebookDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "A5") {
        productWidth = 14.8;
        productHeight = 21;
        $("#notebookDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "A6") {
        productWidth = 10.5;
        productHeight = 14.8;
        $("#notebookDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "24*16") {
        productWidth = 16;
        productHeight = 24;
        $("#notebookDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "20*10") {
        productWidth = 10;
        productHeight = 20;
        $("#notebookDropdown").attr("data-detect", $(this).html());
    }
});

$("#notebookFrom .search-btn").click(function() {
    $("#notebookFrom .form-control").each(function() {
        var obj_pr = {};
        var obj_coch = {};
        var obj_coch_cover = {};
        let insideprice = 0;
        let coverprice = 0;
        let coveringprice = 0;
        let Classname1 = $(this).parent().attr("id");
        if ($(this).val() != "") {
            $("#notebookFrom " + "#" + Classname1).removeClass("empty");
            if ($("#notebookDropdown").attr("data-detect") != "none") {
                $("#notebookDropdown").removeClass("empty");
                // inside

                if ($("#notebookFrom .width").css("display") == "none") {
                    obj_pr.width = productWidth;
                    obj_pr.height = productHeight;
                } else {
                    obj_pr.width = Number($("#notebookFrom #width-textbox").val());
                    obj_pr.height = Number($("#notebookFrom #height-textbox").val());
                }
                obj_pr.qty =
                    Number($("#notebookFrom #inqty-textbox").val()) *
                    Number($("#notebookFrom #qty-textbox").val());
                obj_pr.weight = Number($("#notebookFrom #inweight-textbox").val());
                obj_pr.colors = Number($("#notebookFrom #incolor-textbox").val());
                obj_pr.faces = Number($("#notebookFrom #infaces-textbox").val());
                obj_pr.classname = "#notebookFrom";
                PrintingpaperDetect(obj_pr);
                Printingprice(obj_pr);

                insideprice = Math.ceil(obj_pr.printingPrice + obj_pr.paperPrice);

                obj_coch_cover.extra_data = obj_pr;

                // cover
                // obj_coch = {};

                if ($("#notebookFrom .width").css("display") == "none") {
                    obj_coch_cover.width = productWidth;
                    obj_coch_cover.height = productHeight;
                } else {
                    obj_coch_cover.width = Number(
                        $("#notebookFrom #width-textbox").val()
                    );
                    obj_coch_cover.height = Number(
                        $("#notebookFrom #height-textbox").val()
                    );
                }

                obj_coch_cover.qty = Number($("#notebookFrom #qty-textbox").val());
                obj_coch_cover.weight = Number(
                    $("#notebookFrom #coverweight-textbox").val()
                );
                obj_coch_cover.colors = Number(
                    $("#notebookFrom #covercolor-textbox").val()
                );
                obj_coch_cover.faces = Number(
                    $("#notebookFrom #coverfaces-textbox").val()
                );
                obj_coch.classname = "#notebookFrom";
                Cochetsizedetect(obj_coch_cover);
                Printingprice(obj_coch_cover);
                obj_coch_cover.solofanFace = "لا";
                obj_coch_cover.UVprice = "لا";
                coverprice = Math.ceil(
                    obj_coch_cover.printingPrice + obj_coch_cover.paperPrice
                );
                if ($("#notebookFrom #coversolofanCheck").prop("checked") === true) {
                    coverprice =
                        coverprice +
                        obj_coch_cover.finalQTY * obj_coch_cover.faces * solofanFace;
                    obj_coch_cover.solofanFace = "نعم";
                }

                if ($("#notebookFrom #coveruvCheck").prop("checked") === true) {
                    coverprice =
                        coverprice + Math.ceil(obj_coch_cover.qty / 1000) * UVprice;
                    obj_coch_cover.UVprice = "نعم";
                }
                obj_coch_cover.cover = $("#notebookFrom #coveringDropdown button").attr(
                    "data-detect"
                );
                if (
                    $("#notebookFrom #coveringDropdown button").attr("data-detect") ===
                    "دبوس"
                ) {
                    coveringprice =
                        Number($("#notebookFrom #qty-textbox").val()) * normalcoveringUnit;
                    coverprice = coverprice * 2;
                } else if (
                    $("#notebookFrom  #coveringDropdown button").attr("data-detect") ===
                    "هارد كافر"
                ) {
                    coveringprice =
                        Number($("#notebookFrom #qty-textbox").val()) * hardcoverunit;
                    coverprice = coverprice * 2;
                } else if (
                    $("#notebookFrom  #coveringDropdown button").attr("data-detect") ===
                    "خياطة"
                ) {
                    coveringprice =
                        Number($("#notebookFrom #qty-textbox").val()) * wireCoveringunit;
                    coverprice = coverprice * 2;
                } else if (
                    $("#notebookFrom  #coveringDropdown button").attr("data-detect") ===
                    "سلك"
                ) {
                    coveringprice =
                        Number($("#notebookFrom #qty-textbox").val()) * sewcoverunit;
                    coverprice = coverprice * 2;
                }
                qtyPrice = Math.ceil(coverprice + coveringprice + insideprice);
                if ($("#notebookFrom #manualqtyPrice").val()) {
                    qtyPrice = Number($("#notebookFrom #manualqtyPrice").val());
                }
                $("#notebookFrom .price-container").css("display", "flex");
                $("#notebookFrom #qtyPrice").html(qtyPrice.toFixed(0));
                unitPrice = qtyPrice / obj_coch_cover.qty;
                $("#notebookFrom #unitPrice").html(unitPrice.toFixed(2));
            }

            $("#notebookFrom .insert-btn").css("display", "block");
            $("#notebookFrom .text-btn").css("display", "block");
            obj_coch_cover.comment = $("#notebookFrom .text-btn").val();

            obj_coch_cover.type_order = "نوت بوك";
            insert_orders(obj_coch_cover, "notebookFrom");
        } else {
            $("#notebookFrom " + "#" + Classname1).addClass("empty");
        }
    });
});

$("#notebookFrom li:nth-child(6) a").click(function() {
    $(".notebook-form .width").show();
    $(".notebook-form .height").show();
});

$(".notebook-form #coveringDropdown li a").click(function() {
    $(".notebook-form #coveringDropdown button").html($(this).html());
    $(".notebook-form #coveringDropdown button").attr(
        "data-detect",
        $(this).attr("data-detect")
    );
});

// Env Script

let EnvD = "";
let EnvD_weight = "";
let EnvD_height = "";

$("#envelopeDropdown li a").click(function() {
    $("#envelopeDropdown button").html($(this).html());
    if ($(this).html() === "امريكاني") {
        EnvD = "امريكاني";
        EnvD_weight = 11;
        EnvD_height = 22;

        $("#envelopeDropdown").attr("data-detect", $(this).html());
    } else {
        EnvD = "C4";
        EnvD_weight = 22.9;
        EnvD_height = 32.4;
    }
});

$("#envelopeFrom .search-btn").click(function() {
    $("#envelopeFrom .form-control").each(function() {
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
                obj_env.width = EnvD_weight;
                obj_env.height = EnvD_height;
                envDetect(obj_env);
                $("#envelopeFrom .price-container").css("display", "flex");
                $("#envelopeFrom #unitPrice").html(
                    (obj_env.finalprice / obj_env.qty).toFixed(1)
                );
                $("#envelopeFrom #qtyPrice").html(Math.ceil(obj_env.finalprice));
            } else {
                $("#envelopeDropdown").addClass("empty");
            }
            $("#envelopeFrom .insert-btn").css("display", "block");
            $("#envelopeFrom .text-btn").css("display", "block");
            obj_env.comment = $("#envelopeFrom .text-btn").val();
            obj_env.qtyPrice = obj_env.finalprice;
            obj_env.type_order = "اظرف";
            if ($("#envelopeFrom #manualqtyPrice").val()) {
                qtyPrice = Number($("#envelopeFrom #manualqtyPrice").val());
            }
            insert_orders(obj_env, "envelopeFrom");
        } else {
            $("#envelopeFrom " + "#" + Classname1).addClass("empty");
        }
    });
});

let letterheadW = 0;
// letterhead Script
$("#letterheadDropdown li a").click(function() {
    $("#letterheadDropdown button").html($(this).html());
    if ($(this).html() === "100 Gm") {
        letterheadW = 100;
        $("#letterheadDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "80 Gm") {
        letterheadW = 80;
        $("#letterheadDropdown").attr("data-detect", $(this).html());
    } else {
        letterheadW = 70;
        $("#letterheadDropdown").attr("data-detect", $(this).html());
    }
});

$("#letterheadFrom .search-btn").click(function() {
    $("#letterheadFrom .form-control").each(function() {
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
                obj_pr.classname = "#letterheadFrom";
                PrintingpaperDetect(obj_pr);
                Printingprice(obj_pr);

                qtyPrice = Math.ceil(obj_pr.paperPrice + obj_pr.printingPrice);
                if ($("#letterheadFrom #manualqtyPrice").val()) {
                    qtyPrice = Number($("#letterheadFrom #manualqtyPrice").val());
                }

                $("#letterheadFrom .price-container").css("display", "flex");
                $("#letterheadFrom #unitPrice").html(
                    (qtyPrice / obj_pr.qty).toFixed(1)
                );
                $("#letterheadFrom #qtyPrice").html(Math.ceil(qtyPrice));
            } else {
                $("#letterheadDropdown").addClass("empty");
            }
            $("#letterheadFrom .insert-btn").css("display", "block");
            $("#letterheadFrom .text-btn").css("display", "block");
            obj_pr.comment = $("#letterheadFrom .text-btn").val();

            obj_pr.type_order = "ليتر هيد";

            insert_orders(obj_pr, "letterheadFrom");
        } else {
            $("#letterheadFrom " + "#" + Classname1).addClass("empty");
        }
    });
});

$("#letterheadDropdown li a").click(function() {
    $("#letterheadDropdown button").html($(this).html());
});

// books Script

$("#booksDropdown li a").click(function() {
    $(".books-form .width").hide();
    $(".books-form .height").hide();
    $("#booksDropdown button").html($(this).html());
    if ($(this).html() === "A4") {
        productWidth = 21;
        productHeight = 29.7;
        $("#booksDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "A5") {
        productWidth = 14.8;
        productHeight = 21;
        $("#booksDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "A6") {
        productWidth = 10.5;
        productHeight = 14.8;
        $("#booksDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "24*16") {
        productWidth = 16;
        productHeight = 24;
        $("#booksDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "20*10") {
        productWidth = 10;
        productHeight = 20;
        $("#booksDropdown").attr("data-detect", $(this).html());
    }
});

$("#booksFrom .search-btn").click(function() {
    $("#booksFrom .form-control").each(function() {
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
                obj_coch.paper_type = $("#booksFrom #intypeDropdown button").attr(
                    "data-detect"
                );
                if (
                    $("#booksFrom #intypeDropdown button").attr("data-detect") === "كوشيه"
                ) {
                    if ($("#booksFrom .width").css("display") == "none") {
                        obj_coch.width = productWidth;
                        obj_coch.height = productHeight;
                    } else {
                        obj_coch.width = Number($("#booksFrom #width-textbox").val());
                        obj_coch.height = Number($("#booksFrom #height-textbox").val());
                    }
                    if (Number($("#booksFrom #qty-textbox").val()) >= 500) {
                        obj_coch.qty =
                            Number($("#booksFrom #inqty-textbox").val()) *
                            Number($("#booksFrom #qty-textbox").val());
                    } else {
                        obj_coch.qty = Number($("#booksFrom #inqty-textbox").val());
                    }

                    obj_coch.weight = Number($("#booksFrom #inweight-textbox").val());
                    obj_coch.colors = Number($("#booksFrom #incolor-textbox").val());
                    obj_coch.faces = Number($("#booksFrom #infaces-textbox").val());
                    obj_coch.classname = "#booksFrom";
                    Cochetsizedetect(obj_coch);
                    Printingprice(obj_coch);
                    obj_coch.solofanFace = "لا";
                    obj_coch.UVprice = "لا";
                    if (Number($("#booksFrom #qty-textbox").val()) >= 500) {
                        insideprice = Math.ceil(
                            (obj_coch.printingPrice + obj_coch.paperPrice) * 1.2
                        );
                    } else {
                        insideprice = Math.ceil(
                            (obj_coch.printingPrice + obj_coch.paperPrice) *
                            Number($("#booksFrom #qty-textbox").val()) *
                            1.2
                        );
                    }

                    if ($("#booksFrom #insolofanCheck").prop("checked") === true) {
                        insideprice =
                            insideprice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
                        obj_coch.solofanFace = "نعم";
                    }
                    if ($("#booksFrom #inuvCheck").prop("checked") === true) {
                        insideprice =
                            insideprice + Math.ceil(obj_coch.qty / 1000) * UVprice;
                        obj_coch.UVprice = "نعم";
                    }
                } else if (
                    $("#booksFrom #intypeDropdown button").attr("data-detect") ===
                    "ورق طبع"
                ) {
                    if ($("#booksFrom .width").css("display") == "none") {
                        obj_pr.width = productWidth;
                        obj_pr.height = productHeight;
                    } else {
                        obj_pr.width = Number($("#booksFrom #width-textbox").val());
                        obj_pr.height = Number($("#booksFrom #height-textbox").val());
                    }
                    if (Number($("#booksFrom #qty-textbox").val()) >= 500) {
                        obj_pr.qty =
                            Number($("#booksFrom #inqty-textbox").val()) *
                            Number($("#booksFrom #qty-textbox").val());
                    } else {
                        obj_pr.qty = Number($("#booksFrom #inqty-textbox").val());
                    }
                    obj_pr.weight = Number($("#booksFrom #inweight-textbox").val());
                    obj_pr.colors = Number($("#booksFrom #incolor-textbox").val());
                    obj_pr.faces = Number($("#booksFrom #infaces-textbox").val());
                    obj_pr.classname = "#booksFrom";
                    PrintingpaperDetect(obj_pr);
                    Printingprice(obj_pr);

                    if (Number($("#booksFrom #qty-textbox").val()) >= 500) {
                        insideprice = Math.ceil(
                            (obj_pr.printingPrice + obj_pr.paperPrice) * 1.2
                        );
                    } else {
                        insideprice = Math.ceil(
                            (obj_pr.printingPrice + obj_pr.paperPrice) *
                            Number($("#booksFrom #qty-textbox").val()) *
                            1.2
                        );
                    }
                }
                // cover
                obj_coch = {};

                if ($("#booksFrom .width").css("display") == "none") {
                    obj_coch.width = productWidth;
                    obj_coch.height = productHeight;
                } else {
                    obj_coch.width = Number($("#booksFrom #width-textbox").val());
                    obj_coch.height = Number($("#booksFrom #height-textbox").val());
                }

                obj_coch.qty = Number($("#booksFrom #qty-textbox").val());
                obj_coch.weight = Number($("#booksFrom #coverweight-textbox").val());
                obj_coch.colors = Number($("#booksFrom #covercolor-textbox").val());
                obj_coch.faces = Number($("#booksFrom #coverfaces-textbox").val());
                obj_coch.classname = "#booksFrom";
                Cochetsizedetect(obj_coch);
                Printingprice(obj_coch);
                obj_coch.solofanFace = "لا";
                obj_coch.UVprice = "لا";

                coverprice = Math.ceil(
                    (obj_coch.printingPrice + obj_coch.paperPrice) * 1.2
                );
                if ($("#booksFrom #coversolofanCheck").prop("checked") === true) {
                    coverprice =
                        coverprice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
                    obj_coch.solofanFace = "نعم";
                }
                obj_coch.cover = $("#booksFrom #coveringDropdown button").attr(
                    "data-detect"
                );
                if ($("#booksFrom #coveruvCheck").prop("checked") === true) {
                    coverprice = coverprice + Math.ceil(obj_coch.qty / 1000) * UVprice;
                    obj_coch.UVprice = "نعم";
                }

                if (
                    $("#booksFrom #coveringDropdown button").attr("data-detect") ===
                    "دبوس"
                ) {
                    coveringprice =
                        Number($("#booksFrom #qty-textbox").val()) * normalcoveringUnit;
                    coverprice = coverprice * 2;
                } else if (
                    $("#booksFrom  #coveringDropdown button").attr("data-detect") ===
                    "هارد كافر"
                ) {
                    coveringprice =
                        Number($("#booksFrom #qty-textbox").val()) * hardcoverunit;
                    coverprice = coverprice * 2;
                } else if (
                    $("#booksFrom  #coveringDropdown button").attr("data-detect") ===
                    "خياطة"
                ) {
                    coveringprice =
                        Number($("#booksFrom #qty-textbox").val()) * wireCoveringunit;
                    coverprice = coverprice * 2;
                } else if (
                    $("#booksFrom  #coveringDropdown button").attr("data-detect") ===
                    "سلك"
                ) {
                    coveringprice =
                        Number($("#booksFrom #qty-textbox").val()) * sewcoverunit;
                    coverprice = coverprice * 2;
                }
                qtyPrice = Math.ceil(coverprice + coveringprice + insideprice);
                if ($("#booksFrom #manualqtyPrice").val()) {
                    qtyPrice = Number($("#booksFrom #manualqtyPrice").val());
                }
                $("#booksFrom .price-container").css("display", "flex");
                $("#booksFrom #qtyPrice").html(qtyPrice.toFixed(0));
                unitPrice = qtyPrice / obj_coch.qty;
                $("#booksFrom #unitPrice").html(unitPrice.toFixed(2));
            }
            $("#booksFrom .insert-btn").css("display", "block");
            $("#booksFrom .text-btn").css("display", "block");
            obj_coch.comment = $("#booksFrom .text-btn").val();

            obj_coch.type_order = "كتب";

            insert_orders(obj_coch, "booksFrom");
        } else {
            $("#booksFrom " + "#" + Classname1).addClass("empty");
        }
    });
});

$("#booksDropdown li:nth-child(6) a").click(function() {
    $(".books-form .width").show();
    $(".books-form .height").show();
});

$(".books-form #coveringDropdown li a").click(function() {
    $(".books-form #coveringDropdown button").html($(this).html());
    $(".books-form #coveringDropdown button").attr(
        "data-detect",
        $(this).attr("data-detect")
    );
});

$(".books-form #intypeDropdown li a").click(function() {
    $(".books-form #intypeDropdown button").html($(this).html());
    $(".books-form #intypeDropdown button").attr(
        "data-detect",
        $(this).attr("data-detect")
    );
});

// another Script

$("#anotherpaperDropdown li a").click(function() {
    $("#anotherpaperDropdown button").html($(this).html());
    $(".anotherpaper-form .width").hide();
    $(".anotherpaper-form .height").hide();
});

$("#anotherpaperDropdown li:nth-child(7) a").click(function() {
    $(".anotherpaper-form .width").show();
    $(".anotherpaper-form .height").show();
});

$(".anotherpaper-form #intypeDropdown li a").click(function() {
    $(".anotherpaper-form #intypeDropdown button").html($(this).html());
});

$("#anotherpaperDropdown li a").click(function() {
    $(".magazine-form .width").hide();
    $(".magazine-form .height").hide();
    $("#anotherpaperDropdown button").html($(this).html());
    if ($(this).html() === "A4") {
        productWidth = 21;
        productHeight = 29.7;
        $("#anotherpaperDropdown").attr("data-detect", $(this).html());
    } else if ($(this).attr("data-detect") === "rob3") {
        productWidth = 32;
        productHeight = 48;
        $("#anotherpaperDropdown").attr("data-detect", $(this).attr("data-detect"));
    } else if ($(this).html() === "A3") {
        productWidth = 29.7;
        productHeight = 42;
        $("#anotherpaperDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "A5") {
        productWidth = 14.8;
        productHeight = 21;
        $("#anotherpaperDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "A6") {
        productWidth = 10.5;
        productHeight = 14.8;
        $("#anotherpaperDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "24*16") {
        productWidth = 16;
        productHeight = 24;
        $("#anotherpaperDropdown").attr("data-detect", $(this).html());
    } else if ($(this).html() === "20*10") {
        productWidth = 10;
        productHeight = 20;
        $("#anotherpaperDropdown").attr("data-detect", $(this).html());
    }
});

$("#anotherpaperForm .search-btn").click(function() {
    $("#anotherpaperForm .form-control").each(function() {
        var obj_pr = {};
        var obj_coch = {};
        let Classname1 = $(this).parent().attr("id");
        if ($(this).val() != "") {
            $("#anotherpaperForm " + "#" + Classname1).removeClass("empty");
            if ($("#anotherpaperForm").attr("data-detect") != "none") {
                $("#anotherpaperForm").removeClass("empty");
                // inside
                obj_coch.paper_type = $(
                    "#anotherpaperForm #intypeDropdown button"
                ).attr("data-detect");
                if (
                    $("#anotherpaperForm #intypeDropdown button").attr("data-detect") ===
                    "كوشيه"
                ) {
                    if ($("#anotherpaperForm .width").css("display") == "none") {
                        obj_coch.width = productWidth;
                        obj_coch.height = productHeight;
                    } else {
                        obj_coch.width = Number(
                            $("#anotherpaperForm #width-textbox").val()
                        );
                        obj_coch.height = Number(
                            $("#anotherpaperForm #height-textbox").val()
                        );
                    }
                    obj_coch.qty = Number($("#anotherpaperForm #qty-textbox").val());
                    obj_coch.weight = Number(
                        $("#anotherpaperForm #weight-textbox").val()
                    );
                    obj_coch.colors = Number(
                        $("#anotherpaperForm #colors-textbox").val()
                    );
                    obj_coch.faces = Number($("#anotherpaperForm #faces-textbox").val());
                    obj_coch.classname = "#anotherpaperForm";
                    Cochetsizedetect(obj_coch);
                    Printingprice(obj_coch);
                    obj_coch.solofanFace = "لا";
                    obj_coch.UVprice = "لا";
                    qtyPrice = Math.ceil(obj_coch.printingPrice + obj_coch.paperPrice);
                    if ($("#anotherpaperForm #insolofanCheck").prop("checked") === true) {
                        qtyPrice =
                            qtyPrice + obj_coch.finalQTY * obj_coch.faces * solofanFace;
                        obj_coch.solofanFace = "نعم";
                    }
                    if ($("#anotherpaperForm #inuvCheck").prop("checked") === true) {
                        qtyPrice = qtyPrice + Math.ceil(obj_coch.qty / 1000) * UVprice;
                        obj_coch.UVprice = "نعم";
                    }
                    if ($("#anotherpaperForm #manualqtyPrice").val()) {
                        qtyPrice = Number($("#anotherpaperForm #manualqtyPrice").val());
                    }
                    unitPrice = qtyPrice / obj_coch.qty;
                } else if (
                    $("#anotherpaperForm #intypeDropdown button").attr("data-detect") ===
                    "ورق طبع"
                ) {
                    if ($("#anotherpaperForm .width").css("display") == "none") {
                        obj_pr.width = productWidth;
                        obj_pr.height = productHeight;
                    } else {
                        obj_pr.width = Number($("#anotherpaperForm #width-textbox").val());
                        obj_pr.height = Number(
                            $("#anotherpaperForm #height-textbox").val()
                        );
                    }
                    obj_pr.qty = Number($("#anotherpaperForm #qty-textbox").val());
                    obj_pr.weight = Number($("#anotherpaperForm #weight-textbox").val());
                    obj_pr.colors = Number($("#anotherpaperForm #colors-textbox").val());
                    obj_pr.faces = Number($("#anotherpaperForm #faces-textbox").val());
                    obj_pr.classname = "#anotherpaperForm";
                    PrintingpaperDetect(obj_pr);
                    Printingprice(obj_pr);

                    qtyPrice = Math.ceil(obj_pr.printingPrice + obj_pr.paperPrice);
                    if ($("#anotherpaperForm #manualqtyPrice").val()) {
                        qtyPrice = Number($("#anotherpaperForm #manualqtyPrice").val());
                    }
                    unitPrice = qtyPrice / obj_pr.qty;
                }
                $("#anotherpaperForm .price-container").css("display", "flex");
                $("#anotherpaperForm #qtyPrice").html(qtyPrice.toFixed(0));

                $("#anotherpaperForm #unitPrice").html(unitPrice.toFixed(2));
            }
            $("#anotherpaperForm .insert-btn").css("display", "block");
            $("#anotherpaperForm .text-btn").css("display", "block");
            obj_coch.comment = $("#anotherpaperForm .text-btn").val();

            obj_coch.type_order = "ورق";
            insert_orders(obj_coch, "anotherpaperForm");
        } else {
            $("#anotherpaperForm " + "#" + Classname1).addClass("empty");
        }
    });
});

$("#anotherpaperDropdown li:nth-child(8) a").click(function() {
    $(".anotherpaper-form .width").show();
    $(".anotherpaper-form .height").show();
});

$(".anotherpaper-form #coveringDropdown li a").click(function() {
    $(".anotherpaper-form #coveringDropdown button").html($(this).html());
    $(".anotherpaper-form #coveringDropdown button").attr(
        "data-detect",
        $(this).attr("data-detect")
    );
});

$(".anotherpaper-form #intypeDropdown li a").click(function() {
    $(".anotherpaper-form #intypeDropdown button").html($(this).html());
    $(".anotherpaper-form #intypeDropdown button").attr(
        "data-detect",
        $(this).attr("data-detect")
    );
});

function alertMSG(msg) {
    $(".alert-danger-al").fadeIn();
    $(".alert-danger-al").html(msg);
    setTimeout(function() {
        $(".alert-danger-al").fadeOut();
    }, 2000);
}

async function create_new_order(sub_orders) {
    Loading_page_set();

    if ($("#assign_select_search").val() == "") {
        alertMSG("اختار عميل");
        Loading_page_clear();
        return;
    }

    var get_add_data_var_parent = await ADD_DATA_TABLES_ONE_COL(
        database_fixed_link,
        "orders", ["users_id", "order_status_id", "comment", "delivery", "address"], [
            $("#assign_select_search").val(),
            "انتظار",
            "",
            $("#delcheck").val(),
            $("#address").val(),
        ]
    );

    var get_all_users = await GET_DATA_TABLES(database_fixed_link, "orders");

    var total_fees = 0;
    for (var index = 0; index < sub_orders.length; index++) {
        var arr_to_send = [];

        if (sub_orders[Number(index)].type_order) {
            arr_to_send[0] = sub_orders[Number(index)].type_order;
        } else {
            arr_to_send[0] = "";
        }
        arr_to_send[1] = get_all_users[get_all_users.length - 1].id;
        arr_to_send[2] = "انتظار";
        if (sub_orders[Number(index)].width) {
            arr_to_send[3] = `${sub_orders[Number(index)].width} * ${
        sub_orders[Number(index)].height
      }`;
        } else {
            arr_to_send[3] = "";
        }
        if (sub_orders[Number(index)].qty) {
            arr_to_send[4] = sub_orders[Number(index)].qty;
        } else {
            arr_to_send[4] = 0;
        }
        if (sub_orders[Number(index)].copies) {
            arr_to_send[5] = sub_orders[Number(index)].copies;
        } else {
            arr_to_send[5] = 0;
        }
        if (sub_orders[Number(index)].colors) {
            arr_to_send[6] = sub_orders[Number(index)].colors;
        } else {
            arr_to_send[6] = 0;
        }
        if (sub_orders[Number(index)].faces) {
            arr_to_send[7] = sub_orders[Number(index)].faces;
        } else {
            arr_to_send[7] = 0;
        }
        if (sub_orders[Number(index)].solofanFace) {
            arr_to_send[8] = sub_orders[Number(index)].solofanFace;
        } else {
            arr_to_send[8] = "";
        }
        if (sub_orders[Number(index)].UVprice) {
            arr_to_send[9] = sub_orders[Number(index)].UVprice;
        } else {
            arr_to_send[9] = "";
        }
        if (sub_orders[Number(index)].cover) {
            arr_to_send[10] = sub_orders[Number(index)].cover;
        } else {
            arr_to_send[10] = "";
        }
        if (sub_orders[Number(index)].weight) {
            arr_to_send[11] = sub_orders[Number(index)].weight;
        } else {
            arr_to_send[11] = "";
        }
        if (sub_orders[Number(index)].extra_data) {
            if (sub_orders[Number(index)].extra_data.paper_type) {
                arr_to_send[12] = sub_orders[Number(index)].extra_data.paper_type;
            } else {
                arr_to_send[12] = "";
            }
        } else {
            arr_to_send[12] = "";
        }

        if (sub_orders[Number(index)].extra_data) {
            if (sub_orders[Number(index)].extra_data.qty) {
                arr_to_send[13] = sub_orders[Number(index)].extra_data.qty;
            } else {
                arr_to_send[13] = "";
            }
        } else {
            arr_to_send[13] = "";
        }

        if (sub_orders[Number(index)].extra_data) {
            if (sub_orders[Number(index)].extra_data.colors) {
                arr_to_send[14] = sub_orders[Number(index)].extra_data.colors;
            } else {
                arr_to_send[14] = "";
            }
        } else {
            arr_to_send[14] = "";
        }

        if (sub_orders[Number(index)].extra_data) {
            if (sub_orders[Number(index)].extra_data.faces) {
                arr_to_send[15] = sub_orders[Number(index)].extra_data.faces;
            } else {
                arr_to_send[15] = "";
            }
        } else {
            arr_to_send[15] = "";
        }

        if (sub_orders[Number(index)].extra_data) {
            if (sub_orders[Number(index)].extra_data.solofanFace) {
                arr_to_send[16] = sub_orders[Number(index)].extra_data.solofanFace;
            } else {
                arr_to_send[16] = "";
            }
        } else {
            arr_to_send[16] = "";
        }

        if (sub_orders[Number(index)].extra_data) {
            if (sub_orders[Number(index)].extra_data.UVprice) {
                arr_to_send[17] = sub_orders[Number(index)].extra_data.UVprice;
            } else {
                arr_to_send[17] = "";
            }
        } else {
            arr_to_send[17] = "";
        }

        if (sub_orders[Number(index)].qtyPrice) {
            arr_to_send[18] =
                Number(sub_orders[Number(index)].qtyPrice) /
                Number(sub_orders[Number(index)].qty);
        } else {
            arr_to_send[18] = "";
        }
        if (sub_orders[Number(index)].qtyPrice) {
            arr_to_send[19] = sub_orders[Number(index)].qtyPrice;
        } else {
            arr_to_send[19] = "";
        }

        if (sub_orders[Number(index)].printingType) {
            arr_to_send[20] = sub_orders[Number(index)].printingType;
        } else {
            arr_to_send[20] = "";
        }

        if (sub_orders[Number(index)].extra_data) {
            if (sub_orders[Number(index)].extra_data.other_weight) {
                arr_to_send[21] = sub_orders[Number(index)].extra_data.other_weight;
            } else {
                arr_to_send[21] = "";
            }
        } else {
            arr_to_send[21] = "";
        }

        if (sub_orders[Number(index)].comment) {
            arr_to_send[22] = sub_orders[Number(index)].comment;
        } else {
            arr_to_send[22] = "";
        }

        total_fees += Number(sub_orders[Number(index)].qtyPrice);

        var get_add_data_var_sudorders = await ADD_DATA_TABLES_ONE_COL(
            database_fixed_link,
            "sub_orders", [
                "category",
                "order_id",
                "order_id_status",
                "size",
                "main_quantity",
                "copy",
                "main_color",
                "main_faces",
                "main_solofan",
                "main_uv",
                "cover",
                "weight",
                "paper_type",
                "other_quantity",
                "other_color",
                "other_faces",
                "other_solofan",
                "other_uv",
                "unit_price",
                "total_price",
                "printingtype",
                "other_weight",
                "comment",
            ],
            arr_to_send
        );
    }

    var get_add_data_var_order = await ADD_DATA_TABLES_ONE_COL(
        database_fixed_link,
        "invoice", [
            "fees",
            "paid",
            "discount",
            "remain",
            "shipping",
            "gateway",
            "status",
            "order_id",
        ], [
            total_fees,
            0,
            0,
            total_fees,
            0,
            "",
            "غير مدفوع",
            get_all_users[get_all_users.length - 1].id,
        ]
    );

    $("#ordertable").empty();
    $("#priceall").html(0);
    arr_orders = [];
    globleindex = 0;

    $("#ordertable").append(`
    <thead>
    <tr>
        <th class="col" scope="col">النوع</th>
        <th class="col" scope="col">المقاس </th>
        <th class="col" scope="col">الكمية</th>
        <th class="col" scope="col">السعر</th>
        <th class="col" scope="col">المزيد</th>
        <th class="col" scope="col">مسح النتج</th>
    </tr>
</thead>
<tbody id="orderbody">

</tbody>
    `);

    Loading_page_clear();
}
$(".filterOrders").click(function() {
    if ($(this).html() != "الكل") {
        orders_func($(this).html());
    } else {
        orders_func();
    }

    $("#dropdownfilter").html($(this).html());
});
$(".filterOrdersmoney").click(function() {
    if ($("#dropdownfilter").html() != "الكل") {
        orders_func($("#dropdownfilter").html(), $(this).html());
    } else {
        orders_func(null, $(this).html());
    }

    $("#dropdownfiltermoney").html($(this).html());
});