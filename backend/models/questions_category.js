module.exports = (sequelize, DataTypes) => {
    const QuestionCategory = sequelize.define('QuestionCategory', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      question_category: {
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
      tableName: 'questions_category',
      timestamps: false,
    });
  
    return QuestionCategory;
  };