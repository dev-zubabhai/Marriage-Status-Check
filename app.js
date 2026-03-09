


let iname = prompt("Enter your name: ");
let iage = Number(prompt("Enter your age"));
let igender = prompt("Enter your gender: ").toLowerCase();


if(iage >=21 && (igender == 'male' || igender == 'm'))
{

    console.log(`

        Name: ${iname},
        Age: ${iage}, you are ready for marriage. And you are a ${igender}.
        `);
    
}else if ( iage <21 && (igender =='male' || igender =='m'))
{


    console.log(`

        Name: ${iname},
        Age: ${iage}, you have to wait ${ 21- iage } years. And you are a ${igender}
        `);
    }else if ( iage>=18 && (igender =='female' || igender== 'f'))
    {

        console.log(`

            Name: ${iname},
            Age: ${iage}, You are ready for marriage. And you are a ${igender}.
            `);
        
    }else if (iage <18 && (igender =='female' || igender == 'f'))
    {

        console.log(`
            
            Name: ${iname},
            Age: ${iage}, you have to wait ${ 18-iage} years. And you are a ${igender}`);
        
    }else
    {
        console.log(` ERROR 404! `);
        
    }