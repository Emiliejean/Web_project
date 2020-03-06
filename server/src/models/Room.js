
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    name: DataTypes.STRING,
    number: DataTypes.STRING,
    price: DataTypes.STRING,
    numberpers: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING
  })
  return Room
}
