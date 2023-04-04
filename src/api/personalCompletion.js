async function personalCompletion(job1, job2, education) {
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
        content: `I have worked two jobs. I previous worked as ${job2.jobName} for ${job2.companyName} and I now work as a ${job1.jobName} for ${job1.companyName}. Before I work these jobs I studied ${education.degree} at ${education.schoolName}, write me a personal summary for my CV from my perspective, make sure its no longer than 75 words, short and sweet. This is VERY important.`,
      },
    ],
    temperature: 0.2,
  });

  return completion.data.choices[0].message.content;
}

module.exports = { personalCompletion };
