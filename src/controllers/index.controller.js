const { Pool } = require('pg');    
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',   
    password: '123',
    database: 'firstapi',
    port: '5432'
});

const getUsers = async (req, res) => {
    const resp = await pool.query('SELECT * FROM users');
    res.status(200).json(resp.rows);

}    

const createUser = async (req, res) => {
    const { name, email } = req.body;
    const resp = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(resp);
    res.json({
        message: 'User Added Successfully',
        body: {
            user: {name, email}
        }
    });
}

const getUserByID = async (req, res) => {
    const id = req.params.id;
    const resp = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(resp.rows);
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const resp = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json(`User ${id} deleted Successfully`);
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const resp = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    res.json('User Updated Successfully');
}

module.exports = {
    getUsers,
    createUser,
    getUserByID,
    deleteUser,
    updateUser

}



