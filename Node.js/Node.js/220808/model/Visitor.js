const { sequelize } = require(".")

const Visitor = ( Sequelize, DataTypes ) => {
    // Sequelize는 model/index.js 에ㅓ의 sequelize
    // DataTypes는 model/index.js 에서의 Sequelize

    const model = Sequelize.define(
        "visitor", // 모델이름
        {
            // create ~~ ( id int not null auto_increment primary key) mysql 버전
            id: {
                type: DataTypes.INTEGER, // INT일때. .UNSIGNED: 0과 음수 제외
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: { // name varchar(10) not null
                type: DataTypes.STRING(10), // 시퀄라이즈는 데이터의 기본형 쓴다. INT, FLOAT, STRING..
                allowNull: false,
            },
            comment: {// comment mediumtext
                type: DataTypes.TEXT('medium'), // 'medium', 'long'
            }
        },
        {
            timestamps: false, // true로 지정하게되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다.
            tableName: 'visitor', 
            freezeTableName: true, // 안하면 모든 이름에 -s 붙인다.
        }
    );
    return model;
}

module.exports = Visitor;