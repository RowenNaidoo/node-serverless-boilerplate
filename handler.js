'use strict';

module.exports.hello = async (event, context, callback) => {
  const payload = JSON.stringify(event.body)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'I received an object from you',
        object: payload,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
