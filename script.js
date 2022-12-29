
//*--------------------------- Exercise 1: Simple If/Else Statement------------------------------------------*//

       let x = 20;
       let y = 17;
 
        if ( x > y ) {
        console.log("x", "is the biggest number ")   
}

//*------------------------------Exercise 2: Chihuahua----------------------------------------------------*//
     
      
        let newDog = "Chihuahua" ;
        
        console.log(newDog.length);
        console.log(newDog.toUpperCase());
        console.log(newDog.toLowerCase());

        if(newDog == "Chihuahua"){
            console.log("I love Chihuahuas, it’s my favorite dog breed")
        } else{
            console("I dont care, I prefer cats")
        }

//*------------------------------Exercise 3: Even Or Odd-----------------------------------------------------*//
    
        let A = prompt("Entrer un nombre entier");

         if ( (A % 2)==0 ){
             console.log(A, " is an even number")
         }else {
             console.log( A," is an odd number")
         }


//*------------------------------Exercise 4: Group Chat-------------------------------------------------*//


        const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
        const usersLength = users.length;

        switch(usersLength){
            case 0 :
                console.log("no one is online");
            break;
            case 1:
                console.log(users[0], "in online");
            break;
            case 2 :
                console.log(users[0],users[ 1], "are online");
            break;
            default:
            console.log(users[0],",", users[1], "and 3 more are online");
               
        }




