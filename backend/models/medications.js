module.exports = (sequelize, DataTypes) => {
    const Medication = sequelize.define('Medication', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      medication_name: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'medications',
      timestamps: false,
    });
  
    return Medication;
  };