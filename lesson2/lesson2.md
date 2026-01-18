# const fs = require('fs');

Explanation : 

এই লাইনে fs নামের একটি ভ্যারিয়েবলে Node.js এর বিল্ট-ইন ফাইল সিস্টেম (File System) মডিউলটি import করা হয়েছে।
এটি ব্যবহার করে ফাইল তৈরি, পড়া, লেখা, আপডেট, ডিলিট ইত্যাদি ফাইল সংক্রান্ত কাজ করা যায়।

সংক্ষেপে:
const fs = require('fs');
মানে হচ্ছে—Node.js এর ফাইল সিস্টেম মডিউলটি ব্যবহার করার জন্য কোডে যুক্ত করা হয়েছে।

fs.writeFile("demo1.txt", "My name is Ariful Islam", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Successful")
    }
});

explanation : 

এই কোডটি দিয়ে demo1.txt নামে একটি ফাইল তৈরি করা হচ্ছে এবং তাতে "My name is Ariful Islam" লেখা হচ্ছে।
এটি asynchronous (অ্যাসিনক্রোনাস) পদ্ধতিতে কাজ করে—মানে, কাজটি শেষ হলে নিচের ফাংশনটি (callback) চালু হয়।

যদি কোনো সমস্যা (error) হয়, তাহলে err ভ্যারিয়েবলটি true হবে এবং error মেসেজ দেখাবে।
যদি সফল হয়, তাহলে "Successful" মেসেজটি দেখাবে।
সংক্ষেপে:
এই কোড দিয়ে নতুন ফাইল তৈরি ও লেখা যায়, এবং কাজ সফল হলে বা সমস্যা হলে তা জানানো হয়।