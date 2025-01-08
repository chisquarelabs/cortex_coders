module.exports = (sequelize, DataTypes) => {
    const PatientFollowUpHistory = sequelize.define('PatientFollowUpHistory', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      patient_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      physician_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      follow_up_date: {
        type: DataTypes.TIMESTAMP,
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
      tableName: 'patient_follow_up_history',
      timestamps: false,
    });
  
    PatientFollowUpHistory.belongsTo(User, { foreignKey: 'patient_id' });
    PatientFollowUpHistory.belongsTo(User, { foreignKey: 'physician_id' });
  
    return PatientFollowUpHistory;
  };