$(".mobile-header .menu").click(function() {
    $(".mobile-header .menucontainer").show("blind", { direction: "right" });
})
$(".mobile-header .close").click(function() {
    $(".mobile-header .menucontainer").hide("blind", { direction: "right" });
})
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
$(".country ul li").click(function() {
    $("#countryInput1").val($(this).html())
})
function isEmail(email) {
    var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return EmailRegex.test(email);
  }

  function isPhone(phone) {
    var phone_pattern = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    return phone_pattern.test( phone );
  }

  $(".btn.signup").click(async function() {

   var check = await go_to_step02_func_mrkt();
   Loading_page_clear();

   if(check == true)
   {
    $('#firstnameInput').val('')
    $('#phonenumInput').val('')
    $('#birthdate').val('')
    $('#countries').val('')
    $('#emailInput').val('')

    alert('send success');
    setTimeout(function() {
        $(".step01").show("drop", { direction: "left" }, 300);
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
$(".btn.next").click(async function() {

    var check_return = false;

    if(check_return)
    {        
        $(".step02").hide("drop", { direction: "right" }, 300);
        setTimeout(function() {
            $(".step03").show("drop", { direction: "left" }, 300);
        }, 400)
    }

})


$(".payment-plans-container button").click(function() {
    $(".step03").hide("drop", { direction: "right" }, 300);
    setTimeout(function() {
        $(".step04").show("drop", { direction: "left" }, 300);
    }, 400)
})
$(".payment-plans-container button").click(function() {
    $(".step03").hide("drop", { direction: "right" }, 300);
    setTimeout(function() {
        $(".step04").show("drop", { direction: "left" }, 300);
    }, 400)
})
$(".step02 .back").click(function() {
    $(".step02").hide("drop", { direction: "left" }, 300);
    setTimeout(function() {
        $(".step01").show("drop", { direction: "right" }, 300);
    }, 400)
})
$(".step03 .back").click(function() {
    $(".step03").hide("drop", { direction: "left" }, 300);
    setTimeout(function() {
        $(".step02").show("drop", { direction: "right" }, 300);
    }, 400)
})



async function go_to_step02_func_mrkt()
{    
    Loading_page_set();
  
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

        if(counter_group_cap < 6 && Number(Element_gp.type_id) == 2 && (new Date()) < new Date(Element_gp.start_date))
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

        if( $('#birthdate').val() == "" ) {
            $('#birthdate_error').text('Please Select Birthdate');return false;
        }
        else
        {
            $('#birthdate_error').text('');    
        }

        if( $('#phonenumInput').val() == "" ) {
            $('#phonenumInput_error').text('Please Set Phone Number');return false;
        }
        else
        {

            $('#phonenumInput_error').text('');    
            
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

        $( ".scheduletableitem:nth-child(2)").hide();
        $( ".scheduletableitem:nth-child(3)").hide();
        $( ".scheduletableitem:nth-child(4)").hide();
        $( ".scheduletableitem:nth-child(5)").hide();
        $( ".scheduletableitem:nth-child(6)").hide();

        var kid_age =  (new Date()).getFullYear() - new Date($("#birthdate").val()).getFullYear() 
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
  

    let url = window.location.href;
    let params = (new URL(url)).searchParams;
    var get_element = '';
    get_element = params.get('camp_id');

    var get_data_elements_parent_table = [];
    get_data_elements_parent_table[0] = $('#firstnameInput').val()
    get_data_elements_parent_table[1] = $('#phonenumInput').val()
    get_data_elements_parent_table[2] = $('#emailInput').val()
    get_data_elements_parent_table[3] = ''
    get_data_elements_parent_table[4] = ''
    get_data_elements_parent_table[5] = ''
    get_data_elements_parent_table[6] = ''
    get_data_elements_parent_table[7] = $('#countries').val()
    get_data_elements_parent_table[8] = ''
    get_data_elements_parent_table[9] = get_element
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
                        if(element.id && element.id != "")
                        {
                            get_data_elements_parent_table[11] = element.id;
                           
                        }
                        else
                        {
                            get_data_elements_parent_table[11] = sales_emp[0].id;
                            
                        }
                    }
                    if((element.id == check_agent || Number(check_agent) == 0)  && check_confirm == false)
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
                        check_confirm = false;

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

    get_data_elements_parent_table[12] = $('#emailInput').val()
    get_data_elements_parent_table[13] = $('#phonenumInput').val()

    var parent_id = '';

    var check_email_phone = false;

    get_all_parent_table.forEach(element=>{
        if(element.email == $('#emailInput').val())
        {
            parent_id = element.id;
            check_email_phone = true;
        }
        else if(element.phone == $('#phonenumInput').val())
        {
            parent_id = element.id;
            check_email_phone = true;
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


    }





    var saved_age_arr  = await GET_DATA_TABLES(database_fixed_link ,'age');    

    var kid_age =  (new Date()).getFullYear() - new Date($("#birthdate").val()).getFullYear() 
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
    get_data_elements_student_table[4] = $('#firstnameInput').val();
    get_data_elements_student_table[5] = age_req;
    get_data_elements_student_table[6] = $('#birthdate').val();

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




    return true;
}

async function go_to_step01_func_mrkt()
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


    })
    }
    Loading_page_clear();
}
