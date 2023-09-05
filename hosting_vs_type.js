// what is output ?

// var a = 1;
// function b() {
//   a = 10;
//   return;
// }

// console.log(b()); // undefined as nothing is returning

// **
// let a = 1;
// function b() {
//   a = 10;

//   return;

//   function a() {}
// }

// b();
// console.log(a); // output: 1,

// ***
// var a = {};
// var b = { key: "b" };
// var c = { key: "c" };

// console.log(c.key);

// a[b] = 124;
// a[c] = 345;
// console.log(a[b]); // output: 345
// console.log(a[c]); // output: 345

//****/
// console.log(1 + 2 + 4 + "5"); //output: 76
// console.log("1" + 2 + 4 + 5); //output: 1245

//*** */
// function test() {
//   console.log(a);
//   console.log(foo());

//   var a = 10;

//   function foo() {
//     return 3;
//   }
// }
// test(); // output: undefined 3
// console.log(x);
// var x = 10;

//***** */
// (function () {
//   console.log(inner);
//   inner();

//   function inner() {
//     console.log("inner");
//   }
// })();
// // output: [Function: inner]  inner

// &&
// (function () {
//   console.log(inner);

//   inner();
//   var inner = function () {
//     console.log("inner");
//   };
// })();
// output: TypeError: inner is not a function

// foo(); //output: goo
// function foo() {
//   console.log("goo");
// }

// bar(); //output: TypeError: bar is not a function
// var bar = () => {
//   console.log("bar");
// };

//***************** */
// (function () {
//   f(); // this print 2

//   f = function () {
//     console.log(1);
//   };
// })(); //immediately invoked functions

// function f() {
//   console.log(2);
// }

// f(); // this will print 1
//output: 2 1

// ***********
// (function () {
//   var x = 0;

//   function x() {}

//   console.log(x);
// })();
// output: 0

// var y = 4; //use let gives error as: SyntaxError: Identifier 'y' has already been declared
// function y() {}
// console.log(y); //output: 4

// ************
// var f = function g() {
//   return 9;
// };

// console.log(f());

// var f = function g() {
//   return 23;
// };
// typeof g(); // directly can not called as g is named expression function

// var f = function () {
//   return 5;
// };
// console.log(f());

// var f = () => {
//   return "arrow";
// };
// console.log(f());

// *************
// var x = 1,
//   y = (x = typeof x); //x = number

// console.log(y);
// console.log(x);

// *********************
// var x = [typeof x, typeof y][1];
// console.log(x); //undefined
// console.log(typeof x); //string

//************** */s
// let data = { foo: { bar: 1 } };
// console.log(
//   (function (data) {
//     return data.foo.bar;
//   })(data)
// );

// (function () {
//   logMe();

//   var logMe = function () {
//     console.log("first logMe");
//   };

//   function logMe() {
//     console.log("second logMe");
//   }

//   logMe();
// })();

//************ */
// console.log(new String("Hello") === "Hello"); // false
// console.log(new String("Hello") == "Hello"); // true

// ************************
// (function () {
//   var b = 1;
//   foo();
//   function foo() {
//     console.log("foo");
//   }
// })();

// (function () {
//   var a = "initial";
//   if (a) {
//     function f() {
//       console.log("1");
//     }
//   } else {
//     console.log("2");
//   }

//   f();
// })();

// (function () {
//   var a = 1;
//   //   f(); //TypeError: f is not a function due to if(){}else{}

//   if (a) {
//     function f() {
//       console.log("1");
//     }
//   } else {
//     function f() {
//       console.log("2");
//     }
//   }

//   f(); // 2
// })();

//***********************************/
// falseString = "false";

// if (true) {
//   var falseString;
//   if (falseString) {
//     console.log("false" === true);
//     console.log("false" === false);
//   }
// }

// ***************
// var a = (1, 2, 3, 6);
// console.log(a); //output: 6

// ****************
// var text = "outside";
// function logIt() {
//   console.log(text);
//   var text = "inside";
// }
// logIt(); // output: undefined

//************ */
// const a = {
//   value: 1,
//   valueOf: function () {
//     return this.value++;
//   },
// };
// console.log(a == 1 && a == 2 && a == 3 && a == 4 && a == 5); // Outputs: true

// const x = {
//   value: 3,
//   valueOf: function () {
//     return this.value++;
//   },
// };
// console.log(x == 3 && x == 4);

// ************************
// let a = 1;

// var b = function () {
//   a = 10;
//   return a;

//   function a() {
//     a = 5;
//   }
// };

// console.log(b(), a);

// ***********************

// var x = [typeof x, typeof y][1];

// console.log(typeof x); // string
// console.log(typeof typeof x); // string

// *****************
// console.log(
//   (function f() {
//     function f() {
//       return 1;
//     }

//     return f();  //output: 1

//     function f() {
//       return 2;   //comes first that's why output: 2
//     }
//   })()
// );
//output: 2

// const f = (function () {
//   return 2;
// })();
// console.log(f);  //output: 2

// console.log(
//   (function f() {
//     function f() {
//       return 1;
//     }

//     return f();
//   })()
// );
// output: 1

// ****************************
// function f() {
//   return f;
// }

// console.log(new f() instanceof f); //false ?

// *************************************
// var text = "outside";
// function logIt() {
//   console.log(text);
//   var text = "inside"; //overide
// }
// logIt(); //output: undefined

// ***********************************

// (function () {
//   var a = 2;
//   f();
//   if (a) {
//     function f() {
//       console.log("1");
//     }
//   } else {
//     function f() {
//       console.log("2");
//     }
//   }
// })();

// output: TypeError due to if else

// ****************************
// falseStr = "false";

// if (true) {
//   var falseStr;
//   if (falseStr) {
//     console.log("hello");
//   }
// }

// myName = "samson";
// var myName;
// console.log(myName);

// *********************************
// var a = {
//   currentValue: 0,
//   valueOf() {
//     return (this.currentValue += 1);
//   },
// };

// var eq = a == 1 && a == 2 && a == 3;
// console.log(eq);

// *********************************

// foo(); // this makes output: typeError: foo is not function // at first but

// var foo = function () {
//   console.log(false);
// };

// foo(); // output: false

// function foo() {
//   console.log(true);
// }

// foo();

// lastly output: true false false

//as we know

// foo();
// function foo() {
//   console.log("foo");
// }
// output: foo

//but gives typeError: foo is not functio when

// foo();
// var foo = function () {
//   console.log("foo");
// };

// *****************************************

// =================================================================================
// ============================================Revision for practise=====================================
// =================================================================================

// var a = 20;

// function b() {
//   a = 40;
//   console.log(a);
//   return;
// }
// console.log(a); //output: 20 as we are not calling b()
// but

// var a = 20;

// function b() {
//   a = 40;
//   console.log(a);
//   return;
// }
// b(); //output: 40
// console.log(a); //output: 40 as we have calling b()

// ***********************************************
// var a = {};
// a[{ key: "b" }] = 230;
// console.log(a[{}]); //output: 230

// var a = {};
// var b = { key: "b" };
// a[b] = 240;
// console.log(a); //output: 240
// console.log(a[b]); //output: 240

// var a = {};
// var b = { key: "b" };
// var c = { key: "c" };
// a[b] = 240;
// a[c] = 340;
// console.log(a); //output: 340
// console.log(a[b]);  //output: 340

// *****************************************************
// console.log(x);
// var x = 20;
// output: undefined

// and

// function test() {
//   var x = 20;
// }
// test();
// console.log(x); //output: x is not definde  // scope

// **************************************************
// console.log(bar); //output: [Function: bar]
// console.log(bar()); //output: 3;
// function bar() {
//   return 3;
// }

//but

// console.log(bar); //output: undefined
// console.log(bar()); //output: TuperError: bar is not a function
// var bar = function () {
//   return 3;
// };

// *******************************************************************
// function test() {
//   console.log(x); //output: undefinded
//   console.log(bar()); //output: 3
//   var x = 10;

//   function bar() {
//     return 3;
//   }
// }
// test();

// but

// function test() {
//   console.log(x); //output: undefinded
//   console.log(bar()); //output: TypeError: bar is not a function
//   var x = 10;

//   var bar = function () {
//     return 3;
//   };
// }
// test();

// and

// (function () {
//   console.log(inner); //undefined
//   inner(); //output: TypeError:  inner is not a function
//   var inner = function () {
//     console.log("inner");
//   };
// })();
// output: undefined and TypeError: inner is not defined

// **********************************************************
// console.log(foo());
// foo = function () {
//   console.log("foo");
// };
// output: ReferenceError: foo is not defined

// &&

// (function () {
//   foo();
//   foo = function () {
//     console.log("foo");
//   };
// })();
// output: ReferenceError: foo is not defined

// but

// (function () {
//   foo(); //output: outer foo
//   foo = function () {
//     console.log("inner foo");
//   };
// })();

// function foo() {
//   console.log("outer foo");
// }
// // &&
// foo(); // output: inner foo

// and

// (function () {
//   logMe();

//   var logMe = function () {
//     console.log("first logMe");
//   };

//   function logMe() {
//     console.log("second logMe");
//   }

//   logMe();
// })();

// ******************************************************
// var x = 40;
// function x() {
//   console.log(x);
// }
// console.log(x); //output: 40
// x(); //output: TypeError: x is not a function

// let y = 40;
// function y() {} //SyntaxError: Identifier 'x' has already been declared
//it is bcz var can be redeclear and reassign but not let

// and

// (function () {
//   var x = 10;
//   function x() {}
//   console.log(x);
// })();
// output: 10

// but

// (function () {
//   let x = 30;
//   function x() {}
// })();
// output: SyntaxError: Identifier 'x' has already been declared

// **************************************************************
// we wrte like
// var f = function () {
//   console.log("foo");
// };
// f(); //output: foo

// also can write
// var f = function g() {
//   console.log("foo");
// };
// f(); //output: foo
//but we can not call g()

// *************************************************
// var x = 2;
// z = y = x = typeof x;
// console.log(z); //output: number

// ***************************************************
// var x = [typeof x, typeof y][1];
// console.log(typeof x); //output: string

// ********************************************************
// let data = { foo: { bar: 1 } };
// console.log(
//   (function (data) {
//     return data.foo;
//   })(data)
// );

// *******************************************************
// console.log(new String("hello") === "hello"); //false
// console.log(new String("hello") == "hello"); //true

// *********************************************************
// var x = true;
// console.log(f); // output: undefined
// console.log(f()); // output: TypeError: f is not a function

// if (x) {
//   function f() {
//     console.log("true");
//   }
// } else {
//   console.log("false");
// }

//but we can call

// var x = true;
// f();

// function f() {
//   console.log(x);
// }

// same as

// (function () {
//   var x = true;
//   //   f(); //output: TypeError: f is not a function
//   if (x) {
//     function f() {
//       console.log(x);
//     }
//   } else {
//     function f() {
//       console.log(false);
//     }
//   }

//   f(); //output: true
// })();

// ***********************************************************************

// falseString = "false";

// if (true) {
//   var falseString;
//   if (falseString) {
//     console.log("false" === false);
//   }
// }

// ********************************************************************
// important
// var text = "outside";

// function logIt() {
//   console.log(text);
// }
// logIt();  //output: outside

// but

// var text = "outside";

// function logIt() {
//   console.log(text);
//   var text = "inside";
// }
// logIt(); //output: undefined

//****************************************************** */

// const a = {
//   x: 1,
//   valueOf: function () {
//     return this.x++;
//   },
// };

// console.log(a == 1 && a == 2 && a == 3); //output: true
// console.log(a === 1 && a === 2 && a === 3); //output: false

// *******************************************************
// var x = "outer";

// function f() {
//   x = "inner";
//   return x;

//   function x() {
//     x = 40;
//   }
// }
// console.log(f()); // output: inner
// console.log(x); // output: outer

// ****************************************************************
// console.log(
//   (function () {
//     function f() {
//       return 1;
//     }

//     return f(); //output: 1 but

//     function f() {
//       return 2; //this comes first so output: 2
//     }
//   })()
// );

// and

// console.log(
//   (function () {
//     function f() {
//       return 1;
//     }

//     return f(); //output: 1 but

//     function f() {
//       return 2; //output: 2 but
//     }

//     function f() {
//       return 4; //this comes first so output: 4
//     }
//   })()
// );

// ********************************************************
