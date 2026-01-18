# 📘 Node.js – Types of Modules (Notes)

---

## 🔹 What is a Module in Node.js?

### English:

A **module** is a reusable block of code that performs a specific task.

### Bangla:

**Module** হলো code-এর এমন একটা অংশ যেটা বারবার ব্যবহার করা যায়।

---

## 🔹 Types of Modules in Node.js

Node.js-এ মোট **3 ধরনের Module** আছে।

---

## 1️⃣ Core (Built-in) Modules

### ✔ Definition:

Modules that are **already included in Node.js**.

### ✔ Installation:

❌ No installation required

### ✔ Common Core Modules:

* `fs` → File system
* `http` → Create web server
* `path` → Handle file paths
* `os` → Operating system info
* `events` → Event handling

### ✔ Example:

```js
const fs = require("fs");

fs.writeFileSync("file.txt", "Hello Node.js");
```

### ✔ Bangla Note:

Node.js install করলেই যেগুলো পাওয়া যায় সেগুলোই
👉 **Core Module**

---

## 2️⃣ Local Modules (User-defined Modules)

### ✔ Definition:

Modules that are **created by the developer**.

### ✔ Installation:

❌ No installation required

### ✔ Example:

**math.js**

```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

**app.js**

```js
const add = require("./math");

console.log(add(10, 5));
```

### ✔ Bangla Note:

নিজে বানানো file বা function যেগুলো অন্য file-এ ব্যবহার করি
👉 **Local Module**

---

## 3️⃣ Third-Party Modules (External Modules)

### ✔ Definition:

Modules created by **other developers** and installed using **npm**.

### ✔ Installation Required:

✅ Yes

### ✔ Popular Third-Party Modules:

* `express` → Web framework
* `mongoose` → MongoDB
* `cors` → Handle CORS
* `dotenv` → Environment variables

### ✔ Install Example:

```bash
npm install express
```

### ✔ Use Example:

```js
const express = require("express");
const app = express();
```

### ✔ Bangla Note:

npm দিয়ে install করে ব্যবহার করি
👉 **Third-Party Module**

---

## 🔹 Summary Table

| Module Type | Created By | Install Needed |
| ----------- | ---------- | -------------- |
| Core        | Node.js    | ❌ No           |
| Local       | Developer  | ❌ No           |
| Third-Party | Others     | ✅ Yes          |

---
