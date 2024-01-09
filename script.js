function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please ask a question!'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //FIX THIS
        return
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color;

    switch (randomNumber) {
        case 0:
            answer = "Yes";
            image = "8-ball-yes.png" //change this!!;
            color = "text-success";
            break;
        case 1:
            answer = "No";
            image = "8-ball-no.png" //change this!!;
            color = "text-danger";
            break;
        case 2:
            answer = "Ask again later";
            image = "8-ball-askagainlater.png" //change this!!;
            color = "text-secondary";
            break;
        case 3:
            answer = "Maybe";
            image = "8-ball-maybe.png";//change this!!;
            color = "text-warning";
            break;
        case 4:
            answer = "Cannot predict now";
            image = "8-ball-cannotpredictnow.png";//change this!!;
            color = "text-muted";
            break;
        case 5:
            answer = "Don't count on it";
            image = "8-ball-dontcountonit.png";//change this!!;
            color = "text-danger";
            break;
        case 6:
            answer = "Most likely";
            image = "8-ball-mostlikely.png";//change this!!;
            color = "text-success";
            break;
        case 7:
            answer = "Outlook not so good";
            image = "8-ball-outlooknotsogood.png";//change this!!;
            color = "text-danger";
            break;
        default:
            break;
    }

const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;
document.getElementById('response-image').src = image;

}

scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
camera.rotation.y = 45/180*Math.PI;
camera.position.x = 800;
camera.position.y = 100;
camera.position.z = 1000;

renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);