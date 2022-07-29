

 let gender_value = 0;
 let weight_value = 0;
 let activity_value = 0;


document.getElementById("calc_button").onclick = function protein_calculate() {

    /*Gender if-else statement*/

    if (document.getElementById("male").checked) {
        gender_value = 1.0;
    } else if (document.getElementById("female").checked){
        gender_value = 0.9;
    } else {
        window.alert("Select your gender!");
    }
        
    
    

    /*weight Statement*/

    if (document.getElementById("weight").value.length == 0) {
        window.alert("Enter your weight");
    } else {
        weight_value = document.getElementById("weight").value;
    }
    

    /*Activity Level Statement */

    if (document.getElementById("sedentary").checked) {
        activity_value = 0.9;
    } else if (document.getElementById("slightly_active").checked) {
        activity_value = 1.2;
    } else if (document.getElementById("active").checked) {
        activity_value = 1.5;
    } else {
        activity_value = 1.8;
    }



    /*Math Calculations*/

    sum = gender_value * weight_value * activity_value;
    console.log(sum);

    /*Printing out the sum to html*/

    document.getElementById("output").innerHTML = sum + " grams";
}