module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define(
      'users',
      {
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        password: DataTypes.STRING,
        truevault_token: DataTypes.STRING,
        push_token: DataTypes.STRING,
        truevault_user_id: DataTypes.STRING,
        role_id: DataTypes.INTEGER,
        login_count: DataTypes.INTEGER,
        login_count_popup: DataTypes.INTEGER,
        role: {
          type: DataTypes.STRING,
          isIn: [['physician', 'trialsite', 'annotator', 'admin', 'cli_user']],
        },
        fa_enabled: DataTypes.BOOLEAN,
        tos_status: DataTypes.BOOLEAN,
        phone: DataTypes.STRING,
        console_access_token: DataTypes.STRING,
        comm_notifications: DataTypes.BOOLEAN,
        login_attempts: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        last_login: DataTypes.DATE,
        last_password_reset: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
        deleted_by: { type: DataTypes.INTEGER },
      },
  
      { underscored: true, timestamps: true, schema: 'auth' },
    );
    Users.associate = (models) => {
      Users.hasMany(models.siterx_user);
      Users.hasMany(models.user_role_mappings, { foreignKey: 'user_id' });
      Users.belongsTo(models.user_roles, { foreignKey: 'role_id' });
      Users.hasOne(models.user_images, { foreignKey: 'user_id' });
      Users.hasMany(models.feature_flag_logs, { foreignKey: 'user_id' });
      Users.hasMany(models.question_eligibility_criteria, {
        foreignKey: 'created_by',
      });
      Users.hasOne(models.physicians, { foreignKey: 'user_id' });
      Users.hasOne(models.trial_site_members, { foreignKey: 'user_id' });
      Users.hasOne(models.physician_office_assistants, { foreignKey: 'user_id' });
    };
    Users.beforeCreate(async (user) => {
      const hash = await bcrypt.hash(user.password, NUMBER_OF_ROUNDS);
      user.password = hash;
      Promise.resolve(user);
    });
    return Users;
  };