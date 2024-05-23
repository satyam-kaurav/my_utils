function single_flip(main_char, lower_bound, upper_bound) {
  return main_char === upper_bound
    ? lower_bound
    : String.fromCharCode(main_char.charCodeAt(0) + 1);
}

function flip_flop(uid_str) {
  const [prefix, uid] = uid_str.split("#");
  let uid_arr = Array.from(uid);
  const uid_len = uid_arr.length;

  for (let index = uid_len - 1; index >= 0; index--) {
    const element = uid_arr[index];

    if (element >= "A" && element <= "Z") {
      uid_arr[index] = single_flip(element, "A", "Z");
      if (element === "Z") {
        continue;
      } else {
        break;
      }
    } else if (element >= "0" && element <= "9") {
      uid_arr[index] = single_flip(element, "0", "9");
      if (element === "9") {
        continue;
      } else {
        break;
      }
    }
  }

  return `${prefix}#${uid_arr.join("")}`;
}

const prev_uid = "parent#0000A9";
const new_uid = flip_flop(prev_uid);

console.log(prev_uid, new_uid);
