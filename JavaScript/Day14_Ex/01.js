const Students = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Henry", "Ivy", "Jack", "Katie", "Liam"];

let house=[]
for (const Student of Students) {
    if(Student.length<6)
    {
        house.push("Gryffindor")
    }
    else if(Student.length<8)
    {
        house.push("Hufflepuff")
    }
    else if(Student.length<12)
    {
        house.push("Ravenclaw")
    }
    else
    {
        house.push("Slytherin")
    }
}
console.log(house)