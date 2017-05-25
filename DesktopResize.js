//This jQuery function allows for automatically resizing images (of any and varying sizes) within a container div to cumulatively take up 
//the entire width of the div while keeping their aspect ratios intact. To see a slightly modified version of this in action, visit 
//http://matthewchristison.com/design.

//arguments[0] = container div ID
//arguments[1+] = image IDs

function desktopResize() {
            var div_w = $("#" + arguments[0]).width() * .99;
            var args = arguments.length;
            var images_w = 0;
            for (i = 1; i < args; i++) {
                images_w += $("#" + arguments[i]).width();
            }
            var ratio = div_w / images_w;
            for (i = 1; i < args; i++) {
                var h = $("#" + arguments[i]).height();
                var w = $("#" + arguments[i]).width();
                $("#" + arguments[i]).css('height', h * ratio);
                $("#" + arguments[i]).css('width', w * ratio);
            }
            $("#" + arguments[0]).css("white-space", "nowrap");
}
