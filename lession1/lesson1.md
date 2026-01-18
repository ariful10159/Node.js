# index.js এবং student.js ব্যাখ্যা

## index.js
এই ফাইলে আমরা student.js থেকে কিছু ফাংশন এবং ভ্যারিয়েবল import করেছি।

```js
const {getName, getAge, result, name1} = require('./student');

console.log(getName());
console.log(getAge());
console.log(result);
console.log(name1);
```

- এখানে `require('./student')` ব্যবহার করে student.js থেকে module গুলো import করা হয়েছে।
- getName() এবং getAge() ফাংশন কল করে নাম ও বয়স দেখানো হয়েছে।
- result এবং name1 ভ্যারিয়েবলও console এ দেখানো হয়েছে।

## student.js
এই ফাইলে কিছু ফাংশন ও ভ্যারিয়েবল তৈরি করা হয়েছে এবং module.exports ব্যবহার করে একসাথে export করা হয়েছে।

```js
const getName = () => {
    return "Ariful  Islam";
}

const getAge = () => {
    return "25";
}

const cgpa = 3.92;
const name = "Ariful Islam";

module.exports = {
    getName,
    getAge,
    result: cgpa,
    name1: name
}
```

- এখানে getName এবং getAge ফাংশন দুটি return করে নাম ও বয়স।
- cgpa এবং name ভ্যারিয়েবলও আছে।
- module.exports ব্যবহার করে সবগুলো একসাথে export করা হয়েছে।
- result নামে cgpa এবং name1 নামে name export করা হয়েছে।

**নোট:**
- আলাদা আলাদা ভাবে export না করে, module.exports এর মাধ্যমে একসাথে export করা যায়।
- index.js এ import করার সময় object destructuring ব্যবহার করা হয়েছে।
