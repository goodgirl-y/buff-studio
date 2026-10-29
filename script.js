// 질문·답변·결과 문구는 이 파일에서 수정할 수 있습니다.
const datasets={
 luck:{name:'오늘의 행운',questions:[
 ['출근길, 눈앞에서 버스가 떠났다.\n나의 반응은?',['다음 버스에서 앉아 갈 수 있겠는데? 개이득','역시 오늘도 쉽지 않군.','택시 탈까? 통장 잔고 확인부터.']],
 ['자판기에서 음료가 두 개 나왔다면?',['오늘 뭔가 되는 날인데?','일단 주변부터 살펴본다.','이거 몰래카메라 아니야?']],
 ['딱 하나의 초능력을 얻는다면?',['모든 신호등이 내 앞에서 초록불','먹어도 먹어도 돈이 줄지 않는 통장','원하는 순간으로 10분 되감기']],
 ['휴대폰 배터리가 1%인데 충전기가 없다!',['1%의 기적을 믿는다.','주변에 충전기를 빌린다.','오늘은 디지털 디톡스 하는 날.']],
 ['갑자기 하루의 자유시간이 생겼다.',['미뤄뒀던 일을 끝낸다.','아무 계획 없이 돌아다닌다.','침대와 한 몸이 된다.']],
 ['행운의 상자가 세 개 있다.\n하나만 고른다면?',['미지의 상자','확실한 상자','반짝이는 상자']],
 ['오늘의 행운을 하나만 가져갈 수 있다면?',['우연히 좋은 사람을 만나는 행운','계획했던 일이 술술 풀리는 행운','아무것도 안 해도 기분 좋은 행운']]],results:[
 {title:'뜻밖의 행운 수집가',desc:'예상 못 한 순간에 즐거움을 발견하는 타입',buff:'익숙한 길에서 새로운 풍경 하나 찾아보기',tags:['#행운 수집가','#새로운 발견','#소확행'],tip:'익숙한 길에서 새로운 풍경 하나 찾아보기'},
 {title:'기회 포착 전문가',desc:'작은 가능성을 놓치지 않고 발견하는 타입',buff:'미뤄뒀던 작은 일 하나 시작하기',tags:['#기회 포착','#작은 시작','#도전'],tip:'미뤄뒀던 작은 일 하나 시작하기'},
 {title:'소확행 마스터',desc:'평범한 하루에서도 기분 좋은 순간을 찾는 타입',buff:'오늘 좋았던 일 하나 떠올리기',tags:['#소확행','#기분 전환','#오늘의 행복'],tip:'오늘 좋았던 일 하나 떠올리기'}]},
 lunch:{name:'점심 메뉴 추천',questions:[
 ['오전 11시 50분, 머릿속을 지배하는 생각은?',['오늘 점심 뭐 먹지?','점심시간까지 10분 남았다.','일단 뭐든 먹고 싶다.']],
 ['오늘 점심을 같이 먹을 사람이 “아무거나”라고 한다.',['좋아. 내가 먹고 싶은 걸로.','아니, 아무거나가 제일 어려운데?','일단 메뉴판부터 보자.']],
 ['지금 내 위장이 보내는 신호는?',['밥 두 공기도 가능','적당히 맛있는 거면 만족','오늘은 가볍게 부탁해']],
 ['둘 중 하나만 먹을 수 있다면?',['매콤한 제육덮밥','따뜻한 우동','둘 다 말고 산뜻한 메뉴']],
 ['점심 메뉴를 고를 때 포기할 수 없는 것은?',['맛있으면 장땡','가성비가 최고','먹고 나서 속이 편해야 함']],
 ['점심시간 15분이 사라졌다. 어떻게 할까?',['빨리 나오는 메뉴로 변경','그래도 먹고 싶은 건 먹어야지','포장해서 여유롭게 먹자']],
 ['마지막 선택! 지금 가장 끌리는 한 끼는?',['매콤하고 든든한 맛','따뜻하고 편안한 맛','산뜻하고 깔끔한 맛']]],results:[
 {title:'오늘의 BUFF 메뉴는 제육덮밥!',desc:'매콤하고 든든한 한 끼가 필요한 당신에게.',buff:'든든한 식사를 원한 지금, 밥의 탄수화물은 일상 활동에 필요한 에너지를 공급하고 돼지고기의 단백질은 신체 조직 유지에 도움을 줘요. 채소를 곁들이면 더욱 균형 잡힌 한 끼가 될 수 있어요.',tip:'든든한 한 끼로 충전하고 잠깐 산책하며 기분 전환하기',tags:['#밥','#한식','#매콤함','#국물없음'],image:'./jeyuk-reference.png'},
 {title:'오늘의 BUFF 메뉴는 우동!',desc:'따뜻하고 편안한 한 끼를 원하는 당신에게.',buff:'따뜻하고 편안한 한 끼를 찾는 지금, 우동 면의 탄수화물은 일상 활동에 필요한 에너지원이 돼요. 달걀이나 두부 같은 단백질 식품을 곁들이면 더 균형 있게 즐길 수 있어요.',tip:'따뜻한 식사를 천천히 즐기며 잠깐의 여유 갖기',tags:['#따뜻함','#면요리','#국물','#편안함']},
 {title:'오늘의 BUFF 메뉴는 포케!',desc:'산뜻하고 가벼운 한 끼가 끌리는 당신에게.',buff:'산뜻하고 가벼운 식사를 원한 지금, 채소는 식이섬유를 제공하고 곡물은 에너지원이 돼요. 생선이나 두부 등 단백질 재료를 더하면 균형 잡힌 식사에 도움이 돼요.',tip:'취향에 맞는 채소와 단백질 토핑 골라보기',tags:['#산뜻함','#채소','#한그릇','#가벼운식사']}]},
 daily:{name:'오늘의 BUFF',questions:[
 ['오늘의 나를 배터리로 표현한다면?',['아직 80%! 충분해요','42%... 조금 충전이 필요해요','1%... 긴급 충전 요청!']],
 ['컴퓨터 화면에 갑자기 “응답 없음”이 떴다.',['나도 잠깐 응답 없음 상태가 되고 싶다.','기다리는 동안 다른 일을 한다.','일단 마우스를 열심히 클릭한다.']],
 ['오늘의 업무 메신저 알림 상태는?',['조용하다. 오히려 불안하다.','띵! 띵! 띵! 멈출 생각이 없다.','읽지 않은 알림이 쌓여 있다.']],
 ['내 머릿속에 가장 많이 떠 있는 창은?',['해야 할 일 17개','오늘 저녁 뭐 먹지?','아무 생각도 안 나는 빈 화면']],
 ['지금 당장 하나의 버튼을 누를 수 있다면?',['PAUSE · 잠깐 멈추기','RESTART · 다시 시작하기','BOOST · 에너지 끌어올리기']],
 ['5분의 자유시간이 생겼다. 나는?',['잠깐 눈을 감고 쉬기','산책하거나 스트레칭하기','책상 위를 정리하기']],
 ['오늘의 나에게 가장 듣고 싶은 말은?',['지금도 충분히 잘하고 있어.','조금만 더 하면 끝이야!','잠깐 쉬었다 해도 괜찮아.']],
 ['마지막으로, 지금 필요한 충전 방식은?',['머리를 맑게 하는 충전','몸을 움직이는 충전','마음을 편하게 하는 충전']]],results:[
 {title:'FOCUS BUFF',desc:'흩어진 생각을 하나로 모을 시간!',buff:'다음에 할 일 하나만 적어보세요. 작은 시작도 충분해요.',tip:'다음에 할 일 하나만 적어보기',tags:['#집중','#작은시작','#정리']},
 {title:'ENERGY BUFF',desc:'잠깐의 움직임으로 새로운 활력을!',buff:'10초간 어깨를 가볍게 움직이며 기분을 환기해 보세요.',tip:'10초 동안 가볍게 스트레칭하기',tags:['#활력','#움직임','#리프레시']},
 {title:'REST BUFF',desc:'잠깐 멈춘다고, 뒤처지는 건 아니니까.',buff:'잠깐 멈춘다고 뒤처지는 건 아니니까. 먼 곳을 20초간 바라보며 잠시 쉬어보세요.',tip:'화면에서 시선을 떼고 20초 쉬어보기',tags:['#휴식','#쉼표','#충전']}]}
};
let current=null,step=0,answers=[];
const screen=document.getElementById('screen'),homeBtn=document.getElementById('homeBtn'),headerCount=document.getElementById('headerCount');
function goHome(){current=null;step=0;answers=[];render()}
function start(key){current=key;step=0;answers=[];render()}
function choose(i){answers[step]=i;step++;render()}
function back(){if(step>0){step--;answers=answers.slice(0,step);render()}else goHome()}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function progress(total,done){const shown=Math.min(done+1,total);return `<div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${shown}"><div class="progress-fill" style="width:${shown/total*100}%"></div></div><div class="progress-meta"><span>${shown}/${total}</span><span>응답 ${done}개</span></div>`}
function resultIndex(){const votes=[0,0,0];answers.forEach((v,i)=>{const weight=current==='lunch'&&[2,3,4,6].includes(i)?3:i>=datasets[current].questions.length-2?2:1;votes[v]+=weight});return votes.indexOf(Math.max(...votes))}
function render(){homeBtn.style.display=current?'flex':'none';if(!current){headerCount.textContent='';screen.className='home-screen';screen.innerHTML=`<div class="intro"><p class="eyebrow">FIND YOUR BUFF</p><h1>오늘, 어떤 BUFF가 필요해?</h1><p class="subtitle">반복되는 하루에 작은 즐거움을 더하는 방법</p></div><div class="card-grid">${[['luck','luck'],['lunch','lunch'],['daily','daily']].map(([key,img])=>`<button class="choice-card" data-start="${key}" aria-label="${datasets[key].name} 시작"><img src="./${img}.png" alt="${datasets[key].name}"></button>`).join('')}</div><p class="home-footer">콘텐츠 중 하나를 선택해 지금 나에게 필요한 BUFF를 찾아보세요</p>`;screen.querySelectorAll('[data-start]').forEach(b=>b.addEventListener('click',()=>start(b.dataset.start)));return}
 const d=datasets[current],total=d.questions.length,done=step;headerCount.textContent=`${Math.min(step+1,total)}/${total}`;
 if(step<total){screen.className='quiz-screen';let [q,opts]=d.questions[step];screen.innerHTML=`${progress(total,done)}<h1 class="section-title">질문 ${step+1}</h1><div class="quiz-layout"><div class="question-box"><span class="question-label">오늘의 질문</span><h2>${escapeHTML(q).replace(/\n/g, '<br>')}</h2></div><div class="answers">${opts.map((a,i)=>`<button class="answer" data-answer="${i}"><span class="number">${i+1}</span><span>${escapeHTML(a)}</span></button>`).join('')}</div></div><div class="back-row"><button id="prevBtn">← ${step===0?'처음으로':'이전 질문'}</button></div>`;screen.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>choose(Number(b.dataset.answer))));document.getElementById('prevBtn').onclick=back;
 }else{headerCount.textContent=`${total}/${total}`;const r=d.results[resultIndex()];const lunch=current==='lunch';const tags=(r.tags||[]).map(t=>`<span>${escapeHTML(t)}</span>`).join('');const title=lunch?r.title.replace('오늘의 BUFF 메뉴는 ','').replace('!',''):r.title;const photo=lunch&&r.image?`<img class="food-photo" src="${r.image}" alt="${escapeHTML(title)}">`:lunch?`<div class="food-placeholder" aria-hidden="true">${resultIndex()===1?'🍜':'🥗'}</div>`:'';screen.className=`result-screen ${lunch?'result-lunch':'result-other'}`;screen.innerHTML=`<div class="progress-track"><div class="progress-fill" style="width:100%"></div></div><div class="progress-meta"><span></span><span>응답 ${total}개</span></div><h1 class="section-title">결과</h1><div class="result-card"><span class="result-label">${lunch?'오늘 추천하는 점심메뉴는':current==='luck'?'오늘 당신의 BUFF':'오늘 당신의 BUFF는'}</span><h2>[ ${escapeHTML(title)} ]</h2>${photo}<p>${escapeHTML(r.desc)}</p>${lunch?'<span class="match-pill">🎯 취향 맞춤 추천</span>':''}<div class="result-tags">${tags}</div></div><p class="result-extra"><strong>TIP!</strong> ${escapeHTML(lunch?r.buff:r.tip||r.buff)}</p><div class="result-actions"><button class="pill" id="otherBtn">다른 BUFF 찾기</button><button class="pill primary" id="againBtn">다시 테스트 하기</button></div>`;document.getElementById('otherBtn').onclick=goHome;document.getElementById('againBtn').onclick=()=>start(current)}
}
homeBtn.onclick=goHome;render();
