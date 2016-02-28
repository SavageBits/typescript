interface IFeature {
  name: string;
  description: string;
  size: string;  
  getName: () => string;
  getDescription: () => string;
  calcDaysToImplement: (size: string, numberOfDevs: number) => number;
  [otherProperties: string]: any; //allows extra properties such as 'somethingElse' below    
}

var feature: IFeature = {
  somethingElse: 'hey',  
  name: 'New feature',
  description: this.name + ' is a feature',
  size: 'M',  
  getName() {
    return this.name;
  }, 
  getDescription() {
    return this.description;
  },
  calcDaysToImplement(size, numberOfDevs) {
    var daysToImplement: number;
    
    switch (size) {
      case 'S':
        daysToImplement = 100 / numberOfDevs;
        break;
      case 'M':
        daysToImplement = 400 / numberOfDevs;
        break;    
      default:
        daysToImplement = Infinity;
        break;                
    }
    
    return daysToImplement;
  }
}

let feature2 = <IFeature>{
  name: 'Newer feature',
  description: this.name + ' is a feature'
}