async function educationCompletion(degree, school, result) {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are tasked to help people with their CV's. Ensure replies are specifically tailored to be put on a CV or resume.`,
      },
      {
        role: "user",
        content: `I went to ${school} to study ${degree} and acheived a ${result} result. Write me a description for my CV detailing my results and time at this school. Ensure the result is no more than 100 words, but no less than 75, THIS IS VERY IMPORTANT. Write it from my perspective.`,
      },
    ],
    temperature: 0.2,
  });

  return completion.data.choices[0].message.content;
}

module.exports = { educationCompletion };
