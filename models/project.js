var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
    name: {type: String},
    phone: {type: String},
    wechat: {type: String},
    email: {type: String},
    prov: {type: String},
    city: {type: String},
    require: {type: String},
    other: {type: String},
    projectName: {type: String},
    projectArea: {type: String},
    projectSite: {type: String},
    projectApp: {type: String},
    publicNum: {type: String},
    projectDesc: {type: String},
    planFile: {type: String},
    createTime: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Project',ProjectSchema);
