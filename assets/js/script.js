let i = 0;
let imgs_srcs = ["../assets/images/aguero.jpg", "../assets/images/leicester.jpg", "assets/images/arsenal.jpg", "assets/images/cantona.jpg"];
let moments_titles = ["Aguero's trophy winning goal", "Leicester's fairy tail in 2015/16 season",
"The feared and invincible Arsenal in 2003/04 season", "Cantona's fury kick"];
let moments_descriptions = [`Rewind to May 2012, and it's the last day of the season.
Manchester United have secured a win at Sunderland and look set to lift their 13th Premier League title.
But Manchester City and QPR are still playing at The Etihad. A stoppage time equaliser by Dzeko puts City level and Utd fans get twitchy – but they are still two points clear.
And then, with just moments left, Aguero scores a last-gasp winner.
The rest is Premier League history. For the first time in 44 years, City claimed the title in what would prove to be the start of a new era for the Manchester club.<b>`,
`Leicester City's 2015/16 Premier League title win was one of the greatest sporting stories of all time.
The Foxes started the season as underdogs after almost being relegated the year before.
But they lost just three league games to win English football's top title for the first time in their 132-year history.<b>`,
`The 2003/04 Premier League season went down in history as a landmark one for Arsenal, who went the entire league campaign undefeated, with 26 wins and 12 draws, as they won the title by an 11-point margin. Not since Preston North End's 22-match campaign in 1889 had that feat been emulated, and Arsene Wenger's free-flowing side were dubbed as 'The Invincibles'.<b>`,
`Eric Cantona had been red carded for kicking a Crystal Palace player during a game in January 1995. As he trudged off, one of the Selhurst Park fans shouted abuse at him and Cantona ran into the crowd to launch a flying kick at him.
He got a nine-month ban for what remains arguably the most shocking episode in Premier League history.<b>`];

let current_moment_title = document.querySelector('#momentName');
let current_moment_description = document.querySelector('#momentDescription');
let current_img = document.querySelector("#humor");
let humorButton = document.querySelector('#humorButton');

function handle_alteraHumor(){
    current_moment_title.innerHTML =  moments_titles[i];
    current_moment_description.innerHTML =  moments_descriptions[i];
    current_img.setAttribute("src", imgs_srcs[i]);
    i++;
    if(i > 3){
        i = 0;
    }
}

function handle_mouseOver (){
    humorButton.style.opacity = "60%";
}

function handle_mouseLeave(){
    humorButton.style.opacity = '100%';
}