const iframe = document.querySelector('#ora-embed-frame');
const switchPageBtn = document.querySelector('#switch-page-btn');
switchPageBtn.addEventListener('click', () => {
    const currentSrc = iframe.src;
    const newSrc = currentSrc === '' ? '' : '';
    iframe.src = newSrc; // 切换 iframe 的 src 属性
    switchPageBtn.innerText = currentSrc === '' ? '' : '';
});

function toggleComment() {
    var lvContainer = document.getElementById('lv-container');
    var toggleButton = document.getElementById('toggle-button');
    if (lvContainer.classList.contains('show')) {
        // 如果评论区被显示，则隐藏评论区，改变按钮文字
        lvContainer.classList.remove('show');
        toggleButton.textContent = '展开评论吧';
    } else {
        // 如果评论区被隐藏，则显示评论区，改变按钮文字
        lvContainer.classList.add('show');
        toggleButton.textContent = '收起评论吧';
    }
}

var seconds = 0;
var timerTip = document.getElementById('timer-tip');
var timerTipText = document.querySelector('.timer-tip-text');
function incrementSeconds() {
    seconds++;
    document.getElementById('counter').textContent = 'Too much of the past for one to memorize ' + seconds + ' s';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const tips = JSON.parse(xhr.responseText).tips;
            if (seconds === 7 || seconds % 6 === 0) {
                timerTip.style.display = 'block';
                var randomIndex = Math.floor(Math.random() * tips.length);
                timerTipText.textContent = tips[randomIndex];
            }
        }
    }
    xhr.open('GET', 'tip.json', true); // 修改路径为你的 tip.json 的路径
    xhr.send();
}
function hideTip() {
    timerTip.style.display = 'none';
}
setInterval(incrementSeconds, 1000);

