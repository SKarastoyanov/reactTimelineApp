const getItem = (name, details) => {
  return {name, details};
};

const bmv = getItem('318', 'Car');
const vw = getItem('Passat', '5');
const opel = getItem('Astra', 'Rust');

const cars = [bmv, vw, opel];

export default cars;