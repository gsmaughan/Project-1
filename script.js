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
                            home       : 'Gallifrey'} ];

    var div = ["one", "two", "three", "four"];
    var j = 0;

    $("#move").on("click", function(){
       

        $('#' + div[j]).html(j+1 + ' of 4');

        j++;
        if(j == 4){
            j = 0;
        }
        
        show();
    });
    

    show ();
    function show(){
        
        var objLength = table_data.length;
        var myvar = '<table>'+
                    '<tr>'+
                    '<th>First Name</th>'+
                    '<th>Last Name</th>'+
                    '<th>Home</th>'+
                    '</tr>';

        for(var i = 0; i < objLength; i++){
            myvar += '<tr>'+
            '<td>'+table_data[i].first_name+'</td>'+
            '<td>'+table_data[i].last_name+'</tD>'+
            '<td>'+table_data[i].home+'</th>'+
            '</tr>'     
        }

        myvar += '</table>';


        document.getElementById(div[j]).innerHTML = myvar;
         
    }



} //end window onload