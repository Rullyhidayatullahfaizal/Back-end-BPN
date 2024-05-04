import { Sequelize } from "sequelize";

const db = new Sequelize("bpn_db","root","",{
    host:"localhost",
    dialect:"mysql",
});

export default db;