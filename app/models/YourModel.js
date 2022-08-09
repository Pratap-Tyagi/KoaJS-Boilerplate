'use strict';
const bcrypt = require('bcryptjs');
const saltRounds = 10;
class YourModel {
    constructor(){
        this.multi = [];
    }

    async yourApi(params) {
        var hash = bcrypt.hashSync(params.password, 10);

        var add_user = await db(`
            INSERT INTO users(
                username,
                birth_year,
                email,
                password
            )
            VALUES(?,?,?,?)
            `,[params.browser_unique_id, params.browser, params.location, hash]);

        var add_user_id = add_user.insertId;

        var retVal = {
            status_code: 200,
            message: "Data Fetched successfully.",
            data: {
                user_id: add_user_id,
                username: params.username,
                birth_year: params.birth_year,
                email: params.email
            }
        }

        return retVal;
    }
}

module.exports.getInstance = () => new YourModel();