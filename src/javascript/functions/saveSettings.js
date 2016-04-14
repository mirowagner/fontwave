function saveSettings() {
    'use strict';

    var fwSettings = '{"fwInput":{';

    $( '.fw-input' ).each( function() {
        var x = '"' + $( this ).attr( 'id' ) + '"';
        var y = '"' + $( this ).val() + '"';
        fwSettings = fwSettings + x + ':' + y + ',';
    });

    fwSettings = fwSettings.slice( 0, -1 ) + '}}';
    localStorage.setItem( 'fwSettings', fwSettings );
}
