
module.exports = (sequelize, DataTypes) => {
  const Agenda = sequelize.define('Agenda', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    numberpers: DataTypes.INTEGER
  })
  return Agenda
}
