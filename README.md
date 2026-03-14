<p align="center">
<img src="https://icons.kishore-sv.me/mmk-white.png" alt="mmk-icons"/>
<br>
<a href="https://www.npmjs.com/package/mmk-icons">
<img src="https://img.shields.io/npm/v/mmk-icons" alt="npm version"/>
</a>
<a href="https://www.npmjs.com/package/mmk-icons">
<img src="https://img.shields.io/npm/l/mmk-icons" alt="npm license"/>
</a>
<a href="https://www.npmjs.com/package/mmk-icons">
<img src="https://img.shields.io/npm/dt/mmk-icons" alt="npm downloads"/>
</a>

</p>


<p align="center">
<h1 align="center">mmk-icons</h1>
<p align="center">A collection of developer icons — React, Next.js, TailwindCSS, GitHub, and more — built for seamless integration into <b>React</b> and <b>Next.js</b> projects.</p>
</p>

<p align="center">
 - <a align="center" href="https://icons.kishore-sv.me/icons">
icons
</a>
 - <a align="center" href="https://icons.kishore-sv.me/installation">
installation
</a>
 - <a align="center" href="https://icons.kishore-sv.me/usage">
usage
</a>
</p>

## Features

- Ready-to-use React components
- Full styling support (`className`, `fill`, `style`)
- Easy to scale, animate, and theme with Tailwind CSS or custom styles
- Tree-shakable and lightweight

---
## Npm Package

[![image](https://github.com/user-attachments/assets/74cd9ba0-45e7-42b8-b8b1-71605c703953)
](https://www.npmjs.com/package/mmk-icons)

## Installation

```bash
npm install mmk-icons

Basic Usage

import { NextjsIcon } from 'mmk-icons';

const App = () => {
  return <NextjsIcon />;
};

export default App;

** Custom Styling **

import { NextjsIcon } from 'mmk-icons';

const App = () => {
  return (
    <NextjsIcon
      className="text-neutral-900"
      fill="white"
      style={{ width: "30px", height: "30px" }}
    />
  );
};

export default App;

- <NextjsIcon />
+ <NextjsIcon
+   className="text-neutral-900"
+   fill="white"
+   style={{ width: "30px", height: "30px" }}
+ />





Use any of the following:

ReactIcon

NextjsIcon

TailwindIcon

MongoDbIcon

PostgresIcon

SqlIcon

HtmlIcon

CssIcon

JsIcon

TsIcon

ReduxIcon

GraphQlIcon

ExpressIcon

DockerIcon

GitIcon

GoogleIcon

GitHubIcon

...and more
