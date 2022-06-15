import React, { useState } from "react";

function expensiveRandom(level: number) {
  let k = 0;
  for (let i = 0; i < 1_000_000; i++) k += Math.random();
  console.log("expensiveRandom", level, k);
}

function Piece({ a, level }: { a: number; level: number }) {
  const c = expensiveRandom(level);
  const isEnd = level === 0;
  if (isEnd) return <span>a: {a}</span>;
  return (
    <div>
      Level: {level}
      <br />
      <Piece a={a} level={level - 1} />
    </div>
  );
}

export function Example2() {
  const [a, setA] = useState(1000);

  return (
    <div>
      <input
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
        type="number"
      />
      <Piece a={a} level={10} />
    </div>
  );
}

// const Piece2 = Turbo.reactify(
//   (_c = function Piece___(_ref) {
//     let {
//       proxy: { a, level },
//     } = _ref;
//     const c = Turbo.combine(level, (level) => expensiveRandom(level));
//     return creatElement(Turbo.Wrapper, {
//       __rt_type__: "div",
//       children: [
//         creatElement(Turbo.Wrapper, {
//           __rt_type__: "div",
//           children: ["Level: ", level],
//         }),
//         creatElement(Turbo.Wrapper, {
//           __rt_type__: "div",
//           children: Turbo.combine(level, (level) =>
//             level > 0
//               ? creatElement(Turbo.Wrapper, {
//                   a: a,
//                   level: Turbo.combine(level, (level) => level - 1),
//                   __rt_type__: Piece,
//                 })
//               : creatElement(Turbo.Wrapper, {
//                   __rt_type__: "span",
//                   children: ["a: ", a],
//                 })
//           ),
//         }),
//       ],
//     });
//   })
// );
