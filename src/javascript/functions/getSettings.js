function getSettings() {
    'use strict';

    var fwSettings = JSON.parse( localStorage.getItem( 'fwSettings' ) );

    if ( !fwSettings ) {
        return;
    }

    $( '.fw-input' ).each( function() {
        var x = $( this ).attr( 'id' );
        $( this ).val( fwSettings.fwInput[x] );
    });
}
