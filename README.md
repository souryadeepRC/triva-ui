# Triva UI

UI library for attractive and customizable web component

## Version

![image](https://img.shields.io/npm/v/react-web-theme)
![image](https://img.shields.io/npm/dm/react-web-theme)
![image](https://img.shields.io/github/last-commit/souryadeepRC/react-web-theme)

## Implemented Technologies

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Compatible With

- React >=16.8.0
- Typescript

## Installation

You can install React Web Theme via npm:

```bash
  npm install triva-ui
```

# Components

## TUIPagination

## TUISearch

## TUITable

## TUITextField

## TUIModal

# Hooks

## useToggle

A custom hook which handles a boolean state variable and perform the toogle change of that

```bash
  const [ value, handleToggle ] = useToggle(false);
```

This hook will return an array which will have values like below<br/>
index 0 :: boolean value which represent the value
index 1 :: callback function which handles the toogle feature of that value. This function will not return anything.
