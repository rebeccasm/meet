'use strict';

const { google } = require('googleapis');
const calendar = google.calendar('v3');
const SCOPES = ["https://www.googleapis.com/auth/calendar.events.public.readonly"];
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;
const redirect_uris = [
  "https://rebeccasm.github.io/meet/"
];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  redirect_uris[0]
);

module.exports.getAuthURL = async () => {
  /*
   * Scopes array is passed to the `scope` option. 
   */
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};

module.exports.getAccessToken = async (event) => {
 // Decode authorization code extracted from the URL query
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    /**
     *  Exchange authorization code for access token with a “callback” after the exchange,
     *  The callback in this case is an arrow function with the results as parameters: “error” and “response”
     */

    oAuth2Client.getToken(code, (error, response) => {
      if (error) {
        return reject(error);
      }
      return resolve(response);
    });
  })
    .then((results) => {
      // Respond with OAuth token 
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(results),
      };
    })
    .catch((error) => {
      // Handle error
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      };
    });
};

// skeleton for getCalendarEvents() function

// const { google } = require('googleapis');
// const calendar = google.calendar('v3');

// module.exports.getCalendarEvents = async (event) => {
//   return new Promise((resolve, reject) => {
//     // Implementation will go here
//   });
// };

module.exports.getCalendarEvents = async (event) => {
 const access_token = event.pathParameters.access_token;
// code to youse access token
  oAuth2Client.setCredentials({ access_token });

  return new Promise((resolve, reject) => {
    // logic to fetch calendar events
    calendar.events.list(
      {
        calendarId: CALENDAR_ID,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      },
      (error, response) => {
        if (error) {
          reject({
            // errors if the promise is rejected
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch events' }),
            headers: { "Access-Control-Allow-Origin": "*" },
          });
        } else {
          resolve({
            // the resolved promise
            statusCode: 200,
            body: JSON.stringify({ events: response.data.items }),
            headers: { "Access-Control-Allow-Origin": "*" },
          });
        }
      }
    );
  });
};