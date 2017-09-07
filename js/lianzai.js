$(function () {
    $.ajax({
        url: 'http://127.0.0.1:9091/api/getlianzai',
        dataType: 'json',
        success: function (data) {
            // console.log(data)
            $('#lzContent').append(template("lzTemplate", data));
        }
    })
})