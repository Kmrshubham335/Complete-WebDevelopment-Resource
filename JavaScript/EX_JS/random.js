const randomNumber = Math.floor(Math.random() * 100) + 1; //generate the random number

const random =randomNumber/3 //divide the random number in 5parts
let first ,second,third

if(random<0.33)
{
    first="Creative"
}
else if(random>0.33 && random<0.66)
{
    first="Innovative"
}
else
{
    first="Epic"
}

if(random<0.33)
{
    second="Teach"
}
else if(random>0.33 && random<0.66)
{
    second="Adventure"
}
else
{
    second="Fashion"
}

if(random<0.33)
{
    third="solution"
}
else if(random>0.33 && random<0.66)
{
    third="World"
}
else
{
    third="Style"
}
console.log(`${first} ${second} ${third}`)