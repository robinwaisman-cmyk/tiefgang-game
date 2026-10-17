import { useState } from 'react';

const questions = [
{ q: 'Welches Tier kann seinen Herzschlag beim Tauchen stark verlangsamen?', a: ['Delfin', 'Faultier', 'Blauwal', 'Pinguin'], c: 'Blauwal' },
{ q: 'Welcher Planet hat die kürzeste Tageslänge?', a: ['Mars', 'Jupiter', 'Merkur', 'Venus'], c: 'Jupiter' },
{ q: 'Welches Land hat die meisten Zeitzonen einschließlich Überseegebieten?', a: ['Russland', 'USA', 'Frankreich', 'China'], c: 'Frankreich' },
{ q: 'Welches Metall ist bei Raumtemperatur flüssig?', a: ['Eisen', 'Quecksilber', 'Aluminium', 'Kupfer'], c: 'Quecksilber' },
{ q: 'Wie viele Herzen hat ein Oktopus?', a: ['Eins', 'Zwei', 'Drei', 'Vier'], c: 'Drei' },
{ q: 'Welcher Ozean ist der größte?', a: ['Atlantik', 'Indischer Ozean', 'Arktischer Ozean', 'Pazifik'], c: 'Pazifik' },
{ q: 'Welche Sprache hat die meisten Muttersprachler?', a: ['Englisch', 'Spanisch', 'Mandarin-Chinesisch', 'Hindi'], c: 'Mandarin-Chinesisch' }
];

export default function App() {
const [n, setN] = useState(0);
const [score, setScore] = useState(0);
const [picked, setPicked] = useState('');
const [done, setDone] = useState(false);
const q = questions[n];

function choose(a: string) {
if (picked) return;
setPicked(a);
if (a === q.c) setScore(s => s + 1);
}

function next() {
if (n === 6) setDone(true);
else { setN(n + 1); setPicked(''); }
}

return <main className="page">
<header><span className="logo">T</span><span className="brand">TIEFGANG</span><span className="daily">DAS TÄGLICHE QUIZ</span></header>
{done ? <section className="hero">
<p className="eyebrow">RUNDE ABGESCHLOSSEN</p>
<h1>Gut <em>gemacht.</em></h1>
<p className="intro">Du hast {score} von 7 Fragen richtig beantwortet.</p>
<button className="primary" onClick={() => {setN(0);setScore(0);setPicked('');setDone(false);}}>Nochmal spielen →</button>
</section> : <section className="quiz">
<div className="quiztop"><span>FRAGE {n + 1} / 7</span><span>QUIZ</span></div>
<div className="progress"><div style={{width: "${(n + 1) / 7 * 100}%"}} /></div>
<p className="eyebrow">DENK GUT NACH</p>
<h2>{q.q}</h2>
<div className="answers">{q.a.map((a, i) => <button key={a} className={"answer ${picked === a ? (a === q.c ? 'correct' : 'wrong') : ''}"} onClick={() => choose(a)}><span>{String.fromCharCode(65 + i)}</span>{a}</button>)}</div>
{picked && <p className="feedback">{picked === q.c ? 'Richtig! Stark gewusst.' : "Richtig wäre: ${q.c}"} </p>}
{picked && <button className="primary" onClick={next}>{n === 6 ? 'Ergebnis ansehen' : 'Nächste Frage'} →</button>}
<p className="hint">Dein Punktestand: {score}</p>
</section>}
<footer>JEDEN TAG NEU NEUGIERIG SEIN.</footer>

  </main>;
}
