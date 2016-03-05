import logIt from './core/logSvc';
import Feature,{ ProductType } from './feature/feature'

const pt = new ProductType('A product');

const feature = new Feature('A feature', pt);

feature.beginWork();