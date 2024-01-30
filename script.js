const button_element = document.getElementById("btn");
const bmi_result_element = document.getElementById("bmi_result");
const weightcondition_element = document.getElementById("weight_condition");

function calculateBMI() {
    const height_element = document.getElementById("height").value / 100;
    const weight_element = document.getElementById("weight").value;
    // console.log(height_element, weight_element);

    const bmi_element = weight_element / (height_element * height_element);
    // console.log(bmi_element);

    bmi_result_element.value = bmi_element;
    if (bmi_element < 18.5) {
        weightcondition_element.innerText = "Under weight";

    }
    else if (bmi_element >= 18.5 && bmi_element <= 24.9) {
        weightcondition_element.innerText = "Normal weight";
    }
    else if (bmi_element > 24.9 && bmi_element <= 29.9) {
        weightcondition_element.innerText = "Over weight";
    }
    else if (bmi_result_element > 29.9) {
        weightcondition_element.innerText = "Obesity";
    }

}


button_element.addEventListener("click", calculateBMI)