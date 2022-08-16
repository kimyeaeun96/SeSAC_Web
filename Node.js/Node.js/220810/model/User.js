const User = ( Sequelize, DataTypes ) => {

    const model = Sequelize.define(
        "user", // 모델이름
        {
            // create ~~ ( varchar(10) not null primary key) mysql 버전
            id: {
                type: DataTypes.STRING(10), // INT일때. .UNSIGNED: 0과 음수 제외
                allowNull: false,
                primaryKey: true,
            },
            pw: { // varchar(20) not null
                type: DataTypes.STRING(20), // 시퀄라이즈는 데이터의 기본형 쓴다. INT, FLOAT, STRING..
                allowNull: false,
            },
        },
        {
            timestamps: false,
            tableName: 'user', 
            freezeTableName: true, // 안하면 모든 이름에 -s 붙인다.
        }
    )
    return model;
}

module.exports = User;