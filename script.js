const mysteries = {
  gozosos: {
    title: 'Mistérios Gozosos',
    description: 'Contemplamos a alegria da vinda de Jesus e os primeiros anos de sua vida.',
    symbol: '✧',
    items: [
      'A Anunciação do Anjo Gabriel a Nossa Senhora.',
      'A Visitação de Nossa Senhora à sua prima Santa Isabel.',
      'O Nascimento de Jesus em Belém.',
      'A Apresentação do Menino Jesus no Templo.',
      'A perda e o encontro do Menino Jesus no Templo.'
    ]
  },
  luminosos: {
    title: 'Mistérios Luminosos',
    description: 'Contemplamos a vida pública de Jesus e a revelação do Reino de Deus.',
    symbol: '☼',
    items: [
      'O Batismo de Jesus no Rio Jordão.',
      'A autorrevelação de Jesus nas Bodas de Caná.',
      'O anúncio do Reino de Deus e o convite à conversão.',
      'A Transfiguração de Jesus no Monte Tabor.',
      'A instituição da Eucaristia.'
    ]
  },
  dolorosos: {
    title: 'Mistérios Dolorosos',
    description: 'Contemplamos a paixão e a morte de Jesus por amor à humanidade.',
    symbol: '✝',
    items: [
      'A agonia de Jesus no Horto das Oliveiras.',
      'A flagelação de Jesus.',
      'A coroação de espinhos.',
      'Jesus carrega a cruz até o Calvário.',
      'A crucificação e morte de Jesus.'
    ]
  },
  gloriosos: {
    title: 'Mistérios Gloriosos',
    description: 'Contemplamos a vitória de Cristo sobre a morte e a glória de Maria.',
    symbol: '✧',
    items: [
      'A Ressurreição de Jesus Cristo.',
      'A Ascensão de Jesus ao Céu.',
      'A descida do Espírito Santo sobre Nossa Senhora e os Apóstolos.',
      'A Assunção de Nossa Senhora ao Céu.',
      'A coroação de Nossa Senhora como Rainha do Céu e da Terra.'
    ]
  }
};

// JavaScript: Date.getDay() usa 0 para domingo e 6 para sábado.
const schedule = {
  0: { name: 'Domingo', key: 'gloriosos' },
  1: { name: 'Segunda-feira', key: 'gozosos' },
  2: { name: 'Terça-feira', key: 'dolorosos' },
  3: { name: 'Quarta-feira', key: 'gloriosos' },
  4: { name: 'Quinta-feira', key: 'luminosos' },
  5: { name: 'Sexta-feira', key: 'dolorosos' },
  6: { name: 'Sábado', key: 'gozosos' }
};

const dayButtons = document.querySelectorAll('.day-button');
const todayName = document.querySelector('#today-name');
const todayMystery = document.querySelector('#today-mystery');
const selectedDayLabel = document.querySelector('#selected-day-label');
const mysteryTitle = document.querySelector('#mystery-title');
const mysteryDescription = document.querySelector('#mystery-description');
const mysterySymbol = document.querySelector('#mystery-symbol');
const mysteryList = document.querySelector('#mystery-list');

function showDay(dayNumber) {
  const day = schedule[dayNumber];
  const mystery = mysteries[day.key];

  todayName.textContent = day.name;
  todayMystery.textContent = mystery.title;
  selectedDayLabel.textContent = day.name.toUpperCase();
  mysteryTitle.textContent = mystery.title;
  mysteryDescription.textContent = mystery.description;
  mysterySymbol.textContent = mystery.symbol;
  mysteryList.replaceChildren();

  mystery.items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    mysteryList.appendChild(listItem);
  });

  dayButtons.forEach((button) => {
    const isActive = Number(button.dataset.day) === dayNumber;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

dayButtons.forEach((button) => {
  button.addEventListener('click', () => showDay(Number(button.dataset.day)));
});

showDay(new Date().getDay());
