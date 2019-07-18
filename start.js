function css() {
    let points =0;
    let css1 = prompt("Target a div with a class of demo in css. s");
     if(css1.toLowerCase() ==".demo") {
            points++;
            alert("Correct!");
            alert(`You currently have ${points} points!`);
         
        } else {
            points--;
            alert("Ohhh that was so close! The correct answer was .demo sorry, but I'm going to have to take away one point")
            alert(`You currently have ${points} points!`);
        }
    
    let css2 = prompt("Do you need a full stop (.) before you target a class in css?");
        if(css2.toLowerCase() =="yes"){             
            points++;
            alert("Wow! That's right! You are learning fast!");
            alert(`You currently have ${points} points!`);
            
            
        } else {
            points--;
            alert("Ohhhh so close. Maybe next time!")
            alert(`You currently have ${points} points!`);
            
        }
    
    
        
    
}




function html() {
    
let points2 = 0;
    
    let html1 = prompt("If I were to create a div, would it be sensible to add a class to it?"); 
    if(html1.toLowerCase() == "yes") {
        points2++;
        alert("Correct! Wow!");
        alert(`You currently have ${points2} points!`);
        
    } else {
        points2--;
        alert("Ohhhh so close! The correct answer was yes!");
         alert(`You currently have ${points2} points!`);
    }
    
    let html2 = prompt("What would h1 stand for?");
    if(html2.toLowerCase() == "heading 1") {
        points2++;
        alert("Correct! Wow!");
        alert(`You currently have ${points2} points!`);
        
    } else {
        points2--;
        alert("Ohhhh so close! The correct answer was heading 1!");
        alert(`You currently have ${points2} points!`)
    }
    
    let html3 = prompt("What are the building blocks of html?");
    if(html3.toLowerCase() == "elements") {
        points2++;
        alert("Correct! You pick up fast!");
        alert(`You currently have ${points2} points!`);
        
    } else if(html3.toLowerCase() == "an element") {
        points2++;
        alert("Correct! You pick up fast!");
                alert(`You currently have ${points2} points!`);
        
        
    } else {
        points2--;
        alert("Ohhh so close! The correct answer was elements!");
        alert(`You currently have ${points2} points!`)
    }
    
}
