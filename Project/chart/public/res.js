$("#get").on('click', function () {
    $.ajax({
        url: "/get",
        data: {zhu: 11},
        success: function (result) {
            alert(result);
        },
    });
});

$('#post').on('click', function () {
    $.post("/post", { zhu: 12 }, function (data) {
        alert(data);
    })
})