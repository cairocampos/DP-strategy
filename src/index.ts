import { Freight } from './services/freight';
import { JadLog } from './services/shipping/jad-log';
function main() {
  const jadLog = new JadLog();
  const freight = new Freight(jadLog);
  console.log(freight.calculate(10))
}

main();