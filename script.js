function moveBox_changeDimensions_changeColor() {
    
    startTime = new Date().getTime();
    const box = document.getElementById("box");
    const leftMargin = Math.random() * (window.innerWidth - 200);
    const topMargin = Math.random() * (window.innerHeight - 200);
    const widthHeight = Math.random() * 500 + 50;
    box.style.left = leftMargin + "px";
    box.style.top = topMargin + "px";
    box.style.width = widthHeight + "px";
    box.style.height = widthHeight + "px";
    box.style.display = "block";
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = randomColor;
}

moveBox_changeDimensions_changeColor();

document.getElementById("box").addEventListener("click", function() {
    document.getElementById("box").style.display = "none";
    const endTime = new Date().getTime();
    const reactionTime = endTime - startTime;
    alert("Your reaction time is: " + reactionTime/1000 + "seconds");
    moveBox_changeDimensions_changeColor();
});