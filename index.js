function get5(callback = () => console.log("runned 6")) {
  return callback;
}

function get3(callback1, callback2) {
  if (callback2) {
    return callback2(callback1);
  }

  console.log("runned 3");
}

function get4(callback1, callback2) {
  console.log("runned 4");
  return callback1(callback2);
}

function get2(callback) {
  console.log("runned 2");
  return callback();
}

function get1(callback) {
  if (callback) return;
  console.log("runned 1");
  return (callback2) => {
    if (callback2) {
      return callback2;
    }

    console.log("runned any");
  };
}

get5(get3(get4(get2, get1), get5(get2(get1)))())();
