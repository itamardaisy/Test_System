
var sqlParameter = class SqlParmaeter {
    constructor(paramName, sqlType, value){
        this.paramName = paramName;
        this.sqlType = sqlType;
        this.value = value;
   } 
}
module.exports.SqlParmaeter = sqlParameter;
