// import { react, useState } from "react";
// export const Tasks = () => {
// №1
// function push(a: number[]) {
//   // let b = a;
//   a.push(4);
//   // Что выведет?
//   console.log('Duplicate- ', a);
// }

// const a = [1, 2, 3];

// push(a);
// Что выведет?
// console.log('original', a);

// №2
// function numberToWord(str) {
//   const num = parseInt(str, 10); // Преобразуем строку в число с основанием 10

//   switch (num) {
//     case 1:
//       console.log("one");
//       break;
//     case 2:
//       console.log("two");
//       break;
//     case 3:
//       console.log("three");
//       break;
//     case 4:
//       console.log("four");
//       break;
//     case 5:
//       console.log("five");
//       break;
//     case 6:
//       console.log("six");
//       break;
//     case 7:
//       console.log("seven");
//       break;
//     case 8:
//       console.log("eight");
//       break;
//     case 9:
//       console.log("nine");
//       break;
//     case 10:
//       console.log("ten");
//       break;
//     default:
//       console.log("Number is not between 1 and 10 or is invalid.");
//   }
// }

// // Пример использования:
// numberToWord("2")
// numberToWord("10");
// numberToWord("11");

// №3
// const [number, setNumber] = useState(0);

// return (
//   <>
//     <h1>{number}</h1>
//     <button
//       onClick={() => {
//         setNumber((prev) => prev + 1);
//         setNumber((prev) => prev + 1);
//         setNumber((prev) => prev + 1);
//       }}
//     >
//       Increment
//     </button>
//   </>
// );

// №*
// const [data, setData] = React.useState(null);

// React.useEffect(() => {
//   fetchData().then((response) => {
//     setData(response.data);
//   });
// }, []);

// return (
//   <div>{data ? data : 'Loading...'}</div>
// );

//   return <div>{1233}</div>;
// };
