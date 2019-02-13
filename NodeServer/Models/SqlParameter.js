var sqlParameter = class SqlParmaeter {
    
    constructor(paramName, sqlType, value){ } 

    getAsSQLParameter(paramName, sqlType, value){
        this.paramName = paramName;
        this.sqlType = sqlType;
        this.value = value;
        return this;
    }
}
module.exports.SqlParmaeter = sqlParameter;
