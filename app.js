const { App } = require('@slack/bolt');
​
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});
​
​
app.message('ソアリン', ({message, say}) => {
  say('またチケットもらえるのか！');
});
app.message('たこ', ({message, say}) => {
  say('んまいぜ');
});
app.message('かに', ({message, say}) => {
  say('えび');
});
app.message('えび', ({message, say}) => {
  say('かに');
});
app.message('おちり', ({message, say}) => {
  say('おちり丸出しか！');
});
app.message('ぶ！', ({message, say}) => {
  say('なんだ！');
});
app.message('サル', ({message, say}) => {
  say('サルゲッチュの体験版があるぜ!');
});
app.message('にゅも', ({message, say}) => {
  say('今日もにゅもか!');
});
app.message('トラビス', ({message, say}) => {
  say('トラのトラビス先生か！');
});
app.message('ぎょうざ', ({message, say}) => {
  say('ぎょうざたべるのか！');
});
app.message('hello', ({ message, say }) => {
  say({
    blocks: [
    {
	    "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": `Hey there <@${message.user}>!`
      },
      "accessory": {
        "type": "button",
        "text": {
          "type": "plain_text",
          "text": "Click Me"
        },
        "action_id": "button_click"
      }
     }
    ]
  });
});
app.action('button_click', ({ body, ack, say }) => {
  ack();
  say(`<@${body.user.id}> clicked the button`);
});
​
(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
​
  console.log('⚡️ Bolt app is running!');
})();
