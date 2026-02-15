const client_id = '0dd5af92d3354c08afa6fa080a7133f4';
const client_secret = '91417046ffdb4960b719ce1661e66590'; // <--- Put your secret here!
const code = 'AQBeomcUGCP88Ge8-XXveT1n5xVp791nbjzSov4jjqKoPu_lsmS-Fh6QX2Rc9GMFdY5VW4hWehB3-JJhmUV4BcPaE0rgGI7bN4E7qqw4Cp43hK4jWYwNMt8dXev52vhETs4sH1SueHoYKO5ENCy9ZSCTJb8Migx9QOI6wvnf_1gN-d2OCzBzYXRkjFlnbKlYezClU9J-HIsHf0hTqkhi_AGlUrsbYP3__q5bsQLlmnBUS3BiE8l9ETe8j9J_rECoWbzXQZzMlGnd6sqfXInOBDL_2JPNA7JiqUISfi-CGo4lhZwH';
const redirect_uri = 'https://kayceegarcia.com/';

async function getToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirect_uri
        })
    });

    const data = await response.json();
    console.log(data);
}

getToken();