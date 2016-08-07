var anotherFunc = () => { console.log('DEFAULT anotherFunc...'); }

function get(url) { console.log(url); }
function post(url, body) { console.log(url, body); }
const TIMEOUT = 1000;

export default anotherFunc
export { TIMEOUT };
export { get, post }