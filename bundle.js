var Feature = {
    name: 'New feature',
    description: this.name + ' is a feature',
    size: 'M',
    getName: function () {
        return this.name;
    },
    getDescription: function () {
        return this.description;
    },
    calcDaysToImplement: function (size, numberOfDevs) {
        var daysToImplement;
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
};
