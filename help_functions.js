//------------------------------------------------------------
//------------------------------------------------------------
//---------------------Extra-------------------------
//------------------------------------------------------------

function Todate( Date_value , D_Value , M_Value , Y_Value)
          {
            var Year = 0;

            if(Date_value != null)
            {
                var Start_Date = new Date( Date_value);
                if(Y_Value == null){Year = Number(Start_Date.getFullYear() )}else{Year = Y_Value}

                var Start_Date_Date = Number(Start_Date.getDate());
                var Start_Date_Month = Number(Start_Date.getMonth())+1;

            }
            else{
               if(Y_Value == null){Year = "2021"}else{Year = Y_Value}
                var Start_Date_Date = Number(D_Value);
                var Start_Date_Month = Number(M_Value);
            }
            var Start_Date_text = 0;

            var Start_Date_Check_1 = 0;
            var Start_Date_Check_2 = 0;

            if(Start_Date_Date >= 10){Start_Date_Check_1 = 1;}
            else{Start_Date_Check_1 = 0;}

            if(Start_Date_Month >= 10){Start_Date_Check_2 = 1;}
            else{Start_Date_Check_2 = 0;}

            if(Start_Date_Check_1 == 0 && Start_Date_Check_2 == 0){Start_Date_text = Year+"/0"+Start_Date_Month+"/"+"0"+Start_Date_Date ;}
            else if(Start_Date_Check_1 == 1 && Start_Date_Check_2 == 0){Start_Date_text = Year+"/0"+Start_Date_Month+"/"+Start_Date_Date;}
            else if(Start_Date_Check_1 == 0 && Start_Date_Check_2 == 1){Start_Date_text = Year+"/"+Start_Date_Month+"/"+"0"+Start_Date_Date ;}
            else if(Start_Date_Check_1 == 1 && Start_Date_Check_2 == 1){Start_Date_text = Year+"/"+Start_Date_Month+"/"+Start_Date_Date ;}

            var month_Check = Number(Start_Date_Month)-1 ;
            var day_return = new Date(Year  ,   month_Check.toString() , Start_Date_Date.toString()); 

            return [Start_Date_text , Start_Date_Date , Start_Date_Month , Number(day_return.getDay()) , Year];
          }  
  

function Todate_schedule_sessions( Date_value , D_Value , M_Value , Y_Value)
          {
            var Year = 0;

            if(Date_value != null)
            {
                var Start_Date = new Date( Date_value);
                if(Y_Value == null){Year = Number(Start_Date.getFullYear() )}else{Year = Y_Value}

                var Start_Date_Date = Number(Start_Date.getDate());
                var Start_Date_Month = Number(Start_Date.getMonth())+1;

            }
            else{
               if(Y_Value == null){Year = "2021"}else{Year = Y_Value}
                var Start_Date_Date = Number(D_Value);
                var Start_Date_Month = Number(M_Value);
            }

            if(Start_Date_Date >  new Date(Year, Start_Date_Month, 0).getDate() )
            {
              Start_Date_Date = Start_Date_Date - new Date(Year, Start_Date_Month, 0).getDate();
              Start_Date_Month++;
            }
            if(Start_Date_Month > 12)
            {
              Start_Date_Month = 1;
              Year++;
            }

            var Start_Date_text = 0;

            var Start_Date_Check_1 = 0;
            var Start_Date_Check_2 = 0;

            if(Start_Date_Date >= 10){Start_Date_Check_1 = 1;}
            else{Start_Date_Check_1 = 0;}

            if(Start_Date_Month >= 10){Start_Date_Check_2 = 1;}
            else{Start_Date_Check_2 = 0;}

            if(Start_Date_Check_1 == 0 && Start_Date_Check_2 == 0){Start_Date_text = Year+"-0"+Start_Date_Month+"-"+"0"+Start_Date_Date ;}
            else if(Start_Date_Check_1 == 1 && Start_Date_Check_2 == 0){Start_Date_text = Year+"-0"+Start_Date_Month+"-"+Start_Date_Date;}
            else if(Start_Date_Check_1 == 0 && Start_Date_Check_2 == 1){Start_Date_text = Year+"-"+Start_Date_Month+"-"+"0"+Start_Date_Date ;}
            else if(Start_Date_Check_1 == 1 && Start_Date_Check_2 == 1){Start_Date_text = Year+"-"+Start_Date_Month+"-"+Start_Date_Date ;}

            var month_Check = Number(Start_Date_Month)-1 ;
            var day_return = new Date(Year  ,   month_Check.toString() , Start_Date_Date.toString()); 

            return [Start_Date_text , Start_Date_Date , Start_Date_Month , Number(day_return.getDay()) , Year];
          }  


          function Todate_schedule( Date_value , D_Value , M_Value , Y_Value)
          {
            var Year = 0;

            if(Date_value != null)
            {
                var Start_Date = new Date( Date_value);
                if(Y_Value == null){Year = Number(Start_Date.getFullYear() )}else{Year = Y_Value}

                var Start_Date_Date = Number(Start_Date.getDate());
                var Start_Date_Month = Number(Start_Date.getMonth())+1;

            }
            else{
               if(Y_Value == null){Year = "2021"}else{Year = Y_Value}
                var Start_Date_Date = Number(D_Value);
                var Start_Date_Month = Number(M_Value);
            }

            if(Start_Date_Date >  new Date(Year, Start_Date_Month, 0).getDate() )
            {
              Start_Date_Date = 1;
              Start_Date_Month++;
            }
            if(Start_Date_Month > 12)
            {
              Start_Date_Month = 1;
              Year++;
            }

            var Start_Date_text = 0;

            var Start_Date_Check_1 = 0;
            var Start_Date_Check_2 = 0;

            if(Start_Date_Date >= 10){Start_Date_Check_1 = 1;}
            else{Start_Date_Check_1 = 0;}

            if(Start_Date_Month >= 10){Start_Date_Check_2 = 1;}
            else{Start_Date_Check_2 = 0;}

            if(Start_Date_Check_1 == 0 && Start_Date_Check_2 == 0){Start_Date_text = Year+"-0"+Start_Date_Month+"-"+"0"+Start_Date_Date ;}
            else if(Start_Date_Check_1 == 1 && Start_Date_Check_2 == 0){Start_Date_text = Year+"-0"+Start_Date_Month+"-"+Start_Date_Date;}
            else if(Start_Date_Check_1 == 0 && Start_Date_Check_2 == 1){Start_Date_text = Year+"-"+Start_Date_Month+"-"+"0"+Start_Date_Date ;}
            else if(Start_Date_Check_1 == 1 && Start_Date_Check_2 == 1){Start_Date_text = Year+"-"+Start_Date_Month+"-"+Start_Date_Date ;}

            var month_Check = Number(Start_Date_Month)-1 ;
            var day_return = new Date(Year  ,   month_Check.toString() , Start_Date_Date.toString()); 

            return [Start_Date_text , Start_Date_Date , Start_Date_Month , Number(day_return.getDay()) , Year];
          }  
          
function database_col_parse_add(database_col)
{
  var values = "(timestamp,";
  for(var index = 0 ; index < database_col.length-1 ; index ++)
  {
      values += database_col[index]+",";
  }
  values += database_col[database_col.length-1]+")";

  return values;

}

function database_col_parse_add_delete(database_col)
{
  var values = "(";
  for(var index = 0 ; index < database_col.length-1 ; index ++)
  {
      values += database_col[index]+",";
  }
  values += database_col[database_col.length-1]+")";

  return values;

}

function Search_for_value(Check_Data , searchtext)
{
   var ar = [];
   Check_Data.forEach(function(f) {

       f = Object.values(f);
       if (~f.indexOf(searchtext)) {
       ar.push(f);
       }

   });
   return ar;
}


function Search_for_value_same(Check_Data , searchtext)
{
   var ar = [];
   Check_Data.forEach(function(f) {
      var m = f;
       f = Object.values(f);
       if (~f.indexOf(searchtext)) {

       ar.push(m);
       }

   });
   return ar;
}




function search_two_tables(table_for , table_from , index_for , index_from , index_return)
{

  var data_return = [];
  var counter = 0;
  var search_for = Object.values(table_for)

  if(table_from && table_from !== undefined && table_from.length != 0)
  {
      for(var index_ = 0 ; index_ < table_from.length ; index_++)
      {
          var search_from = Object.values(table_from[index_])
          if(search_for[index_for] == search_from[index_from])
          {
            data_return[counter++] =  search_from[index_return];
            // break;
          }
      }
  }

  return data_return;

}


function search_for_data(table_from , values_search , index_from  , index_return)
{

  var data_return = [];
  var counter = 0;

  if(table_from && table_from !== undefined && table_from.length != 0)
  {
    for(var index = 0 ; index < values_search.length ; index++)
    {
      for(var index_ = 0 ; index_ < table_from.length ; index_++)
      {
          var search_from = Object.values(table_from[index_])
          if(values_search[index] == search_from[index_from])
          {
            data_return[counter++] =  search_from[index_return];
          }
      }
    }
  }
  return data_return;
}

function search_for_data_all(table_from , values_search , index_from  )
{

  var data_return = [];
  var counter = 0;

  if(table_from && table_from !== undefined && table_from.length != 0)
  {
    for(var index = 0 ; index < values_search.length ; index++)
    {
      for(var index_ = 0 ; index_ < table_from.length ; index_++)
      {
          var search_from = Object.values(table_from[index_])
          if(values_search[index] == search_from[index_from])
          {
            data_return[index] =  search_from;
          }
      }
    }
  }
  return data_return;
}



function search_for_data_index(table_from , values_search , index_from  , index_return)
{

  var data_return = [];
  var counter = 0;

  if(table_from && table_from !== undefined && table_from.length != 0)
  {

      for(var index_ = 0 ; index_ < table_from.length ; index_++)
      {
          var search_from = Object.values(table_from[index_])
          if(values_search == search_from[index_from])
          {
            data_return[counter++] =  search_from[index_return];
          }
      }
    
  }

  return data_return;

}


function search_for_data_custom(table_from , values_search , index_from  , index_return)
{

  var data_return = [];

  if(table_from && table_from !== undefined && table_from.length != 0)
  {
    var counter = 0;

    for(var index = 0 ; index < values_search.length ; index++)
    {

      for(var index_ = 0 ; index_ < table_from.length ; index_++)
      {
          var search_from = Object.values(table_from[index_])
          if(values_search[index] == search_from[index_from] && search_from[4] == 'active')
          {
            data_return[index] =  search_from[index_return];
            break;
          }
      }
    }
  }

  return data_return;

}


function search_value_from_table(table_from , values_search , index_from  , index_return)
{
  var data_return = [];
  var get_row = [];
  if(table_from && table_from !== undefined && table_from.length != 0)
  {

      for(var index_ = 0 ; index_ < table_from.length ; index_++)
      {
        var counter = 0;
        data_return = [];
          var search_from = Object.values(table_from[index_])
            for(var index = 0 ; index < search_from.length ; index++)
            {

              data_return[counter] =  search_from[index];counter++;
            }
            get_row[index_]=data_return;
      }
    
  }

  return get_row;

}


          // <div id="myModal_1" class="modal_loading">

          //   <!-- Modal content -->
          //   <div class="modal_loading-content">
          //     <span class="close">&times;</span>

          //     <div id="loading_location" ></div>

          //   </div>

          // </div>



// Get the modal
var modal = document.getElementById("myModal");
var modal_1 = document.getElementById("myModal_1");


// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');

  // return month + '/' + day + '/' + year;
  return year + '/' + month + '/' + day;
}