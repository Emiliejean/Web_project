
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    name: DataTypes.STRING,
    number: DataTypes.INTEGER,
    price: DataTypes.STRING,
    numberpers: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING
  })
  return Room
}
