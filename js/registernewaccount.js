
  const phoneInputField = document.getElementById("phonenumInput");
  const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  const error = document.getElementById("phonenumInput_error");


  function isPhone() {


            const phoneNumber = phoneInput.getNumber();

            if (phoneInput.isValidNumber()) {

                $('#phonenumInput').val(phoneNumber);
                return true;
            } else {
                return false;
            }
    
  }

$(".header .close-btn").click(function() {
    $(".header .nav").animate({
            right: "-85%",
        },
        300
    );
});
$(".header .menu-btn").click(function() {
    $(".header .nav").animate({
            right: 0,
        },
        300
    );
});
$("#countryInput1").click(function() {
    $(".country-menu").slideToggle("fast")
})
$("#countryInput1").keyup(function() {

    var filter = $(this).val();
    $(".country ul li").each(function() {
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).hide();
        } else {
            $(this).show()
        }
    });
});
$(".country ul li").click(function() {
    $("#countryInput1").val($(this).html())
})
$(".btn.signup").click(async function() {

    var check = await go_to_step02_func_reg();
    Loading_page_clear();
    choosen_group_reg = '';
 
    if(check == true)
    {


    $(".step01").hide("drop", { direction: "left" }, 300);
    setTimeout(function() {
        $(".step02").show("drop", { direction: "right" }, 300);
    }, 400)
    }
})

$(".scheduletableitem").click(function() {
    $(".scheduletableitem").removeClass("active");
    $(".check").removeClass("active");
    $(this).addClass("active");
    Num = $(this).index();
    $(".scheduletableitem:nth-child(" + (Num + 1) + ") .check").addClass("active")
})

$("#Pack_1_btn").click(async function() {
    choosen_package_reg = $("#Pack_1_btn").val()
    var ret = $("#Pack_1_btn").text().replace('Pay ','') ;
    choosen_pay_as = Number(ret)

    var check = await go_to_step04_func_reg();

    if(check)
    {
        checkout();
    }



})

$("#Pack_2_btn").click(async function() {
    choosen_package_reg = $("#Pack_2_btn").val()
    var ret = $("#Pack_2_btn").text().replace('Pay ','') ;
    choosen_pay_as = Number(ret)
    var check = await go_to_step04_func_reg();

    if(check)
    {
        checkout();
    }
})

$("#Pack_3_btn").click(async function() {
    choosen_package_reg = $("#Pack_3_btn").val()
    var ret = ($("#Pack_3_btn").text()).replace('Pay ','') ;
    choosen_pay_as = Number(ret)
    var check = await go_to_step04_func_reg();

    if(check)
    {
        checkout();
    }
})

$(".btn.next").click(async function() {
    var check_return = await go_to_step03_func_reg();

    if(check_return)
    {    
        $(".step02").hide("drop", { direction: "left" }, 300);
        setTimeout(function() {
            $(".step03").show("drop", { direction: "right " }, 300);
        }, 400)
    }
})

$(".step02 .back").click(function() {
    $(".step02").hide("drop", { direction: "right" }, 300);
    setTimeout(function() {
        $(".step01").show("drop", { direction: "left" }, 300);
    }, 400)
})
$(".step03 .back").click(function() {
    $(".step03").hide("drop", { direction: "right" }, 300);
    setTimeout(function() {
        $(".step02").show("drop", { direction: "left" }, 300);
    }, 400)
})

var choosen_date_var = '';

async function go_to_step01_func_reg()
{    
    Loading_page_set();

    // var country_code = null;
    
    // var get_data = await $.getJSON('http://ipinfo.io/' + userip);
    
    // allTimeZone.forEach(elment =>
    // {
    //     if(elment.Code == get_data.country)
    //     {
    //         country_code = elment.MobileCode

    //         $("#countries option").each(function()
    //         {
    //             if($(this).attr("data-title") == elment.Name)
    //             {
    //                 $("#countries option[value='"+$(this).attr("value")+"']").attr("selected",true)
    //             }
    //         });

    //     }
    // })

    

    

    var get_parent_arr = await GET_DATA_TABLES(database_fixed_link ,'parent');    
    var saved_age_arr  = await GET_DATA_TABLES(database_fixed_link ,'age');    
    var saved_slot_arr  = await GET_DATA_TABLES(database_fixed_link ,'slots');    
    var saved_days_arr  = await GET_DATA_TABLES(database_fixed_link ,'days');    
    var  filtered_group_id = await GET_DATA_TABLES(database_fixed_link ,'groups');    
    var  student_grp_arr = await GET_DATA_TABLES(database_fixed_link ,'student_groups');    
    var  saved_lan_arr = await GET_DATA_TABLES(database_fixed_link ,'lan');    

    var saved_group_arr =[];
    var saved_group_arr_counter = 0;

    if(filtered_group_id && filtered_group_id !== undefined && filtered_group_id.length != 0)
    {
        filtered_group_id.forEach(Element_gp=>{
        var counter_group_cap = 0;

        saved_age_arr.forEach(Element=>{

                if(Element.id == Element_gp.age_id)
                {
                    Element_gp.age_id = Element.name;
                }
        })
        saved_slot_arr.forEach(Element=>{

                if(Element.id == Element_gp.slot_id)
                {
                    Element_gp.slot_id = Element.live_slot;
                }
        })
        saved_lan_arr.forEach(Element=>{

                if(Element.id == Element_gp.lan_id)
                {
                    Element_gp.lan_id = Element.name;
                }
        })  

        
        saved_days_arr.forEach(Element=>{

                if(Element.id == Element_gp.days_id)
                {
                    Element_gp.days_id = Element.name;
                }
        })

        student_grp_arr.forEach(Element_st_gp=>{

            if(Element_st_gp.groups_id == Element_gp.id)
                {
                    counter_group_cap++;
                }
        })

        if(counter_group_cap < 6 && Number(Element_gp.type_id) == 1 && (new Date()) < new Date(Element_gp.start_date))
        {

            saved_group_arr[saved_group_arr_counter] = Element_gp ;saved_group_arr_counter++;
        }

    })
    }
    check_groups_reg();

    $('#coontent-container_id').show();
    Loading_page_clear();
}

var choosen_group_reg = '';
var choosen_date_reg = '';
var choosen_day_reg = '';
var choosen_time_reg = '';
var choosen_lan_reg = '';
var choosen_group_index_reg = '';
var choosen_package_reg = '';
var choosen_pay_as = '';
var choosen_ref = '';




function check_groups_reg()
{
    $(".scheduletableitem").click(function()
    {

        var index = ($(this).index() )+1 ;
        choosen_group_index_reg = index;

        if(index == "2")
        {
            choosen_group_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(1)").html();
            choosen_date_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(2)").html();
            choosen_day_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(3)").html();
            choosen_time_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(4)").html();
            choosen_lan_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(5)").html();
        }
        else if(index == "3")
        {
            choosen_group_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(1)").html();
            choosen_date_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(2)").html();
            choosen_day_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(3)").html();
            choosen_time_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(4)").html();
            choosen_lan_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(5)").html();        }
        else if(index == "4")
        {
            choosen_group_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(1)").html();
            choosen_date_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(2)").html();
            choosen_day_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(3)").html();
            choosen_time_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(4)").html();
            choosen_lan_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(5)").html();        }
        else if(index == "5")
        {
            choosen_group_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(1)").html();
            choosen_date_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(2)").html();
            choosen_day_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(3)").html();
            choosen_time_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(4)").html();
            choosen_lan_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(5)").html();        }
        else if(index == "6")
        {
            choosen_group_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(1)").html();
            choosen_date_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(2)").html();
            choosen_day_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(3)").html();
            choosen_time_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(4)").html();
            choosen_lan_reg = $( `.scheduletableitem:nth-child(${index})` + " span:nth-child(5)").html();        }

    }
    );
}



async function go_to_step02_func_reg()
{    
    Loading_page_set();
  
    var get_parent_arr = await GET_DATA_TABLES(database_fixed_link ,'parent');    
    var saved_age_arr  = await GET_DATA_TABLES(database_fixed_link ,'age');    
    var saved_slot_arr  = await GET_DATA_TABLES(database_fixed_link ,'slots');    
    var saved_days_arr  = await GET_DATA_TABLES(database_fixed_link ,'days');    
    var filtered_group_id = await GET_DATA_TABLES(database_fixed_link ,'groups');    
    var student_grp_arr = await GET_DATA_TABLES(database_fixed_link ,'student_groups');    
    var saved_lan_arr = await GET_DATA_TABLES(database_fixed_link ,'lan');    


    var saved_group_arr =[];
    var saved_group_arr_counter = 0;

    if(filtered_group_id && filtered_group_id !== undefined && filtered_group_id.length != 0)
    {
        filtered_group_id.forEach(Element_gp=>{
        var counter_group_cap = 0;

        saved_age_arr.forEach(Element=>{

                if(Element.id == Element_gp.age_id)
                {
                    Element_gp.age_id = Element.name;
                }
        })
        saved_slot_arr.forEach(Element=>{

                if(Element.id == Element_gp.slot_id)
                {
                    Element_gp.slot_id = Element.live_slot;
                }
        })
        saved_lan_arr.forEach(Element=>{

                if(Element.id == Element_gp.lan_id)
                {
                    Element_gp.lan_id = Element.name;
                }
        })  

        
        saved_days_arr.forEach(Element=>{

                if(Element.id == Element_gp.days_id)
                {
                    Element_gp.days_id = Element.name;
                }
        })

        student_grp_arr.forEach(Element_st_gp=>{

            if(Element_st_gp.groups_id == Element_gp.id)
                {
                    counter_group_cap++;
                }
        })

        if(counter_group_cap < 6 && Number(Element_gp.type_id) == 1 && (new Date()) < new Date(Element_gp.start_date))
        {
            saved_group_arr[saved_group_arr_counter] = Element_gp ;saved_group_arr_counter++;
        }

    })
    }

        if( $('#firstnameInput').val() == "" ) {
        $('#firstnameInput_error').text('Please Set Name');return false;
        }
        else
        {
            $('#firstnameInput_error').text('');    
        }

        if( $('#phonenumInput').val() == "" ) {
            $('#phonenumInput_error').text('Please Set Phone Number');
            $("#phonenumInput").addClass("error")
            return false;
        }
        else
        {

            if(isPhone($('#phonenumInput').val()) == false)
            {
                $('#phonenumInput_error').text('Please Set Valid Phone');
                $("#phonenumInput").addClass("error")
                return false;
            }
            else
            {
                $('#phonenumInput_error').text(''); 
                $("#phonenumInput").removeClass("error")
            }
            
        }

        if( $('#emailInput').val() == "" ) {
            $('#emailInput_error').text('Please Set Email');return false;
        }
        else
        {
            if(isEmail($('#emailInput').val()) == false)
            {
                $('#emailInput_error').text('Please Set Valid Email');return false;
            }
            else
            {
                $('#emailInput_error').text('');    
            }
        }

        if( $('#studentnameInput').val() == "" ) {
            $('#studentnameInput_error').text('Please Set Student Name');return false;
        }
        else
        {
            $('#studentnameInput_error').text('');    
        }

        choosen_date_var = '';
        choosen_date_var = `${$('#yearDate').val()}-${$('#monthDate').val()}-${$('#dayDate').val()}`;
        
        if( choosen_date_var == "" || choosen_date_var == "--"   ) {
            $('#birthdate_error').text('Please Select Birthdate');return false;
        }
        else
        {
            $('#birthdate_error').text('');    
        }



        var check_email = false;
        var check_phone = false;
    
        get_parent_arr.forEach(element=>{

            if(element.phone == $('#phonenumInput').val())
            {
                parent_id = element.id;
                check_phone = true;
            }
            else if(element.email == $('#emailInput').val())
            {
                parent_id = element.id;
                check_email = true;
            }
        })
    

        // if(check_phone)
        // {
        //     alert("This Phone is already exist");
        //     return false;   
        // }

        // if(check_email)
        // {
        //     alert("This Email is already exist");
        //     return false;
        // }
        







        $( ".scheduletableitem:nth-child(2)").hide();
        $( ".scheduletableitem:nth-child(3)").hide();
        $( ".scheduletableitem:nth-child(4)").hide();
        $( ".scheduletableitem:nth-child(5)").hide();
        $( ".scheduletableitem:nth-child(6)").hide();

        var kid_age =  (new Date()).getFullYear() - new Date(choosen_date_var).getFullYear() 
            var age_req = '';
            if(kid_age < 18)
            {
                saved_age_arr.forEach(elment =>{
                    if(kid_age >= Number(elment.from_age) && kid_age <=  Number(elment.to_age))
                    {
                        age_req = elment.name;
                    }
                })


                if(age_req)
                {
                    var check_av = false;
                    var saved_index = 1;
                    for(var index = 0 ;index < saved_group_arr.length ; index++)
                    {
                        saved_index = index+2;
                    

                        if( saved_group_arr[index].age_id == age_req)
                        {
                            check_av = true;
                            $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(1)").html(saved_group_arr[index].id);
                            $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(2)").html(saved_group_arr[index].start_date);
                            $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(3)").html(saved_group_arr[index].days_id);
                            $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(4)").html(saved_group_arr[index].slot_id);
                            $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(5)").html(saved_group_arr[index].lan_id);
                            $( ".scheduletableitem:nth-child("+saved_index+")").show();
                            if(index == 3) break;
                        }

                    }
                    saved_index++;


                        $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(1)").html('0');
                        $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(2)").html('Choose Date Later');
                        $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(3)").html('');
                        $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(4)").html('');
                        $( `.scheduletableitem:nth-child(${saved_index})` + " span:nth-child(5)").html('');
                        $( ".scheduletableitem:nth-child("+saved_index+")").show();
                        //  return false;
                    
                }
                else
                {
                    $('#birthdate_error').text('Student too young');return false;
                }

            }
            else
            {
                $('#birthdate_error').text('Student too old');return false;
            }


    return true;
}

function isEmail(email) {
    var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return EmailRegex.test(email);
  }

async function go_to_step03_func_reg()
{
    Loading_page_set();
    
    if(choosen_group_reg == '')
    {
        alert("Choose Group");
        Loading_page_clear();
        return false;
    }

    var get_all_pack = await  GET_DATA_TABLES(database_fixed_link ,'package');

    get_all_pack.forEach(elemnt =>{

        if(elemnt.name == 'Monthly')
        {
            var hours = 2.5 * (Number(elemnt.quota) / Number(elemnt.installments) );
            var hour_rate = Number(elemnt.paid_as) / hours;

            $('#Pack_1_paid_as').text(elemnt.paid_as);
            $('#Pack_1_hours').text(`${hours} Hours online classes`);
            $('#Pack_1_billing').text(`Billed Monthly`);
            $('#Pack_1_inst').text(`1 Year plan divided on ${elemnt.installments} payments` );
            $('#Pack_1_hour_rate').text(`${hour_rate.toFixed(2)} L.E / Hour`);
            $('#Pack_1_btn').text(`Pay ${elemnt.paid_as}`);
            $('#Pack_1_btn').val(elemnt.id);

        }

        if(elemnt.name == 'Quarterly')
        {
            var hours = 2.5 * (Number(elemnt.quota) / Number(elemnt.installments) );
            var hour_rate = Number(elemnt.paid_as) / hours;

            $('#Pack_2_paid_as').text(elemnt.paid_as);
            $('#Pack_2_hours').text(`${hours} Hours online classes`);
            $('#Pack_2_billing').text(`Billed Quarterly`);
            $('#Pack_2_inst').text(`1 Year plan divided on ${elemnt.installments} payments` );
            $('#Pack_2_hour_rate').text(`${hour_rate.toFixed(2)} L.E / Hour`);
            $('#Pack_2_btn').text(`Pay ${elemnt.paid_as}`);
            $('#Pack_2_btn').val(elemnt.id);

        }

        if(elemnt.name == 'Annually')
        {
            var hours = 2.5 * (Number(elemnt.quota) / Number(elemnt.installments) );
            var hour_rate = Number(elemnt.paid_as) / hours;

            $('#Pack_3_paid_as').text(elemnt.paid_as);
            $('#Pack_3_hours').text(`${hours} Hours online classes`);
            $('#Pack_3_billing').text(`Billed Once`);
            $('#Pack_3_inst').text(`1 Year plan divided on ${elemnt.installments} payments` );
            $('#Pack_3_hour_rate').text(`${hour_rate.toFixed(2)} L.E / Hour`);
            $('#Pack_3_btn').text(`Pay ${elemnt.paid_as}`);
            $('#Pack_3_btn').val(elemnt.id);

        }

    }
    )

    Loading_page_clear();


    return true;

}


async function go_to_step04_func_reg()
{
    Loading_page_set();
    var saved_data_reg = [];
    
    let url = window.location.href;
    let params = (new URL(url)).searchParams;
    var get_element = '';
    get_element = params.get('camp_id');


    var get_all_parent_table = await GET_DATA_TABLES(database_fixed_link , 'parent')    


    get_all_parent_table.forEach(element =>
        {
            if(element.phone == $('#phonenumInput').val() || element.email == $('#emailInput').val() )
            {
                $('#phonenumInput').val(element.phone);
                $('#emailInput').val(element.email);
                return;
            }

        })


    localStorage.setItem("emailInput_success" , $('#emailInput').val());
    localStorage.setItem("phonenumInput_success" , $('#phonenumInput').val());

    saved_data_reg[0] = $('#firstnameInput').val();
    saved_data_reg[1] = $('#studentnameInput').val();
    saved_data_reg[2] = $('#phonenumInput').val();
    saved_data_reg[3] = $('#emailInput').val();
    saved_data_reg[4] = get_element;
    saved_data_reg[5] = '';
    saved_data_reg[6] = choosen_date_var;
    saved_data_reg[7] = choosen_group_reg;
    saved_data_reg[8] = choosen_package_reg;
    saved_data_reg[9] = 'pending';
    saved_data_reg[10] = '';
    saved_data_reg[11] = '';
    saved_data_reg[12] = '';
    saved_data_reg[13] = '';
    saved_data_reg[14] = '';
    
    
    var returncheck = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'registeration' , 
    ["parent_name"
    ,"student_name"
    ,"phone"
    ,"email"
    ,"camp_id"
    ,"country"
    ,"birthdate"
    ,"group_id"
    ,"package_id"
    ,"status"
    ,"type"
    ,"parent_id"
    ,"student_id"
    ,"inst"
    ,"upgrade"

    ],
    saved_data_reg
    );

    var returncheck = await GET_DATA_TABLES(database_fixed_link , 'registeration' )

    localStorage.reg_code = returncheck[returncheck.length-1].id;

    Loading_page_clear();

    return true;
    
}

async function go_to_step05_func_reg(data_arr)
{

    
    localStorage.username_client = '';
    localStorage.password_client = '';

    var saved_emp_arr  = await GET_DATA_TABLES(database_fixed_link ,'employee');    
    var cs_emp = []
    var cs_emp_count = 0
    var sales_emp = []
    var sales_emp_count = 0

    saved_emp_arr.forEach(element => {
        
        if(element.permission_id == 2)
        {
            sales_emp[sales_emp_count] = element;sales_emp_count++;
        }
        if(element.permission_id == 3)
        {
            cs_emp[cs_emp_count] = element;cs_emp_count++;
        }
    })
  
    var get_data_elements_parent_table = [];
    get_data_elements_parent_table[0] = data_arr.parent_name
    get_data_elements_parent_table[1] = data_arr.phone
    get_data_elements_parent_table[2] = data_arr.email
    get_data_elements_parent_table[3] = ''
    get_data_elements_parent_table[4] = ''
    get_data_elements_parent_table[5] = ''
    get_data_elements_parent_table[6] = ''
    get_data_elements_parent_table[7] = data_arr.country
    get_data_elements_parent_table[8] = ''
    get_data_elements_parent_table[9] = data_arr.camp_id;
    get_data_elements_parent_table[10] = ''
    get_data_elements_parent_table[11] = ''

    var get_all_parent_table = await GET_DATA_TABLES(database_fixed_link , 'parent')    


    if(get_data_elements_parent_table[11] == '')
    {
        if(get_all_parent_table && get_all_parent_table !== undefined &&get_all_parent_table.length != 0)
        {
            var check_agent = get_all_parent_table[get_all_parent_table.length-1].sales_agent_id;
            var check_confirm = false;

            if(sales_emp.length == 1)
            {
                get_data_elements_parent_table[11] = sales_emp[0].id;
            }
            else
            {
                sales_emp.forEach(element => {

                    if(check_confirm == true)
                    {
                        check_confirm = false;
                        if(element.id)
                        {
                            get_data_elements_parent_table[11] = element.id;
                           
                        }
                        else
                        {
                            get_data_elements_parent_table[11] = sales_emp[0].id;
                            
                        }
                    }
                    if((element.id == check_agent || Number(check_agent) == 0) && check_confirm == false)
                    {    
                        check_confirm = true;
                    }
                })
                if(check_confirm == true)
                {
                    get_data_elements_parent_table[11] = sales_emp[0].id;
                }
            }



        }
    }

    if(get_data_elements_parent_table[10] == '')
    {
        if(get_all_parent_table && get_all_parent_table !== undefined &&get_all_parent_table.length != 0)
        {
            var check_agent = get_all_parent_table[get_all_parent_table.length-1].customer_agent_id;
            var check_confirm = false;

            if(cs_emp.length == 1)
            {
                get_data_elements_parent_table[10] = cs_emp[0].id;
            }
            else
            {
                cs_emp.forEach(element => {

                    if(check_confirm == true)
                    {
                        check_confirm = false
                        if(element.id)
                        {
                            get_data_elements_parent_table[10] = element.id;
                           
                        }
                        else
                        {
                            get_data_elements_parent_table[10] = cs_emp[0].id;
                            
                        }
                    }
                    if((element.id == check_agent || Number(check_agent) == 0)  && check_confirm == false)
                    {

                        check_confirm = true;
                    }
                })

                if(check_confirm == true)
                {
                    get_data_elements_parent_table[10] = cs_emp[0].id;
                }
            }

        }
    }


    get_data_elements_parent_table[12] = data_arr.email
    get_data_elements_parent_table[13] = data_arr.phone


    var parent_id = '';

    var check_email_phone = false;

    get_all_parent_table.forEach(element=>{
        if(element.email == data_arr.email)
        {
            parent_id = element.id;
            check_email_phone = true;

            localStorage.username_client = element.username;
            localStorage.password_client = element.password;
        }
        else if(element.phone == data_arr.phone)
        {
            parent_id = element.id;
            check_email_phone = true;

            localStorage.username_client = element.username;
            localStorage.password_client = element.password;

        }
    })

    if(check_email_phone)
    {

    }
    else{
        var returncheck = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'parent' , 
        ["name"
        ,"phone"
        ,"email"
        ,"name_2"
        ,"phone_2"
        ,"email_2"
        ,"address"
        ,"location"
        ,"job"
        ,"marketing_id"
        ,"customer_agent_id"
        ,"sales_agent_id"
        ,"username"
        ,"password"
        ],
        get_data_elements_parent_table
        );
        var get_parent_arr_return = await GET_DATA_TABLES(database_fixed_link , 'parent');

        parent_id = get_parent_arr_return[get_parent_arr_return.length-1].id;

        localStorage.username_client = get_parent_arr_return[get_parent_arr_return.length-1].username;
        localStorage.password_client = get_parent_arr_return[get_parent_arr_return.length-1].password;

    }

    var saved_age_arr  = await GET_DATA_TABLES(database_fixed_link ,'age');    

    var kid_age =  (new Date()).getFullYear() - new Date(choosen_date_var).getFullYear() 
    var age_req = '';
    if(kid_age < 18)
    {
        saved_age_arr.forEach(elment =>{
            if(kid_age >= Number(elment.from_age) && kid_age <=  Number(elment.to_age))
            {
                age_req = elment.name;
            }
        })
    }

    var get_data_elements_student_table = [];
    get_data_elements_student_table[0] = '';
    get_data_elements_student_table[1] = parent_id;
    get_data_elements_student_table[2] = 'yes';
    get_data_elements_student_table[3] = 'active';
    get_data_elements_student_table[4] = data_arr.student_name;
    get_data_elements_student_table[5] = age_req;
    get_data_elements_student_table[6] = data_arr.birthdate;

    var returncheck = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'students' , 
    ["std_id"
    ,"parent_id"
    ,"free_session_status"
    ,"std_status"
    ,"st_name"
    ,"age"
    ,"birthdate"
    ],
    get_data_elements_student_table
    );

    var get_student_arr_return = await GET_DATA_TABLES(database_fixed_link , 'students');


    var package = await GET_DATA_TABLES(database_fixed_link , 'package');
    var package_selected = [];

    package.forEach(element =>{
        if(Number(element.id) == Number(data_arr.package_id))
        {
            package_selected[0] =  element;
        }
    })

            var returncheck = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'student_package' , 
        ["student_id"
        ,"package_id"
    ],
        [
            get_student_arr_return[get_student_arr_return.length-1].id,
            data_arr.package_id
        ]
        );

        var get_student_pac = await GET_DATA_TABLES(database_fixed_link , 'student_package')
        var getlastid = get_student_pac[get_student_pac.length-1].id;

        var counter_check = Number(package_selected[0].installments);


        var saved_date = getFormattedDate(new Date());

        for(var index = 0 ; index < counter_check ; index++)
        {  
            var invoice_data_arr = [];
            if(index == 0)
            {
                invoice_data_arr[0] = get_student_arr_return[get_student_arr_return.length-1].id; //fee
                invoice_data_arr[1] = package_selected[0].fees; //fee
                invoice_data_arr[2] = package_selected[0].paid_as; //amount
                invoice_data_arr[3] = 'done'; //status
                invoice_data_arr[4] = saved_date; //due_date
                invoice_data_arr[5] = saved_date; //paid_date
                invoice_data_arr[6] = 0; //dis
                invoice_data_arr[7] = ""; //att
                invoice_data_arr[8] = getlastid; //pac-id
                invoice_data_arr[9] = Number(package_selected[0].quota) / Number(package_selected[0].installments); //qouta
                invoice_data_arr[10] = 0; //remain
            }
            else
            {
                invoice_data_arr[0] = get_student_arr_return[get_student_arr_return.length-1].id; //fee
                invoice_data_arr[1] = 0; //fee
                invoice_data_arr[2] = package_selected[0].paid_as; //amount
                invoice_data_arr[3] = 'waiting'; //status
                invoice_data_arr[4] = saved_date; //due_date
                invoice_data_arr[5] = ''; //paid_date
                invoice_data_arr[6] = 0; //dis
                invoice_data_arr[7] = ""; //att
                invoice_data_arr[8] = getlastid; //pac-id
                invoice_data_arr[9] = Number(package_selected[0].quota) / Number(package_selected[0].installments); //qouta
                invoice_data_arr[10] = 0; //remain 
            }

            saved_date = new Date(saved_date);

            if(saved_date.getDate() > 20){

                saved_date = getFormattedDate( new Date(saved_date.getFullYear(), saved_date.getMonth() + 2, 1));
            }
            else
            {
                saved_date = getFormattedDate( new Date(saved_date.getFullYear(), saved_date.getMonth() + 1, 1));
            }


            var get_add_data_var_std = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'invoice' ,     
            ["student_id" 
            , "fees" 
            , "amount" 
            , "status" 
            , "due_date" 
            , "paid_date" 
            , "discount" 
            , "attach" 
            , "package_id" 
            , "qouta" 
            , "remain" 
            ]
                , invoice_data_arr);

        }



    if(data_arr.group_id && Number(data_arr.group_id) != 0)
    {
        var returncheck = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'student_groups' , 
        ["groups_id"
        ,"student_id"
        ,"status"
    ],
        [
            data_arr.group_id,
            get_student_arr_return[get_student_arr_return.length-1].id,
            'active'
        ]
        );

        var get_sessions_arr_return = await GET_DATA_TABLES(database_fixed_link , 'sessions');
        var get_required_sessions_arr = [];
        var get_required_sessions_arr_count = 0;
        get_sessions_arr_return.forEach(element => {

            if(Number(element.groups_id) == Number(data_arr.group_id))
            {
                get_required_sessions_arr[get_required_sessions_arr_count] = element;get_required_sessions_arr_count++;
            }
        })

        for(var index = 0 ; index < get_required_sessions_arr.length ; index++ )
        {
            var returncheck = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'att_feed' , 
            ["student_id" 
            ,"session_id" 
            ,"attendance" 
            ,"feedback" 
        ],
            
        [
            get_student_arr_return[get_student_arr_return.length-1].id,
            get_required_sessions_arr[index].id,
            '',
            ''
        ]
            );

        }
    }


    var result = await GET_DATA_TABLES(database_fixed_link , 'free_session_whatsapp_temp');


    var get_email_data = localStorage.getItem("emailInput_success" );
    var get_phone_data = localStorage.getItem("phonenumInput_success" );

    // console.log(get_email_data);
    // console.log(get_phone_data);

    if(result)
    {
        for(var index = 0 ; index < result.length ; index++)
        {
            if(result[index].free_whats_temp_type == 'Intro_reg')
            {


                // var result_link = text.link()

                var URL__ = `http://localhost/ischool-crm/dashboard?username=${get_email_data}&password=${get_phone_data}`;

                var body = `Hello ${$('#firstnameInput').val()}
${result[index].free_whats_temp_body}
you can join dashboard using this link:
${URL__}

Or using username and password
USERNAME : ${get_email_data}
PASSWORD : ${get_phone_data}
`
                var res = await send_whats_msg(result[index].free_whats_temp_token , result[index].free_whats_temp_instance , body ,  get_phone_data , parent_id , $('#firstnameInput').val() , result[index].free_whats_temp_type);
            }
        }
    }



    Loading_page_clear();
    $(".step04").show("drop", { direction: "left" }, 300);

    return true;

}



function checkout() {

    const configuration = {
    locale : "en",  //default en
    mode: DISPLAY_MODE.POPUP,  //required, allowed values [POPUP, INSIDE_PAGE, SIDE_PAGE]
};

FawryPay.checkout(buildChargeRequest(), configuration);

var ret_data = {};
ret_data.price = choosen_pay_as * 100;
ret_data.firstname = $('#firstnameInput').val();
ret_data.email = $('#emailInput').val();
ret_data.phone = $('#phonenumInput').val();
ret_data.lastname = $('#studentnameInput').val();

console.log(ret_data);
console.log(localStorage.reg_code);

Loading_page_set();

// payment_AUTH_callAPI(ret_data);

// location.href = return_page+ "?orderStatus=PAID&statusCode=200&paymentMethod=PayUsingCC&merchantRefNumber="+choosen_ref
}

function buildChargeRequest() {
    var chargeRequest = {
        merchantCode: 'siYxylRjSPwQs0gHngum7Q==',
        merchantRefNum: localStorage.reg_code,
        customerMobile: $("#phonenumInput").val(),
        customerEmail: $("#emailInput").val() ,
        customerProfileId :'1111',
        customerName: $("#firstnameInput").val(),
        chargeItems: [
                {
                    itemId: '6b5f',
                    description: 'Product Description',
                    price: choosen_pay_as,
                    quantity: 1,
                    imageUrl: 'https://your-site-link.com/photos/45566.jpg',

                }
                ],
                    returnUrl: return_page,
                    authCaptureModePayment: false,
                };
                    
chargeRequest.signature  = signRequest(chargeRequest);
                    
return chargeRequest;
}

function signRequest(chargeRequest){
var signString = chargeRequest['merchantCode']+chargeRequest.merchantRefNum;
signString += chargeRequest.customerProfileId!=null?chargeRequest.customerProfileId:'';
signString += chargeRequest.returnUrl!=null?chargeRequest.returnUrl:'';
var items = chargeRequest.chargeItems.sort(function (x, y) {
let a = x.itemId.toUpperCase(),
    b = y.itemId.toUpperCase();
return a == b ? 0 : a > b ? 1 : -1;});

items.forEach((item) => {
    signString += item.itemId+''+item.quantity+''+item.price.toFixed(2);
});
signString += "d05552a3-be4b-4b66-8a4f-e059f9b9b4cb";

return  sha256(signString);
}


$(".days-slider").hide();
var maxDays


function detectMonthdays(){
if($("#monthDate").val() === "01"||$("#monthDate").val() === "03"||$("#monthDate").val() === "05"||$("#monthDate").val() === "07"||$("#monthDate").val() === "08"||$("#monthDate").val() === "10"||$("#monthDate").val() === "12"){
    $(".mb-3.date.days .days-slider li").each(function(){
        $(this).show()
    })
    maxDays = 31;
}
else if($("#monthDate").val() === "02"){
    maxDays = 28;
    $(".mb-3.date.days .days-slider li").each(function(){
        if ($(this).index() > 27 ){
            $(this).hide();
        }
        else{
            $(this).show();
        }
    })
}
else{
    maxDays = 30;
    $(".mb-3.date.days .days-slider li").each(function(){
        if ($(this).index() > 29 ){
            $(this).hide();
        }
        else{
            $(this).show();
        }
    })
}
}

function optmizeZero(){
    $(".mb-3.date .form-control").each(function(){
        if($(this).val() === "1" ||$(this).val() === "2" ||$(this).val() === "3" ||$(this).val() === "4" ||$(this).val() === "5" ||$(this).val() === "6" ||$(this).val() === "7" ||$(this).val() === "8" ||$(this).val() === "9"){
            $(this).val(("0" + $(this).val())) 
        }
    })
}
function detectDay(){
    if($("#dayDate").val() < 1){
        $("#dayDate").val("01") 
        $(".mb-3.date.days .days-slider li").removeClass("active");
        $(".mb-3.date.days .days-slider li:first-child").addClass("active")
    }
    else if ($("#dayDate").val() > maxDays) {
        $("#dayDate").val(maxDays)
        $(".mb-3.date.days .days-slider li").removeClass("active");
        $(".mb-3.date.days .days-slider li:nth-child(" + maxDays +")").addClass("active")
    }
    else{
        $(".mb-3.date.days .days-slider li").removeClass("active");
        $(".mb-3.date.days .days-slider li:nth-child(" + $("#dayDate").val() +")").addClass("active")
    }
}
function detectMonth(){
    if($("#monthDate").val() < 1){
        $("#monthDate").val("01") 
        $(".mb-3.date.months .days-slider li").removeClass("active");
        $(".mb-3.date.months .days-slider li:first-child").addClass("active")
    }
    else if ($("#monthDate").val() > 12) {
        $("#monthDate").val("12")
        $(".mb-3.date.months .days-slider li").removeClass("active");
        $(".mb-3.date.months .days-slider li:nth-child(12)").addClass("active")
    }
    else{
        $(".mb-3.date.months .days-slider li").removeClass("active");
        $(".mb-3.date.months .days-slider li:nth-child(" + $("#monthDate").val() +")").addClass("active")
    }
}
let Yearsarr = [];
for (i = 1; i <= 13 ; i++ ){
    Yearsarr.push($(".mb-3.date.years .days-slider li:nth-child(" + i +")").text())
}
function detectyear(){
 
    if(!Yearsarr.includes($("#yearDate").val())){
        $("#yearDate").addClass("error")
    }
    else if($("#yearDate").val("")){
        $("#yearDate").addClass("error")
    }
    else{
        $("#yearDate").removeClass("error")
    }
}
genrateYears();

$("#dayDate").click(function(){
    $(".mb-3.date.days .days-slider").toggle(100);
})
$("#yearDate").click(function(){
    $(".mb-3.date.years .days-slider").toggle(100);
})
$("#dayDate").focusout(function(){
    detectMonthdays();
    optmizeZero();
    detectDay();
    detectMonth();
})
$("#monthDate").focusout(function(){
    detectMonthdays();
    optmizeZero();
    detectMonth();
    detectDay();
})
$("#yearDate").focusout(function(){
    detectMonthdays();
    optmizeZero();
    detectMonth();
    detectDay();
    detectyear();
})
$("#monthDate").click(function(){
    $(".mb-3.date.months .days-slider").toggle(100);
})


$(document).click(function() {
    var container = $(".mb-3.date.days .days-slider");
    var textb = $("#dayDate");
    if (!container.is(event.target) && !container.has(event.target).length) {
        if(!textb.is(event.target)){
            container.hide();
        } 
    }
});
$(document).click(function() {
    var container = $(".mb-3.date.months .days-slider");
    var textb = $("#monthDate");
    if (!container.is(event.target) && !container.has(event.target).length) {
        if(!textb.is(event.target)){
            container.hide();
        } 
    }
});

$(".mb-3.date.months .days-slider li").click(function(){
    $(".mb-3.date.months .days-slider li").removeClass("active")
    $(this).addClass("active")
    $("#monthDate").val($(this).html())
    $(".mb-3.date.months .days-slider").hide();
    detectMonthdays();
    detectMonth();
    detectDay();
})
$(".mb-3.date.days .days-slider li").click(function(){
    $(".mb-3.date.days .days-slider li").removeClass("active")
    $(this).addClass("active")
    $("#dayDate").val($(this).html())
    $(".mb-3.date.days .days-slider").hide();
    detectMonthdays();
    detectDay();
    detectMonth();
})
$(".mb-3.date.years .days-slider li").click(function(){
    $(".mb-3.date.years .days-slider li").removeClass("active")
    $(this).addClass("active")
    $("#yearDate").val($(this).html())
    $(".mb-3.date.years .days-slider").hide();
    detectMonthdays();
    detectDay();
    detectMonth();
})

function genrateYears(){
    var date = new Date
    for (i = Number(date.getFullYear() - 18); i <= Number(date.getFullYear() -6) ; i++ ){
        $(".mb-3.date.years .days-slider").html( $(".mb-3.date.years .days-slider").html() + "<li>" + i +"</li>" )
    } 

}
$(document).click(function() {
    var container = $(".mb-3.date.years .days-slider");
    var textb = $("#yearDate");
    if (!container.is(event.target) && !container.has(event.target).length) {
        if(!textb.is(event.target)){
            container.hide();
        } 
    }
});




async function upgrade_func(data_arr)
{

    console.log(data_arr);
    var package = await GET_DATA_TABLES(database_fixed_link , 'package');
    var package_selected = [];

    package.forEach(element =>{
        if(Number(element.id) == Number(data_arr.package_id))
        {
            package_selected[0] =  element;
        }
    })

            var returncheck = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'student_package' , 
        ["student_id"
        ,"package_id"
    ],
        [
            data_arr.student_id,
            data_arr.package_id
        ]
        );

        var get_student_pac = await GET_DATA_TABLES(database_fixed_link , 'student_package')
        var getlastid = get_student_pac[get_student_pac.length-1].id;

        var counter_check = Number(package_selected[0].installments);


        var saved_date = getFormattedDate(new Date());

        for(var index = 0 ; index < counter_check ; index++)
        {  
            var invoice_data_arr = [];
            if(index == 0)
            {
                invoice_data_arr[0] = data_arr.student_id; //fee
                invoice_data_arr[1] = package_selected[0].fees; //fee
                invoice_data_arr[2] = package_selected[0].paid_as; //amount
                invoice_data_arr[3] = 'done'; //status
                invoice_data_arr[4] = saved_date; //due_date
                invoice_data_arr[5] = saved_date; //paid_date
                invoice_data_arr[6] = 0; //dis
                invoice_data_arr[7] = ""; //att
                invoice_data_arr[8] = getlastid; //pac-id
                invoice_data_arr[9] = Number(package_selected[0].quota) / Number(package_selected[0].installments); //qouta
                invoice_data_arr[10] = 0; //remain
            }
            else
            {
                invoice_data_arr[0] = data_arr.student_id; //fee
                invoice_data_arr[1] = 0; //fee
                invoice_data_arr[2] = package_selected[0].paid_as; //amount
                invoice_data_arr[3] = 'waiting'; //status
                invoice_data_arr[4] = saved_date; //due_date
                invoice_data_arr[5] = ''; //paid_date
                invoice_data_arr[6] = 0; //dis
                invoice_data_arr[7] = ""; //att
                invoice_data_arr[8] = getlastid; //pac-id
                invoice_data_arr[9] = Number(package_selected[0].quota) / Number(package_selected[0].installments); //qouta
                invoice_data_arr[10] = 0; //remain 
            }

            saved_date = new Date(saved_date);

            if(saved_date.getDate() > 20){

                saved_date = getFormattedDate( new Date(saved_date.getFullYear(), saved_date.getMonth() + 2, 1));
            }
            else
            {
                saved_date = getFormattedDate( new Date(saved_date.getFullYear(), saved_date.getMonth() + 1, 1));
            }


            var get_add_data_var_std = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'invoice' ,     
            ["student_id" 
            , "fees" 
            , "amount" 
            , "status" 
            , "due_date" 
            , "paid_date" 
            , "discount" 
            , "attach" 
            , "package_id" 
            , "qouta" 
            , "remain" 
            ]
                , invoice_data_arr);

        }

        Loading_page_clear();
        $(".step04").show("drop", { direction: "left" }, 300);
}




async function go_to_step05_func_reg_upgrade(data_arr)
{

    var package = await GET_DATA_TABLES(database_fixed_link , 'package');
    var package_selected = [];

    package.forEach(element =>{
        if(Number(element.id) == Number(data_arr.package_id))
        {
            package_selected[0] =  element;
        }
    })

            var returncheck = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'student_package' , 
        ["student_id"
        ,"package_id"
    ],
        [
            data_arr.student_id,
            data_arr.package_id
        ]
        );

        var get_student_pac = await GET_DATA_TABLES(database_fixed_link , 'student_package')
        var getlastid = get_student_pac[get_student_pac.length-1].id;

        var counter_check = Number(package_selected[0].installments);


        var saved_date = getFormattedDate(new Date());

        for(var index = 0 ; index < counter_check ; index++)
        {  
            var invoice_data_arr = [];
            if(index == 0)
            {
                invoice_data_arr[0] = data_arr.student_id; //fee
                invoice_data_arr[1] = package_selected[0].fees; //fee
                invoice_data_arr[2] = package_selected[0].paid_as; //amount
                invoice_data_arr[3] = 'done'; //status
                invoice_data_arr[4] = saved_date; //due_date
                invoice_data_arr[5] = saved_date; //paid_date
                invoice_data_arr[6] = 0; //dis
                invoice_data_arr[7] = ""; //att
                invoice_data_arr[8] = getlastid; //pac-id
                invoice_data_arr[9] = Number(package_selected[0].quota) / Number(package_selected[0].installments); //qouta
                invoice_data_arr[10] = 0; //remain
            }
            else
            {
                invoice_data_arr[0] = data_arr.student_id; //fee
                invoice_data_arr[1] = 0; //fee
                invoice_data_arr[2] = package_selected[0].paid_as; //amount
                invoice_data_arr[3] = 'waiting'; //status
                invoice_data_arr[4] = saved_date; //due_date
                invoice_data_arr[5] = ''; //paid_date
                invoice_data_arr[6] = 0; //dis
                invoice_data_arr[7] = ""; //att
                invoice_data_arr[8] = getlastid; //pac-id
                invoice_data_arr[9] = Number(package_selected[0].quota) / Number(package_selected[0].installments); //qouta
                invoice_data_arr[10] = 0; //remain 
            }

            saved_date = new Date(saved_date);

            if(saved_date.getDate() > 20){

                saved_date = getFormattedDate( new Date(saved_date.getFullYear(), saved_date.getMonth() + 2, 1));
            }
            else
            {
                saved_date = getFormattedDate( new Date(saved_date.getFullYear(), saved_date.getMonth() + 1, 1));
            }


            var get_add_data_var_std = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'invoice' ,     
            ["student_id" 
            , "fees" 
            , "amount" 
            , "status" 
            , "due_date" 
            , "paid_date" 
            , "discount" 
            , "attach" 
            , "package_id" 
            , "qouta" 
            , "remain" 
            ]
                , invoice_data_arr);

        }



    if(data_arr.group_id && Number(data_arr.group_id) != 0)
    {
        var returncheck = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'student_groups' , 
        ["groups_id"
        ,"student_id"
        ,"status"
    ],
        [
            data_arr.group_id,
            data_arr.student_id,
            'active'
        ]
        );

        var get_sessions_arr_return = await GET_DATA_TABLES(database_fixed_link , 'sessions');
        var get_required_sessions_arr = [];
        var get_required_sessions_arr_count = 0;
        get_sessions_arr_return.forEach(element => {

            if(Number(element.groups_id) == Number(data_arr.group_id))
            {
                get_required_sessions_arr[get_required_sessions_arr_count] = element;get_required_sessions_arr_count++;
            }
        })

        for(var index = 0 ; index < get_required_sessions_arr.length ; index++ )
        {
            var returncheck = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'att_feed' , 
            ["student_id" 
            ,"session_id" 
            ,"attendance" 
            ,"feedback" 
        ],
            
        [
            data_arr.student_id,
            get_required_sessions_arr[index].id,
            '',
            ''
        ]
            );

        }
    }

    Loading_page_clear();
    $(".step04").show("drop", { direction: "left" }, 300);

    return true;

}

