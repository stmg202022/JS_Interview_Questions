const fun = () => {
  console.log("hello");

  setTimeout(() => {
    console.log("hi");
  }, 0);

  console.log("samson");
};

fun(); //Output: hello samson hi
