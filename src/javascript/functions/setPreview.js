function setPreview( $fwInput ) {
    'use strict';

    var fwValue  = $fwInput.val();
    var fwSelector  = $fwInput.data( 'fw-selector' );
    var fwProperty = $fwInput.data( 'fw-property' );
    var fwUnit = $fwInput.data( 'fw-unit' );

    $( '.fw-preview[data-fw-selector="' + fwSelector + '"]')
        .css( fwProperty, fwValue + fwUnit );
}
