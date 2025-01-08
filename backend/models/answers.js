module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define('Answer', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      question_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'questions',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      answer_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      early_exit: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      flag: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
      tableName: 'answers',
      timestamps: false,
    });

    Answer.associate = (models) => {
      Answer.belongsTo(models.Question, { foreignKey: 'question_id' });
    };
  
    //Answer.belongsTo(Question, { foreignKey: 'question_id' });
  
    return Answer;
  };