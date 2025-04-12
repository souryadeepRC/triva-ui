# ✨ Triva UI

**A modern, customizable, and elegant UI component library**  
Build stunning interfaces effortlessly with beautifully styled, reusable React components.

---

🎨 **Beautiful by default** – Clean, accessible designs out of the box  
⚙️ **Fully customizable** – Easily adapt styles and behavior to your needs  
⚡ **Built for speed** – Lightweight components using MUI and Framer Motion

---


## Version

![image](https://img.shields.io/npm/v/react-web-theme)
![image](https://img.shields.io/npm/dm/react-web-theme)
![image](https://img.shields.io/github/last-commit/souryadeepRC/react-web-theme)

## 📖 Live Storybook

Check out the interactive component documentation on **Storybook**:

👉 [**View triva-ui in Storybook**](https://67f400a0e86956d7d139cf59-hibtmwlahr.chromatic.com/?path=/docs/introduction-welcome--docs)


## Implemented Technologies

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/npm/v/motion?style=for-the-badge&logo=motion&logoColor=white&label=Motion
)
## Compatible With

- React >=16.8.0
- Typescript

## Installation

You can install React Web Theme via npm:

```bash
  npm install triva-ui
```

# Components

### 📚 List of components

- [🔧 Triva Option Menu](#-triva-option-menu) 


## TUIPagination

## TUISearch

## TUITable

## TUITextField

## TUIModal

## 📋 Triva Option Menu

The `TrivaOptionMenu` is a customizable and animated dropdown menu component built with **React**, **MUI**, and **Framer Motion**. It's ideal for creating context menus or action dropdowns with smooth animations and flexible positioning.

---

## ✨ Features

- ✅ Customizable menu trigger icon
- ✅ Animated dropdown using `motion`
- ✅ Auto-positioning based on trigger element
- ✅ Lightweight and easily composable
- ✅ Built with accessibility in mind

---

## 🧠 Usage

```bash
import { TrivaOptionMenu } from 'triva-ui';

const actions = [
  { label: "Edit", callback: () => console.log("Edit clicked") },
  { label: "Delete", callback: () => console.log("Delete clicked") },
];

<TrivaOptionMenu
  position="bottom-right" // or "bottom-left"
  actions={actions}
/>;

```

## 🔧 Props

| Prop       | Type                                              | Default             | Description                                                   |
|------------|---------------------------------------------------|---------------------|---------------------------------------------------------------|
| `position` | `"bottom-left"` \| `"bottom-right"`              | `"bottom-left"`     | Sets the dropdown menu's alignment relative to the icon.     |
| `MenuIcon` | `React.ReactNode`                                 | `<MoreVertIcon />`  | Custom icon for the trigger button.                           |
| `actions`  | `Array<{ label: string; callback: () => void }>` | **Required**        | Array of action items with labels and callbacks.              |

---

# Hooks

## useToggle

A custom hook which handles a boolean state variable and perform the toogle change of that

```bash
  const [ value, handleToggle ] = useToggle(false);
```

This hook will return an array which will have values like below<br/>
index 0 :: boolean value which represent the value
index 1 :: callback function which handles the toogle feature of that value. This function will not return anything.
