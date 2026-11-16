// 밸런스 시뮬레이터:  node tools/sim.js [판 수]
// index.html 의 CORE 구역만 꺼내서 무작위 / 신중한 플레이어의 엔딩 분포를 출력합니다.
const fs=require('fs'),path=require('path');
const src=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const core=src.split('/*CORE-BEGIN*/')[1].split('/*CORE-END*/')[0];
const m=new Function(core+';return {simulate,polRandom,polSmart,EVENTS,TARGET_WIN}')();
const n=+process.argv[2]||5000;
console.log('events:',m.EVENTS.length,' target win:',m.TARGET_WIN);
console.log('random:',m.simulate(n,m.polRandom));
console.log('smart :',m.simulate(Math.min(n,1500),m.polSmart));
