$(function () {

    $('#alert').hide();

    $('#addnew').click(function () {

        var formdata = {
            Name: $('#name').val(),
            description: $('#description').val(),
            photo: $('#photo').val(),
            weight: $('#weight').val(),
            price: $('#price').val(),
        }

        console.log(formdata);


        $(function () {

            $.ajax({

                //CP2. Complete Ajax Code to INSERT new pin data 
                url: 'https://soaproductapi.herokuapp.com/products',
                type: 'POST',
                data: formdata
            }).then(function (data) {

                $('#alert').show();
                $('#name').val('');
                $('#description').val('');
                $('#photo').val('');
                $('#weight').val();
                $('#price').val('');
                console.log('Added');

            });
        });
    });
});