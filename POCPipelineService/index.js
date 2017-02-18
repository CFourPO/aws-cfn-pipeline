/**
 * Created by chrispomerville on 2/18/17.
 */
var time = require('time');
exports.handler = (event, context, callback) => {
    console.log("testing");
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: 'The time in Los Angeles is: ' + currentTime.toString(),
    });
};