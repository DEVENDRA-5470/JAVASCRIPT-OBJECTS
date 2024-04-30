let student_data={
    first_name:"Dev",
    last_name:"Roy",
    roll_no:123,
    mob:78097789990,
   
}
// update
student_data.address="dreamer infotech"
student_data.marks=[10,20,30,40]

// 
// Accessing.
// console.log(student_data.first_name)
// console.log(student_data.last_name)
// console.log(student_data.roll_no)
// console.log(student_data.mob)

// console.log(student_data.first_name)
// // key -------------------------
// console.log(Object.keys(student_data))
// // values
// console.log(Object.values(student_data))
// // entries
// console.log(Object.entries(student_data))



console.log("----------------- Traversing -------------------")
console.log("------FOR LOOP --------------")
let key=Object.keys(student_data)
for (let i=0;i<key.length;i++){
    console.log(`${i}=>${key[i]}:${student_data[key[i]]}`)
}

console.log("------- WHILE LOOP -------")
let key1=Object.keys(student_data);
let c=0;
while(c<key1.length){
    console.log(`${key1[c]} : ${student_data[key1[c]]}`)
    c++
}


