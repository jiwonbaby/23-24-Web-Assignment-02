/**
 * 
 * 학생이라는 객체를 만들고, 2번 과제에서 만든 사람 객체를 상속 받아라
 * 
 * 학생은 say 함수를 호출 했을때 "I'm Student!" 라고 출력되게 하라
 * 
 * 그리고 학생의 say 함수를 호출 하라
 */
//import Person from './2.js';

class Person {
    constructor() {
        this.say();
    }
    say() {
        console.log('say!');
    }
}

class Student extends Person {
    say() {
        console.log('I\'m Student!');
    }
}

function solution() {

    const student = new Student();
    student.say();

}

solution();