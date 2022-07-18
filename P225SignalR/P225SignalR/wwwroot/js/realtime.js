$(document).ready(function () {
    var p225connection = new signalR.HubConnectionBuilder().withUrl('/p225hub').build();

    p225connection.start();

    $(document).on('click', '#sendButton', function () {
        let user = $('#userInput').val();
        let message = $('#messageInput').val();

        p225connection.invoke('MesajGonders', user, message);
    })

    p225connection.on('mesajqebuleden', function (str1, str2, str3) {
        let listItem = `<li class="list-group-item">${str1} Says: ${str2} ${str3}</li>`;
        $('#messagesList').append(listItem);
    })
})