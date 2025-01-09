module.exports = (sequelize, DataTypes) => {
    const PatientFollowUp = sequelize.define('PatientFollowUp', {
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
      prescription_details: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      physician_notes: {
        type: DataTypes.TEXT,
      },
      assessment_aggregate_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      tableName: 'patient_follow_up',
      timestamps: false,
    });
  
    PatientFollowUp.associate = (models) => {
      PatientFollowUp.belongsTo(models.users, { foreignKey: 'patient_id' });
      PatientFollowUp.belongsTo(models.users, { foreignKey: 'physician_id' });
    }

    return PatientFollowUp;
  };