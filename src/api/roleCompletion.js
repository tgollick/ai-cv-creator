export default async function personalCompletion(jobRole, companyName) {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are ${jobRole} recruiter tasked to help people with their CV's who are looking to join the industry. Ensure replies are specifically tailored to be put on a CV or resume for ${jobRole} roles.`,
      },
      {
        role: "user",
        content: `I work as a ${jobRole} for ${companyName}, write me a job description from my point of view for this role no longer than 100 words, but no less than 75, THIS IS VERY IMPORTANT.`,
      },
    ],
    temperature: 0.2,
  });

  return completion.data.choices[0].message.content;
}
