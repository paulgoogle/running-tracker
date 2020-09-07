const goal = 25;
let entries = [];
const entriesWrapper = document.querySelector('#entries');
document.querySelector('#target').innerText = goal

addNewEntry = newEntry =>{

  entriesWrapper.removeChild(entriesWrapper.firstElementChild);
  const listItem = document.createElement('li')
  const listValue = document.createTextNode(newEntry);
  listItem.appendChild(listValue);

  entriesWrapper.appendChild(listItem);
 
};

reducer = ((total, currentValue) =>{
  return total + currentValue
});

calcTotal = () =>{
  const totalValue = entries.reduce(reducer).toFixed(1);
  document.getElementById('total').innerText = totalValue;
  document.getElementById('progressTotal').innerText = totalValue;
};

calcAverage = () =>{
  const average = (entries.reduce(reducer) / entries.length).toFixed(1);
  document.getElementById('average').innerText = average;
};

weeklyHigh = () =>{
  const high = Math.max(...entries);
  document.getElementById('high').innerText = high;
};


calcGoal = () =>{
  const totalValue = entries.reduce(reducer).toFixed(1);
  const completedPercent = totalValue / (goal/100);
  const progressCircle = document.querySelector('#progressCircle');
  if(completedPercent > 100) completedPercent === 100;
  progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}%)`;
};

handleSubmit = e =>{
  e.preventDefault();
  const entry = Number(document.querySelector('#entry').value);
  if(!entry) return;
  document.querySelector('form').reset();
  entries.push(entry);
  addNewEntry(entry);
 
  calcTotal();
  calcAverage();
  weeklyHigh();
  calcGoal();
};

const form = document.querySelector('form').addEventListener('submit', handleSubmit);
