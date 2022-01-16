const getItem = (name, details) => {
  return {name, details};
};

const bmv = getItem('318', 'Car');
const vw = getItem('Passat', '5');
const opel = getItem('Astra', 'Rust');
const mercedes = getItem('CL', '2010');

const cars = [bmv, vw, opel, mercedes, bmv, vw, opel, mercedes];

export default cars;