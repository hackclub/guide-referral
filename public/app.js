$(function () {

    var pageID = unescape(getUrlVars()["p"])

    if (window.location != window.parent.location && pageID != undefined && pageID != "") {
        $("body").removeClass("hidden")
        $("#pageID").html(pageID)
    } else {
        //window.location.replace("https://www.notion.so/hackclub/How-the-Referral-Box-Works-69fc3ec2882d44cf99870ca710522e5b")
    }

    $('#appreciate').submit(function (e) {
        $("#button-spinner").removeClass("hidden")
        $("#button-spinner").attr("disabled", true)

        e.preventDefault()
        $.ajax({
            type: 'POST',
            url: '/chopchop',
            data: {
                source: $("#source").val(),
                username: $("#username").val(),
                page: pageID
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