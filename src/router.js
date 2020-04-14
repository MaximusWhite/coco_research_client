const { Router } = require('express');
const router = Router();
const { 
    getTesting,
    getUserInfo,
    fetchCaption,
    addNewRequest
} = require('./sqlUtil');

router.get('/test', async (req, res) => {
    result = await getTesting();
    res.json({
        result
    });
});

router.get('/draw_caption/', async (req, res) => {
    result = await fetchCaption('mkorchev');
    res.json({
        result
    });
});

router.post('/access_req', async (req, res) => {
   try {
        result = await addNewRequest(req.body.first_name, req.body.last_name, req.body.email, req.body.username);
        res.json({
            status: 'OK'
        });
   } catch(err) {
        res.json({
            status: 'ERR',
            detail: err.detail
        });
   }

});

router.post('/login', async (req, res) => {
    username = req.body.username;
    password = req.body.password;
    result = await getUserInfo(username, password);
    status = 'rejected';
    role = null;
    first_name = null;
    if (result.length > 0) {
        status = 'granted';
        role = result[0].role;
        first_name = result[0].first_name;
    }
    res.json({
        status,
        first_name,
        role
    });
 });

module.exports = router;