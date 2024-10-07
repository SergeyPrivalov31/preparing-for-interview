// function foo(){
// const x = 10;
  
// return {
//   x: 20,
//   bar: () => {
//     console.log(this.x)
//   },
//   baz: function() {
//     console.log(this.x)
//   }
// };
// }

// const obj1 = foo();
// obj1.bar(); 
// obj1.baz(); 

// const obj2 = foo.call({ x: 30 });
// obj2.bar();
// obj2.baz();


// // Задача 2 - что будет в логах

// console.log('1')
// Promise.reject('2')
//   .then((res) => {
//     console.log(res);
    
//     Promise.resolve('3')
//       .then((res) => {
//         console.log(res);
//         setTimeout(() => {console.log('4')}, 0);
//       })
//   })
//   .catch((err) => {
//     console.log(err);
//     throw new Error(err);
//   })  
//   .then((res) => console.log(res))
//   .finally((res) => {
//     console.log(res);
//     setTimeout(() => {console.log('5')}, 0);
//   });
// console.log('6');


// // Задача 3 - реализовать isCircle, которая изначально выглядела так:
// // function isCircle(...): ... {
// //   ...
// // }

// type Rectangle = {
// width: number;
// height: number;
// };

// type Circle = {
// radius: number;
// };

// // вот эту функцию я написал, но самое важное "figure is Circle" за меня написали =(
// function isCircle(figure: Rectangle | Circle): figure is Circle {
//   return radius in figure;
// }

// function getArea(figure: Rectangle | Circle): number {
// return isCircle(figure)
//   ? Math.pow(figure.radius, 2) * Math.PI
//   : figure.width * figure.height;
// }


// // Задача 4 - отрефакторить компонент. Ниже уже готовый вариант, а исходника не осталось 🙁

// import {avatarContainerStyles} from './styles.ts';

// type TProps = {
// imageProps: TImageProps;
// isEdit?: boolean;
// }

// export function UserAvatar(props: TProps): JSX.Element {
//   const {imageProps, isEdit} = props;

// return (
//   <div className={avatarContainerStyles}>
//       {isEdit && <AvatarEditButtons />}
//       <Image {...imageProps} key={imageProps.url}/>
//   </div>
// );
// }