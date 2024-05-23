// function single_flip(main_char, bound) {
//   return main_char === bound[1]
//     ? bound[0]
//     : String.fromCharCode(main_char.charCodeAt(0) + 1);
// }

// function flip_flop(arr) {
//   const uid_len = arr.length;

//   for (let index = uid_len - 1; index >= 0; index--) {
//     const element = arr[index];
//     if (element <= "9") {
//       arr[index] = single_flip(element, "0", "9");
//       if (element === "9") {
//         continue;
//       } else {
//         break;
//       }
//     } else {
//       arr[index] = single_flip(element, "A", "Z");
//       if (element === "Z") {
//         continue;
//       } else {
//         break;
//       }
//     }
//   }

//   return arr;
// }

//best till now just a little overhead of array item in sigle_flip calls
// function flip_flop(arr) {
//   const uid_len = arr.length;

//   for (let index = uid_len - 1; index >= 0; index--) {
//     const element = arr[index];
//     arr[index] = single_flip(element, element <= "9" ? ["0", "9"] : ["A", "Z"]);

//     if (element === "9" || element === "Z") {
//       continue;
//     } else {
//       break;
//     }
//   }

//   return arr;
// }

//more momery overhead
// function flip_flop(arr) {
//   const uid_len = arr.length;

//   for (let index = uid_len - 1; index >= 0; index--) {
//     const element = arr[index];
//     const { lower_bound, upper_bound } =
//       element <= "9"
//         ? { lower_bound: "0", upper_bound: "9" }
//         : { lower_bound: "A", upper_bound: "Z" };

//     arr[index] = single_flip(element, lower_bound, upper_bound);

//     if (element === upper_bound) {
//       continue;
//     } else {
//       break;
//     }
//   }

//   return arr;
// }

//=========================================================================================================================

function single_flip(main_char, lower_bound, upper_bound) {
  return main_char === upper_bound
    ? lower_bound
    : String.fromCharCode(main_char.charCodeAt(0) + 1);
}

//continue was not needed :) and also it is more expandanble to more character set
function flip_flop(arr) {
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    if (element <= "9") {
      arr[index] = single_flip(element, "0", "9");
      if (element !== "9") break;
    } else {
      arr[index] = single_flip(element, "A", "Z");
      if (element !== "Z") break;
    }
  }
  return arr;
}

function uid_incr(prev_uid) {
  const [prefix, uid_str] = prev_uid.split("#");
  let uid_arr = Array.from(uid_str);
  const new_uid_str = flip_flop(uid_arr);
  return `${prefix}#${new_uid_str.join("")}`;
}

const prev_uid = "parent#0000A9Z";
const new_uid = uid_incr(prev_uid);

console.log(prev_uid, new_uid);
