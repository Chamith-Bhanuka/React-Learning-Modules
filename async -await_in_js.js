function takeShower() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const shower = true

            if (shower) {
                console.log("You take shower!");
                resolve("You got shower");
            }else {
                reject("❌ You don't shower properly...!")
            }

        },2000)
    })
}

function doHomework() {
    return new Promise((resolve, reject) => {

        setTimeout(()=>{

            const homework = false;

            if (homework) {
                console.log("Do homework");
                resolve("You completed your homework!");
            } else {
                reject("❌ You don't have complete homework...");
            }

        }, 1000)
    })
}

function play() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{

            const play = true

            if (play) {
                console.log("Play you want to play!");
                resolve("You got to play!");
            } else {
                reject("❌ You don't have permission to play!");
            }

        }, 3000)
    })
}

// takeShower()
//     .then((result) => {
//         console.log(result);
//         return doHomework();
//     })
//     .then((result) => {
//         console.log(result);
//         return play();
//     })
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//     console.log(err);
// })

async function doAll() {

    try {
        const showerResult = await takeShower();
        console.log("🚿 ",showerResult);

        const hwResult = await doHomework();
        console.log("📗 ",hwResult);

        const playResult = await  play();
        console.log("⛹️ ",playResult);

    } catch(err) {
        console.log(err);
    }
}

doAll();