import './index.css';
import numeric from 'numeral';

const courseValue = numeric(1000).format('$0.00');

console.log(`I would pay ${courseValue} for this course!`); // eslint-disable-line no-console