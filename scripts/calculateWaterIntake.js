function calculateWaterIntake () {
    const waterForm = document.getElementById('waterForm');
    var sex = (
        waterForm.sex.value == 'select' ? 0 :
        waterForm.sex.value == 'male' ? 1 :
        2
    )
    let weight = waterForm.weight.value;
    var activity = (
        waterForm.activity.value == 'select' ? 0 :
        waterForm.activity.value == 'low' ? 1 : // -10.1
        waterForm.activity.value == 'medium' ? 2 : // + 0
        3 // +13.5
    )
    var weather = (
        waterForm.weather.value == 'select' ? 0 :
        waterForm.weather.value == 'hot' ? 1 : // 16.9
        waterForm.weather.value == 'warm' ? 2 : // 8.4
        waterForm.weather.value == 'temperate' ? 3 : // 0
        4 // -6.8
    )
    var intake = weight/2 + calculateAdditional(activity, weather);
    console.log(sex, weight, activity, weather);

    if (sex != 0 && activity != 0 && weather != 0) {
        alert('Your suggested intake is ' + intake + ' oz!');
        return;
    } else {
        alert('Please fill out every option correctly.');
        return;
    }
}

function calculateAdditional(activity, weather) {
    switch(weather) {
        case 1:
            if (activity == 1) {
                return 16.9 - 10.1;
            }
            if (activity == 2) {
                return 16.9;
            }
            if (activity == 3) {
                return 16.9 + 13.5;
            }
            break;
        case 2:
            if (activity == 1) {
                return 8.4 - 10.1;
            }
            if (activity == 2) {
                return 8.4;
            }
            if (activity == 3) {
                return 8.4 + 13.5;
            }
            break;
        case 3:
            if (activity == 1) {
                return 10.1;
            }
            if (activity == 2) {
                return 0;
            }
            if (activity == 3) {
                return 13.5;
            }
            break;
        case 4:
            if (activity == 1) {
                return -6.8 - 10.1
            }
            if (activity == 2) {
                return -6.8
            }
            if (activity == 3) {
                return -6.8 + 13.5
            }
            break;
        default: 
            return 0;
    }
}