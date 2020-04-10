const { Router } = require('express');
const router = Router();
const { getTesting } = require('./sqlUtil');

router.get('/test', async (req, res) => {
    result = await getTesting();
    res.json({
        result
    });
});

router.get('/draw_caption/:user_id', (req, res) => {
    console.log(req.params);
    res.json({
        msg: `User: ${req.params.user_id}`
    });
});

router.post('/access_req', (req, res) => {
   console.log(req.body);
   res.json({
       status: 'OK'
   });
});

router.post('/login', (req, res) => {
    console.log(req.body);
    res.json({
        status: 'granted'
    });
 });

module.exports = router;