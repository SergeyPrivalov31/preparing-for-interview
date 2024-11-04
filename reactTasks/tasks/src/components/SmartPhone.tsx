import React from "react";

type AppleComponentProps = {
  iosVersion: number;
  model: "15" | "15 Plus" | "15 Pro" | "15 Pro Max";
};

type SamsungComponentProps = {
  androidVersion: number;
  model: "Galaxy S" | "Galaxy A" | "Galaxy Z" | "Galaxy Note";
};

type PropsByPhoneTypes = AppleComponentProps | SamsungComponentProps;

type ComponentMap = {
  samsung: React.FC<SamsungComponentProps>;
  apple: React.FC<AppleComponentProps>;
};

type SmartphoneComponentProps<T extends keyof ComponentMap> = {
  smartphone: T;
  componentProps: T extends "samsung"
    ? SamsungComponentProps
    : AppleComponentProps;
};

export const AppleComponent: React.FC<AppleComponentProps> = (props) => {
  return (
    <>
      <h1>Apple</h1>
      <div>Модель смартфона: Apple {props.model}</div>
      <div>Версия iOS: {props.iosVersion}</div>
    </>
  );
};

export const SamsungComponent: React.FC<SamsungComponentProps> = (props) => {
  return (
    <>
      <h1>Samsung</h1>
      <div>Модель смартфона: Samsung {props.model}</div>
      <div>Версия Android: {props.androidVersion}</div>
    </>
  );
};

const componentMap: ComponentMap = {
  samsung: SamsungComponent,
  apple: AppleComponent,
};

export function SmartphoneComponent<T extends keyof ComponentMap>(
  props: SmartphoneComponentProps<T>
): JSX.Element {
  const Component = componentMap[
    props.smartphone
  ] as React.ComponentType<PropsByPhoneTypes>;
  return <Component {...props.componentProps} />;
}

//Задача:
// type AppleComponentProps = {
//   iosVersion: number;
//   model: '15' | '15 Plus' | '15 Pro' | '15 Pro Max';
// };
// export const AppleComponent = (props: AppleComponentProps) => {
//   return (
//     <>
//       <h1>Apple</h1>
//       <div>Модель Apple смартфона: {props.model}</div>
//     </>
//   );
// };

// type SamsungComponentProps = {
//   androidVersion: number;
//   model: 'Galaxy S' | 'Galaxy A' | 'Galaxy Z' | 'Galaxy Note';
// };
// export const SamsungComponent = (props: SamsungComponentProps) => {
//   return (
//     <>
//       <h1>Samsung</h1>
//       <div>Модель Samsung смартфона: {props.model}</div>
//     </>
//   );
// };

// const componentMap = {
//   samsung: SamsungComponent,
//   apple: AppleComponent,
// };

// export function SmartphoneComponent<T>(props: T) {
//   //@ts-ignore
//   const Component = componentMap[props.smartphone];
//   //@ts-ignore
//   return <Component {...props.componentProps} />;
// }
