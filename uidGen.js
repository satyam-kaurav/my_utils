function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

function flip_flop(uid_str) {
  const [prefix, uid] = uid_str.split("#");
  let uid_arr = Array.from(uid);
  const uid_len = uid_arr.length;

  for (let index = uid_len - 1; index >= 0; index--) {
    const element = uid_arr[index];

    if (element >= "A" && element <= "Z") {
      if (element < "Z") {
        const nxt = nextChar(element);
        uid_arr[index] = nxt;
        break;
      } else if (element === "Z") {
        uid_arr[index] = "A";
        continue;
      }
    } else if (element >= "0" && element <= "9") {
      if (element < "9") {
        const nxt = nextChar(element);
        uid_arr[index] = nxt;
        break;
      } else if (element === "9") {
        uid_arr[index] = "0";
        continue;
      }
    }
  }

  return prefix + "#" + uid_arr.join("");
}

const prev_uid = "parent#0000A9";
const new_uid = flip_flop(prev_uid);

console.log(prev_uid, new_uid);
