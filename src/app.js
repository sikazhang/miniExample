/**
 * @file example
 * @author sikazhang
 * @date 2020/1/03
 */
import Himood from 'himood';

const himood = new Himood();

// 获取按钮
const btn = document.getElementById('button');
const result = document.getElementById('input');

btn.addEventListener('click', () => {
    let mood = himood.setFaceRandom();
    result.innerText = mood;
    alert(`恭喜🎉获得专属表情包${mood}，今天也要开心鸭～`);
});

