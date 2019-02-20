var conn = require('../../config/db');
var router = require('express').Router();
require('date-utils');

router.post('/', (req, res) =>{
  var ticket = req.body.ticket;
  var nickname = req.body.nickname;
  console.log(ticket);
  if(ticket >= 5) {
    console.log('ticket input');
    var dt = new Date();
    var d = dt.toFormat('YYYY-MM-DD HH24:MI:SS');
    var params = [d, ticket, nickname];
    conn.query('update user set last_date = ?, ticket = ? where nickname = ?', params, (err, result) => {
      if(err) throw err;
    })
  }
  else {
    conn.query('select * from user where nickname = ?', nickname, (err, result) => {
      if(err) throw err;
        var cur_date = new Date(result[0].last_date);
        var mod_ticket = ticket - result[0].ticket;
        cur_date.setMinutes(cur_date.getMinutes()+Math.abs(15*mod_ticket));
        var mod_date = cur_date.toFormat('YYYY-MM-DD HH24:MI:SS');
        var params = [ticket, mod_date,nickname];

        conn.query('update user set ticket = ?, last_date = ? where nickname = ?', params, (err, result)=> {
          if(err) throw err;
        })
    })
  }
})

module.exports = router;