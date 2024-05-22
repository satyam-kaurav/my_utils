function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

function flip_flop({ arr, lowestbound, highestbond }) {
  const last_item = arr.length - 1;
  console.log("b:", { arr, lowestbound, highestbond });
  let isFliped = false;
  for (let i in arr) {
    if (arr[i] < highestbond) {
      arr[i] = nextChar(arr[i]);
      break;
    } else if (arr[i] === highestbond) {
      arr[i] = lowestbound;
      if (parseInt(i) === last_item) isFliped = true;
      continue;
    }
  }

  console.log("a:", arr);
  return { arr, isFliped };
}

function uid_incr(perv_uid, uid_for) {
  const uid_tail = perv_uid.split("#")[1];
  let tail_digits = uid_tail.substring(0, 4);
  let tail_chars = uid_tail.substring(4, 7);

  let char_arr = tail_chars.split("").reverse();

  const { arr, isFliped } = flip_flop({
    arr: char_arr,
    lowestbound: "A",
    highestbond: "Z",
  });

  tail_chars = arr.reverse().join("");

  if (isFliped) {
    let digit_arr = tail_digits.split("").reverse();
    const { arr, isFliped } = flip_flop({
      arr: digit_arr,
      lowestbound: "0",
      highestbond: "9",
    });
    tail_digits = arr.reverse().join("");
  }

  return `${uid_for}#${tail_digits}${tail_chars}`;
}

const new_uid = uid_incr("parent#0000ZZZ", "parent");

console.log(new_uid);
