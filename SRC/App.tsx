import { useState } from 'react';

const questions = [
{ q: 'Welches Tier kann seinen Herzschlag extrem verlangsamen, wenn es taucht?', a: ['Delfin', 'Faultier', 'Blauwal', 'Kaiserpinguin'], correct: 'Blauwal' },
{ q: 'Welcher Planet hat die kürzeste Tageslänge?', a: ['Mars', 'Jupiter', 'Merkur', 'Venus'], correct: 'Jupiter' },
{ q: 'Welches Land hat die meisten Zeitzonen, wenn Überseegebiete mitzählen?', a: ['Russland', 'USA', 'Frankreich', 'China'], correct: 'Frankreich' },
{ q: 'Welches Metall ist bei Raumtemperatur flüssig?', a: ['Eisen', 'Quecksilber', 'Aluminium', 'Kupfer'], correct: 'Quecksilber' },
{ q: 'Wie viele Herzen hat ein Oktopus?', a: ['Eins', 'Zwei', 'Drei', 'Vier'], correct: 'Drei' },
{ q: 'Welcher Ozean ist der größte?', a: ['Atlantik', 'Indischer Ozean', 'Arktischer Ozean', 'Pazifik'], correct: 'Pazifik' },
{ q: 'Welche Sprache hat weltweit die meisten Muttersprachler?', a: ['Englisch', 'Spanisch', 'Mandarin-Chinesisch', 'Hindi'], correct: 'Mandarin-Chinesisch' }
];

export default function App() {
const [started, setStarted] = useState(false);
const [index, setIndex] = useState(0);
const [answer, setAnswer] = useState('');
const [score, setScore] = useState(0);
const [done, setDone] = useState(false);
const [time, setTime] = useState(25);

const current = questions[index];

function choose(option: string) {
if (answer || done) return;
setAnswer(option);
if (option === current.correct) setScore(score + 100);
}

function next() {
if (index === questions.length - 1) {
setDone(true);
} else {
setIndex(index + 1);
setAnswer('');
setTime(25);
}
}

return (
<main className="page">
<header><span className="logo">T</span><span className="brand">TIEFGANG</span><span className="daily">DAS TÄGLICHE QUIZ</span></header>
{!started ? (
<section className="hero">
<p className="eyebrow">WISSEN IST EIN ABENTEUER</p>
<h1>Wie tief<br />geht dein <em>Wissen?</em></h1>
<p className="intro">Sieben Fragen. Ein Versuch. Beweise, was in dir steckt.</p>
<div className="stats"><div><strong>07</strong><small>FRAGEN</small></div><div><strong>25s</strong><small>PRO FRAGE</small></div><div><strong>∞</strong><small>NEUGIER</small></div></div>
<button className="primary" onClick={() => setStarted(true)}>Quiz starten <span>→</span></button>
<p className="hint">Nimm dir einen Moment. Denk nach. Tauche tief.</p>
</section>
) : done ? (
<section className="hero">
<p className="eyebrow">RUNDE ABGESCHLOSSEN</p>
<h1>Gut <em>gemacht.</em></h1>
<p className="intro">Du hast {score / 100} von 7 Fragen richtig beantwortet.</p>
<div className="stats"><div><strong>{score}</strong><small>PUNKTE</small></div><div><strong>{score / 100}</strong><small>RICHTIG</small></div></div>
<button className="primary" onClick={() => {setIndex(0);setAnswer('');setScore(0);setDone(false);setStarted(false);}}>Nochmal spielen <span>↻</span></button>
</section>
) : (
<section className="quiz">
<div className="quiztop"><span>FRAGE {index + 1} / 7</span><span>{time} SEK.</span></div>
<div className="progress"><div style={{width: "${((index + 1) / 7) * 100}%"}} /></div>
<p className="eyebrow">DENK GUT NACH</p>
<h2>{current.q}</h2>
<div className="answers">{current.a.map((option, i) => <button key={option} className={"answer ${answer === option ? (option === current.correct ? 'correct' : 'wrong') : ''}"} onClick={() => choose(option)}><span>{String.fromCharCode(65 + i)}</span>{option}</button>)}</div>
{answer && <p className="feedback">{answer === current.correct ? 'Richtig! Stark gewusst.' : "Leider falsch. Richtig ist: ${current.correct}"}</p>}
{answer && <button className="primary" onClick={next}>{index === 6 ? 'Ergebnis ansehen' : 'Nächste Frage'} <span>→</span></button>}
<p className="hint">Dein Punktestand: {score}</p>
</section>
)}
<footer>JEDEN TAG NEU NEUGIERIG SEIN.</footer>
</main>
);
}
