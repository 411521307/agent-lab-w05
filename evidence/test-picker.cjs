const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const html = fs.readFileSync('practice/02-campus-picker/output/index.html', 'utf8');
const source = html.match(/<script>([\s\S]*?)<\/script>/)[1];
function element(options = []) {
  return { value: '', textContent: '', innerHTML: '', attrs: {}, options: options.map(([value, text]) => ({ value, text })), children: [], listeners: {},
    addEventListener(name, fn) { this.listeners[name] = fn; },
    setAttribute(name, value) { this.attrs[name] = value; },
    replaceChildren() { this.children = []; }, append(child) { this.children.push(child); } };
}
const ids = {
  location: element([['all',''],['indoor',''],['outdoor','']]), time: element([['15',''],['30',''],['60','']]), energy: element([['all',''],['low',''],['medium','']]),
  result: element(), 'history-list': element()
};
for (const id of ['language','eyebrow','title','notice','location-label','time-label','energy-label','pick','reset','history-title','clear','footer']) ids[id] = element();
ids.location.value = 'all'; ids.time.value = '30'; ids.energy.value = 'all';
const document = { documentElement: { lang: '' }, title: '', getElementById: id => ids[id], createElement: () => ({ textContent: '', set innerHTML(value) { this.textContent=value; }, get innerHTML() { return this.textContent; } }) };
let random = 0;
const context = { document, Math: Object.assign(Object.create(Math), { random: () => random }), Number, escape: undefined };
vm.runInNewContext(source, context);
const click = id => ids[id].listeners.click();
const resultText = () => ids.result.innerHTML;
const historyText = () => ids['history-list'].children.map(x => x.textContent);

// Indoor / 15 / low: every possible result must belong to A01-A04.
ids.location.value='indoor'; ids.time.value='15'; ids.energy.value='low';
const allowed = ['A01','A02','A03','A04'];
for (const r of [0, .25, .5, .75]) { random=r; click('pick'); assert.match(resultText(), new RegExp(`^<h2>${allowed[Math.floor(r*4)]} ·`)); }
console.log('PASS: indoor / 15 / low only picks A01-A04');

// Outdoor / 15 / medium: no match, unchanged filters, no successful-pick history entry.
ids.location.value='outdoor'; ids.time.value='15'; ids.energy.value='medium'; const oldLength=historyText().length;
click('pick'); assert.match(resultText(), /No matching activities/); assert.equal(ids.location.value,'outdoor'); assert.equal(ids.time.value,'15'); assert.equal(ids.energy.value,'medium'); assert.equal(historyText().length,oldLength);
console.log('PASS: outdoor / 15 / medium gives no match and preserves filters/history');

// Outdoor / 30 / medium has exactly A09; repeat picks verify it is deterministic under this filter.
ids.location.value='outdoor'; ids.time.value='30'; ids.energy.value='medium';
for(let i=0;i<4;i++){random=i/4;click('pick');assert.match(resultText(),/^<h2>A09 ·/)}
console.log('PASS: outdoor / 30 / medium always picks A09');

// Six successful picks retain exactly five, newest first.
ids.location.value='all'; ids.time.value='60'; ids.energy.value='all'; random=.01; click('pick'); random=.10; click('pick'); random=.20; click('pick'); random=.30; click('pick'); random=.40; click('pick'); random=.50; click('pick');
assert.equal(historyText().length,5); assert.match(historyText()[0],/^A07 ·/); assert.match(historyText()[4],/^A02 ·/);
console.log('PASS: six picks retain the latest five, newest first');

// Reset filters but preserve history.
const beforeReset=historyText().slice(); ids.location.value='outdoor'; ids.time.value='15'; ids.energy.value='low'; click('reset');
assert.equal(ids.location.value,'all'); assert.equal(ids.time.value,'30'); assert.equal(ids.energy.value,'all'); assert.deepEqual(historyText(),beforeReset);
console.log('PASS: reset restores all / 30 / all and keeps history');

// Clear history and change interface/activity names language.
click('clear'); assert.equal(historyText().length,1); assert.match(historyText()[0],/No picks yet/); click('language');
assert.equal(document.documentElement.lang,'zh-Hant'); assert.equal(ids.location.options[0].text,'不限地點'); assert.equal(ids.pick.textContent,'幫我選一個'); assert.match(historyText()[0],/尚無抽選紀錄/);
ids.location.value='indoor'; ids.time.value='15'; ids.energy.value='low'; random=0; click('pick'); assert.match(resultText(),/A01 · 整理書包/);
click('language'); assert.equal(document.documentElement.lang,'en'); assert.equal(ids.location.options[0].text,'All locations'); assert.equal(ids.pick.textContent,'Pick an activity');
console.log('PASS: clear history empties it; language switch translates controls and activity names');
