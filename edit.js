var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(function () {

    $('#alert').hide();

    var productid = getUrlParameter('id');

    $.ajax({

        //CP3. Complete Ajax code to GET the selected pin (pinid)  
        url: 'https://soaproductapi.herokuapp.com/products/'+productid,
        type: 'GET'


    }).then(function (data) {

        $('#name').val(data.Name);
        $('#description').val(data.description);
        $('#photo').val(data.photo);
        $('#weight').val(data.weight),
        $('#price').val(data.price);

    });

    $('#save').click(function () {

        var formdata = {
            Name: $('#name').val(),
            description: $('#description').val(),
            photo: $('#photo').val(),
            weight: $('#weight').val(),
            price: $('#price').val(),
        }

        console.log(formdata);

        $.ajax({

            // CP4. Complete Ajax code to UPDATE the selected pin (pinid)  
            url: 'https://soaproductapi.herokuapp.com/products/id'+productid,
            type: 'PUT',
            data: formdata


        }).then(function (data) {

            $('#alert').show();
            console.log('Edited');

        });
    });

    $('#delete').click(function () {

        $.ajax({

            //CP5. Complete Ajax code to DELETE the selected pin (pinid)  
            url: 'https://soaproductapi.herokuapp.com/products/'+productid,
            type: 'DELETE'

        }).then(function (data) {

            window.location.href = 'index.html';

        });
    });
});