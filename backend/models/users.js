module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(50),
      },
      ethnicity: {
        type: DataTypes.STRING(50),
      },
      role_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user_roles',
          key: 'id',
        },
        onDelete: 'SET NULL',
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
      tableName: 'users',
      timestamps: false,
    });
  
    User.belongsTo(UserRole, { foreignKey: 'role_id' });
  
    return User;
  };