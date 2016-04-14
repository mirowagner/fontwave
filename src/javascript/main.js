$( document ).ready( function(){
    'use strict';

    // If settings in localStorage, apply to inputs.
    getSettings();

    // Apply value of each input to preview.
    $( '.fw-input' ).each( function() {
        setPreview( $( this ) );
    });

    $( '.fw-input' ).on( 'keydown keyup change', function() {
        setPreview( $( this ) );
    });

    // Save settings to localStorage.
    window.addEventListener( 'beforeunload', function() {
        saveSettings();
    });

});
