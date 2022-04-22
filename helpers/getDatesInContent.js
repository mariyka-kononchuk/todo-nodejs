// const sgMail = require('@sendgrid/mail');
// const dotenv = require('dotenv');

function getDatesInContent (content) {
    const datesFound = content.match(/\d{1,2}\D\d{1,2}\D(\d{4}|\d{2})/g);
    let contentDates= [];
    let dates = ''
    if (datesFound !== null) {
        datesFound.map(item => contentDates.push(dateFormat(item, "m/d/yyyy")))
        dates = contentDates.join(', ');
    }
    return
}

// const email = {
//   to: 'mariyka.konochuk@gmail.com',
//   from: 'koomedna@gmail.com',
//   subject: 'New application from site',
//   html:'<p>Hello</p>'
// }

module.exports = getDatesInContent;

