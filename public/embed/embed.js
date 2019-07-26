new ClipboardJS('.btn')

if (window.location.hostname != "localhost") {

    if (window.location == window.parent.location) {
        window.location.replace("https://www.notion.so/hackclub/How-the-Referral-Box-Works-69fc3ec2882d44cf99870ca710522e5b")
    }

}

$("#generate").click(function() {
    var n = $("#url").val();
    
    if (n.indexOf("https://www.notion.so/hackclub/") == -1) {
        $("#url").addClass("is-invalid");
        $("#urlInvalid").removeClass("hidden");

        setTimeout(function() {
            $("#url").removeClass("is-invalid");
            $("#urlInvalid").addClass("hidden");
        }, 5000)
    } else {
        var l = n.replace('https://www.notion.so/hackclub/', "https://ref.guide.hackclub.com/?p=")
        $("#embed").val(l)
    }

})