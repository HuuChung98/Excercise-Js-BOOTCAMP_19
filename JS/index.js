// console.log("CHUNGGGGGGGGGG");
document.getElementById('getResult').onsubmit = function(evt) {
    evt.preventDefault();
    
    const score__standardEl = +evt.target.elements.score__standard.value;
    const subject1 = +evt.target.elements.sub__one.value;
    const subject2 = +evt.target.sub__two.value;
    const subject3 = +evt.target.sub__three.value;
    const areaEl = +evt.target.area.value;
    const oppEl = +evt.target.opp.value;

    const displayEl = document.getElementById('pre-inf');
    // console.log(LINE 13);
    if(subject1 === 0 || subject2 === 0 || subject3 === 0)
    {
        displayEl.style.display = "block";
        displayEl.innerHTML = `Bạn đã trược`;
    }
    else {
        checkResult(score__standardEl, subject1, subject2, subject3, areaEl, oppEl, displayEl);
    }
    // console.log('Chung Line 22');

    
}

function checkResult(score__standardEl, subject1, subject2, subject3, areaEl, oppEl, displayEl) {
    let total__score = 0;
    total__score = subject1 + subject2 + subject3 + oppEl + areaEl;

    if (total__score >= score__standardEl) 
    {
        displayEl.style.display = "block";
        displayEl.innerHTML = `bạn đã đỗ kì thi với số điểm là ${total__score}`;
    }
    else 
    {
        displayEl.style.display = "block";
        displayEl.innerHTML = `bạn đã trược kì thi với số điểm là ${total__score}`
    }
}

