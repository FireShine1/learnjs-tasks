if (-1 || 0) alert( 'first' ); // выполнится, значение -1 || 0 = -1
if (-1 && 0) alert( 'second' ); // не выполнится, значение -1 && 0 = 0
if (null || -1 && 1) alert( 'third' ); // выполнится, значение null || -1 && 1 = 1