
:root {
    --pink: #e98bb5;
    --dark-pink: #c85f91;
    --light-pink: #fff0f6;
    --lavender: #f4eaff;
    --text: #594353;
    --white: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: 'DM Sans', sans-serif;
    background: #fffafd;
    color: var(--text);
}

header {
    height: 75px;
    padding: 0 9%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    border-bottom: 1px solid #f9e5ef;
}

.logo {
    font-family: 'Playfair Display', serif;
    font-size: 25px;
    color: var(--dark-pink);
    font-weight: bold;
}

nav {
    display: flex;
    gap: 30px;
}

nav a {
    text-decoration: none;
    color: var(--text);
    font-size: 14px;
    transition: .3s;
}

nav a:hover {
    color: var(--pink);
}

.hero {
    min-height: 440px;
    padding: 100px 15%;
    text-align: center;
    background: linear-gradient(135deg, #fff0f6, #f8efff);
    position: relative;
    overflow: hidden;
}

.tag {
    color: var(--dark-pink);
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 2px;
}

.hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(38px, 6vw, 60px);
    margin: 22px 0;
    line-height: 1.2;
}

.hero h1 span {
    color: var(--dark-pink);
}

.hero p {
    max-width: 550px;
    margin: 0 auto 30px;
    color: #907b89;
    line-height: 1.8;
}

.main-button {
    display: inline-block;
    background: var(--dark-pink);
    color: white;
    padding: 15px 28px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    transition: .3s;
}

.main-button:hover {
    transform: translateY(-4px);
    background: #ad4778;
}

.decoration {
    position: absolute;
    right: 12%;
    bottom: 25px;
    color: #edb5d0;
    font-size: 80px;
}

.study {
    padding: 85px 20px;
    text-align: center;
    max-width: 850px;
    margin: auto;
}

h2 {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    margin: 12px 0;
}

.subtitle {
    color: #a28c9b;
    margin-bottom: 35px;
}

.progress-info {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin-bottom: 10px;
    color: var(--dark-pink);
}

.progress-bar {
    height: 8px;
    background: #f8e4ef;
    border-radius: 20px;
    margin-bottom: 30px;
    overflow: hidden;
}

#progress {
    height: 100%;
    width: 10%;
    background: linear-gradient(90deg, #e98bb5, #c58ae6);
    border-radius: 20px;
    transition: .4s;
}

.flashcard {
    height: 310px;
    perspective: 1000px;
    cursor: pointer;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform .7s;
    transform-style: preserve-3d;
}

.flashcard.flipped .card-inner {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 35px;
    border-radius: 25px;
    backface-visibility: hidden;
    box-shadow: 0 10px 35px #dba9c326;
}

.card-front {
    background: linear-gradient(135deg, #fff0f6, #f7edff);
    border: 1px solid #f5d5e5;
}

.card-back {
    background: linear-gradient(135deg, #f6e8f2, #f0eaff);
    transform: rotateY(180deg);
    border: 1px solid #e8d4f3;
}

.card-label {
    font-size: 11px;
    letter-spacing: 2px;
    color: var(--dark-pink);
    font-weight: bold;
}

.card-number {
    color: #e9b4d0;
    font-size: 15px;
    margin: 18px;
}

.card-front h3, .card-back h3 {
    font-family: 'Playfair Display', serif;
    font-size: 25px;
    max-width: 600px;
    line-height: 1.5;
    margin-bottom: 20px;
}

.card-front p, .card-back p {
    color: #9d8293;
    font-size: 13px;
}

.controls {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 25px;
}

.controls button {
    border: none;
    padding: 13px 25px;
    border-radius: 25px;
    background: #f9e4ef;
    color: var(--dark-pink);
    font-weight: bold;
    cursor: pointer;
    transition: .3s;
}

.controls button:hover {
    background: var(--pink);
    color: white;
}

.hint {
    margin-top: 22px;
    color: #ad91a2;
    font-size: 12px;
}

.topics {
    padding: 75px 10%;
    text-align: center;
    background: #fff1f7;
}

.topic-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 35px;
}

.topic {
    background: white;
    padding: 30px 15px;
    border-radius: 20px;
    font-size: 28px;
    box-shadow: 0 5px 20px #dba9c322;
    transition: .3s;
}

.topic:hover {
    transform: translateY(-6px);
}

.topic h3 {
    font-size: 17px;
    margin: 15px 0 8px;
    color: var(--dark-pink);
}

.topic p {
    font-size: 12px;
    color: #9d8997;
    line-height: 1.6;
}

footer {
    padding: 30px;
    text-align: center;
    background: white;
    color: #a58b9b;
    font-size: 13px;
    line-height: 2;
}

@media (max-width: 650px) {
    header {
        padding: 15px 5%;
        height: auto;
        flex-direction: column;
        gap: 15px;
    }

    nav {
        gap: 18px;
    }

    .hero {
        padding: 75px 8%;
    }

    .topic-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .card-front h3, .card-back h3 {
        font-size: 21px;
    }
}
