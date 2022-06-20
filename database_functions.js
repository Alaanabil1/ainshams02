
//------------------------------------------------------------
//------------------------------------------------------------
//---------------------Database -------------------------
//------------------------------------------------------------


function get_all_data_from_database(All_data_obj)
{
    $.ajax({
        url: All_data_obj.Database_link,
        type: "post",
        data: {
                status: 'Getall' ,
                table: All_data_obj.table_
              } ,
        success: function (response) {
            All_data_obj.obj = jQuery.parseJSON( response );
            All_data_obj.callbackfunc(All_data_obj);
        },
        error: function(jqXHR, textStatus, errorThrown) {
           console.log(textStatus, errorThrown);
        }
    });
}


async function get_all_data_from_database_doAjax_arr(arr_data , index_pos ,  func_quary ,  func , All_table_obj , All_req_obj , paper_inputs , arr_data_)
{
    const stuff = await get_all_data_from_database_doAjax(arr_data);

    All_table_obj.tables[arr_data.index] = jQuery.parseJSON(stuff);
  
    counter__[index_pos]--;

    if(counter__[index_pos] == 0)
    {

        func_quary(All_table_obj , func , All_req_obj , arr_data_ , paper_inputs);

    }
}

function get_one_data_from_database(All_data_obj)
{

      $.ajax({
        url: All_data_obj.Database_link,
        type: "post",
        data: {
                status: 'Getoneuser' ,
                table: All_data_obj.table_  ,
                index_counter: Number(All_data_obj.index_num)
              } ,
        success: function (response) {
            All_data_obj.obj = jQuery.parseJSON( response );
            All_data_obj.callbackfunc(All_data_obj);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown);
        }
      });
}

function update_one_data_from_database(All_data_obj , COL_DATA)
{
  $.ajax({
    url: All_data_obj.Database_link,
    type: "post",
    data: {
            status: 'Update' ,
            table: All_data_obj.table_ ,
            index_counter:All_data_obj.index_num ,
            cols_data: COL_DATA

          } ,
    success: function (response) {
      All_data_obj.callbackfunc(All_data_obj , response);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });
}

function add_one_data_from_database(All_data_obj, all_elements_value )
{

  var results = database_col_parse_add(All_data_obj.inputs_col_);

  var arr = {input1 : Todate(new Date())[0]};
  for(var index = 0 ; index < all_elements_value.length; index++)
  {
    arr["input"+(index+2)] = all_elements_value[index]
  }


  $.ajax({
    url: All_data_obj.Database_link,
    type: "post",
    data: {
            status: 'Add' ,
            table: All_data_obj.table_ ,
            cols: results,
            cols_data: arr
                          
          } ,
    success: function (response) {
      All_data_obj.callbackfunc(All_data_obj , response);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });

}


function delete_one_data_from_database(All_data_obj , response )
{
  $.ajax({
    url: All_data_obj.Database_link,
    type: "post",
    data: {
              status: 'Delete' ,
              table: All_data_obj.table_ ,
              index_counter:All_data_obj.index_num
          } ,
    success: function (response) {
      All_data_obj.callbackfunc(All_data_obj);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });
}









