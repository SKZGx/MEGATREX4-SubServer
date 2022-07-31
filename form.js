async function sendContact(ev) {
    ev.preventDefault();

    const senderMinecaft = document
      .getElementById('minecaftInput').value;
    const senderTwitch = document
      .getElementById('twitchInput').value;
    const Senderwho = document
        .getElementById('InputWho').value;

    const webhookBody = {
      embeds: [{
        title: 'Заявки на серер',
        fields: [
          { name: 'Minecaft', value: senderMinecaft },
          { name: 'Twitch', value: senderTwitch },
          { name: 'чей будет', value: Senderwho}
        ]
      }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1003257933523583077/Xjp0t0EierXJ0YEq9o1D3dj22iX1X8-w-Nc-d09ta8fNMeDZNR1EbJn-5QAK8rcslh5G';

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        window.open('https://megatrex4sub.online/accepted.html/');
      } else {
        alert('There was an error! Try again later!');
      }

  }