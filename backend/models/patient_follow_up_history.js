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
        type: DataTypes.DATE,
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
      tableName: 'patient_follow_up_history',
      timestamps: false,
    });
  
    PatientFollowUpHistory.associate = (models) => {
      PatientFollowUpHistory.belongsTo(models.users, { foreignKey: 'patient_id' });
      PatientFollowUpHistory.belongsTo(models.users, { foreignKey: 'physician_id' });
    }

    return PatientFollowUpHistory;
  };