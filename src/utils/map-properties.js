const lodash = require("lodash")

function mapProperties(configuration) {
    return(data) => {
        if(data) {
            return Object.entries(dataa).reduce((accumulator, [key, value]) => {
                return lodash.set(accumulator, configuration[key] || key, value)
            }, {})
        }
        return data
    }
}

module.exports = mapProperties