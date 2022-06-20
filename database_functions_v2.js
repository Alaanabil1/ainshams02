
//------------------------------------------------------------
//------------------------------------------------------------
//---------------------Database -------------------------
//------------------------------------------------------------


async function get_full_join_data(All_data_obj)
{
  let result;
  try {
    result = await $.ajax({
    url: All_data_obj.Database_link,
    type: "post",
    data: {
            status: 'GetJoin' ,
          }
        });
      return result;
    }
    catch (error)
    {
      console.error(error);
    }

}




async function get_all_data_from_database_doAjax(All_data_obj)
{
  let result;
  try {
    result = await $.ajax({
    url: All_data_obj.Database_link,
    type: "post",
    data: {
            status: 'Getall' ,
            table: All_data_obj.table_
          }
        });
      return result;
    }
    catch (error)
    {
      console.error(error);
    }

}

async function get_one_data_from_database_doAjax(All_data_obj)
{
  let result;
  try {
    result = await $.ajax({
      url: All_data_obj.Database_link,
      type: "post",
      data: {
              status: 'Getoneuser' ,
              table: All_data_obj.table_  ,
              index_counter: Number(All_data_obj.index_num)
            } 
    });
      return result;
    }
    catch (error)
    {
      console.error(error);
    }
}

async function update_one_data_from_database_doAjax(All_data_obj , COL_DATA)
{
  let result;
  try {
    result = await $.ajax({
      url: All_data_obj.Database_link,
      type: "post",
      data: {
              status: 'Update' ,
              table: All_data_obj.table_ ,
              index_counter:All_data_obj.index_num ,
              cols_data: COL_DATA
            } 
    });
      return result;
    }
    catch (error)
    {
      console.error(error);
    }
}


async function delete_one_data_from_database_doAjax(All_data_obj )
{
  let result;
  try {
    result = await $.ajax({
      url: All_data_obj.Database_link,
      type: "post",
      data: {
                status: 'Delete' ,
                table: All_data_obj.table_ ,
                index_counter:All_data_obj.index_num
            }
    });
      return result;
    }
    catch (error)
    {
      console.error(error);
    }
}


async function add_one_data_from_database_doAjax(All_data_obj , all_elements_value )
{
  var Cols_names = database_col_parse_add(All_data_obj.inputs_col_);

  var arr = {input1 : Todate(new Date())[0]};
  for(var index = 0 ; index < all_elements_value.length; index++)
  {
    arr["input"+(index+2)] = all_elements_value[index]
  }

  let result;
  try {
    result = await   $.ajax({
      url: All_data_obj.Database_link,
      type: "post",
      data: {
              status: 'Add' ,
              table: All_data_obj.table_ ,
              cols: Cols_names,
              cols_data: arr
                            
            }
    });
      return result;
    }
    catch (error)
    {
      console.error(error);
    }
}


async function add_one_data_from_database_doAjax_for_delete(All_data_obj , all_elements_value )
{
  var Cols_names = database_col_parse_add_delete(All_data_obj.inputs_col_);

  var arr = {};
  for(var index = 0 ; index < all_elements_value.length; index++)
  {
    arr["input"+(index+1)] = all_elements_value[index]
  }

  let result;
  try {
    result = await   $.ajax({
      url: All_data_obj.Database_link,
      type: "post",
      data: {
              status: 'Add' ,
              table: All_data_obj.table_ ,
              cols: Cols_names,
              cols_data: arr
                            
            }
    });
      return result;
    }
    catch (error)
    {
      console.error(error);
    }
}






