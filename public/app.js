$(function () {

    var pageID = unescape(getUrlVars()["p"])

    if (window.location.hostname != "localhost") {

        if (window.location != window.parent.location) {
            if (pageID == "undefined" || pageID == "") {
                $("body").html("<div style=\"text-align: center\"><a href=\"https://www.notion.so/How-the-Referral-Box-Works-69fc3ec2882d44cf99870ca710522e5b\" target=\"_blank\">Misconfigured embed detected. Click here to be redirected.</a></div>")
                return
            }
        } else {
            window.location.replace("https://www.notion.so/hackclub/How-the-Referral-Box-Works-69fc3ec2882d44cf99870ca710522e5b")
        }

    } else {
        pageID = "localhost"
    }
    
    $("body").removeClass("hidden")
    $("#pageID").html(pageID)
    

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
                username: usernameVal,
                page: "https://www.notion.so/hackclub/" + pageID
            }
        }).done(function (res) {
            if (res.success) {
                $("#appreciate").addClass("hidden")
                $("#success").removeClass("hidden")
            }
        });
    });
})

function getUrlVars() {
    var vars = {}
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value
    })
    return vars
}