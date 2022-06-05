window.onresize = function() {
    if (window.innerWidth < 1000 ) {
        var arr = window.location.pathname.split("/")
        arr.pop()
        var newarr = arr.join("/")
        window.location.href = newarr + "/index18.html"
    }
    else {
        var arr = window.location.pathname.split("/")
        arr.pop()
        var newarr = arr.join("/")
        window.location.href = newarr + "/7.html"

    }
    console.log(window.innerWidth)
}