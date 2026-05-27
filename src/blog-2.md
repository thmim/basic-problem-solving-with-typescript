The four pillars of OOP

বড় স্কেলের প্রজেক্টকে জটলা কমিয়ে একদম গোছানো রাখার জন্য OOP (Object-Oriented Programming) এর গুরুত্ব অপরিসীম। আর এর পেছনে কল কাঠি নাড়ে ৪টি শক্তিশালী পিলার—Inheritance, Polymorphism, Abstraction, এবং Encapsulation।

Inheritance:
বাবার সম্পত্তি যেমন সন্তান পায়, ঠিক তেমনি একটি ক্লাসের সব কোড বা লজিক যখন অন্য একটি ক্লাস কোনো খাটনি ছাড়াই পেয়ে যায়, তাকেই Inheritance বলে। বড় প্রজেক্টে একই কোড বারবার লেখা কমানোর জন্য এটি দারুণ কার্যকর।

ধরেন আপনি একটি ওয়েব সাইটের ইউজার ম্যানেজমেন্ট নিয়ে কাজ করছেন। সেখানে সধারন ইউজার ও থাকবে আবার এডমিনও থাকবে। দুইজনেরই কিন্তু নাম, ইমেইল এই জিনিস গুলো থাকবে। এক্ষেত্রে আমরা inheritance ব্যবহার করে জটিলতা কমিয়ে এক ক্লাসের ভেতর লজিক লিখতে পারি।

Example code:
class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} login korce`);
    }
}

'extends' ব্যবহার করে Admin ক্লাস User-এর সবকিছু পেয়ে গেল!
class Admin extends User {
    deleteUser() {
        console.log("user deleted");
    }
}

const newAdmin = new Admin("korim", "admin@test.com");
newAdmin.login(); 
newAdmin.deleteUser();


Polymorphism:
একই নামের একটা ফাংশন বা মেথড যখন ভিন্ন ভিন্ন পরিস্থিতিতে ভিন্ন ভিন্ন আচরণ করে, তাকে Polymorphism বলে। একই জিনিসের ভিন্ন ভিন্ন রূপ।

আপনার নিজের কথাই চিন্তা করুন। আপনি যখন বন্ধুদের সাথে থাকেন তখন আপনার আচরণ একরকম । আপনি যখন ইন্টারভিউ বোর্ডে বা ক্লাসরুমে থাকেন তখন আপনার আচরণ একদম ফরমাল। আবার আপনি যখন বাসায় পরিবারের সাথে থাকেন তখন আপনার রূপ আরেক রকম। মানুষ কিন্তু আপনি একজনই, কিন্তু জায়গাভেদে আপনার আচরণ বদলে যাচ্ছে। কোডিংয়েও যখন একই নামের ফাংশন আলাদা আলাদা জায়গায় আলাদাভাবে কাজ করে, সেটাই হলো Polymorphism.

Example code:
class Animal {
    makeSound() {
        console.log("প্রাণীটি ডাকছে");
    }
}

কুকুর ডাকলে হবে ঘেউ ঘেউ
class Dog extends Animal {
    makeSound() {
        console.log("ঘেউ ঘেউ!");
    }
}

বিড়াল ডাকলে হবে মিউ মিউ
class Cat extends Animal {
    makeSound() {
        console.log("মিউ মিউ!");
    }
}

এখানে আপনাকে dogSound(), catSound() এভাবে এক গাদা আলাদা নাম মনে রাখতে হবে না। আপনি শুধু makeSound() ডাকবেন, যে প্রাণী সে তার নিজের মতো করে শব্দ করে নেবে।


Abstraction:

আপনি যখন টাকার মেশিন ATM থেকে টাকা তোলেন, আপনি স্ক্রিনে শুধু টাকার পরিমাণ লিখে "Withdraw" বাটনে চাপ দেন আর টাকা বেরিয়ে আসে।

মেশিনের ভেতরে কীভাবে নেটওয়ার্ক ব্যাংকের সাথে যোগাযোগ করলো, কীভাবে চাকা ঘুরে টাকাটা গুনে আপনার হাতে আসলো—এই কোটি কোটি জটিল হিসাব কি আপনার জানার দরকার আছে? নেই। আপনার সামনে শুধু একটি বাটন আছে। এটাই হলো Abstraction।


Encapsulation:
নিজের পার্সোনাল জিনিস বা ডেটাকে তালা মেরে রাখা, যাতে বাইরের কেউ হুট করে এসে সেটা নষ্ট করতে না পারে। কিছু করতে হলে আপনার অনুমতি নিয়ে করতে হবে। এটাই Encapsulation।

আপনার স্মার্টফোন-এর কথা ধরুন। আপনার ফোনের সব পার্সোনাল মেসেজ, ছবি একটি জাইগাই ভেতরে সুরক্ষিত বা 'ক্যাপসুল' করা আছে। রাস্তার যেকোনো মানুষ এসে আপনার ফোনে হাত দিয়ে ছবি ডিলিট করতে পারবে না। তাকে যদি আপনার ফোনের ছবি দেখতেই হয়, তবে আপনার সেট করা পাসওয়ার্ড দিয়ে ফোন আনলক করতে হবে।

Example code:

class Student {
    
    private age: number = 23;

    বয়স বদলাতে হলে এই নিয়মের মধ্য দিয়ে আসতে হবে
    setAge(newAge: number) {
        if (newAge > 0) { 
            this.age = newAge;
        } else {
            console.log("ভুল বয়স দেওয়া হয়েছে!");
        }
    }

    getAge() {
        return this.age;
    }
}

const student = new Student();
student.age = -5; 
সরাসরি এক্সেস বন্ধ! টাইপস্ক্রিপ্ট এখানে আটকে দেবে।
student.setAge(24);
সঠিক নিয়ম মেনে বয়স আপডেট করা হলো।


This is why Inheritance, Polymorphism, Abstraction, Encapsulation are the four pillar of OOP in TypeScript.