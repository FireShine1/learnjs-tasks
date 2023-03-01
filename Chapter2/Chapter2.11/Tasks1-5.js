//Task 1
alert( null || 2 || undefined ); // 2

//Task2
alert( alert(1) || 2 || alert(3) ); // 1, вторым сообщением - 2

//Task3
alert( 1 && null && 2 ); // null

//Task4
alert( alert(1) && alert(2) ); //1, вторым сообщением - undefined

//Task5
alert( null || 2 && 3 || 4 ); // 3