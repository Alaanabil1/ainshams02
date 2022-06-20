async function GET_DATA_TABLES(Database_link , Table_name)
{
    const All_req_obj = {};
    All_req_obj.Database_link = Database_link;
    All_req_obj.table_ =  Table_name;

    var result = await get_all_data_from_database_doAjax(All_req_obj);

    return JSON.parse(result);

}

async function GET_DATA_TABLES_FULL_JOIN(Database_link )
{
    const All_req_obj = {};
    All_req_obj.Database_link = Database_link;

    var result = await get_full_join_data(All_req_obj);

    return JSON.parse(result);
    // return result;

}

async function GET_DATA_TABLES_ONE_COL(Database_link , Table_name , Col_num)
{

    const All_req_obj = {};
    All_req_obj.Database_link = Database_link;
    All_req_obj.table_ =  Table_name;
    All_req_obj.index_num = Col_num;
    var result = await get_one_data_from_database_doAjax(All_req_obj);
    return JSON.parse(result);
    
}

async function UPDATE_DATA_TABLES_ONE_COL(Database_link , Table_name , Col_num , COL_DATA )
{

    const All_req_obj = {};
    All_req_obj.Database_link = Database_link;
    All_req_obj.table_ =  Table_name;
    All_req_obj.index_num = Col_num;
    var result = await update_one_data_from_database_doAjax(All_req_obj , COL_DATA);

    return result;
            
}

async function DELETE_DATA_TABLES_ONE_COL(Database_link , Table_name , Col_num )
{

    const All_req_obj = {};
    All_req_obj.Database_link = Database_link;
    All_req_obj.table_ =  Table_name;
    All_req_obj.index_num = Col_num;
    var result = await delete_one_data_from_database_doAjax(All_req_obj );

    return result;
            
}

async function ADD_DATA_TABLES_ONE_COL(Database_link , Table_name , Table_Col , Table_data )
{

    const All_req_obj = {};
    All_req_obj.Database_link = Database_link;
    All_req_obj.table_ =  Table_name;
    All_req_obj.inputs_col_ = Table_Col;
    var result = await add_one_data_from_database_doAjax(All_req_obj , Table_data);

    return result;
            
}

async function ADD_DATA_TABLES_ONE_COL_FOR_DELETE(Database_link , Table_name , Table_Col , Table_data )
{

    Table_data[0] = Number(Table_data[0]);

    const All_req_obj = {};
    All_req_obj.Database_link = Database_link;
    All_req_obj.table_ =  Table_name;
    All_req_obj.inputs_col_ = Table_Col;
    var result = await add_one_data_from_database_doAjax_for_delete(All_req_obj , Table_data);

    return result;
            
}