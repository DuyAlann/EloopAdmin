const { QueryTypes } = require('sequelize');
const { sequelize,DataTypes } = require('../config/db');

const partner = sequelize.define('partner', {
  // Model attributes are defined here
  // id: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   primaryKey: true
  // },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  introduction: {
    type: DataTypes.STRING(3000),
    allowNull: true
  },
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(partner === sequelize.models.partner); // true

async function findPartner(account){
  const partnerInstance = await partner.findOne({where : {account:account}})
  if (partnerInstance === null){
    console.log('Not found!')
  }else{
    console.log('partner is found!')
  }
  return partnerInstance
}

//findPartnerIdByName('Future Space Explore Co.')
async function findPartnerIdByName(name){
  const partnerInstance = await sequelize.query(`select id from partners where name = '${name}`,
                                {type: sequelize.QueryTypes.SELECT}

          
  )
  //console.log(partnerInstance.id)
  if (partnerInstance === null){
    console.log('Not found!')
  }else{
    console.log('Partner is found!')
  }
  return partnerInstance.id
}

async function addPartner(name, account, password){
  const existpartner = await findPartner(account)
  if(existpartner === null){
    const partnerInstance = partner.create({name: name, account: account, password : password})
    console.log('partner is added!')
  }
  else {
    console.log('partner is exist!')
  }
}

async function removePartner(account){
  const partnerInstance = await findpartner(account)
  if(partnerInstance === null){
    console.log('partner is not exist!')
  }
  else {
    partnerInstance.destroy()
    console.log('partner is removed!')
  }
}
async function getPartnerList(){
  const partnerList = await partner.findAll()
  if (partner === null){
    console.log('partners are not exists')
  }else{
    console.log('partner list is built!')
  }
  return partnerList
}
module.exports = {partner,findPartner,findPartnerIdByName,addPartner,removePartner,getPartnerList}