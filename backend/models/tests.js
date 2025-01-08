module.exports = (sequelize, DataTypes) => {
    const Test = sequelize.define('Test', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      test_type: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'tests',
      timestamps: false,
    });
  
    return Test;
  };