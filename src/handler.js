'use strict';

module.exports.index = async (event) => {
  console.log('Yo this is for cloud watch')
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Yo Sup man',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
