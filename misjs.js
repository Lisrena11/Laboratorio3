

function segura() {
    pwd = prompt( "Contraseña" ) ;

    vcv = 0 ;       // CONTADORA DE VOCALES
    vcc = 0 ;       // CONTADORA DE CONSONANTES

    for( i=0 ; i<pwd.length ; i=i+1 ) {
        if( pwd[i] == "a" || pwd[i] == "e" || pwd[i] == "i" || pwd[i] == "o" || pwd[i] == "u" ) {
            vcv = vcv + 1 ;
        } else {
            vcc = vcc + 1 ;
            vcv = 0 ;
        }

        if( vcc >= 3 ) {
            break ;
        }
        if( vcv >= 3 ) {
            break ;
        }
    }

    if( vcv >= 3 ) {
        document.write( "CONTRASEÑA NO SEGURA pq 3VC" ) ;
    } else {
        if( vcc >= 3 ) {
            document.write( "CONTRASEÑA NO SEGURA pq 3CC" ) ;
        } else {
            document.write( "CONTRASEÑA SEGURA" ) ;
        }
    }

}

