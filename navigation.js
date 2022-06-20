
function users()
{
  Loading_page_set();
    var Saved_data = [];
    var Database_link = database_fixed_link

    var inputs_col = 
    [
      "name" 
      , "phone" 
      , "email" 
      , "type" 
      , "username" 
      , "password_value" 
      , "role_id" 
  ];

    var inputs_names_inputs = 
    [
      "name" 
      , "phone" 
      , "email" 
      , "type" 
      , "username" 
      , "password_value" 
      , "role_id" 

  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp",
    "name" 
    , "phone" 
    , "email" 
    , "type" 
    , "username" 
    , "password_value" 
    , "role_id" 
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["name missing" 
  ];

    var search_ids = 
    ["Search1" 
    , "Search2" 
    , "Search3" 
    , "Search4" 
  ];

    var called_table = 'users';

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
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function role()
{
  Loading_page_set();
    var Saved_data = [];
    var Database_link = database_fixed_link

    var inputs_col = 
    [
      "permission" 

  ];

    var inputs_names_inputs = 
    [
      "permission" 


  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp",
    "permission" 
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["permission missing" 
  ];

    var search_ids = 
    ["Search1" 
    , "Search2" 
    , "Search3" 
    , "Search4" 
  ];

    var called_table = 'role';

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
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function order_status()
{
  Loading_page_set();
    var Saved_data = [];
    var Database_link = database_fixed_link

    var inputs_col = 
    [
      "name" 

  ];

    var inputs_names_inputs = 
    [
      "name" 


  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp",
    "name" 
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["name missing" 
  ];

    var search_ids = 
    ["Search1" 
    , "Search2" 
    , "Search3" 
    , "Search4" 
  ];

    var called_table = 'order_status';

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
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function orders()
{
  Loading_page_set();
    var Saved_data = [];
    var Database_link = database_fixed_link

    var inputs_col = 
    [
      "users_id",
      "order_status_id"
      ,"comment"
      ,"delivery"
      ,"address"
      

  ];

    var inputs_names_inputs = 
    [
      "users_id",
      "order_status_id"
      ,"comment"
      ,"delivery"
      ,"address"
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp",
    "users_id",
    "order_status_id"
    ,"comment"
    ,"delivery"
    ,"address"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["users_id missing" 
  ];

    var search_ids = 
    ["Search1" 
    , "Search2" 
    , "Search3" 
    , "Search4" 
  ];

    var called_table = 'orders';

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
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function invoice()
{
  Loading_page_set();
    var Saved_data = [];
    var Database_link = database_fixed_link

    var inputs_col = 
    [
      "fees",
      "paid",
      "discount",
      "remain",
      "shipping",
      "gateway",
      "status",
      "order_id",


  ];

    var inputs_names_inputs = 
    [
      "fees",
      "paid",
      "discount",
      "remain",
      "shipping",
      "gateway",
      "status",
      "order_id",
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp",
    "fees",
    "paid",
    "discount",
    "remain",
    "shipping",
    "gateway",
    "status",
    "order_id"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["users_id missing" 
  ];

    var search_ids = 
    ["Search1" 
    , "Search2" 
    , "Search3" 
    , "Search4" 
  ];

    var called_table = 'invoice';

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
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}

function sub_orders()
{
  Loading_page_set();
    var Saved_data = [];
    var Database_link = database_fixed_link

    var inputs_col = 
    [
      "category",
      "order_id",
      "order_id_status",
      "size",
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
      "comment"
  ];

    var inputs_names_inputs = 
    [
      "category",
      "order_id",
      "order_id_status",
      "size",
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
      "comment"
  ];

    var inputs_names_search = 
    ["ID"
    ,"Timestamp",
    "category",
    "order_id",
    "order_id_status",
    "size",
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
    "total_price"
    ,"printingtype",
    "other_weight",
    "comment"
    ,"Edit" 
    ,"Delete"
  ];
    
    var inputs_check = 
    ["users_id missing" 
  ];

    var search_ids = 
    ["Search1" 
    , "Search2" 
    , "Search3" 
    , "Search4" 
  ];

    var called_table = 'sub_orders';

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
  All_data_obj.search_data = search_ids;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.table_ = called_table;
  All_data_obj.btn_index = 'btn_index';
  All_data_obj.edit_index = [];
  All_data_obj.delete_index = [];
  All_data_obj.index_num_value = [];
  All_data_obj.inputs_col_ = inputs_col;
  All_data_obj.inputs_names_inputs_ = inputs_names_inputs;
  All_data_obj.inputs_check_ = inputs_check;
  All_data_obj.Database_link = Database_link;
  All_data_obj.page_name = "Clients";
  All_data_obj.page_name_id = "page_name";
  All_data_obj.callbackfunc;
  All_data_obj.obj;

  Fetch_all_data(All_data_obj);
  Add_Section(All_data_obj);
}