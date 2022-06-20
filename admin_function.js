



//------------------------------------------------------------
//------------------------------------------------------------
//---------------------Admin -------------------------
//------------------------------------------------------------

let counter__ = [];

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')

// function alert(message, type) {
//   $("#liveAlertPlaceholder").fadeIn("fast");

//   var wrapper = document.createElement('div')
//   wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

//   alertPlaceholder.append(wrapper)

//   setTimeout(() => {
//     alertPlaceholder.innerHTML = '';
//   }, 15000);


// }



function create_values_once(All_data_obj)
{


  var all_value = `<div class="row search_adjust">`

      for(var index = 0 ; index < All_data_obj.inputs_col_.length ; index++)
      {
          all_value +=`<div class="col"><div class="form-floating mb-3 search_adjust">
            <input type="text" class="form-control"  placeholder="`+All_data_obj.inputs_col_[index]+`" id=`+All_data_obj.inputs_col_[index]+`>
            <label for=`+All_data_obj.inputs_col_[index]+`>`+All_data_obj.inputs_names_inputs_[index]+`</label>
          </div></div>`
          
      }
      all_value += `</div>`;

      return all_value;
}


function next_Section(location)
{
    var values = "";
    values = `<div class='col justify-content-start'><button  class='btn btn-success ' id = 'btn1' > Pervious </button></div>
    <div class='col-1 justify-content-center' style='display:flex;flex-direction:column;text-align:center;'><span style="margin:5px" ></span>
    <input type='number' id='page_index' /><div id='Location_4'></div></div>
    
    <div class='col justify-content-end' style='justify-content:right !important;'><button class='btn btn-success' style='float:right;' id='btn2'> Next </button></div>`;

    document.getElementById(location).innerHTML = values;

}


function next_Section_custom()
{
    var values = "";
    values = `<div class='col justify-content-start'><button  class='btn btn-success ' id = 'btn_prev' > Pervious </button></div>
    <div class='col-1 justify-content-center' style='display:flex;flex-direction:column;text-align:center;'><span style="margin:5px" ></span>
    <input type='number' id='page_index_cust' /><div id='Location_5'></div></div>
    
    <div class='col justify-content-end' style='justify-content:right !important;'><button class='btn btn-success' style='float:right;' id='btn_next'> Next </button></div>`;

    document.getElementById('Location_6').innerHTML = values;
       $('#Location_3').hide();

}


function clear(location)
{
    document.getElementById(location).innerHTML = "";
}

let get_ids = [];


function createTable(dataArray ,All_data_obj , Clear_btn , table_rows , table_cols , Create_btn , func_callback , deduct_num , ret_manual) {
  
  var end_of_arr = 0;

  // All_data_obj.obj_data = [];

  
    clear(All_data_obj.location_next);
    next_Section(All_data_obj.location_next);



  if(dataArray && dataArray !== undefined && dataArray.length != 0){

    All_data_obj.edit_index = [];
    All_data_obj.delete_index = [];
    All_data_obj.index_num_value = [];

    if(All_data_obj.Start_Index > dataArray.length)
    {
        var div = document.getElementById(All_data_obj.table_div);
        div.innerHTML = '';
        clear(All_data_obj.location_next);
        return;
    }
    var End_Index = 0;
    if( (dataArray.length - All_data_obj.Start_Index ) >= 10)
    {
        End_Index = All_data_obj.Start_Index + 9;
    }
    else{
        End_Index = dataArray.length;
    }

    

    document.getElementById(All_data_obj.location_index).innerHTML = `<label>`+Math.ceil(All_data_obj.Start_Index/10)+" - "+Math.ceil(dataArray.length/10)+` </label>`;

    var result = "<table class='table' id='dtable'>"+
                 "<thead   style='white-space:wrap' >"+
                   "<tr>";                               //Change table headings to match witht he Google Sheet
                    
                   if(table_cols == null)
                   {
                    for(var index = 0 ; index < All_data_obj.all_names.length ; index ++)
                    {
                    result +="<th scope='col'>"+All_data_obj.all_names[index]+"</th>";
                    }
                  }
                  else{
                    for(var index = 0 ; index < table_cols ; index ++)
                    {
                    result +="<th scope='col'>Block "+(index+1)+"</th>";
                    }
                  }


              result += "</tr>"+
                        "</thead>";
                var counter = 0;
                
              if(table_rows == null)
              {

                for(var i=(All_data_obj.Start_Index-1); i<End_Index; i++) {
                  result += "<tr>";
                  counter = i;
                  if(deduct_num == null)
                  {
                    end_of_arr = Object.values(dataArray[i]).length ;
                  }
                  else
                  {
                    end_of_arr = deduct_num;
                  }
                  
                  for(var index = 0 ; index < end_of_arr  ; index++)
                  {
                    result += "<td style='white-space:wrap' >";
                    result += Object.values(dataArray[i])[index]; 
                    result +="</td>"
                  }

                  if(Clear_btn == null)
                  {
                  result += `<td><button id='btn_get_`+i+`' class='btn btn-light'  > <i class="fas fa-edit"></i> </button></td>`;
                  result += `<td><button id='btn_del_`+i+`' class='btn btn-danger' > <i class="fas fa-trash-alt"></i> </button></td>`;                  
                  }
                  if(Create_btn == "open")
                  {
                    result += `<td><button id='view_more_`+i+`' class='btn btn-danger' > <i class="fa-solid fa-eye"></i> </button></td>`;   
                    All_data_obj.view_index[i] = 'view_more_'+i;
                    All_data_obj.obj_data[i] = Object.values(dataArray[i]);                                  
                  }
                  else if (Create_btn == "open 2")
                  {

                  }
                  result += "</tr>";
  
                  All_data_obj.index_num_value[i] =  Object.values(dataArray[i])[0];
                  All_data_obj.edit_index[i] = 'btn_get_'+i;
                  All_data_obj.delete_index[i] = 'btn_del_'+i;
                  
              }
  
             }
             else{
              for(var i=(All_data_obj.Start_Index-1); i<End_Index; i++) {
                result += "<tr>";
                counter = i;
                result += "<td style='white-space:wrap' >"+ Object.values(dataArray[i])[0]+" </td>";

                if(deduct_num == null)
                {
                  end_of_arr = Object.values(dataArray[i]).length ;
                }
                else
                {
                  end_of_arr = deduct_num;
                }

                  for(var index = 1 ; index < end_of_arr ; index+=table_rows)
                  {

                    result += "<td style='white-space:wrap' >";
                    for(var index_ = 0 ; index_ < table_rows ; index_++)
                    {


                      if(index+index_ >= end_of_arr)
                      {
                        break;
                      }
                      if(All_data_obj.all_names[index+index_])
                      {
                        result += All_data_obj.all_names[index+index_];
                      }
                      result += Object.values(dataArray[i])[index+index_]+"<br>"; 
                      

                    }

                    result +="</td>"
                  }
                if(Clear_btn == null)
                {
                result += `<td><button id='btn_get_`+i+`' class='btn btn-light'  > <i class="fas fa-edit"></i> </button></td>`;
                result += `<td><button id='btn_del_`+i+`' class='btn btn-danger' > <i class="fas fa-trash-alt"></i> </button></td>`;                  
                }
                if(Create_btn == "open")
                {
                  if(Object.values(dataArray[i])[13] == '0 Student/s')
                  {
                    result += `<td><button id='view_more_`+i+`' class='btn btn-danger' hidden > <i class="fa-solid fa-eye"></i> </button></td>`;  

                  }
                  else
                  {
                    result += `<td><button id='view_more_`+i+`' class='btn btn-danger' > <i class="fa-solid fa-eye"></i> </button></td>`;  
                  }
                  All_data_obj.view_index[i] = 'view_more_'+i;  
                  All_data_obj.obj_data[i] = Object.values(dataArray[i]);


              
                }
                else if(Create_btn == "open 2")
                {

                  result += `<td><button id='view_more_`+i+`' class='btn btn-danger' > <i class="fa-solid fa-eye"></i> </button> `;  
                  result += `  <button id='view_more_2`+i+`' class='btn btn-danger' style='display:none' > <i class="fa-solid fa-list-check"></i> </button></td>`;  
                  All_data_obj.view_index[i] = 'view_more_'+i;  
                  All_data_obj.obj_data[i] = Object.values(dataArray[i]);

                }
                result += "</tr>";

                All_data_obj.index_num_value[i] = dataArray[i].id;
                All_data_obj.edit_index[i] = 'btn_get_'+i;
                All_data_obj.delete_index[i] = 'btn_del_'+i;
                
              }
             }

             

    
    result += "</table>";
    var div = document.getElementById(All_data_obj.table_div);
    div.innerHTML = result;

    if(func_callback)
    {
      func_callback(All_data_obj , End_Index , ret_manual);
    }

    $(document).ready(function () {
      var counter_index = 0;
        for(var index = 0 ; index < All_data_obj.index_num_value.length ; index++)
        {
            $('#btn_get_'+index).click(function (index) {  

                Get_one_user( All_data_obj , this.id);
            });

            $('#btn_del_'+index).click(function () {
              if (confirm("You want to delete!") == true) {

              Delete_User( All_data_obj , this.id );
              }
              else
              {

              }
          });
        }


    });



  }else{
    var div = document.getElementById(All_data_obj.table_div);
    div.innerHTML = "Data not found!";
  }


  $(document).ready(function () {
    $(All_data_obj.next_btn).click(function () {

    if( (dataArray.length - All_data_obj.Start_Index ) > 10)
    {

        All_data_obj.Start_Index = End_Index+1;
        createTable(dataArray ,All_data_obj , Clear_btn , table_rows , table_cols , Create_btn , func_callback , deduct_num ,  ret_manual)
    }
    else if( (dataArray.length - All_data_obj.Start_Index ) < 10 &&  (dataArray.length - All_data_obj.Start_Index ) > 0)
    {
      if(End_Index+1 > dataArray.length)
      {

      }
      else{
        All_data_obj.Start_Index = End_Index+1;
        createTable(dataArray ,All_data_obj , Clear_btn , table_rows , table_cols , Create_btn , func_callback , deduct_num ,  ret_manual)
      }


    }
    else{

    }
    });

    $(All_data_obj.prev_btn).click(function () {

        var perv = All_data_obj.Start_Index - 10;
        
        if(perv > 0)
        {
          All_data_obj.Start_Index = perv;
          createTable(dataArray ,All_data_obj , Clear_btn , table_rows , table_cols , Create_btn , func_callback , deduct_num ,  ret_manual)
        }
});
$(All_data_obj.ind_btn).change(function () {

            var value_pages = document.getElementById('page_index').value;
            var value_pages_multi = (value_pages*10);

            
            if(value_pages_multi >0)
            {

            if( dataArray.length > value_pages_multi  )
                {
                    All_data_obj.Start_Index = value_pages_multi-9;
                    createTable(dataArray ,All_data_obj , Clear_btn , table_rows , table_cols , Create_btn , func_callback , deduct_num ,  ret_manual)
                }
                else{
                    if((value_pages_multi - dataArray.length ) < 10)
                    {
                        All_data_obj.Start_Index = value_pages_multi-9;
                        createTable(dataArray ,All_data_obj , Clear_btn , table_rows , table_cols , Create_btn , func_callback , deduct_num ,  ret_manual)
                    }
                }
            }
    });

});

Loading_page_clear();
  return End_Index;
}


function Nodata_func(All_data_obj) {
  Loading_page_clear();


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

  function Data_Search_Arr(dataArray, All_data_obj)
  {
      var values_ = [];

      for(var index = 0 ; index < All_data_obj.search_data.length ; index++)
      {
      values_[index] = document.getElementById(All_data_obj.search_data[index]).value;
      }

      
      if(values_[0] == "")
      {
         All_data_obj.Start_Index = 1;
         createTable(dataArray, All_data_obj)
         return;
      }

      var result = dataArray;
      var last_result;

      for(var index = 0 ; index <values_.length ; index++ )
      {
          if(values_[index] != "" && values_[index] != null)
          {
            last_result = Search_for_value(result , values_[index])
            result = last_result;
          }
      }
      
      All_data_obj.Start_Index = 1;
      createTable(result, All_data_obj);
  }

  function Search_Section(dataArray, All_data_obj)
  {
      var values = "";

      values += `<div class="row search_adjust">`

      for(var index = 0 ; index <  All_data_obj.search_data.length ; index++)
      {
        values +=`<div class="col"><div class="form-floating mb-3">

         <input type="text" class="form-control"  placeholder="`+All_data_obj.inputs_col_[index]+`" id=`+ All_data_obj.search_data[index]+`>
         <label for=`+ All_data_obj.search_data[index]+` >`+ All_data_obj.search_data[index]+`</label>

       </div></div>
            `;
      }
 
    values += `</div><div style='display:flex;justify-content:right;'><button  type="button" id='btn_index' class="btn btn-secondary"><i class="fas fa-search"></i></button></div>`;
     

 
     document.getElementById( All_data_obj.Location_2).innerHTML = values;

     $(document).ready(function () {

        $('#btn_index').click(function () {
            Data_Search_Arr(dataArray, All_data_obj);
        });


    });
  }

function Fetch_all_data( All_data_obj)
{

  All_data_obj.callbackfunc = function (All_data_obj)
  {
  
    if(All_data_obj.obj != null)
    {
        createTable(All_data_obj.obj , All_data_obj)
        Search_Section(All_data_obj.obj , All_data_obj);
    }
    else{
        Nodata_func(All_data_obj);
        Loading_page_clear();

    }
  
  };

  get_all_data_from_database(All_data_obj);


}

function Get_one_user(All_data_obj , id )
{
            
            var index_id = 0;

            for(var index = 0 ; index < All_data_obj.edit_index.length ; index++)
            {
              if(All_data_obj.edit_index[index] == id)
              {
                index_id = index;
                break;
              }
            }

            All_data_obj.index_num = All_data_obj.index_num_value[index_id];

           var values = "";
           values = `<div style='display:flex;justify-content:right;'><button id='update' class='btn btn-primary'> Update </button></div>`;

         $(document).ready(function () {
         
         $('#update').click(function () {
                     Update_User(All_data_obj , index_id);
                   });
         
         });
            
             document.getElementById(All_data_obj.location_1).innerHTML = create_values_once(All_data_obj)+values;

             All_data_obj.callbackfunc = function (All_data_obj)
             {
              for(var index = 0 ; index < All_data_obj.inputs_col_.length ; index++)
              {
                document.getElementById(All_data_obj.inputs_col_[index]).value = Object.values(All_data_obj.obj)[index+2];
              } 
             };
             get_one_data_from_database(All_data_obj)
         
          }


function Update_User(All_data_obj , index_id)
{

    var all_elements_value = [];
    for(var index = 0 ; index < All_data_obj.inputs_col_.length ; index++)
    {
      all_elements_value[index] = document.getElementById(All_data_obj.inputs_col_[index]).value;
    }


    for(var index = 0 ; index < All_data_obj.inputs_check_.length ; index++)
    {
      if(all_elements_value[index] == ""){alert(All_data_obj.inputs_check_[index] , "danger"); return;}
    }

    var COL_DATA =  "timestamp='"+ Todate(new Date())[0] +"',";

    for(var index = 0 ; index < All_data_obj.inputs_col_.length-1 ; index++)
    {
      COL_DATA +=  All_data_obj.inputs_col_[index]+"='"+ all_elements_value[index] +"',";
    }
    COL_DATA += All_data_obj.inputs_col_[All_data_obj.inputs_col_.length-1]+"='"+ all_elements_value[All_data_obj.inputs_col_.length-1] +"'";
        
    All_data_obj.callbackfunc = function (All_data_obj , response)
    {
      Fetch_all_data(All_data_obj);
      Add_Section(All_data_obj);
      alert(response , "success");
    };
     update_one_data_from_database(All_data_obj , COL_DATA);


}


function Add_User(All_data_obj)
{
    var all_elements_value = [];

    for(var index = 0 ; index < All_data_obj.inputs_col_.length ; index++)
    {
      all_elements_value[index] = document.getElementById(All_data_obj.inputs_col_[index]).value;
    }


    for(var index = 0 ; index < All_data_obj.inputs_check_.length ; index++)
    {
      if(all_elements_value[index] == ""){
        alert(All_data_obj.inputs_check_[index] , 'danger'); return;
      }
    }


    All_data_obj.callbackfunc = function (All_data_obj ,response)
    {
      Fetch_all_data(All_data_obj);
      alert(response , "success");
      for(var index = 0 ; index <  All_data_obj.inputs_col_.length ; index++)
      {
        document.getElementById(All_data_obj.inputs_col_[index]).value = "";
      }
    };
    add_one_data_from_database(All_data_obj ,all_elements_value );


}


function Delete_User(All_data_obj ,id )
{
 


  var index_id = 0;

  for(var index = 0 ; index < All_data_obj.delete_index.length ; index++)
  {
    if(All_data_obj.delete_index[index] == id)
    {
      index_id = index;
      break;
    }
  }

  All_data_obj.index_num = All_data_obj.index_num_value[index_id];

    All_data_obj.callbackfunc = function (All_data_obj , response)
    {
      Fetch_all_data(All_data_obj);
      alert(response , "success");
    };
    delete_one_data_from_database(All_data_obj )
}





function createTable_invoice(dataArray ,All_data_obj , Clear_btn , table_rows , table_cols , Create_btn , func_callback , deduct_num) {
  
  var end_of_arr = 0;


    clear(All_data_obj.location_next);
    next_Section(All_data_obj.location_next);

    if(All_data_obj.Start_Index > dataArray.length)
    {
        var div = document.getElementById(All_data_obj.table_div);
        div.innerHTML = '';
        clear(All_data_obj.location_next);
        return;
    }
    var End_Index = 0;
    if( (dataArray.length - All_data_obj.Start_Index ) >= 10)
    {
        End_Index = All_data_obj.Start_Index + 9;
    }
    else{
        End_Index = dataArray.length;
    }

  if(dataArray && dataArray !== undefined && dataArray.length != 0){

    document.getElementById(All_data_obj.location_index).innerHTML = `<label>`+Math.ceil(All_data_obj.Start_Index/10)+" - "+Math.ceil(dataArray.length/10)+` </label>`;

    var result = "<table class='table' id='dtable'>"+
                 "<thead   style='white-space:wrap' >"+
                   "<tr>";                               //Change table headings to match witht he Google Sheet
                    
                   if(table_cols == null)
                   {
                    for(var index = 0 ; index < All_data_obj.all_names.length ; index ++)
                    {
                    result +="<th scope='col'>"+All_data_obj.all_names[index]+"</th>";
                    }
                  }
                  else{
                    for(var index = 0 ; index < table_cols ; index ++)
                    {
                    result +="<th scope='col'>Block "+(index+1)+"</th>";
                    }
                  }


              result += "</tr>"+
                        "</thead>";
                var counter = 0;
                
              if(table_rows == null)
              {

                for(var i=(All_data_obj.Start_Index-1); i<End_Index; i++) {
                  result += "<tr>";
                  counter = i;
                  if(deduct_num == null)
                  {
                    end_of_arr = Object.values(dataArray[i]).length ;
                  }
                  else
                  {
                    end_of_arr = deduct_num;
                  }
                  
                  for(var index = 0 ; index < end_of_arr  ; index++)
                  {
                    result += "<td style='white-space:wrap' >";
                    result += Object.values(dataArray[i])[index]; 
                    result +="</td>"
                  }

                  if(Clear_btn == null)
                  {
                  result += `<td><button id='btn_get_`+i+`' class='btn btn-light'  > <i class="fas fa-edit"></i> </button></td>`;
                  result += `<td><button id='btn_del_`+i+`' class='btn btn-danger' > <i class="fas fa-trash-alt"></i> </button></td>`;                  
                  }
                  if(Create_btn == "open")
                  {
                    result += `<td><button id='view_more_`+i+`' class='btn btn-danger' > <i class="fa-solid fa-circle-arrow-right"></i> </button></td>`;   
                    All_data_obj.view_index[i] = 'view_more_'+i;
                    All_data_obj.obj_data[i] = Object.values(dataArray[i]);                                  
                  }
                  result += "</tr>";
  
                  All_data_obj.index_num_value[i] = dataArray[i].id;
                  All_data_obj.edit_index[i] = 'btn_get_'+i;
                  All_data_obj.delete_index[i] = 'btn_del_'+i;
                  
              }
  
             }
             else{
              for(var i=(All_data_obj.Start_Index-1); i<End_Index; i++) {
                result += "<tr>";
                counter = i;
                result += "<td style='white-space:wrap' >"+ Object.values(dataArray[i])[0]+" </td>";

                if(deduct_num == null)
                {
                  end_of_arr = Object.values(dataArray[i]).length ;
                }
                else
                {
                  end_of_arr = deduct_num;
                }


                    result += "<td style='white-space:wrap' >";
                    result += Object.values(dataArray[i])[1]+"<br>"; 
                    result += Object.values(dataArray[i])[2]+"<br>"; 
                    result += Object.values(dataArray[i])[3]+"<br>"; 
                    result += Object.values(dataArray[i])[4]+"<br>"; 
                    result += Object.values(dataArray[i])[5]+"<br>"; 
                    result +="</td>"
                    result += "<td style='white-space:wrap' >";
                    result += Object.values(dataArray[i])[6]+"<br>"; 
                    result += Object.values(dataArray[i])[7]+"<br>"; 
                    result += Object.values(dataArray[i])[8]+"<br>"; 
                    result += Object.values(dataArray[i])[9]+"<br>"; 
                    result += Object.values(dataArray[i])[10]+"<br>"; 
                    result += Object.values(dataArray[i])[11]+"<br>"; 
                    result +="</td>"  

                    result += "<td style='white-space:wrap' >";
                    result += Object.values(dataArray[i])[12]+"<br>"; 
                    result += Object.values(dataArray[i])[13]+"<br>"; 
                    result += Object.values(dataArray[i])[14]+"<br>"; 
                    result += Object.values(dataArray[i])[15]+"<br>"; 
                    result += Object.values(dataArray[i])[16]+"<br>"; 
                    result +="</td>"  

                    result += "<td style='white-space:wrap' >";

                    result += Object.values(dataArray[i])[17]+"<br>"; 
                    result += Object.values(dataArray[i])[18]+"<br>"; 
                    result += Object.values(dataArray[i])[19]+"<br>"; 
                    result += Object.values(dataArray[i])[20]; 
                    result +="</td>"  

                if(Clear_btn == null)
                {
                result += `<td><button id='btn_get_`+i+`' class='btn btn-light'  > <i class="fas fa-edit"></i> </button></td>`;
                result += `<td><button id='btn_del_`+i+`' class='btn btn-danger' > <i class="fas fa-trash-alt"></i> </button></td>`;                  
                }

                  result += `<td><button id='view_more_`+i+`' class='btn btn-primary' > <i class="fa-solid fa-circle-arrow-right"></i> </button></td>`;  
                  All_data_obj.view_index[i] = 'view_more_'+i;  
                  All_data_obj.obj_data[i] = Object.values(dataArray[i]);

                result += "</tr>";

                All_data_obj.index_num_value[i] = dataArray[i].id;
                All_data_obj.edit_index[i] = 'btn_get_'+i;
                All_data_obj.delete_index[i] = 'btn_del_'+i;
                
              }
             }

             

    
    result += "</table>";
    var div = document.getElementById(All_data_obj.table_div);
    div.innerHTML = result;

    if(func_callback)
    {
      func_callback(All_data_obj , End_Index);
    }

    $(document).ready(function () {
      var counter_index = 0;
        for(var index = 0 ; index < All_data_obj.index_num_value.length ; index++)
        {
            $('#btn_get_'+index).click(function (index) {  

                Get_one_user( All_data_obj , this.id);
            });

            $('#btn_del_'+index).click(function () {
              if (confirm("You want to delete!") == true) {
                console.log(this.id );
              Delete_User( All_data_obj , this.id );
              }
              else
              {

              }
          });
        }


    });



  }else{
    var div = document.getElementById(All_data_obj.table_div);
    div.innerHTML = "Data not found!";
  }


  $(document).ready(function () {
    $(All_data_obj.next_btn).click(function () {

    if( (dataArray.length - All_data_obj.Start_Index ) > 10)
    {

        All_data_obj.Start_Index = End_Index+1;
        createTable_invoice(dataArray ,All_data_obj , Clear_btn , table_rows , table_cols , Create_btn , func_callback , deduct_num)
    }
    else if( (dataArray.length - All_data_obj.Start_Index ) < 10 &&  (dataArray.length - All_data_obj.Start_Index ) > 0)
    {
      if(End_Index+1 > dataArray.length)
      {

      }
      else{
        All_data_obj.Start_Index = End_Index+1;
        createTable_invoice(dataArray ,All_data_obj , Clear_btn , table_rows , table_cols , Create_btn , func_callback , deduct_num)
      }


    }
    else{

    }
    });

    $(All_data_obj.prev_btn).click(function () {

        var perv = All_data_obj.Start_Index - 10;
        
        if(perv > 0)
        {
          All_data_obj.Start_Index = perv;
          createTable_invoice(dataArray ,All_data_obj , Clear_btn , table_rows , table_cols , Create_btn , func_callback , deduct_num)
        }
});
$(All_data_obj.ind_btn).change(function () {

            var value_pages = document.getElementById('page_index').value;
            var value_pages_multi = (value_pages*10);

            
            if(value_pages_multi >0)
            {

            if( dataArray.length > value_pages_multi  )
                {
                    All_data_obj.Start_Index = value_pages_multi-9;
                    createTable_invoice(dataArray ,All_data_obj , Clear_btn , table_rows , table_cols , Create_btn , func_callback , deduct_num)
                }
                else{
                    if((value_pages_multi - dataArray.length ) < 10)
                    {
                        All_data_obj.Start_Index = value_pages_multi-9;
                        createTable_invoice(dataArray ,All_data_obj , Clear_btn , table_rows , table_cols , Create_btn , func_callback , deduct_num)
                    }
                }
            }
    });

});


  return End_Index;
}
