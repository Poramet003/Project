$(function () {
    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        url: 'https://soaproductapi.herokuapp.com/products',
        method: 'GET'

    }).then(function (data) {

        addNewRow(data)
    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
                var row = '<div class="col-sm-3 pandding="15px"><table border="0" cellspacing="0" cellpadding="2" ><tr><th><th><th>'
                    + '<th><center><img src="' + data[i].photo + '" style="width:104px;height:142px;"></center></th>'
                    // + data[i].id + '</td><td>' 
                    + '<th><a href="edit.html?id" >' + data[i].name + '</a><br>'
                    //   + data[i].description 
                    // + data[i].weight + '<br>'
                    + '฿&nbsp<b>' + data[i].price + '&nbsp</b>'
                    + '</th></th></tr></th></th></table></div>'
                $('#pinlist').append(row);
            }
        
    }
});