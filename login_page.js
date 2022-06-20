

var all_countainer = "all_countainer";
var login_page = "login_page";
var arr_system = [
    'system_id', //1
    "add_parent", //2
    "add_student", //3
    "add_group", //4
    "add_student_invoice", //5
    "add_session_group", //6
    "add_employee" , //7
    "add_student_parent", //8
    "add_student_group", //9
    "add_student_package", //10
    "add_student_session", //11
    "calls",  //12
    "calls_assign", //13
    "calls_sales", //14
    "calls_assign_sales", //15
    "marketing_dashboard", //16
    "material_dashboard", //17
    "certification_dashboard", //18
    "tasks_dashboard" //19
    
]


{/* <li><a href="#" id="material_dashboard" class="link-dark rounded">Material Dashboard</a></li>
<li><a href="#" id="certification_dashboard" class="link-dark rounded">Certifications Dashboard</a></li>
<li><a href="#" id="tasks_dashboard" class="link-dark rounded">Tasks Dashboard</a></li> */}

var del_arr_system = [
    'del_system_id', //1
    "delete_parent", //2

    
]

var arr_admin_group = [
    "admin_group_id",
    "groups",
    "sessions",
    "att_feed",
    "slots",
    "lan",
    "attend",
    "age",
    "level",
    "track",
    "session_type",
    "days"
]

var arr_admin_students = [
    "admin_student_id",
    "parent_loc",
    "students",
    "student_groups",
    "student_status"
]


var arr_admin_fin = [
    "admin_fin_id",
    "package",
    "invoice",
    "invoice_status",
    "student_package",
    "employee",
    "role",
    "department",
    "permission"
]

var arr_admin_parent= [
    "admin_parent_id",
    "cs_calls",
    "cat",
    "close",
    "call_type",
    "call_status",
    "sales_calls",
    "cat_sales",
    "close_sales",
    "call_type_sales",
    "call_status_sales",
]


var arr_admin_marketing= [
    "admin_marketing_id",
    "marketing",
    "mrkt_type",
    "mrkt_conv_type",
    "mrkt_source",
    "mrkt_others",

]


var arr_admin_content= [
    "admin_content_id",
    "material",
    "tasks",
    "certifications"

]


async function login_page_check()
{

    Show_Element(login_page);
    Hide_Element(all_countainer);
    localStorage.agentname = '';
    

    var value_emp = await  GET_DATA_TABLES( database_fixed_link, 'users');
    
    $('#login_id').off();
    $('#login_id').click(function (index) {  

        if($('#Username').val() == "")
        {
            alert("UserName Missing");
            return;
        }

        if($('#password').val() == "")
        {
             alert("Password Missing");
            return;
        }


        var check_user = false;
        var check_pass = false;
                for(var index = 0 ; index < value_emp.length ; index++)
                {
                    if(value_emp[index].username == $('#Username').val())
                    {
                        check_user = true;
                        for(var index_ = 0 ; index_ < value_emp.length ; index_++)
                        {
                            if(value_emp[index].password_value == $('#password').val())
                            {
                                check_pass = true;

                                login_success(value_emp[index]);
                                // alert("login success")
                                return;
                            }
                        }
                    }
                }

                if(check_user == false)
                {
                    alert("Wrong Username")
                    return;
                }
                if(check_pass == false)
                {
                    alert("Wrong Password")
                    return;
                }
    });
   
}

async function login_page_check_auto(user , pass)
{


    var value_emp = await  GET_DATA_TABLES( database_fixed_link, 'users');

        if(user == "")
        {
            //alert("UserName Missing");
            return false;
        }

        if(pass == "")
        {
             //alert("Password Missing");
            return false;
        }


        var check_user = false;
        var check_pass = false;
                for(var index = 0 ; index < value_emp.length ; index++)
                {
                    if(value_emp[index].username == user)
                    {
                        check_user = true;
                        for(var index_1 = 0 ; index_1 < value_emp.length ; index_1++)
                        {
                            if(value_emp[index].password_value == pass)
                            {
                                check_pass = true;
                                login_success(value_emp[index]);
                                // alert("login success")
                                return true;
                            }
                        }
                    }
                }

                if(check_user == false)
                {
                    //alert("Wrong Username")
                    return false;
                }
                if(check_pass == false)
                {
                    //alert("Wrong Password")
                    return false;
                }
   
    
}



async function login_success(user_info)
{


    Show_all();
    localStorage.agentname =  user_info.emp_name;
    localStorage.permission = user_info.permission_id;
    localStorage.userid = user_info.id;

    Show_Element(all_countainer);
}

function Hide_Element(Elment_id)
{
    $("#"+Elment_id).hide();
}

function Show_Element(Elment_id)
{
    $("#"+Elment_id).show();
}


function Show_all()
{
    Hide_Element(login_page);
    $('#all-count').show();
}

