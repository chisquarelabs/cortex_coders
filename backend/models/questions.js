module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'questions_category',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      question_text: {
        type: DataTypes.TEXT,
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
      tableName: 'questions',
      timestamps: false,
    });
  
    Question.belongsTo(QuestionCategory, { foreignKey: 'category_id' });
  
    return Question;
  };