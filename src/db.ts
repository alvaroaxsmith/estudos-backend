import { Pool } from 'pg';


const connectionString = 'postgres://wwpuepak:Y_aqB23fEMAx-49dHQ4e-IsL03u8L5FS@fanny.db.elephantsql.com/wwpuepak';

const db = new Pool({ connectionString });

export default db;