import logIt from './../core/logSvc';
import EventSvc from './../core/eventSvc';
 
logIt('hello from logSvc');

const eventSvc = new EventSvc();
console.log(eventSvc.name);

//var productType = new ProductType('A product');
class ProductType {
  constructor(public description: string) {}
}

//var feature = new Feature('Feature A', productType);
class Feature {
  private _name: string;
  private _productType: ProductType;
  
  constructor(name: string, productType?: ProductType) {
    this.name = name;
    if (productType) {
      this._productType = productType;
    }
  }
  
  get name(): string {
    return this._name;
  }
  
  set name(value: string) {
    this._name = value;
  }
  
  beginWork() : void {
    alert('Work has begun on ' + this.name);
  }
}

export { Feature as default, ProductType };