
"use strict";

const $ = id => document.getElementById(id);
const M = String.raw;

// ========================================
// §5 — n-ШІ ДӘРЕЖЕЛІ ТҮБІР
// ========================================

const lesson = {
  title:"Нақты санның n-ші дәрежелі түбірі және оның қасиеттері",
  goal:"n-ші дәрежелі түбірдің анықтамасын түсіну, жұп және тақ дәрежелі түбірлерді ажырату, түбір қасиеттерін пайдаланып өрнектерді ықшамдау.",
  page:41
};

// ӘР ТҮСІНДІРМЕДЕН КЕЙІН 2 ӨЗІНДІК ЕСЕП

const theory = [
  {
    title:"n-ші дәрежелі түбір дегеніміз не?",
    definition:"n-ші дәрежелі түбір — n дәрежеге шығарғанда бастапқы a санын беретін сан. Мұндағы n — екіден кем емес натурал сан.",
    explanation:"Мысалы, 3³=27. Демек, 27 санының үшінші дәрежелі түбірі 3 болады. Түбір алу — дәрежелеуге кері амал. Түбір таңбасының сол жағындағы кішкентай сан оның дәрежесін көрсетеді.",
    rule:"Тақ дәрежелі түбір кез келген нақты сан үшін анықталады. Жұп дәрежелі түбір нақты сандарда тек теріс емес саннан алынады.",
    formula:M`\sqrt[n]{a}=b\iff b^n=a`,
    example:[
      M`\sqrt[3]{125}`,
      M`5^3=125`,
      M`\sqrt[3]{125}=5`
    ],
    warning:"Квадрат түбір мен куб түбірді шатастырмаңдар. √25=5, ал ∛125=5.",
    self:[
      [M`\sqrt[3]{64}`,M`4^3=64`,M`4`],
      [M`\sqrt[4]{81}`,M`3^4=81`,M`3`]
    ]
  },
  {
    title:"Жұп және тақ дәрежелі түбірлер",
    definition:"Жұп дәрежелі арифметикалық түбір әрқашан теріс емес болады. Тақ дәрежелі түбір теріс саннан да табылады.",
    explanation:"Мысалы, √36=6, себебі арифметикалық квадрат түбірдің мәні теріс болмайды. Ал ∛(−27)=−3, себебі (−3)³=−27. Бірақ нақты сандарда √(−36) анықталмаған.",
    rule:"Жұп түбір үшін a≥0 болуы қажет. Тақ түбір үшін a кез келген нақты сан бола алады.",
    formula:M`\sqrt[3]{-27}=-3,\qquad \sqrt{36}=6`,
    example:[
      M`\sqrt[3]{-125}`,
      M`(-5)^3=-125`,
      M`\sqrt[3]{-125}=-5`
    ],
    warning:"√49=±7 деп жазуға болмайды. √49=7. Ал x²=49 теңдеуінің екі шешімі бар: x=7 және x=−7.",
    self:[
      [M`\sqrt[3]{-64}`,M`(-4)^3=-64`,M`-4`],
      [M`\sqrt[4]{16}`,M`2^4=16`,M`2`]
    ]
  },
  {
    title:"Түбірлерді көбейту және бөлу",
    definition:"Дәрежелері бірдей түбірлерді көбейткенде түбір астындағы сандар көбейтіледі. Бөлгенде түбір астындағы сандар бөлінеді.",
    explanation:"Мысалы, √4·√9=2·3=6. Бұл нәтижені √36=6 деп те көрсетуге болады. Бөлу кезінде бөлім нөл болмауы керек. Жұп дәрежелі түбірлерге арналған ережеде түбір астындағы сандар теріс емес болуы тиіс.",
    rule:"Көбейту және бөлу қасиеттері бірдей дәрежелі түбірлерге қолданылады.",
    formula:M`\sqrt[n]{a}\cdot\sqrt[n]{b}=\sqrt[n]{ab}`,
    example:[
      M`\sqrt{8}\cdot\sqrt{2}`,
      M`\sqrt{8\cdot2}=\sqrt{16}`,
      M`4`
    ],
    warning:"√a+√b өрнегін √(a+b) түрінде жазуға болмайды. Қосу мен көбейту қасиеттері әртүрлі.",
    self:[
      [M`\sqrt{3}\cdot\sqrt{12}`,M`\sqrt{36}=6`,M`6`],
      [M`\frac{\sqrt{72}}{\sqrt{2}}`,M`\sqrt{36}=6`,M`6`]
    ]
  },
  {
    title:"Түбір астынан көбейткіш шығару",
    definition:"Егер түбір астындағы сан толық квадратқа немесе қажетті дәрежеге бөлінсе, сол көбейткішті түбір таңбасының сыртына шығаруға болады.",
    explanation:"Мысалы, 72=36·2. 36 санының квадрат түбірі 6, сондықтан √72=6√2 болады. Осы әдіс түбірлі өрнектерді ықшамдауға көмектеседі.",
    rule:"Түбір астындағы санды толық дәрежелі көбейткіш пен қалған көбейткішке жіктейміз.",
    formula:M`\sqrt{a^2b}=|a|\sqrt b,\qquad b\geq0`,
    example:[
      M`\sqrt{98}`,
      M`\sqrt{49\cdot2}`,
      M`7\sqrt2`
    ],
    warning:"Жалпы жағдайда √(a²)=|a|. Мысалы, √((−5)²)=5, −5 емес.",
    self:[
      [M`\sqrt{50}`,M`\sqrt{25\cdot2}`,M`5\sqrt2`],
      [M`\sqrt{180}`,M`\sqrt{36\cdot5}`,M`6\sqrt5`]
    ]
  },
  {
    title:"Түбірдің дәрежесі және оның қасиеттері",
    definition:"Тақ дәрежелі түбір астындағы сол дәрежеге шығарылған сан бастапқы санға тең. Жұп дәрежеде нәтижесі бастапқы санның модулімен байланысты.",
    explanation:"Мысалы, ∛(−4)³=−4. Ал √(−4)²=4. Бұл айырмашылық жұп дәрежелі арифметикалық түбірдің теріс болмайтынын көрсетеді. Егер a≥0 болса, ⁿ√(aⁿ)=a болады.",
    rule:"Тақ n үшін ⁿ√(aⁿ)=a. Жұп n үшін ⁿ√(aⁿ)=|a|.",
    formula:M`\sqrt[n]{a^n}=\begin{cases}|a|,&n\text{ жұп}\\a,&n\text{ тақ}\end{cases}`,
    example:[
      M`\sqrt{(-7)^2}`,
      M`\sqrt{49}`,
      M`7`
    ],
    warning:"Жұп түбірде таңбаны жоғалтпаңдар: √(a²)=a тек a≥0 болғанда дұрыс.",
    self:[
      [M`\sqrt{(-9)^2}`,M`\sqrt{81}`,M`9`],
      [M`\sqrt[3]{(-6)^3}`,M`\sqrt[3]{-216}`,M`-6`]
    ]
  }
];

// ========================================
// 10 КОНСПЕКТ
// ========================================

const notes = [
  {
    title:"n-ші дәрежелі түбірдің анықтамасы",
    text:"Егер b санын n дәрежеге шығарғанда a саны шықса, онда b саны a санының n-ші дәрежелі түбірі деп аталады. Мұндағы n — екіден кем емес натурал сан. Жұп дәрежеде арифметикалық түбір теріс емес болып алынады.",
    formula:M`\sqrt[n]{a}=b\iff b^n=a`,
    worked:[M`\sqrt[3]{216}`,M`6^3=216`,M`6`],
    self:[
      [M`\sqrt[3]{343}`,M`7`],
      [M`\sqrt[4]{256}`,M`4`]
    ]
  },
  {
    title:"Арифметикалық квадрат түбір",
    text:"Теріс емес a санының арифметикалық квадрат түбірі — квадраты a санына тең теріс емес сан. Квадрат түбірдің сол жағындағы 2 көрсеткіші әдетте жазылмайды.",
    formula:M`\sqrt a=b,\quad b\geq0,\quad b^2=a`,
    worked:[M`\sqrt{169}`,M`13^2=169`,M`13`],
    self:[
      [M`\sqrt{225}`,M`15`],
      [M`\sqrt{324}`,M`18`]
    ]
  },
  {
    title:"Куб түбір",
    text:"Куб түбір — үшінші дәрежелі түбір. Теріс санның да куб түбірі болады. Себебі теріс санды үш рет көбейтсек, теріс сан шығады.",
    formula:M`\sqrt[3]{-a}=-\sqrt[3]{a}`,
    worked:[M`\sqrt[3]{-216}`,M`(-6)^3=-216`,M`-6`],
    self:[
      [M`\sqrt[3]{-343}`,M`-7`],
      [M`\sqrt[3]{1000}`,M`10`]
    ]
  },
  {
    title:"Жұп дәрежелі түбірдің шарты",
    text:"Жұп дәрежелі түбір нақты сандарда тек нөлден үлкен немесе нөлге тең саннан алынады. Оның арифметикалық мәні теріс болмайды. Сондықтан теріс санның квадрат немесе төртінші дәрежелі түбірі нақты сан болмайды.",
    formula:M`\sqrt[2k]{a}\text{ анықталуы үшін }a\geq0`,
    worked:[M`\sqrt[4]{625}`,M`5^4=625`,M`5`],
    self:[
      [M`\sqrt[4]{1296}`,M`6`],
      [M`\sqrt[6]{64}`,M`2`]
    ]
  },
  {
    title:"Түбірлерді көбейту",
    text:"Бірдей дәрежелі түбірлерді көбейткенде олардың түбір астындағы сандары көбейтіледі. Жұп түбір үшін екі түбір астындағы сан теріс емес болуы қажет.",
    formula:M`\sqrt[n]{a}\sqrt[n]{b}=\sqrt[n]{ab}`,
    worked:[M`\sqrt2\cdot\sqrt{18}`,M`\sqrt{36}`,M`6`],
    self:[
      [M`\sqrt5\cdot\sqrt{20}`,M`10`],
      [M`\sqrt3\cdot\sqrt{27}`,M`9`]
    ]
  },
  {
    title:"Түбірлерді бөлу",
    text:"Бірдей дәрежелі түбірлерді бөлгенде түбір астындағы сандарды бөлуге болады. Бөлім нөлге тең болмауы керек. Жұп түбірлердің бөліміндегі түбір астындағы сан оң болады.",
    formula:M`\frac{\sqrt[n]{a}}{\sqrt[n]{b}}=\sqrt[n]{\frac ab}`,
    worked:[M`\frac{\sqrt{98}}{\sqrt2}`,M`\sqrt{49}`,M`7`],
    self:[
      [M`\frac{\sqrt{200}}{\sqrt2}`,M`10`],
      [M`\frac{\sqrt{75}}{\sqrt3}`,M`5`]
    ]
  },
  {
    title:"Көбейткішті түбір сыртына шығару",
    text:"Түбір астындағы санды толық квадратқа және қалған көбейткішке жіктейміз. Толық квадраттың түбірін есептеп, оны түбір сыртына шығарамыз.",
    formula:M`\sqrt{a^2b}=|a|\sqrt b`,
    worked:[M`\sqrt{128}`,M`\sqrt{64\cdot2}`,M`8\sqrt2`],
    self:[
      [M`\sqrt{147}`,M`7\sqrt3`],
      [M`\sqrt{108}`,M`6\sqrt3`]
    ]
  },
  {
    title:"Көбейткішті түбір астына енгізу",
    text:"Теріс емес көбейткішті түбір астына енгізу үшін оны түбірдің дәрежесіне шығарамыз. Мысалы, 3√5 өрнегіндегі 3 саны квадратқа шығарылып, 5-ке көбейтіледі.",
    formula:M`a\sqrt b=\sqrt{a^2b},\quad a\geq0`,
    worked:[M`3\sqrt5`,M`\sqrt{9\cdot5}`,M`\sqrt{45}`],
    self:[
      [M`4\sqrt3`,M`\sqrt{48}`],
      [M`5\sqrt2`,M`\sqrt{50}`]
    ]
  },
  {
    title:"Түбір мен модульдің байланысы",
    text:"Теріс санды квадратқа шығарғанда оң сан шығады. Сондықтан квадраттың арифметикалық түбірі бастапқы санның модуліне тең болады. Модуль санның таңбасынсыз мәнін көрсетеді.",
    formula:M`\sqrt{a^2}=|a|`,
    worked:[M`\sqrt{(-12)^2}`,M`\sqrt{144}`,M`12`],
    self:[
      [M`\sqrt{(-15)^2}`,M`15`],
      [M`\sqrt{(-21)^2}`,M`21`]
    ]
  },
  {
    title:"n-ші дәрежелі түбірді тексеру",
    text:"Түбір табудың нәтижесін тексеру үшін алынған санды түбірдің дәрежесіне шығарамыз. Егер бастапқы сан шықса және арифметикалық түбірдің таңба шарты сақталса, жауап дұрыс болады.",
    formula:M`\sqrt[n]{a}=b\Longrightarrow b^n=a`,
    worked:[M`\sqrt[5]{243}`,M`3^5=243`,M`3`],
    self:[
      [M`\sqrt[5]{1024}`,M`4`],
      [M`\sqrt[3]{-512}`,M`-8`]
    ]
  }
];

// ========================================
// 4 ДЕҢГЕЙ, 20 ЕСЕП
// Өрнек, сандық жауап, шешу қадамдары
// ========================================

const levels = [
  {
    name:"I деңгей — Жеңіл",
    points:5,
    items:[
      [M`\sqrt{64}`,8,[M`8^2=64`]],
      [M`\sqrt[3]{125}`,5,[M`5^3=125`]],
      [M`\sqrt[4]{81}`,3,[M`3^4=81`]],
      [M`\sqrt{196}`,14,[M`14^2=196`]],
      [M`\sqrt[3]{-216}`,-6,[M`(-6)^3=-216`]]
    ]
  },
  {
    name:"II деңгей — Орташа",
    points:10,
    items:[
      [M`\sqrt{144}+\sqrt{25}`,17,[M`12+5=17`]],
      [M`\sqrt[3]{64}\cdot\sqrt{49}`,28,[M`4\cdot7=28`]],
      [M`\frac{\sqrt{180}}{\sqrt5}`,6,[M`\sqrt{36}=6`]],
      [M`\sqrt[4]{625}+\sqrt[3]{27}`,8,[M`5+3=8`]],
      [M`\sqrt{(-11)^2}`,11,[M`|-11|=11`]]
    ]
  },
  {
    name:"III деңгей — Қиын",
    points:15,
    items:[
      [M`\sqrt{72}\cdot\sqrt2`,12,[M`\sqrt{144}=12`]],
      [M`\sqrt{225}-\sqrt[3]{-125}`,20,[M`15-(-5)=20`]],
      [M`\frac{\sqrt{288}}{\sqrt2}`,12,[M`\sqrt{144}=12`]],
      [M`\sqrt[3]{-343}+\sqrt[4]{256}`,-3,[M`-7+4=-3`]],
      [M`\sqrt{(-9)^2}+\sqrt[3]{-729}`,0,[M`9+(-9)=0`]]
    ]
  },
  {
    name:"IV деңгей — Өте қиын",
    points:20,
    items:[
      [M`\frac{\sqrt{432}}{\sqrt3}+\sqrt[3]{-64}`,8,
       [M`\sqrt{144}-4`,M`12-4=8`]],
      [M`\sqrt{(\sqrt{81}-15)^2}`,6,
       [M`\sqrt{(9-15)^2}`,M`|-6|=6`]],
      [M`\sqrt[4]{1296}+\sqrt[3]{-512}`,-2,
       [M`6+(-8)=-2`]],
      [M`\frac{\sqrt{200}}{\sqrt8}+\sqrt[3]{27}`,8,
       [M`\sqrt{25}+3`,M`5+3=8`]],
      [M`\sqrt{(3-\sqrt{49})^2}`,4,
       [M`\sqrt{(3-7)^2}`,M`|-4|=4`]]
    ]
  }
];

// ========================================
// 3 ТОП, 15 СҰРАҚ
// Бірінші жауап дұрыс, көрсету реті араласады
// ========================================

const quiz = [
  ["√81 мәні?","9","8","7","18"],
  ["∛125 мәні?","5","25","3","15"],
  ["⁴√16 мәні?","2","4","8","16"],
  ["∛(−27) мәні?","−3","3","−9","9"],
  ["√(−25) нақты сандарда анықталған ба?","Жоқ","Иә","5","−5"],
  ["√49 мәні?","7","±7","−7","14"],
  ["√72 ықшамдалған түрі?","6√2","3√8","8√2","2√6"],
  ["√a² қандай өрнекке тең?","|a|","a","−a","a²"],
  ["√3·√12 мәні?","6","12","4","9"],
  ["∛(−64) мәні?","−4","4","−8","8"],
  ["⁴√625 мәні?","5","25","125","4"],
  ["√50 ықшамдалған түрі?","5√2","2√5","10√5","25√2"],
  ["√(−8)² мәні?","8","−8","64","−64"],
  ["∛343 мәні?","7","9","6","3"],
  ["⁵√32 мәні?","2","4","8","16"]
];

const homework = [
  {
    title:"1. Түбірлердің мәнін табу",
    text:"Берілген бес түбірдің мәндерін есептеңдер. Әр жауапты кері дәрежелеу арқылы тексеріңдер.",
    formulas:[
      M`\sqrt{289}`,
      M`\sqrt[3]{-1000}`,
      M`\sqrt[4]{2401}`,
      M`\sqrt[5]{243}`,
      M`\sqrt[3]{1331}`
    ]
  },
  {
    title:"2. Өрнектерді ықшамдау",
    text:"Түбірлердің көбейту және бөлу қасиеттерін қолданып, төмендегі өрнектерді ықшамдаңдар.",
    formulas:[
      M`\sqrt{192}`,
      M`\frac{\sqrt{450}}{\sqrt2}`,
      M`\sqrt{(-18)^2}+\sqrt[3]{-216}`
    ]
  },
  {
    title:"3. Теориялық түсіндіру",
    text:"«Жұп және тақ дәрежелі түбірлердің айырмашылығы» тақырыбында 8–10 сөйлем жазыңдар. √(a²)=|a| қасиетін өз мысалыңмен түсіндіріңдер.",
    formulas:[]
  }
];

// ========================================
// СЛАЙДТАР ҚҰРЫЛЫМЫ
// ========================================

const slides=[{type:"intro",name:"Кіріспе"}];

theory.forEach((_,index)=>{
  slides.push({
    type:"theory",index,
    name:`Түсіндірме ${index+1}`
  });
});

notes.forEach((_,index)=>{
  slides.push({
    type:"note",index,
    name:`Конспект ${index+1}`
  });
});

levels.forEach((_,index)=>{
  slides.push({
    type:"level",index,
    name:`${index+1}-деңгей`
  });
});

quiz.forEach((_,index)=>{
  slides.push({
    type:"game",index,
    name:`${index%3+1}-топ • ${index+1}-сұрақ`
  });
});

slides.push(
  {type:"homework",name:"Үй жұмысы"},
  {type:"finish",name:"Қорытынды"}
);

let page=0;
let taskPoints=0;
let teamPoints=[0,0,0];
let questionAnswers=new Map();
let finishedTasks=new Set();

let remainingSeconds=4800;
let timerId=null;
let timerEndAt=0;

const quizChoices=quiz.map((item,index)=>{
  // Сұрақтағы жауаптардың орнын кездейсоқ араластыру
  const choices=item.slice(1).map((text,i)=>({
    text,correct:i===0
  }));

  for(let i=choices.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [choices[i],choices[j]]=[choices[j],choices[i]];
  }

  return choices;
});

function esc(value) {
  return String(value).replace(/[&<>"']/g,c=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[c]));
}

function formula(tex) {
  return `<div class="math">\\[${tex}\\]</div>`;
}

function card(color,title,body) {
  return `
    <section class="card ${color}">
      <h3>${esc(title)}</h3>
      ${body}
    </section>`;
}

function stepList(steps) {
  return steps.map((step,i)=>`
    <div class="step">
      <strong>${i+1}-қадам</strong>
      ${formula(step)}
    </div>
  `).join("");
}

function workCards(items,prefix) {
  return items.map((item,index)=>{
    const id=`${prefix}-${index}`;

    return `
      <div class="work">
        <h3>✏️ Өзіндік жұмыс — ${index+1}-есеп</h3>
        ${formula(item[0])}

        <p>
          Алдымен есепті өз бетіңмен
          дәптерге шығар.
        </p>

        <button class="action" data-toggle="${id}">
          Шешімін және жауабын көру
        </button>

        <div class="solution" id="${id}" hidden>
          ${formula(item[1])}
          <p style="color:#67e7ad;font-weight:800">
            Дұрыс жауап:
          </p>
          ${formula(item[2]??item[1])}
        </div>
      </div>
    `;
  }).join("");
}

function theoryHTML(index) {
  const t=theory[index];

  return `
    <div class="slide">
      <div class="eyebrow">
        ТЕОРИЯ ${index+1} / 5
      </div>

      <h2>📖 ${esc(t.title)}</h2>

      ${card("blue","Анықтама",
        `<p>${esc(t.definition)}</p>`)}

      ${card("purple","Қарапайым түсіндірме",
        `<p>${esc(t.explanation)}</p>`)}

      ${card("green","Есте сақтайтын ереже",
        `<p>${esc(t.rule)}</p>`)}

      ${card("yellow","Негізгі формула",
        formula(t.formula))}

      ${card("red","Маңызды ескерту",
        `<p>${esc(t.warning)}</p>`)}

      ${card("green","Шығарылған мысал",
        stepList(t.example))}

      <div class="eyebrow">ТҮСІНДІРМЕДЕН КЕЙІН</div>
      <h2>Өзіндік жұмыс</h2>

      ${workCards(t.self,"theory"+index)}
    </div>
  `;
}

function noteHTML(index) {
  const n=notes[index];

  // Конспекттің екі тапсырмасын бөлек көрсетеміз
  const self=n.self.map((item,i)=>[
    item[0],
    M`\text{Дұрыс жауап: }${item[1]}`,
    item[1]
  ]);

  return `
    <div class="slide">
      <div class="eyebrow">
        КОНСПЕКТ ${index+1} / 10
      </div>

      <h2>📝 ${esc(n.title)}</h2>

      <div class="note">
        ✍ ДӘПТЕРГЕ ЖАЗЫП АЛ
      </div>

      ${card("blue","Анықтама және түсіндірме",
        `<p>${esc(n.text)}</p>`)}

      ${card("yellow","Формула",
        formula(n.formula))}

      ${card("green","Шығарылған мысал",
        stepList(n.worked))}

      <h2>Өзіндік жұмыс</h2>
      ${workCards(self,"note"+index)}
    </div>
  `;
}

function levelHTML(index) {
  const level=levels[index];

  return `
    <div class="slide">
      <div class="eyebrow">
        ДЕҢГЕЙЛІК ТАПСЫРМАЛАР
      </div>

      <h2>📐 ${esc(level.name)}</h2>

      <div class="level-header">
        <span>5 есеп</span>
        <span>Дұрыс жауап: +${level.points} ұпай</span>
      </div>

      <p>
        Жауапты санмен енгізіңдер.
        Мысалы: <b>8</b>, <b>-4</b>,
        <b>1/2</b> немесе <b>2.5</b>.
      </p>

      <div class="level-grid">
        ${level.items.map((item,i)=>{
          const id=`${index}-${i}`;
          const done=finishedTasks.has(id);

          return `
            <div class="level-task">
              <h3>${i+1}-есеп</h3>
              ${formula(item[0])}

              <div class="answer-row">
                <input
                  id="input-${id}"
                  type="text"
                  inputmode="decimal"
                  placeholder="Жауабы"
                  ${done?"disabled":""}
                >

                <button
                  data-check="${id}"
                  ${done?"disabled":""}>
                  ${done?"✓ Дұрыс":"Тексеру"}
                </button>
              </div>

              <div
                id="feedback-${id}"
                class="feedback ${done?"success":""}">
                ${done
                  ?`✓ Дұрыс! +${level.points} ұпай`
                  :"Жауабыңды енгіз."}
              </div>

              <button class="action"
                data-toggle="solution-${id}">
                Шешу жолын көрсету
              </button>

              <div class="solution"
                   id="solution-${id}" hidden>
                ${stepList(item[2])}
                <p style="color:#67e7ad">
                  Дұрыс жауап:
                </p>
                ${formula(String(item[1]))}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function gameHTML(index) {
  const choices=quizChoices[index];
  const team=index%3;
  const selected=questionAnswers.get(index);

  return `
    <div class="slide">
      <div class="eyebrow">
        КОМАНДАЛЫҚ ОЙЫН ${index+1} / 15
      </div>

      <h2>🏆 ${team+1}-топтың кезегі</h2>

      <div class="scores">
        ${teamPoints.map((score,i)=>`
          <div class="team ${team===i?"current":""}">
            ${i+1}-топ
            <strong>${score}</strong>
          </div>
        `).join("")}
      </div>

      ${card("yellow",`${index+1}-сұрақ`,`
        <p>${esc(quiz[index][0])}</p>

        <div class="answers">
          ${choices.map((choice,i)=>{
            const cls=selected===undefined
              ?""
              :choice.correct
                ?"correct"
                :selected===i
                  ?"wrong"
                  :"";

            return `
              <button
                class="${cls}"
                data-game="${i}"
                ${selected!==undefined?"disabled":""}>
                ${"ABCD"[i]}. ${esc(choice.text)}
              </button>
            `;
          }).join("")}
        </div>

        <p id="gameStatus">
          ${selected===undefined
            ?"Дұрыс жауаптың біреуін таңдаңдар."
            :choices[selected].correct
              ?"✓ Дұрыс! Топқа +10 ұпай."
              :"Дұрыс жауап: "+esc(
                choices.find(c=>c.correct).text
              )}
        </p>
      `)}

      ${card("blue","Ойын ережесі",`
        <p>Дұрыс жауапқа 10 ұпай беріледі.</p>
        <p>Топтар 1 → 2 → 3 ретімен ауысады.</p>
        <p>Жауаптан кейін «Келесі» басыңдар.</p>
      `)}
    </div>
  `;
}

function homeworkHTML() {
  return `
    <div class="slide">
      <div class="eyebrow">ҮЙ ТАПСЫРМАСЫ</div>
      <h2>📚 Үй жұмысы</h2>

      ${homework.map((h,i)=>card(
        ["blue","yellow","green"][i],
        h.title,
        `<p>${esc(h.text)}</p>`+
        h.formulas.map(formula).join("")
      )).join("")}
    </div>
  `;
}

function finishHTML() {
  const best=Math.max(...teamPoints);
  const winners=teamPoints
    .map((value,i)=>value===best?`${i+1}-топ`:null)
    .filter(Boolean);

  return `
    <div class="slide">
      <div class="eyebrow">САБАҚ ҚОРЫТЫНДЫСЫ</div>
      <h1 class="gradient">Сабақ аяқталды!</h1>

      <div class="scores">
        ${teamPoints.map((value,i)=>`
          <div class="team">
            ${i+1}-топ
            <strong>${value}</strong>
          </div>
        `).join("")}
      </div>

      ${card("green","Топтық ойын нәтижесі",`
        <p>${winners.join(", ")}
          ${winners.length===1
            ?"— жеңімпаз!"
            :"— бірдей ұпай жинады!"}
        </p>
      `)}

      ${card("blue","Жеке тапсырмалардың нәтижесі",`
        <p>Дұрыс жауаптар:
          <b>${finishedTasks.size} / 20</b>
        </p>
        <p>Жиналған ұпай:
          <b>${taskPoints}</b>
        </p>
      `)}

      ${card("yellow","Бүгін не үйрендік?",`
        <p>n-ші дәрежелі түбірді анықтадық.</p>
        <p>Жұп және тақ түбірлерді салыстырдық.</p>
        <p>Түбірлерді көбейтіп, бөліп, ықшамдадық.</p>
        <p>Түбір мен модуль арасындағы байланысты түсіндік.</p>
      `)}

      <h2>Сау болыңыздар!</h2>
    </div>
  `;
}

function introHTML() {
  return `
    <div class="slide">
      <div class="eyebrow">
        МАТЕМАТИКА • 1 КУРС • 80 МИНУТ
      </div>

      <h1 class="gradient">
        Нақты санның n-ші дәрежелі
        түбірі және оның қасиеттері
      </h1>

      <div class="grid2">
        ${card("blue","Сабақ мақсаты",
          `<p>${esc(lesson.goal)}</p>`)}

        ${card("yellow","Негізгі формула",
          formula(M`\sqrt[n]{a}=b\iff b^n=a`))}
      </div>

      ${card("green","Сабақ жоспары",`
        <p>5 түсіндірме, әрқайсысында 2 өзіндік есеп.</p>
        <p>10 конспект — мысалдармен және есептермен.</p>
        <p>4 деңгей — барлығы 20 есеп.</p>
        <p>3 командалық ойын — 15 сұрақ.</p>
        <p>Үй жұмысы және қорытынды.</p>
      `)}
    </div>
  `;
}

// ========================================
// МАТЕМАТИКАЛЫҚ ФОРМУЛАЛАР
// ========================================

let mathJob=Promise.resolve();

function typesetMath() {
  mathJob=mathJob.then(async()=>{
    if(!window.MathJax) return;

    await MathJax.startup.promise;

    MathJax.typesetClear?.([$("content")]);
    await MathJax.typesetPromise([$("content")]);
  }).catch(error=>console.warn("MathJax:",error));
}

// ========================================
// СЛАЙДТЫ АУЫСТЫРУ
// ========================================

function render() {
  const slide=slides[page];

  const renderers={
    intro:()=>introHTML(),
    theory:()=>theoryHTML(slide.index),
    note:()=>noteHTML(slide.index),
    level:()=>levelHTML(slide.index),
    game:()=>gameHTML(slide.index),
    homework:()=>homeworkHTML(),
    finish:()=>finishHTML()
  };

  $("content").innerHTML=renderers[slide.type]();
  $("content").scrollTop=0;

  $("pageCounter").textContent=
    `${page+1} / ${slides.length}`;

  $("pageLabel").textContent=slide.name;
  $("pageFill").style.width=
    ((page+1)/slides.length*100)+"%";

  $("totalScore").textContent=
    taskPoints+teamPoints.reduce((a,b)=>a+b,0);

  $("prev").disabled=page===0;
  $("next").disabled=page===slides.length-1;

  typesetMath();
}

function nextPage() {
  if(page<slides.length-1) {
    page++;
    render();
  }
}

function previousPage() {
  if(page>0) {
    page--;
    render();
  }
}

function jump(type) {
  const found=slides.findIndex(s=>s.type===type);
  if(found>=0) {
    page=found;
    render();
  }
}

// ========================================
// ЖЕКЕ ТАПСЫРМАНЫ ТЕКСЕРУ
// ========================================

function readNumeric(text) {
  const input=text.trim().replace(",",".");
  if(!input) return NaN;

  // Бүтін, ондық және жай бөлшек
  const match=input.match(
    /^([+-]?(?:\d+(?:\.\d*)?|\.\d+))(?:\s*\/\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+)))?$/
  );

  if(!match)return NaN;

  const a=Number(match[1]);

  if(!match[2])return a;

  const b=Number(match[2]);
  return b===0?NaN:a/b;
}

function checkLevel(key) {
  if(finishedTasks.has(key))return;

  const [levelIndex,taskIndex]=key.split("-").map(Number);
  const item=levels[levelIndex]?.items[taskIndex];

  if(!item)return;

  const entered=readNumeric($("input-"+key).value);
  const expected=item[1];
  const feedback=$("feedback-"+key);

  if(!Number.isFinite(entered)) {
    feedback.textContent=
      "Санды дұрыс енгіз: мысалы 4, -5 немесе 3/2.";
    return;
  }

  if(Math.abs(entered-expected)<1e-8) {
    finishedTasks.add(key);
    taskPoints+=levels[levelIndex].points;

    feedback.textContent=
      `✓ Дұрыс! +${levels[levelIndex].points} ұпай`;

    feedback.classList.add("success");

    $("input-"+key).disabled=true;

    document
      .querySelector(`[data-check="${key}"]`)
      .disabled=true;

    $("totalScore").textContent=
      taskPoints+teamPoints.reduce((a,b)=>a+b,0);
  } else {
    feedback.textContent=
      "Жауап әзірге дұрыс емес. Қайта есептеп көр.";
  }
}

// ========================================
// КОМАНДАЛЫҚ ОЙЫН
// ========================================

function answerGame(choice) {
  const slide=slides[page];

  if(slide.type!=="game")return;
  if(questionAnswers.has(slide.index))return;

  const options=quizChoices[slide.index];

  questionAnswers.set(slide.index,choice);

  if(options[choice].correct) {
    teamPoints[slide.index%3]+=10;
  }

  render();
}

$("content").addEventListener("click",event=>{
  const toggle=event.target.closest("[data-toggle]");
  if(toggle) {
    const target=$(toggle.dataset.toggle);
    if(target) {
      target.hidden=!target.hidden;
      typesetMath();
    }
    return;
  }

  const check=event.target.closest("[data-check]");
  if(check) {
    checkLevel(check.dataset.check);
    return;
  }

  const game=event.target.closest("[data-game]");
  if(game) {
    answerGame(Number(game.dataset.game));
  }
});

// ========================================
// БАСҚАРУ БАТЫРМАЛАРЫ
// ========================================

$("prev").addEventListener("click",previousPage);
$("next").addEventListener("click",nextPage);

$("jumpTheory").addEventListener("click",()=>jump("theory"));
$("jumpNotes").addEventListener("click",()=>jump("note"));
$("jumpLevels").addEventListener("click",()=>jump("level"));
$("jumpGame").addEventListener("click",()=>jump("game"));

$("fullscreen").addEventListener("click",async()=>{
  try {
    if(!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch(error) {
    console.warn(error);
  }
});

// ========================================
// НАҒЫЗ АЛМАТЫ УАҚЫТЫ
// ========================================

function clockTick() {
  $("clock").textContent=
    new Intl.DateTimeFormat("kk-KZ",{
      timeZone:"Asia/Almaty",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hour12:false
    }).format(new Date());
}

clockTick();
setInterval(clockTick,1000);

// ========================================
// 80 МИНУТТЫҚ ТАЙМЕР
// ========================================

function formatTime(t) {
  return String(Math.floor(t/60)).padStart(2,"0")+
    ":"+String(t%60).padStart(2,"0");
}

function refreshTimer() {
  $("remaining").textContent=formatTime(remainingSeconds);
  $("elapsed").textContent=formatTime(4800-remainingSeconds);
  $("timeFill").style.width=
    ((4800-remainingSeconds)/4800*100)+"%";
}

function pauseTimer() {
  if(timerId!==null) {
    clearInterval(timerId);
    timerId=null;
  }
}

function startTimer() {
  if(timerId!==null || remainingSeconds<=0)return;

  timerEndAt=Date.now()+remainingSeconds*1000;

  timerId=setInterval(()=>{
    remainingSeconds=Math.max(
      0,
      Math.ceil((timerEndAt-Date.now())/1000)
    );

    refreshTimer();

    if(remainingSeconds===0)pauseTimer();
  },250);
}

function resetTimer() {
  pauseTimer();
  remainingSeconds=4800;
  refreshTimer();
}

$("startTimer").addEventListener("click",startTimer);
$("pauseTimer").addEventListener("click",pauseTimer);
$("resetTimer").addEventListener("click",resetTimer);

// ========================================
// АЛМАТЫ ТЕМПЕРАТУРАСЫ
// ========================================

async function loadTemperature() {
  try {
    const url=
      "https://api.open-meteo.com/v1/forecast"+
      "?latitude=43.2389"+
      "&longitude=76.8897"+
      "&current=temperature_2m"+
      "&timezone=Asia%2FAlmaty";

    const response=await fetch(url);

    if(!response.ok)throw new Error("Ауа райы");

    const data=await response.json();
    const temp=data.current?.temperature_2m;

    $("temperature").textContent=
      typeof temp==="number"
        ?temp.toFixed(1)+" °C"
        :"Қолжетімсіз";
  } catch(error) {
    $("temperature").textContent="Қолжетімсіз";
  }
}
loadTemperature();

// ========================================
// КАЛЬКУЛЯТОРЛАР
// ========================================

const calculatorInput={
  basic:"",
  science:""
};

const keys={
  basic:[
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ],
  science:[
    "C","⌫","(",")",
    "√","∛","ⁿ√","xʸ",
    "sin","cos","tan","log",
    "ln","π","e","÷",
    "7","8","9","×",
    "4","5","6","−",
    "1","2","3","+",
    "%","0",".","="
  ]
};

const convert={
  "×":"*",
  "÷":"/",
  "−":"-",
  "√":"sqrt(",
  "∛":"cbrt(",
  "ⁿ√":"root(",
  "xʸ":"^",
  "sin":"sin(",
  "cos":"cos(",
  "tan":"tan(",
  "log":"log(",
  "ln":"ln(",
  "π":"pi"
};

// ⁿ√ функциясының жазылуы:
// root(81,4) = 3
// root(-27,3) = -3

function buildCalc(type) {
  const container=$("keys-"+type);

  keys[type].forEach(key=>{
    const btn=document.createElement("button");
    btn.type="button";
    btn.textContent=key;

    if(key==="C")btn.classList.add("clear");
    if(key==="=")btn.classList.add("equal");

    if([
      "+","−","×","÷","√","∛","ⁿ√",
      "xʸ","sin","cos","tan","log","ln","%"
    ].includes(key)) {
      btn.classList.add("op");
    }

    btn.addEventListener("click",()=>{
      pressCalc(type,key);
    });

    container.appendChild(btn);
  });
}

function pressCalc(type,key) {
  let value=calculatorInput[type];

  if(key==="C") {
    value="";
  } else if(key==="⌫") {
    value=value.slice(0,-1);
  } else if(key==="=") {
    try {
      const answer=calculate(value);
      value=String(Number(answer.toPrecision(12)));
    } catch(error) {
      value="Қате";
    }
  } else {
    if(value==="Қате")value="";
    value+=convert[key]??key;
  }

  calculatorInput[type]=value;

  const display=$("display-"+type);
  display.textContent=value||"0";
  display.scrollLeft=display.scrollWidth;
}

// ========================================
// ҚАУІПСІЗ ЕСЕПТЕУ
// ========================================

function calculate(raw) {
  const input=String(raw).replace(/\s+/g,"");
  let pos=0;

  function nthRoot(x,n) {
    if(!Number.isInteger(n) || n<2) {
      throw new Error("Түбірдің дәрежесі");
    }

    if(x<0 && n%2===0) {
      throw new Error("Жұп түбір");
    }

    return x<0
      ?-Math.pow(-x,1/n)
      :Math.pow(x,1/n);
  }

  const functions={
    root:(x,n)=>nthRoot(x,n),
    sqrt:x=>Math.sqrt(x),
    cbrt:x=>Math.cbrt(x),
    sin:x=>Math.sin(x*Math.PI/180),
    cos:x=>Math.cos(x*Math.PI/180),
    tan:x=>{
      const rad=x*Math.PI/180;

      if(Math.abs(Math.cos(rad))<1e-12) {
        throw new Error("Тангенс");
      }

      return Math.tan(rad);
    },
    log:x=>Math.log10(x),
    ln:x=>Math.log(x)
  };

  function take(char) {
    if(input[pos]===char) {
      pos++;
      return true;
    }
    return false;
  }

  function atom() {
    if(take("(")) {
      const v=expression();

      if(!take(")"))throw new Error("Жақша");
      return v;
    }

    const rest=input.slice(pos);
    const number=rest.match(
      /^(?:\d+\.?\d*|\.\d+)/
    );

    if(number) {
      pos+=number[0].length;
      return Number(number[0]);
    }

    // Функцияларды тұрақтылардан бұрын тексереміз
    // cbrt және cos т.б. дұрыс танылуы үшін
    for(const name of Object.keys(functions)) {
      if(rest.startsWith(name+"(")) {
        pos+=name.length+1;

        const args=[expression()];

        while(take(",")) {
          args.push(expression());
        }

        if(!take(")"))throw new Error("Жақша");

        if(name==="root" && args.length!==2) {
          throw new Error("root(x,n)");
        }

        if(name!=="root" && args.length!==1) {
          throw new Error("Аргумент саны");
        }

        return functions[name](...args);
      }
    }

    if(rest.startsWith("pi")) {
      pos+=2;
      return Math.PI;
    }

    if(rest.startsWith("e")) {
      pos++;
      return Math.E;
    }

    throw new Error("Өрнек");
  }

  function postfix() {
    let v=atom();

    while(take("%")) {
      v/=100;
    }

    return v;
  }

  function power() {
    let v=postfix();

    if(take("^")) {
      v=Math.pow(v,unary());
    }

    return v;
  }

  function unary() {
    if(take("+"))return unary();
    if(take("-"))return -unary();

    return power();
  }

  function term() {
    let v=unary();

    while(true) {
      if(take("*"))v*=unary();
      else if(take("/"))v/=unary();
      else break;
    }

    return v;
  }

  function expression() {
    let v=term();

    while(true) {
      if(take("+"))v+=term();
      else if(take("-"))v-=term();
      else break;
    }

    return v;
  }

  if(!input)throw new Error("Бос өрнек");

  const result=expression();

  if(pos!==input.length || !Number.isFinite(result)) {
    throw new Error("Қате өрнек");
  }

  return result;
}

// ========================================
// АШУ, ЖАБУ ЖӘНЕ ЖЫЛЖЫТУ
// ========================================

function toggleCalc(type) {
  const element=$("calc-"+type);
  const opening=!element.classList.contains("visible");

  const other=type==="basic"?"science":"basic";
  $("calc-"+other).classList.remove("visible");

  element.classList.toggle("visible",opening);

  if(opening) {
    const rect=element.getBoundingClientRect();

    const maxX=Math.max(
      0,
      window.innerWidth-element.offsetWidth
    );

    const maxY=Math.max(
      0,
      window.innerHeight-element.offsetHeight
    );

    element.style.left=
      Math.min(maxX,Math.max(0,rect.left))+"px";

    element.style.top=
      Math.min(maxY,Math.max(0,rect.top))+"px";
  }
}

$("basicLaunch").addEventListener("click",()=>{
  toggleCalc("basic");
});

$("scienceLaunch").addEventListener("click",()=>{
  toggleCalc("science");
});

document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    $("calc-"+btn.dataset.close)
      .classList.remove("visible");
  });
});

function makeDraggable(element) {
  let drag=null;
  let ignoreClick=false;

  element.addEventListener("pointerdown",event=>{
    if(event.target.closest(".close-calc"))return;
    if(event.pointerType==="mouse" && event.button!==0)return;

    const rect=element.getBoundingClientRect();

    drag={
      id:event.pointerId,
      x:event.clientX,
      y:event.clientY,
      left:rect.left,
      top:rect.top,
      moved:false
    };

    element.setPointerCapture(event.pointerId);
  });

  element.addEventListener("pointermove",event=>{
    if(!drag || event.pointerId!==drag.id)return;

    const dx=event.clientX-drag.x;
    const dy=event.clientY-drag.y;

    if(Math.hypot(dx,dy)>6)drag.moved=true;
    if(!drag.moved)return;

    element.classList.add("dragging");

    const maxX=Math.max(
      0,window.innerWidth-element.offsetWidth
    );

    const maxY=Math.max(
      0,window.innerHeight-element.offsetHeight
    );

    element.style.left=
      Math.max(0,Math.min(maxX,drag.left+dx))+"px";

    element.style.top=
      Math.max(0,Math.min(maxY,drag.top+dy))+"px";
  });

  element.addEventListener("pointerup",event=>{
    if(!drag || event.pointerId!==drag.id)return;

    ignoreClick=drag.moved;
    drag=null;
    element.classList.remove("dragging");
  });

  element.addEventListener("pointercancel",()=>{
    drag=null;
    element.classList.remove("dragging");
  });

  element.addEventListener("click",event=>{
    if(!ignoreClick)return;

    event.preventDefault();
    event.stopImmediatePropagation();
    ignoreClick=false;
  },true);
}

// ========================================
// ІСКЕ ҚОСУ
// ========================================

buildCalc("basic");
buildCalc("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

refreshTimer();
render();
