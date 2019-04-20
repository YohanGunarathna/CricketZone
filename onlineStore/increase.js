

function increaseFontSizeBy100px() {
        document.getElementById('a').style.fontSize = "100px";
    
    }
    function increaseFontSizeBy1px() {
        var id = document.getElementById('b');
        var style = window.getComputedStyle(id, null).getPropertyValue('font-size');
        var currentSize = parseInt(style);
        currentSize++;
        document.getElementById('b').style.fontSize = currentSize.toString();
    }
function DecreaseFontSizeBy1px() {
        var id = document.getElementById('b');
        var style = window.getComputedStyle(id, null).getPropertyValue('font-size');
        var currentSize = parseInt(style);
        currentSize--;
        document.getElementById('b').style.fontSize = currentSize.toString();
    }
