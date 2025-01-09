module.exports = (sequelize, DataTypes) => {
    const PatientAssessment = sequelize.define('PatientAssessment', {
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
      question_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'questions',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      answer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'answers',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      score: {
        type: DataTypes.INTEGER,
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
      tableName: 'patient_assessments',
      timestamps: false,
    });

    PatientAssessment.associate = (models) => {
      PatientAssessment.belongsTo(models.users, { foreignKey: 'patient_id' });
      PatientAssessment.belongsTo(models.Question, { foreignKey: 'question_id' });
      PatientAssessment.belongsTo(models.Answer, { foreignKey: 'answer_id' });
    };
    return PatientAssessment;
  };