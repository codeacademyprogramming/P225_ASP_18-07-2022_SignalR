$(document).ready(function () {
    var connection = new signalR.HubConnectionBuilder().withUrl('/chathub').build();

    connection.start();

    connection.on('online', function (id) {
        let span = $(`#${id} span`);
        span.removeClass('bg-secondary');
        span.addClass('bg-success');
    })

    connection.on('ofline', function (id) {
        let span = $(`#${id} span`);
        span.removeClass('bg-success');
        span.addClass('bg-secondary');
    })

    connection.on('orderaccepted', function () {
        alert('Sifarisiniz Tesdiqlendi');
    })
})