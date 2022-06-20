

var st_ids = 0;
var saved_group_arr = []
var saved_package_arr = []
var student_id_counter = 0;
var student_id_counter_saved = 0;
var student_id_counter_saved_deduct = 0;
var saved_age_arr = []
var saved_status_arr = []
var saved_sessions_id_arr = []
var saved_att_feed_id_arr = []

async function ADD_NEW_PARENT_GROUPS()
{
    document.getElementById("blob_Location_1").innerHTML = ``;

     st_ids = 0;
     saved_group_arr = []
     saved_package_arr = []
     student_id_counter = 0;
     student_id_counter_saved = 0;
     student_id_counter_saved_deduct = 0;
     saved_age_arr = []
     saved_status_arr = []
     saved_sessions_id_arr = []
     saved_att_feed_id_arr = []

    var Database_link = database_fixed_link
    var inputs_col = [["name" , "slot" ],
    ["name"],
    ["name"],
    ["name"],
    ["name"],
    ["name"],
    ["name"],
    ["name"],
    ["slot_id" 
    , "lan_id" 
    , "att_id" 
    , "level_id" 
    , "track_id" 
    , "type_id" 
    , "days_id" 
    , "age_id" 
    , "opend_by" 
    , "start_date" 
    , "end_date" 
    ],
    ["std_id" 
    , "group_id" 
    , "parent_id" 
    , "free_session_status" 
    , "std_status" 
    , "name" 
    , "age" 
    , "birthdate" 
    ]
    ,
    ["groups_id" 
    , "student_id" 
    , "status" 
    ],
    ["name"],
    ["student_id" 
    , "package_id" 
    ],
    ["name" 
    , "fees" 
    , "quota" 
    , "discount" 
    , "installments" 
    , "paid_as" 
    ],
    [
      "student_id"
      ,"fees"
      ,"amount"
      ,"status"
      ,"due_date"
      ,"paid_date"
      ,"discount"
      ,"attach"
      ,"package_id"
      ,"qouta"
      ,"remain"
  ],
  ["student_id" 
  ,"session_id" 
  ,"attendance" 
  ,"feedback" 
],
["groups_id" 
,"employee_id" 
,"zoomlink" 
,"session_date" 
,"session_num" 
,"open_by"
]
    

  ];

var called_table = ['slots',
      'lan',
      'attend',
      'level',
      'track',
      'session_type',
      'days',
      'age',
      'groups',
      'students',
      'student_groups',
      'operation_status',
      'student_package',
      'package',
      'invoice',
      'att_feed',
      'sessions'
  ];

        const All_req_obj_ = {};
        All_req_obj_.Database_link = Database_link
        All_req_obj_.inputs_col = inputs_col
        All_req_obj_.called_table = called_table
                 
  
        get_all_data_arr(All_req_obj_ ,quary_tables_all_status_groups_check , '' , time_out  , 0);

}

async function ADD_NEW_PARENT()
{
    Loading_page_set();

    start_index_num = 0;
    ent_index = 0;


    saved_group_arr = []
    saved_age_arr = []

    st_ids = 0;
    clear_all_locations();


    var Database_link = database_fixed_link
    var inputs_col = [
        ["name"],
        ["name"],
        ["name"],
        ["name" 
        , "phone" 
        , "email" 
        , "zoomlink" 
        , "username" 
        , "password" 
        , "permission_id" 
        , "department_id" 
        , "role_id" 
         ],
         ["name" 
         , "phone" 
         , "email" 
         , "name_2" 
         , "phone_2" 
         , "email_2" 
         , "address" 
         , "location" 
         , "job" 
         , "marketing_id" 
         , "customer_agent_id" 
         , "sales_agent_id" 

         , "username" 
         , "password" 
          ]
          ,
         ["std_id" 
         , "parent_id" 
         , "free_session_status" 
         , "std_status" 
         , "name" 
         , "age" 
         , "birthdate" 
          ],
          ["slot_id" 
          , "lan_id" 
          , "att_id" 
          , "level_id" 
          , "track_id" 
          , "type_id" 
          , "days_id" 
          , "age_id" 
          , "opend_by" 
          , "start_date" 
          , "end_date" 
          , "student_id_1" 
          , "student_id_2" 
          , "student_id_3" 
          , "student_id_4" 
          , "student_id_5" 
          , "student_id_6" 
          ],
          ["name"],
          ["groups_id" 
          , "student_id" 
          , "status" 
          ],
          ["name"],
          ["name"],
          ["name"],
          ["name"],
          ["name"],
          ["name"],
          ["name"],
          ["name"],
          ["name"],
          ["student_id" 
          , "package_id" 
          ],
          ["name" 
          , "fees" 
          , "quota" 
          , "discount" 
          , "installments" 
          , "paid_as" 
          ],
          [
            "student_id"
            ,"fees"
            ,"amount"
            ,"status"
            ,"due_date"
            ,"paid_date"
            ,"discount"
            ,"attach"
            ,"package_id"
            ,"qouta"
            ,"remain"
        ]
        ,
        [
            "name",
            "disc",
            "mrkt_type_id",
            "mrkt_conv_type_id",
            "mrkt_source_id",
            "mrkt_others_id",
            "url_camp"
            
        ]
      ];

var called_table = [
         'permission',
          'department',
          'role',
          'employee',
          'parent',
          'students',
          'groups',
          'age',
          'student_groups',
          'operation_status',
          'slots',
          'lan',
          'attend',
          'level',
          'track',
          'session_type',
          'days',
          'age',
          'student_package',
          'package',
          'invoice',
          'marketing'
      ];

var paper_inputs = [
          'name_input' , 
          'phone_input',
          'email_input',
          'name2_input',
          'phone2_input',
          'email2_input',
          'address_input',
          'location_input',
          'job_input',
          'marketing_input',
          'customer_input',
          'sales_input',

      ];



var paper_inputs_label = [
          'Name : ' , 
          'Phone : ',
          'Email : ',
          'Name 2 : ',
          'Phone 2 : ',
          'Email 2 : ',
          'Address : ',
          'Location : ',
          'Job : ',
          'Marketing ID',
          'Customer Agent ',
          'Sales Agent '

      ];


      await ADD_NEW_PARENT_GROUPS();



        const All_req_obj = {};
        All_req_obj.Database_link = Database_link
        All_req_obj.inputs_col = inputs_col
        All_req_obj.called_table = called_table
                 
    html_create_lists_parent(paper_inputs , paper_inputs_label , "Location_1" );


    get_all_data_arr(All_req_obj ,quary_tables_all_parent,create_paper_table_parent , time_out , 1);

    $('#search_btn').click(function (index) {  
        Loading_page_set();

        get_all_data_arr(All_req_obj ,quary_tables_all_parent,create_paper_table_parent , time_out , 2);
        });

        $('#all_calls_btn').click(function () {
            Loading_page_set();
    
            get_all_data_arr(All_req_obj ,quary_tables_all_parent,create_paper_table_parent , time_out , 5);
    
        });
  
    $('#add_student_new').click(function () {  

        html_create_lists_student_num(All_req_obj,paper_inputs ,"Location_2" , st_ids);
        st_ids++;
        $('.select2').select2();

    });



        $('#send_group').click(function () {

        ADD_PARENT_SENRIO(paper_inputs);
        });


        $('#reg_btn').click(function () {

            Loading_page_set();

            $('#reg_input').val("<label style='color:green'>Registered</label>");
            get_all_data_arr(All_req_obj ,quary_tables_all_parent,create_paper_table_parent , time_out , 3);

        });

            
        $('#not_reg_btn').click(function () {
            Loading_page_set();

            $('#not_reg_input').val("<label style='color:red'>Not Registered</label>");

            get_all_data_arr(All_req_obj ,quary_tables_all_parent,create_paper_table_parent , time_out , 4);

        });
        
}

function html_create_lists_student_num(All_req_obj , paper_inputs ,location_ , st_ids_)
{
    document.getElementById(location_).innerHTML = '';
    for(var indexx = 0 ; indexx < st_ids_+1 ; indexx++)
    {
    document.getElementById(location_).innerHTML +=`<div id='add_std_${indexx}'>`;
    document.getElementById(location_).innerHTML +=`</div>`;


    document.getElementById('add_std_'+indexx).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;


    document.getElementById('add_std_'+indexx).innerHTML += `<label>Student ID : </label><input type='text' id='student_id`+indexx+`'>`;
    document.getElementById('add_std_'+indexx).innerHTML += `<label>Name : </label><input type='text' id='name_id`+indexx+`'>`;

    document.getElementById('add_std_'+indexx).innerHTML +=`</div></div>`;
    document.getElementById('add_std_'+indexx).innerHTML += `<label>Free Session : </label><input class="largerCheckbox" type='checkbox' id='free_id`+indexx+`' value='no'>`;


    document.getElementById('add_std_'+indexx).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    document.getElementById('add_std_'+indexx).innerHTML += `<label>birthdate : </label><input type='date' id='bd_id`+indexx+`'>`;
    paper_inner_parent_1_func_hide('status_id'+indexx , "Status " , 'add_std_'+indexx , "col-1");

    for(var index = 0 ;index < saved_status_arr.length ; index++)
    {
        if(saved_status_arr[index][0] != undefined)
        {
            $('#status_id'+indexx).append(`<option value="${saved_status_arr[index][0]}"
            >${saved_status_arr[index][1]} </option>`); 
        }
    }

    document.getElementById('add_std_'+indexx).innerHTML +=`</div></div>`;

    paper_inner_parent_1_func('Packages_id_input'+indexx , "Packages " , 'add_std_'+indexx , "col-1");



    for(var index = 0 ;index < saved_package_arr.length ; index++)
    {
        if(saved_package_arr[index][0] != undefined)
        {
            $('#Packages_id_input'+indexx).append(`<option value="${saved_package_arr[index][0]}"
            >${saved_package_arr[index][1]} </option>`); 
        }
    }

    document.getElementById('add_std_'+indexx).innerHTML +=`<label>Paid Date : </label><input type='date' id='package_data_${indexx}' />`;


    paper_inner_parent_1_func('groups_id_input'+indexx , "Groups " , 'add_std_'+indexx , "col-3");

    $('#groups_id_input'+indexx).empty();
    $('#groups_id_input'+indexx).append(`<option value="">Select Birth Date</option>`); 


    document.getElementById('add_std_'+indexx).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
    document.getElementById('add_std_'+indexx).innerHTML +=`<hr class="hr-primary" />`;
    document.getElementById('add_std_'+indexx).innerHTML +=`</div></div>`;
    }


    for(var indexx = 0 ; indexx < st_ids_+1 ; indexx++)
    {
        $("#bd_id"+indexx).change(function () {
            var id = this.id;
            var ret = id.replace('bd_id','') ;

            var kid_age =  (new Date()).getFullYear() - new Date($("#bd_id"+ret).val()).getFullYear() 
            var age_req = '';
            if(kid_age < 20)
            {
                saved_age_arr.forEach(elment =>{
                    if(kid_age >= Number(elment[1]) && kid_age <=  Number(elment[2]))
                    {
                        age_req = elment[0];
                        $('#groups_id_input'+ret).empty();

                    }
                })

                if(age_req)
                {
                    var check_av = false;
                    for(var index = 0 ;index < saved_group_arr.length ; index++)
                    {
                        if(saved_group_arr[index][0] != undefined && saved_group_arr[index][2] == age_req)
                        {
                            check_av = true;
                            $('#groups_id_input'+ret).append(`<option value="${saved_group_arr[index][0]}"
                            >${saved_group_arr[index][1]} </option>`); 
                        }
                    }
                    if(check_av == true)
                    {
                        $('#groups_id_input'+ret).append(`<option value="">Waiting List</option>`); 
                    }
                    if(check_av == false)
                    {
                        $('#groups_id_input'+ret).empty();
                        $('#groups_id_input'+ret).append(`<option value="">No groups for the age range</option>`); 
                    }
                }
                else
                {
                    $('#groups_id_input'+ret).empty();
                    $('#groups_id_input'+ret).append(`<option value="">Select Birth Date</option>`); 
                }

            }
            else
            {
                $('#groups_id_input'+ret).empty();
                $('#groups_id_input'+ret).append(`<option value="">Select Birth Date</option>`); 
            }

        });
    }



    
}


async function html_create_lists_parent(paper_inputs , paper_inputs_label  , location_)
{
    document.getElementById("Location_1").innerHTML = "";
    document.getElementById("Location_2").innerHTML = "";
    document.getElementById("Location_3").innerHTML = "";
    //document.getElementById("Location_4").innerHTML = "";
    // document.getElementById("search-results").innerHTML = `<div class="loader" ></div>`;



    if(localStorage.permission == 4 || localStorage.permission == 2)
    {    
    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    for(var index = 0 ; index < 3 ; index++)
    {
        document.getElementById(location_).innerHTML += `<label>`+paper_inputs_label[index]+` </label><input type='text' id='`+paper_inputs[index]+`'>`;
    }
    document.getElementById(location_).innerHTML +=`</div></div>`;

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    for(var index = 3 ; index < 6 ; index++)
    {
        document.getElementById(location_).innerHTML += `<label>`+paper_inputs_label[index]+` </label><input type='text' id='`+paper_inputs[index]+`'>`;
    }
    document.getElementById(location_).innerHTML +=`</div></div>`;

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    for(var index = 6 ; index < 9 ; index++)
    {
        document.getElementById(location_).innerHTML += `<label>`+paper_inputs_label[index]+` </label><input type='text' id='`+paper_inputs[index]+`'>`;
    }
    // document.getElementById(location_).innerHTML += `<label hidden>`+paper_inputs_label[9]+` </label><input type='text' value='-' id='`+paper_inputs[9]+`' hidden/>`;

    document.getElementById(location_).innerHTML +=`</div></div>`;

    document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;

    document.getElementById(location_).innerHTML +=`<div id='assign_section_id' style='display:none'>`;


    
    paper_inner_parent__('marketing_input' , 'Marketing ID ');


    if(localStorage.permission == 4)
    {
        for(var index = 10 ; index < 12 ; index++)
        {
            paper_inner_parent__(paper_inputs[index] , paper_inputs_label[index]);
    
        }  
    }
    else if (localStorage.permission == 2)
    {
        for(var index = 10 ; index < 12 ; index++)
        {
            paper_inner_parent__hidden(paper_inputs[index] , paper_inputs_label[index]);
        }  
    }



    document.getElementById(location_).innerHTML +=`</div>`;


    document.getElementById(location_).innerHTML +=`</div></div>`;

    document.getElementById(location_).innerHTML += `<div class='col justify-content-start'><button class='btn btn-success' style='float:right;' id='send_group'>ADD</button></div>`;

}

    document.getElementById(location_).innerHTML +=`<div class="input-group">
    <div class='col justify-content-start'>
      <input type="search" id="search_all" class="form-control" />
    </div><div id='search_assign'> </div><div class='col justify-content-start' style='z-index:0;'><button type="button" id='search_btn' class="btn btn-primary">
      <i class="fas fa-search"></i>
    </button></div>
  </div>`;


  if(localStorage.permission == 4 || localStorage.permission == 2)
  {
      document.getElementById('search_assign').innerHTML = ''

  employee_drop_down_search('search_assign');

  document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
  document.getElementById(location_).innerHTML +=`</div></div>`;

  document.getElementById(location_).innerHTML +=`<div class='col justify-content-start'><button class='btn btn-primary' style='float:left;' id='add_student_new'>+ ADD Student</button>

  </div><br>`;
}
document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
document.getElementById(location_).innerHTML +=`</div></div>`;
document.getElementById(location_).innerHTML +=`<div class='col justify-content-start' style='z-index:0;'>
<button type="button" id='all_calls_btn' class="btn btn-secondary">
All
</button>
<button type="button" id='reg_btn' class="btn btn-success">
Registered
</button><input type='text' id='reg_input' value='' hidden/>
<button type="button" id='not_reg_btn' class="btn btn-danger">
Not Registered
</button>
</button><input type='text' id='not_reg_input' value='' hidden/>
<input id='counter_id' readonly />
</div>`;

  document.getElementById(location_).innerHTML +=`<div class="col"><div class="form-floating mb-3 search_adjust">`;
  document.getElementById(location_).innerHTML +=`<hr class="hr-primary" />`;
  document.getElementById(location_).innerHTML +=`</div></div>`;

  
}


 function quary_tables_all_parent(All_table_obj , func)
 {
    var create_new_tabl_rows = []
    var counter = 0;

    var create_new_tabl_rows_emp = []

    if(All_table_obj.tables[21] && All_table_obj.tables[21] !== undefined && All_table_obj.tables[21].length != 0){

        All_table_obj.tables[21].forEach(element => {


            $('#marketing_input').append(`<option value="${element.id}"
            >${element.id} - ${element.name} </option>`); 

        })
        
    }

    if(All_table_obj.tables[3] && All_table_obj.tables[3] !== undefined && All_table_obj.tables[3].length != 0){
    
    for(var index = 0 ; index < All_table_obj.tables[3].length ; index++)
    {
        var create_new_table_cols = []
        var counter = 0;

        create_new_table_cols[counter] = All_table_obj.tables[3][index].id;counter++;
        create_new_table_cols[counter] = All_table_obj.tables[3][index].name;counter++;
        create_new_table_cols[counter] = All_table_obj.tables[3][index].phone;counter++;
        create_new_table_cols[counter] = All_table_obj.tables[3][index].email;counter++;
        create_new_table_cols[counter] = All_table_obj.tables[3][index].zoomlink;counter++;
        create_new_table_cols[counter] = All_table_obj.tables[3][index].username;counter++;
        create_new_table_cols[counter] = All_table_obj.tables[3][index].password_value;counter++;

        for(var index_ = 0 ; index_ < All_table_obj.tables[0].length ; index_++)
        {
            if(All_table_obj.tables[3][index].permission_id == All_table_obj.tables[0][index_].id)
            {
                
                create_new_table_cols[counter] = All_table_obj.tables[0][index_].name; counter++;
                break;
            }
        }

        for(var index_ = 0 ; index_ < All_table_obj.tables[1].length ; index_++)
        {
            if(All_table_obj.tables[3][index].department_id == All_table_obj.tables[1][index_].id)
            {
                create_new_table_cols[counter] = All_table_obj.tables[1][index_].name;counter++;
                break;
            }
        }

        for(var index_ = 0 ; index_ < All_table_obj.tables[2].length ; index_++)
        {
            if(All_table_obj.tables[3][index].role_id == All_table_obj.tables[2][index_].id)
            {
                create_new_table_cols[counter] = All_table_obj.tables[2][index_].name;;
                break;
            }
        }
        create_new_tabl_rows_emp[index] = create_new_table_cols;
    }
    }
    //func( create_new_tabl_rows );

    var package_arr_status = [];
    var counter_arr_pack = 0;


    if(All_table_obj.tables[4] && All_table_obj.tables[4] !== undefined && All_table_obj.tables[4].length != 0)
    {


        get_next_prev_parent(All_table_obj , func);


        if(Number(All_table_obj.tables[4].length) - start_index_num > 10)
        {
            ent_index = start_index_num+10;
        }
        else{
            ent_index = Number(All_table_obj.tables[4].length);

        }


        for(var index = start_index_num ; index < ent_index ; index++)
        {


            counter = 0;
            var Student_id_save = 0;
            var create_new_tabl_cols = []
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].id;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].name;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].phone;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].email;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].name_2;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].phone_2;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].email_2;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].username;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].password;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].job;counter++;
            create_new_tabl_cols[counter] = All_table_obj.tables[4][index].marketing_id;counter++;


            var reg_status = false;

            if(All_table_obj.tables[5] && All_table_obj.tables[5] !== undefined && All_table_obj.tables[5].length != 0)
            {
                All_table_obj.tables[5].forEach(element_st => {

                    if(element_st.parent_id == All_table_obj.tables[4][index].id)
                    {
                        if(All_table_obj.tables[18] && All_table_obj.tables[18] !== undefined && All_table_obj.tables[18].length != 0)
                        {
                            All_table_obj.tables[18].forEach(element_pac => {
                                var pack_inner_arr = [];
                                var counter_arr_pack_inner = 0;

                                if(element_st.id == element_pac.student_id)
                                {
                                    reg_status = true;
                                    pack_inner_arr[counter_arr_pack_inner] = element_pac.id; counter_arr_pack_inner++;

                                    if(All_table_obj.tables[20] && All_table_obj.tables[20] !== undefined && All_table_obj.tables[20].length != 0)
                                    {
                                        var done_inv = 0;
                                        var wait_inv = 0
                                        var refund_inv = 0
                                        var ar_refund_inv = 0

                                        All_table_obj.tables[20].forEach(element_inv => {
                                            if(element_st.id == element_inv.student_id)
                                            {
                                                if(element_inv.status == 'done')
                                                {
                                                    done_inv += Number(element_inv.qouta);
                                                }
                                                else if(element_inv.status == 'waiting')
                                                {
                                                    wait_inv += Number(element_inv.qouta);
                                                }
                                                else if(element_inv.status == 'refund')
                                                {
                                                    refund_inv += Number(element_inv.qouta);
                                                }
                                                else if(element_inv.status == 'ar-refund')
                                                {
                                                    ar_refund_inv += Number(element_inv.qouta);
                                                }
                                            }
                                        });
                                        pack_inner_arr[counter_arr_pack_inner] = done_inv; counter_arr_pack_inner++;
                                        pack_inner_arr[counter_arr_pack_inner] = wait_inv; counter_arr_pack_inner++;
                                        pack_inner_arr[counter_arr_pack_inner] = refund_inv; counter_arr_pack_inner++;
                                        pack_inner_arr[counter_arr_pack_inner] = ar_refund_inv; counter_arr_pack_inner++;

                                    }
                                    package_arr_status[counter_arr_pack] = pack_inner_arr;counter_arr_pack++;
                                }


                            });
                        }
                    }

                });

            }


            if(reg_status == true)
            {
                create_new_tabl_cols[counter] = "<label style='color:green'>Registered</label>";counter++;
            }

            else if(reg_status == false)
            {
                create_new_tabl_cols[counter] = "<label style='color:red'>Not Registered</label>";counter++;
            }

            // create_new_tabl_cols[counter] = package_arr_status[0][0];counter++;

            // create_new_tabl_cols[counter] = package_arr_status[0][1];counter++;
            // create_new_tabl_cols[counter] = package_arr_status[0][2];counter++;
            // create_new_tabl_cols[counter] = package_arr_status[0][3];counter++;


            
            var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[3] , 12 , 0 , 2)

            if(return_data.length == 0)
            {
                create_new_tabl_cols[counter] = "C-None";counter++;

            }
            for(var index_ = 0 ; index_ < return_data.length ; index_++)
            {
                create_new_tabl_cols[counter] = return_data[index_];counter++;
            }

            var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[3] , 13 , 0 , 2)
            if(return_data.length == 0)
            {
                create_new_tabl_cols[counter] = "S-None";counter++;

            }
            for(var index_ = 0 ; index_ < return_data.length ; index_++)
            {
                create_new_tabl_cols[counter] = return_data[index_];counter++;
            }

                    var count_arr = [];
                    var count_num = 0;
                    var student_length = 0;
                    if(All_table_obj.tables[5] && All_table_obj.tables[5] !== undefined && All_table_obj.tables[5].length != 0)
                    {

                    var return_data_id = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[5] , 0 , 3 , 0); 
                    count_arr[count_num] = return_data_id;count_num++;
                    Student_id_save = return_data_id;


                    var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[5] , 0 , 3 , 2);
                    student_length = return_data.length;
                    create_new_tabl_cols[counter] = student_length + ` Student/s` ;counter++;
                    count_arr[count_num] = return_data;count_num++;


                    var saved_invoice = [];
                    var saved_invoice_count = 0;
                    
                    All_table_obj.tables[5].forEach(element_st => {

                                if(element_st.parent_id == All_table_obj.tables[4][index].id)
                                {
                                    var per_st_arr = [];
                                    var per_st_arr_count = 0;
                                    if(All_table_obj.tables[20] && All_table_obj.tables[20] !== undefined && All_table_obj.tables[20].length != 0)
                                    {
                                        All_table_obj.tables[20].forEach(element_pac => {
                                            if(element_st.id == element_pac.student_id)
                                            {
                                                per_st_arr[per_st_arr_count] = element_pac;per_st_arr_count++;
                                            }
                                             
                                        })
                                    }

                                    saved_invoice[saved_invoice_count] = per_st_arr;saved_invoice_count++;

                                }

                        }
                    )

                    
                    // if(Number(student_length) )
                    // {
                    //     if( reg_status == true)
                    //     { 
                    //         var chech_elment_pac_ = false;
                    //         var get_all_pac = [];
                    //         var get_all_pac_count = 0;
                    //     saved_invoice.forEach(elment_inc =>
                    //         {
                    //             var count_check_status = false;
                    //             var record_data = '';
                    //             elment_inc.forEach(elment_inc_inner => {

                    //             package_arr_status.forEach(elment_pac_ => {

                    //                         if(Number(elment_pac_[0]) == Number(elment_inc_inner.package_id))
                    //                         {
                    //                             if(count_check_status == false)
                    //                             {
                    //                                 record_data = `<hr>${get_all_pac_count+1}-  STid${elment_inc_inner.student_id} | ${elment_inc_inner.due_date} <br> DN{${elment_pac_[1]}} | WA{${elment_pac_[2]}} | RF{${elment_pac_[2]}}  | ARRF{${elment_pac_[2]}}`;
                    //                                 count_check_status = true;
                    //                             }
                    //                             chech_elment_pac_ = true;
                    //                         }
                    //                 })

                    //             })
                    //             get_all_pac[get_all_pac_count] = record_data;get_all_pac_count++;    

                    //         })

                    //         if(chech_elment_pac_ == false)
                    //         {
                    //             create_new_tabl_cols[counter] = ``;counter++;    
                    //         }
                    //         else if (chech_elment_pac_ == true)
                    //         {
                    //             var countt = 0;

                    //             get_all_pac.forEach(element => 
                    //                 {
                    //                     if(countt == 0)
                    //                     {
                    //                         create_new_tabl_cols[counter] =  element

                    //                     }
                    //                     else 
                    //                     {
                    //                         create_new_tabl_cols[counter] += '<br>'+  element
                    //                     }
                    //                     countt++;
                    //                 })
                    //                  counter++;   

                    //         }
                    //     }
                    //     else
                    //     {
                    //         create_new_tabl_cols[counter] = 'Not Registered';counter++;
                    //     }
                    // }
                    // else
                    // {
                    //     create_new_tabl_cols[counter] = 'No Students';counter++;
                    // }


                    var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[5] , 0 , 3 , 4)
                    count_arr[count_num] = return_data;count_num++;

                    var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[5] , 0 , 3 , 5)
                    var return_data = search_for_data(All_table_obj.tables[9] , return_data , 0 , 2 );
                    count_arr[count_num] = return_data;count_num++;


                    var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[5] , 0 , 3 , 6)
                    count_arr[count_num] = return_data;count_num++;

                    var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[5] , 0 , 3 , 7)
                    count_arr[count_num] = return_data;count_num++;

                    create_new_tabl_cols[counter] = count_arr;counter++;


                    var return_data = search_two_tables(All_table_obj.tables[4][index] , All_table_obj.tables[5] , 0 , 3 , 0);


                    var return_data = search_for_data_custom(All_table_obj.tables[8] , return_data , 3 , 2 );

                    var return_data_1 = search_for_data_all(All_table_obj.tables[6] , return_data , 0 , 2 );


                        var count_arr = [];
                        var count_num = 0;
                        var return_data = [];
                        // count_arr[count_num] = 'group_col';count_num++;
                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {
                                return_data[index__] = return_data_1[index__][0];
                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];

                        
                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {
                                return_data[index__] = search_for_data_index(All_table_obj.tables[10] , return_data_1[index__][2] , 0 , 3 );
                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];

                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {
                                return_data[index__] = search_for_data_index(All_table_obj.tables[11] , return_data_1[index__][3] , 0 , 2 );
                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];
    
    
                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {
                                return_data[index__] = search_for_data_index(All_table_obj.tables[12] , return_data_1[index__][4] , 0 , 2 );

                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];

                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {
                                return_data[index__] = search_for_data_index(All_table_obj.tables[13] , return_data_1[index__][5] , 0 , 2 );
                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];

                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {                        
                                return_data[index__] = search_for_data_index(All_table_obj.tables[15] , return_data_1[index__][7] , 0 , 2 );
                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];

                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {    
                                return_data[index__] = search_for_data_index(All_table_obj.tables[16] , return_data_1[index__][8] , 0 , 2 );
                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];
    
                        for(var index__ = 0 ; index__ < return_data_1.length ; index__++)
                        {
                            if(return_data_1[index__])
                            {                            
                                return_data[index__] = search_for_data_index(All_table_obj.tables[17] , return_data_1[index__][9] , 0 , 2 );
                            }
                        }
                        count_arr[count_num] = return_data;count_num++;return_data = [];



                        
                    var return_data = []
                    var counter_ret = 0;

                    if(All_table_obj.tables[18] && All_table_obj.tables[18] !== undefined && All_table_obj.tables[18].length != 0)
                    {
                        for(var index_1 = 0 ; index_1 < return_data_id.length; index_1 ++)
                        {

                            var all_student_package = []
                            var counte_package = 0;

                            for(var index_2 = 0 ; index_2 < All_table_obj.tables[18].length; index_2++)
                            {
                                var package_arr = [];

                                if(All_table_obj.tables[18][index_2].student_id == return_data_id[index_1])
                                {

                                    package_arr[0] = All_table_obj.tables[18][index_2].id;

                                    if(All_table_obj.tables[19] && All_table_obj.tables[19] !== undefined && All_table_obj.tables[19].length != 0)
                                    {
                                        for(var index_3 = 0 ; index_3 < All_table_obj.tables[19].length ; index_3++)
                                        {
                                            if(All_table_obj.tables[18][index_2].package_id == All_table_obj.tables[19][index_3].id )
                                            {
                                                package_arr[1] = All_table_obj.tables[19][index_3].name;
                                                package_arr[2] = All_table_obj.tables[19][index_3].quota;
                                                package_arr[3] = All_table_obj.tables[19][index_3].fees;
                                                package_arr[4] = All_table_obj.tables[19][index_3].discount;
                                                package_arr[5] = All_table_obj.tables[19][index_3].paid_as;
                                                package_arr[6] = [];
                                                package_arr[7] = [];

                                                package_arr[7][0] = 0;
                                                package_arr[7][1] = 0;
                                                package_arr[7][2] = 0;
                                                package_arr[7][3] = 0;
                                                package_arr[7][4] = 0;

                                                if(All_table_obj.tables[20] && All_table_obj.tables[20] !== undefined && All_table_obj.tables[20].length != 0)
                                                {
                                                    var inv_arr = [];
                                                    var inv_arr_count = 0;
                                                    All_table_obj.tables[20].forEach(element => {


                                                        if(All_table_obj.tables[18][index_2].id == element.package_id)
                                                        {
                                                            package_arr[7][0] += Number(element.qouta);

                                                            if(element.status == 'done')
                                                            {
                                                                package_arr[7][1] += Number(element.qouta);
                                                            }
                                                            else if (element.status == 'waiting')
                                                            {
                                                                package_arr[7][2] += Number(element.qouta);
                                                            }
                                                            else if (element.status == 'refund')
                                                            {
                                                                package_arr[7][3] += Number(element.qouta);
                                                            }
                                                            else if (element.status == 'ar-refund')
                                                            {
                                                                package_arr[7][4] += Number(element.qouta);
                                                            }

                                                            inv_arr[inv_arr_count]  = element;inv_arr_count++;

                                                        }
                                                    })

                                                    package_arr[6] = inv_arr;
                                                }
                                                break;
                                            }
                                        }
                                    }
                                    all_student_package[counte_package] = package_arr;
                                    counte_package++;
                                }
                            }

                            return_data[counter_ret] = all_student_package;counter_ret++;
                        }

                    }
                    count_arr[count_num] = return_data;count_num++;
                create_new_tabl_cols[counter] = count_arr;counter++;

                var count_arr = [];
                var count_num = 0;



                for(var x = 0 ; x < Student_id_save.length ; x++)
                {
                    var counter_count_id = 0;
                    var counter_completed = 0;
                    var counter_Att_yes = 0;
                    var counter_Att_no = 0;
                    var counter_Feed = 0;
                    var inner_arr = [];
                    for(var i = 0 ; i < saved_att_feed_id_arr.length; i ++)
                    {
 

                            if(saved_att_feed_id_arr[i].student_id == Student_id_save[x])
                            {   
                                counter_count_id++;
                                if(saved_att_feed_id_arr[i].attendance == 'YES')
                                {
                                    counter_Att_yes++;
                                }
                                if(saved_att_feed_id_arr[i].attendance == 'NO')
                                {
                                    counter_Att_no++;
                                }
                                if(saved_att_feed_id_arr[i].feedback != '')
                                {
                                    counter_Feed++;
                                }
                            }
                        }
                        inner_arr[0] = counter_count_id;
                        inner_arr[1] = (counter_Att_yes+counter_Att_no);
                        inner_arr[2] = counter_Att_yes;
                        inner_arr[3] = counter_Att_no;
                        inner_arr[4] = counter_Feed;
                        count_arr[count_num] = inner_arr;count_num++;
                    }
                

                create_new_tabl_cols[counter] = count_arr;counter++;

            }
        
            create_new_tabl_rows[index] = create_new_tabl_cols;
        }
    }

    console.log(create_new_tabl_rows);


    func(create_new_tabl_rows , create_new_tabl_rows_emp);

  

}



 function create_paper_table_parent(all_tables , create_new_tabl_rows)
 {
    Loading_page_clear();


     var arr_result = assigned_agent_parent_page(all_tables);

     if(localStorage.permission == 4 || localStorage.permission == 2)
     {
        $('#customer_input').empty();
        $('#customer_input').append(`<option value=""></option>`); 
        $('#sales_input').empty();
        $('#sales_input').append(`<option value=""></option>`); 
    
        for(var index_ = 0 ; index_ < create_new_tabl_rows.length ; index_++)
        {
            if(create_new_tabl_rows[index_][7] == 'Customer Support' )
            {
                $('#customer_input').append(`<option value="${create_new_tabl_rows[index_][0]}"
                >${create_new_tabl_rows[index_][1]} </option>`); 
            }
    
            if(create_new_tabl_rows[index_][7] == 'Sales' )
            {
                $('#sales_input').append(`<option value="${create_new_tabl_rows[index_][0]}"
                >${create_new_tabl_rows[index_][1]} </option>`); 
            }
        }
     }

    
    if($('#reg_input').val() != '')
    {
        arr_result = Search_for_value(arr_result ,$('#reg_input').val() );
        $('#reg_input').val('');
    }
    else if($('#not_reg_input').val() != '')
    {
        arr_result = Search_for_value(arr_result , $('#not_reg_input').val());
        $('#not_reg_input').val('');
    }

    $('.select2').select2();

    var inputs_names_search = [
        "ID :"
    ,"Name :"
    ,"Phone :" 
    , "Email :" 
    , "Name 2 :" 
    , "Phone 2 :" 
    , "Email 2 :"
    , "USERNAME :"
    , "PASSWORD :"
    , "Job :"
    , "Marketing ID :"
    , "Reg Status :"
    , "CS Agent :"
    , "Sales Agent :"


];

    const All_data_obj = {};
    All_data_obj.Start_Index = 1;
    All_data_obj.next_btn = '#btn2';
    All_data_obj.prev_btn = '#btn1';
    All_data_obj.ind_btn = '#page_index';
    All_data_obj.location_index = "Location_4";
    All_data_obj.table_div = 'search-results';
    All_data_obj.all_names = inputs_names_search;
    All_data_obj.location_next = "Location_3";
    All_data_obj.Location_2 = "Location_2";
    All_data_obj.location_1 = "Location_1";
    All_data_obj.btn_index = 'btn_index';
    All_data_obj.btn_index = 'btn_index';
    All_data_obj.edit_index = [];
    All_data_obj.delete_index = [];
    All_data_obj.view_index = [];
    All_data_obj.index_num_value = [];
    All_data_obj.obj;
    All_data_obj.obj_data = [];
    All_data_obj.saved_index ;


    var values_ = document.getElementById("search_all").value;

    if(values_ == "")
    {
       All_data_obj.Start_Index = 1;
       $('#counter_id').val(arr_result.length)

       createTable( arr_result ,All_data_obj , 'clear' , 6 , 5 , "open" , create_view ,  all_tables[0].length-3); ;
       return;
    }
 
     var result = Search_for_value(arr_result , values_);
     $('#counter_id').val(result.length)
    createTable(result ,All_data_obj , 'clear' , 6 , 5 , "open" , create_view , all_tables[0].length-3); 

}

function create_view(All_data_obj , End_Index)
{
    var div = document.getElementById("search-results_1");
    div.innerHTML = '';
    for(var index = All_data_obj.Start_Index-1 ; index < End_Index ; index++)
    {
        var btn = document.getElementById(All_data_obj.view_index[index]);

        All_data_obj.saved_index = index;
        

        btn.onclick = function() {
            var div = document.getElementById("search-results_1");
            div.innerHTML = '';

            var id = this.id;
            var ret = id.replace('view_more_','') ;

          modal.style.display = "block";
          createTable_pop_up(All_data_obj  , ret);
        }

    }
}


function paper_inner_parent__ (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<label for="`+paper_+`" id="`+paper_+`_label" >`+title+`:</label>
  <select class="col-1 select2" name="`+paper_+`" id="`+paper_+`" >
  <option value=""></option>
  </select>` ;

}

function paper_inner_parent__hidden (paper_ , title)
{
  document.getElementById("Location_1").innerHTML += `<div hidden><label for="`+paper_+`" id="`+paper_+`_label"  >`+title+`:</label>
  <select class="col-1 select2" name="`+paper_+`" id="`+paper_+`" >
  <option value=""></option>
  </select></div>` ;

}


function paper_inner_parent_1_func (paper_ , title , loc , COLS)
{
  document.getElementById(loc).innerHTML += `<label for="`+paper_+`">`+title+`:</label>
  <select class="${COLS} select2" name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select>` ;
}


function paper_inner_parent_1_func_hide (paper_ , title , loc , COLS)
{
  document.getElementById(loc).innerHTML += `<div hidden><label for="`+paper_+`">`+title+`:</label>
  <select class="${COLS} select2" name="`+paper_+`" id="`+paper_+`">
  <option value=""></option>
  </select></div>` ;
}



function quary_tables_all_status_groups_check(All_table_obj , func)
{
    var seached_rows = [];
    saved_group_arr = [];
    var saved_group_arr_col = [];
    var special_counter = 0;

    if(All_table_obj.tables[11] && All_table_obj.tables[11] !== undefined && All_table_obj.tables[11].length != 0){

        var saved_status_arr_row = [];
        for(var index = 0 ; index < All_table_obj.tables[11].length ; index ++)
        {
            saved_status_arr_row = [];
            saved_status_arr_row[0] = All_table_obj.tables[11][index].id;
            saved_status_arr_row[1] = All_table_obj.tables[11][index].name;
            saved_status_arr[index] = saved_status_arr_row;
        }
    }

    if(All_table_obj.tables[7] && All_table_obj.tables[7] !== undefined && All_table_obj.tables[7].length != 0)
    {
        for(var index = 0 ; index < All_table_obj.tables[7].length ; index ++)
        {
            var saved_age_arr_rows = []
            saved_age_arr_rows[0] = All_table_obj.tables[7][index].name;
            saved_age_arr_rows[1] = All_table_obj.tables[7][index].from_age;
            saved_age_arr_rows[2] = All_table_obj.tables[7][index].to_age;
            saved_age_arr[index] = saved_age_arr_rows;
        }
    }

    
    if(All_table_obj.tables[16] && All_table_obj.tables[16] !== undefined && All_table_obj.tables[16].length != 0)
    {
        for(var index__ = 0 ; index__ < All_table_obj.tables[16].length ; index__++)
        {
            saved_sessions_id_arr[index__] = All_table_obj.tables[16][index__];
        }
    }

    var count_check = 0;
    if(All_table_obj.tables[15] && All_table_obj.tables[15] !== undefined && All_table_obj.tables[15].length != 0)
    {
        for(var index___ = 0 ; index___ < All_table_obj.tables[15].length ; index___++)
        {
            saved_att_feed_id_arr[count_check] = All_table_obj.tables[15][index___];
            count_check++;
        }
    }

    


    if(All_table_obj.tables[8] && All_table_obj.tables[8] !== undefined && All_table_obj.tables[8].length != 0){
                                            
        for(var index_ = 0 ; index_ < All_table_obj.tables[8].length ; index_++)
        {
            var seached_cols = [];
            var counter = 0;
            saved_group_arr_col = [];
            seached_cols[counter] = All_table_obj.tables[8][index_].id;counter++;

            if(All_table_obj.tables[0] && All_table_obj.tables[0] !== undefined && All_table_obj.tables[0].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[0].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].slot_id == All_table_obj.tables[0][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[0][index].name;counter++
                        seached_cols[counter] = All_table_obj.tables[0][index].slot;counter++
                        break;
                    }
                }
            }

            if(All_table_obj.tables[1] && All_table_obj.tables[1] !== undefined && All_table_obj.tables[1].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[1].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].lan_id == All_table_obj.tables[1][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[1][index].name;counter++
                        break;
                    }
                }
            }
            if(All_table_obj.tables[2] && All_table_obj.tables[2] !== undefined && All_table_obj.tables[2].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[2].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].att_id == All_table_obj.tables[2][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[2][index].name;counter++
                        break;
                    }
                }
            }
            if(All_table_obj.tables[3] && All_table_obj.tables[3] !== undefined && All_table_obj.tables[3].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[3].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].level_id == All_table_obj.tables[3][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[3][index].name;counter++
                        break;
                    }
                }
            }
            if(All_table_obj.tables[4] && All_table_obj.tables[4] !== undefined && All_table_obj.tables[4].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[4].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].track_id == All_table_obj.tables[4][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[4][index].name;counter++
                        break;
                    }
                }
            }

            if(All_table_obj.tables[5] && All_table_obj.tables[5] !== undefined && All_table_obj.tables[5].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[5].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].type_id == All_table_obj.tables[5][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[5][index].name;counter++
                        break;
                    }
                }
            }
            if(All_table_obj.tables[6] && All_table_obj.tables[6] !== undefined && All_table_obj.tables[6].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[6].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].days_id == All_table_obj.tables[6][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[6][index].name;counter++
                        break;
                    }
                }
            }
            if(All_table_obj.tables[7] && All_table_obj.tables[7] !== undefined && All_table_obj.tables[7].length != 0){

                for(var index = 0 ; index < All_table_obj.tables[7].length ; index ++)
                {
                    if(All_table_obj.tables[8][index_].age_id == All_table_obj.tables[7][index].id)
                    {
                        seached_cols[counter] = All_table_obj.tables[7][index].name;counter++
                        break;
                    }
                }
            }



            
            var counter__ = 0;
            if(All_table_obj.tables[10] && All_table_obj.tables[10] !== undefined && All_table_obj.tables[10].length != 0)
            {
                for(var index = 0 ; index < All_table_obj.tables[10].length ; index++)
                {
                    if((All_table_obj.tables[8][index_].id == All_table_obj.tables[10][index].groups_id) && (All_table_obj.tables[10][index].status == "active"))
                    {
                        counter__++;
                    }
                }
            }
            var Session_counter = 0;
            for(var i = 0 ; i < saved_sessions_id_arr.length ; i++)
            {
                if(All_table_obj.tables[8][index_].id == saved_sessions_id_arr[i].groups_id)
                {
                    Session_counter++;
                }
            }

            saved_group_arr_col[0] = All_table_obj.tables[8][index_].id;
            saved_group_arr_col[1] = `${seached_cols[9]}-${seached_cols[5]}-`+All_table_obj.tables[8][index_].id+` | ${seached_cols[8]}-${seached_cols[2]} | ${seached_cols[7]}-${seached_cols[3]} | ${counter__}-St | ${Session_counter}-Se`;
            saved_group_arr_col[2] = seached_cols[9];
            

            saved_group_arr[special_counter] = [];
            if(counter__ < 6)
            {
             saved_group_arr[special_counter] = saved_group_arr_col;
             special_counter++;
            }
        }
    }
    if(All_table_obj.tables[13] && All_table_obj.tables[13] !== undefined && All_table_obj.tables[13].length != 0){
        for(var index__ = 0 ; index__ < All_table_obj.tables[13].length ; index__++)
        {
            var count_package = 0;
            var created_package = [];

            created_package[count_package] = All_table_obj.tables[13][index__].id;count_package++;
            created_package[count_package] = All_table_obj.tables[13][index__].name;count_package++;
            created_package[count_package] = All_table_obj.tables[13][index__].fees;count_package++;
            created_package[count_package] = All_table_obj.tables[13][index__].quota;count_package++;
            created_package[count_package] = All_table_obj.tables[13][index__].discount;count_package++;
            created_package[count_package] = All_table_obj.tables[13][index__].installments;count_package++;
            created_package[count_package] = All_table_obj.tables[13][index__].paid_as;count_package++;
            
            saved_package_arr[index__] = created_package;
        }
    }



}


function createTable_pop_up(All_data_obj , index_st) {



    var dataArray = All_data_obj.obj_data;
    // var index_st = All_data_obj.saved_index;
    
  if(dataArray && dataArray !== undefined && dataArray.length != 0){

    var result = "<table class='table' id='dtable'>"+
                 "<thead   style='white-space:wrap' >"+
                   "<tr>";                               //Change table headings to match witht he Google Sheet     
                   result +="<th scope='col'>Students Info </th>";
                   result +="<th scope='col'>Group Info </th>";
                   result +="<th scope='col'>Packages Info </th>";
                   result +="<th scope='col'>Invoices Info </th>";
                   result +="<th scope='col'>Sessions Info </th>";

              result += "</tr>"+
                        "</thead>";
                // for(var i=0; i<dataArray.length; i++) {

                if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-3][0].length)
                {

                    for(var index = 0 ; index < Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-3][0].length ; index++)
                    {
                        result += "<tr>";

                        result += "<td style='white-space:wrap' >";

                    result += `ID : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-3][0][index]; 
                    result += `<br> iSchool ID : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-3][1][index]; 
                    result += `<br>Name : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-3][4][index] ; 
                    result += `<br>Status : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-3][3][index]; 
                    result += `<br>Age Range : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-3][5][index]; 
                    result += `<br>Free Session : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-3][2][index] + `<br><hr class="hr-primary" style="width:100%;text-align:left;margin-left:0" /><br>`; 

                    result +="</td>"

                    result += "<td style='white-space:wrap' >";

                    if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][0][index] == undefined)
                    {
                        result += `<label style='color:red'><br><br>No Group Assigned</label>` ; 
                    }
                    else
                    {
                        result += `ID : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][0][index] ; 
                        result += `<br>Slot : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][1][index] ; 
                        result += `<br>Lang : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][2][index]; 
                        result += `<br>Attend : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][3][index]; 
                        result += `<br>Level : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][4][index]; 
                        result += `<br>Status : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][5][index]; 
                        result += `<br>Day : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][6][index];
                        result += `<br>Age Range : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][7][index] + `<br><hr class="hr-primary" style="width:100%;text-align:left;margin-left:0" /><br>`; 
                    }
                    result +="</td>"

                    result += "<td style='white-space:wrap' >";



                    if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index] && Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index] !== undefined && Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index].length != 0)
                    {
                        var count_pack = 1;
                        if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index].length)
                        {
                            for(var index_pac = 0 ; index_pac < Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index].length ; index_pac++)
                            {
                                if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac] && Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac] !== undefined && Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac].length != 0){

                                    result += `<label style='color:blue'>Package  ${count_pack} </label><br>ID :`+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][0] + `<br>`; 
                                    result += `Name : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][1] + `<br>`; 
                                    result += `Quota : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][2] + `<br>`; 
                                    result += `Fees : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][3] + `<br>`; 
                                    result += `Discount : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][4] + `<br>`; 
                                    result += `Paid As : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][5] + `<br><hr class="hr-primary" style="width:100%;text-align:left;margin-left:0" /><br>`; 
                                    count_pack++;
                                }
                            }
                        }
                    }
                    else
                    {
                        result += `<label style='color:red'><br><br>No Packages</label>` ; 
                    }

                    result += "<td style='white-space:wrap' >";


                    if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index] && Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index] !== undefined && Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index].length != 0)
                    {

                        var Total_t = 0;
                        var Total_t_inv = 0;
                        var Total_d = 0;
                        var Total_d_inv = 0;
                        var Total_w = 0;
                        var Total_w_inv = 0;
                        var Total_f = 0;
                        var Total_f_inv = 0;
                        var Total_ar = 0;
                        var Total_ar_inv = 0;

                        if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index].length)
                        {
                            for(var index_pac = 0 ; index_pac < Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index].length ; index_pac++)
                            {

                                    Total_t +=Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][7][0];
                                    Total_d +=Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][7][1];
                                    Total_w +=Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][7][2];
                                    Total_f +=Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][7][3];
                                    Total_ar +=Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][7][4];
                                

                                    for(var index_inv= 0 ; index_inv < Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6].length ; index_inv++)
                                    {

                                        Total_t_inv++;
                                        if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].status == 'done')
                                        Total_d_inv++;
                                        if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].status == 'waiting')
                                        Total_w_inv++;
                                    
                                        if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].status == 'refund')
                                        Total_f_inv++;

                                        if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].status == 'ar-refund')
                                        Total_ar_inv++;

                                    }
                                
                            }
                        }

                        result += `Total: ${Total_t} | Inv : ${Total_t_inv} <br> `;
                        result += `Done: ${Total_d} | Inv : ${Total_d_inv} <br> `;
                        result += `Waiting: ${Total_w} | Inv : ${Total_w_inv} <br> `;
                        result += `Refund: ${Total_f} | Inv : ${Total_f_inv} <br> `;
                        result += `AR-Refund: ${Total_ar} | Inv : ${Total_ar_inv} <br> `;
                        result += `<hr class="hr-primary" style="width:100%;text-align:left;margin-left:0" />`; 


                        for(var index_pac = 0 ; index_pac < Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index].length ; index_pac++)
                        {

                            if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac] && Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac] !== undefined && Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac].length != 0){

                                
                                for(var index_inv= 0 ; index_inv < Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6].length ; index_inv++)
                                { 
                                        result += `<label style='color:gray'>${index_inv+1}- ID: ${Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].id} |
                                        ${Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].due_date}  <br>
                                        S: `
                                        if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].status == 'done')
                                        result +=`<label style='color:green'>${Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].status} </label> `
                                       
                                        if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].status == 'waiting')
                                        result +=`<label style='color:blue'>${Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].status} </label> `
                                     
                                        if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].status == 'refund')
                                        result +=`<label style='color:red'>${Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].status} </label> `
 
                                        if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].status == 'ar-refund')
                                        result +=`<label style='color:orange'>${Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].status} </label> `
 
                                        
                                        result +=` |
                                        Q: ${Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].qouta}  | 
                                        P: ${Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-2][8][index][index_pac][6][index_inv].package_id}  </label><br>`; 

                                }
                            
                                result += `<hr class="hr-primary" style="width:100%;text-align:left;margin-left:0" />`; 
                            }
                        }
                    
                    }
                    else
                    {
                            result += `<label style='color:red'><br><br>No Invoices</label>` ; 
                    }

                    result +="</td>"

                    result += "<td style='white-space:wrap' >";
                    if(Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-1][index][0] )
                    {
                        result += `Created Sessions : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-1][index][0] ; 
                        result += `<br>Completed Sessions : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-1][index][1] ; 
                        result += `<br>Attend Sessions : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-1][index][2] ; 
                        result += `<br>Absent Sessions : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-1][index][3] ; 
                        result += `<br>Feedbacks : `+Object.values(dataArray[index_st])[Object.values(dataArray[index_st]).length-1][index][4] ; 
                    }
                    else
                    {
                        result += `<label style='color:red'><br><br>No Sessions</label>` ; 

                    }
     
                    

                    result +="</td>"
                    result += "</tr>";

                    }
                }
                
                  
            //   }
                 
    result += "</table>";
    var div = document.getElementById("search-results_1");
    div.innerHTML = result;

  }else{
    var div = document.getElementById("search-results_1");
    div.innerHTML = "Data not found!";
  }

}


function Nodata_func(All_data_obj) {


  clear(All_data_obj.location_next);


  var result = "<table class='table' id='dtable'>"+
  "<thead   style='white-space:wrap' >"+
    "<tr>";                               //Change table headings to match witht he Google Sheet
     
     for(var index = 0 ; index < All_data_obj.all_names.length ; index ++)
     {
     result +="<th scope='col'>"+All_data_obj.all_names[index]+"</th>";
     }
result += "</tr>"+
         "</thead>";
                  result += "<tr>";          
                  result += "<td colspan='"+All_data_obj.all_names.length+"' >No Data</td>";
                  result += "</tr>";
          
    result += "</table>";
    var div = document.getElementById(All_data_obj.table_div);
    div.innerHTML = result;
  }


function Add_Section(All_data_obj)
  {
      var values = "";
      values = `<div style='display:flex;justify-content:right;'><button id='add_user' class='btn btn-success' type='button' > Add New </button></div>`;
 


     document.getElementById(All_data_obj.location_1).innerHTML = create_values_once(All_data_obj)+values;
  
  
     $(document).ready(function () {

        $('#add_user').click(function () {
            Add_User(All_data_obj);
        });
      

    });


}



async function ADD_PARENT_SENRIO(paper_inputs)
{

    // document.getElementById("search-results").innerHTML = `<div class="loader" ></div>`;
    Loading_page_set();


    var data_to_send_arr_parent = [];
    var check_code = 0;
    var end_len = 0;

    if(localStorage.permission == 4)
    {
        end_len =  paper_inputs.length-2 ;
    }
    else
    {
        end_len = paper_inputs.length-2

    }

    for(var index = 0 ; index < paper_inputs.length ; index++)
    {
        data_to_send_arr_parent[index] = document.getElementById(paper_inputs[index]).value;
    }


    for(var index = 0 ; index < end_len ; index++)
    {
        if(data_to_send_arr_parent[index] == '')
        {
            alert('Parent Data Missing');
            Loading_page_clear();
            return;
        }
    }


    if(data_to_send_arr_parent[11] == '')
    {
        var get_all_parent_table = await GET_DATA_TABLES(database_fixed_link , 'parent')    
        if(get_all_parent_table && get_all_parent_table !== undefined &&get_all_parent_table.length != 0)
        {
            var check_agent = get_all_parent_table[get_all_parent_table.length-1].sales_agent_id;
            var check_confirm = false;

            if(document.getElementById('sales_input').options.length == 2)
            {
                data_to_send_arr_parent[11] = document.getElementById('sales_input').options[1].value;
            }
            else
            {
                Object.values(document.getElementById('sales_input').options).forEach(element => {

                    if(check_confirm == true)
                    {
                        check_confirm = false;
                        if(element.value)
                        {
                            data_to_send_arr_parent[11] = element.value;
                           
                        }
                        else
                        {
                            data_to_send_arr_parent[11] = document.getElementById('sales_input').options[1].value;
                            
                        }
                    }
                    if((element.value == check_agent ||  Number(check_agent) == 0) && check_confirm == false)
                    {    
                        check_confirm = true;
                    }
                })
                if(check_confirm == true)
                {
                    data_to_send_arr_parent[11] = document.getElementById('sales_input').options[1].value;
                }
            }



        }
    }
    if(data_to_send_arr_parent[10] == '')
    {
        var get_all_parent_table = await GET_DATA_TABLES(database_fixed_link , 'parent')    
        if(get_all_parent_table && get_all_parent_table !== undefined &&get_all_parent_table.length != 0)
        {
            var check_agent = get_all_parent_table[get_all_parent_table.length-1].customer_agent_id;
            var check_confirm = false;

            if(document.getElementById('customer_input').options.length == 2)
            {
                data_to_send_arr_parent[10] = document.getElementById('customer_input').options[1].value;
            }
            else
            {
                Object.values(document.getElementById('customer_input').options).forEach(element => {

                    if(check_confirm == true)
                    {
                        check_confirm = false;

                        if(element.value)
                        {
                            data_to_send_arr_parent[10] = element.value;
                           
                        }
                        else
                        {
                            data_to_send_arr_parent[10] = document.getElementById('customer_input').options[1].value;
                            
                        }
                    }
                    if((element.value == check_agent||  Number(check_agent) == 0) && check_confirm == false)
                    {

                        check_confirm = true;
                    }
                })

                if(check_confirm == true)
                {
                    data_to_send_arr_parent[10] = document.getElementById('customer_input').options[1].value;
                }
            }

        }
    }


    if(localStorage.permission == 2) // sales
    {
        data_to_send_arr_parent[11] = localStorage.userid
    }
    if (localStorage.permission == 3)
    {
        data_to_send_arr_parent[10] = localStorage.userid
    }

    data_to_send_arr_parent[12] = document.getElementById('email_input').value;

    data_to_send_arr_parent[13] = document.getElementById('phone_input').value;

    if(st_ids == 0)
    {   
        alert('No Student Added')
        Loading_page_clear();
        return;
    }

    for(var index = 0 ; index < st_ids ; index ++)
    {            
        if(document.getElementById('student_id'+index).value == ''){alert(`Student ${(index +1)} Student ID Missing`);Loading_page_clear();return;}
        if(document.getElementById('name_id'+index).value == ''){alert(`Student ${(index +1)} Student Name Missing`);Loading_page_clear();return;}
        if(document.getElementById('bd_id'+index).value == ''){alert(`Student ${(index +1)} Birthdate Missing`);Loading_page_clear();return;}
        // if(document.getElementById('status_id'+index).value == ''){alert(`Student ${(index +1)} data Missing`);Loading_page_clear();return;}

        if(document.getElementById('Packages_id_input'+index).value != ''){
            if(document.getElementById('package_data_'+index).value == ''){alert(`Student ${(index +1)} Package Date Missing`);Loading_page_clear();return;}
        }

        // if(document.getElementById('groups_id_input'+index).value == ''){alert(`Student ${(index +1)} data Missing`);Loading_page_clear();return;}
    }
    
    var get_add_data_var_parent = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'parent' ,     
    [
    "name" 
    , "phone" 
    , "email" 
    , "name_2" 
    , "phone_2" 
    , "email_2" 
    , "address" 
    , "location" 
    , "job" 
    , "marketing_id" 
    , "customer_agent_id" 
    , "sales_agent_id" 
    , "username" 
    , "password" 
     ]
      , data_to_send_arr_parent);

      var get_data_var = await GET_DATA_TABLES(database_fixed_link , 'parent');

      var save_last_parent_id = get_data_var[get_data_var.length-1].id;

    for(var index = 0 ; index < st_ids ; index ++)
    {
        var data_to_send_arr_student = [];
        var counter = 0 ;

        var kid_age =  (new Date()).getFullYear() - new Date($("#bd_id"+index).val()).getFullYear() 
        var age_req = '';
        if(kid_age < 20)
        {
            saved_age_arr.forEach(elment =>{
                if(kid_age >= Number(elment[1]) && kid_age <=  Number(elment[2]))
                {
                    age_req = elment[0];
                }
            })

        }

        data_to_send_arr_student[counter] = document.getElementById('student_id'+index).value;counter++;
        data_to_send_arr_student[counter] = save_last_parent_id;counter++;
        data_to_send_arr_student[counter] = document.getElementById('free_id'+index).value;counter++
        data_to_send_arr_student[counter] = document.getElementById('status_id'+index).value;counter++
        data_to_send_arr_student[counter] = document.getElementById('name_id'+index).value;counter++
        data_to_send_arr_student[counter] = age_req;counter++
        data_to_send_arr_student[counter] = document.getElementById('bd_id'+index).value;




    var get_add_data_var_std = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'students' ,     
    ["std_id" 
    , "parent_id" 
    , "free_session_status" 
    , "std_status" 
    , "name" 
    , "age" 
    , "birthdate" 
     ]
        , data_to_send_arr_student);


      var get_data_var = await GET_DATA_TABLES(database_fixed_link , 'students');

      var save_last_student_id = get_data_var[get_data_var.length-1].id;


      if(document.getElementById('groups_id_input'+index).value)
      {
        var get_add_data_var_std = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'student_groups' ,     
        ["groups_id" 
        , "student_id" 
        , "status" 
         ]
            , [ document.getElementById('groups_id_input'+index).value , save_last_student_id ,  'active']);


      }


      if(document.getElementById('Packages_id_input'+index).value)
      {
            var get_add_data_var_std = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'student_package' ,     
            ["student_id" 
            , "package_id" 
            ]
                , [  save_last_student_id , document.getElementById('Packages_id_input'+index).value]);
        

            var get_student_pac_arr = await GET_DATA_TABLES(database_fixed_link , 'student_package' )

        var counter_loop = 0;
        saved_package_arr.forEach((element) => {
            if(element[0] == document.getElementById('Packages_id_input'+index).value)
            {
                counter_loop= Number(element[5]);
            }
        })

        const saved_date = new Date(document.getElementById('package_data_'+index).value) ;

        for(var index_ = 0 ; index_ < counter_loop ; index_++)
        {

            var data_invoice = [];
            var counter_inv = 0;
            data_invoice[counter_inv] =  save_last_student_id; counter_inv++;

        saved_package_arr.forEach((element) => {
            if(element[0] == document.getElementById('Packages_id_input'+index).value)
            {
                data_invoice[counter_inv] =  element[2]; counter_inv++;
                data_invoice[counter_inv] =  element[6]; counter_inv++;
            }
        })

        if(index_ == 0)
        {
            data_invoice[counter_inv] =  'done'; counter_inv++;
        }
        else
        {
            data_invoice[counter_inv] =  'waiting'; counter_inv++;
        }


        data_invoice[counter_inv] =  getFormattedDate(saved_date);counter_inv++;

        

        if(index_ == 0)
        {
        data_invoice[counter_inv] =  getFormattedDate(saved_date);counter_inv++;
        }
        else
        {
            data_invoice[counter_inv] = '';counter_inv++;
        }

        saved_date.setUTCDate(saved_date.getUTCDate() + 30);

        data_invoice[counter_inv] =  0;counter_inv++;
        data_invoice[counter_inv] =  '';counter_inv++;
        data_invoice[counter_inv] =  get_student_pac_arr[get_student_pac_arr.length-1].id;counter_inv++;

        saved_package_arr.forEach((element) => {
            if(element[0] == document.getElementById('Packages_id_input'+index).value)
            {
                data_invoice[counter_inv] =  (Number(element[3]) / Number(element[5])); counter_inv++;
            }
        })
        data_invoice[counter_inv] =  0;counter_inv++;

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
            , data_invoice);

        }
    }

        if(document.getElementById('groups_id_input'+index).value)
        {

        if( Number((new Date()).getFullYear()) - Number((new Date(document.getElementById('bd_id'+index).value)).getFullYear()) < 6  )
        {
            alert("Parent Added - Student Added - Package Added - Group Failed - Student too young");
            ADD_NEW_PARENT();
            return;
        }


        var saved_data_att = [];
        var ineer_index = 0;
        saved_group_arr.forEach((element) => {

            if(element[0] == document.getElementById('groups_id_input'+index).value)
            {
                saved_sessions_id_arr.forEach((element_) => {
                    if(element[0] == element_.groups_id)
                    {
                        var data_arr_to = [];
                        var counnt = 0;
                        data_arr_to[counnt] = save_last_student_id;counnt++;
                        data_arr_to[counnt] = element_.id;counnt++;
                        data_arr_to[counnt] = '';counnt++;
                        data_arr_to[counnt] = '';
                        saved_data_att[ineer_index] = data_arr_to;ineer_index++;
                    }
                })
            }


        })

        for(var i = 0 ; i < saved_data_att.length ; i++)
        {
            var get_add_data_var_std = await ADD_DATA_TABLES_ONE_COL(database_fixed_link , 'att_feed' ,     
            ["student_id" 
            , "session_id" 
            , "attendance" 
            , "feedback" 
    
            ]
                , saved_data_att[i]);
        }
        }
    }

    alert("Send Success");
    ADD_NEW_PARENT();

}



function assigned_agent_parent_page(arr_data )
{

    var search_for = '';
    if(localStorage.permission == 4 || localStorage.permission == 7)
    {
        search_for = $("#assign_select_search").val();
        if(search_for == '' || search_for == undefined)
        {
            return arr_data;
        }

    }
    else
    {
        search_for = localStorage.agentname;
    }

    return Search_for_value(arr_data , search_for);
}


async function employee_drop_down_search( location_)
{
    if(localStorage.permission == 4)
    {
        var arr_emp = await GET_DATA_TABLES(database_fixed_link , 'employee');

        var result = '';
    
    
        result += `<label>Assigned : </label><select class='select2' id='assign_select_search'  > `;
    
        result += `<option value=''>  </option>`
    
        for(var index =0 ; index < Object.values(arr_emp).length ; index++)
        {
            result+= `<option value='${arr_emp[index].name}'> ${arr_emp[index].name} </option>`
        }
        result += ` </select>`;
    
        document.getElementById(location_).innerHTML += result;

        $('.select2').select2();

    }




}


function Loading_page_set()
{
    modal_1.style.display = "block";
    document.getElementById("loading_location").innerHTML = `<div class="loader_1" ></div>`;

}

function Loading_page_clear()
{
    modal_1.style.display = "none";
}

function get_next_prev_parent(All_table_obj,func)
{
    var saved_arr = All_table_obj.tables[4];
    
    if(localStorage.permission != 4 && localStorage.permission != 7)
    {
        All_table_obj.tables[4] = [];
        var counter_new = 0;

        for(var index = 0 ; index < saved_arr.length ; index++)
        {
            if(localStorage.userid == saved_arr[index].customer_agent_id || localStorage.userid == saved_arr[index].sales_agent_id)
            {
                All_table_obj.tables[4][counter_new] = saved_arr[index];counter_new++;
    
            }
        }

    }

    if(document.getElementById("search_all").value)
    {
        All_table_obj.tables[4] = Search_for_value_same(All_table_obj.tables[4] , document.getElementById("search_all").value);
    }
    
    next_Section_custom(All_table_obj.tables[4]);
   $('#Location_3').hide();
    document.getElementById('Location_5').innerHTML = `<label>`+Math.ceil((start_index_num+1)/10)+" - "+Math.ceil(All_table_obj.tables[4].length/10)+` </label>`;

    $('#counter_id').val(All_table_obj.tables[4].length)

    $('#btn_next').empty();
    $('#btn_next').text('Next');

    $('#btn_prev').empty();
    $('#btn_prev').text('Previous');

    $('#page_index_cust').empty();



    

    $('#page_index_cust').change(function()
    {
        var get_data_ = ($('#page_index_cust').val() * 10 )-10;

        if(get_data_ < 0)
        {
            return;
        }
        if(All_table_obj.tables[4].length > get_data_ )
        {
            start_index_num = get_data_;
            quary_tables_all__student(All_table_obj , func);

        }

        
    })


    if(All_table_obj.tables[4].length - start_index_num > 10)
    {
        $('#btn_next').click(function()
        {
            start_index_num+=10;
    
            quary_tables_all__student(All_table_obj , func);
            
        })
    }

    if(start_index_num == 0)
    {

    }
    else
    {
        $('#btn_prev').click(function()
        {
            start_index_num-=10;
    
            quary_tables_all__student(All_table_obj , func);
            
        })
    }

}