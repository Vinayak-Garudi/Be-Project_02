var checkBoxInput = document.querySelectorAll('.locationType');
const nextButton = document.getElementById('next');
nextButton.onclick = () => {
    var locationList = []
    for (var i = 0; i < checkBoxInput.length; i++){
        locationList.push(checkBoxInput[i].value);
    }
    window.location.replace('/home.html');
}