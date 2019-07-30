$(function () {

    if (window.location.hostname != "localhost") {

        if (window.location == window.parent.location) {
            window.location.replace("https://www.notion.so/hackclub/How-the-Referral-Box-Works-69fc3ec2882d44cf99870ca710522e5b")
        }

    }
    
    $("body").removeClass("hidden")

    $('#appreciate').submit(function (e) {
        $("#button-spinner").removeClass("hidden")
        $("#button-spinner").attr("disabled", true)

        var sourceVal = $("#source").val()
        var usernameVal = $("#username").val()

        // halt if empty - serverside guarding
        if (sourceVal == "" || usernameVal == "")
            return;

        e.preventDefault()
        $.ajax({
            type: 'POST',
            url: '/chopchop',
            data: {
                source: sourceVal,
                username: usernameVal
            }
        }).done(function (res) {
            if (res.success) {
                $("#appreciate").addClass("hidden")
                $("#success").removeClass("hidden")
            }
        });
    });
})