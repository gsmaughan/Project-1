window.onload = function loaded(){

    $("button").addClass("animated shake btn-primary");

    var table_data = [  {   first_name : 'Rose',
                            last_name  : 'Tyler',
                            home       : 'Earth' },
                        {   first_name : 'Zoe',
                            last_name  : 'Heriot',
                            home       : 'Space Station W3'},
                        {   first_name : 'Jo',
                            last_name  : 'Grant',
                            home       : 'Earth'},
                        {   first_name : 'Leela',
                            last_name  : null,
                            home       : 'Unspecified'},
                        {   first_name : 'Romana',
                            last_name  : null,
                            home       : 'Gallifrey'},
                        {   first_name : 'Clara',
                            last_name  : 'Oswald',
                            home       : 'Earth'},
                        {   first_name : 'Adric',
                            last_name  : null,
                            home       : 'Alzarius'},
                        {   first_name : 'Susan',
                            last_name  : 'Foreman',
                            home       : 'Gallifrey'} ]; // the array of objects for the table

    var div = ["one", "two", "three", "four"];  //array of ids for the 4 divs 
    var j = 0;  // variable to iterate through the div array

    $("#move").on("click", function(){
       

        $('#' + div[j]).html(j+1 + ' of 4'); //  when button is clicked, replace html with div number

        j++;  // iterate j
        if(j == 4){
            j = 0;
        } // reset j when table is in the fourth div
        
        show();  // call the show function after the div is replaced and j is iterated
    });
    

    show ();  // default to show table on first div
    function show(){
        
        
        var myTable = '<table>'+
                    '<tr>'+
                    '<th>First Name</th>'+
                    '<th>Last Name</th>'+
                    '<th>Home</th>'+
                    '</tr>';  // create a variable for the jquery table expression & add all of the headers

        for(var i = 0; i < table_data.length; i++){
            myTable += '<tr>'+
            '<td>'+table_data[i].first_name+'</td>'+
            '<td>'+table_data[i].last_name+'</tD>'+
            '<td>'+table_data[i].home+'</th>'+
            '</tr>'     
        } // add table data to the myTable variable in the for loop

        myTable += '</table>';  // make sure to close the table


        document.getElementById(div[j]).innerHTML = myTable; // put the table in the the proper div
         
    }



} //end window onload