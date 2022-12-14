const wrapper = document.getElementById("posts");

/*
const posts = [
    {
        title: "Google Chrome",
        content: "Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!"
    },
    {
        title: "Mozilla Firefox",
        content: "Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018."
    },
    {
        title: "Microsoft Edge",
        content: "Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer."
    }
];
*/

const posts = [
    { 
        title: "Google Chrome",
        content: "O Google Chrome é um navegador de internet desenvolvido pela Google. Foi lançado pela primeira vez em setembro de 2008, para o Microsoft Windows, e mais tarde foi portado para Linux, Mac, iOS e Android. Compilado com base em componentes de código licenciado como o motor de renderização WebKit. Wikipédia"
    },
    { 
        title: "Mozila Firefox",
        content: "Mozilla Firefox é um navegador livre e multiplataforma desenvolvido pela Mozilla Foundation com ajuda de centenas de colaboradores. A intenção da fundação é desenvolver um navegador leve, seguro, intuitivo e altamente extensível. Wikipédia"
    },
    { 
        title: "Microsoft Edge",
        content: "O Microsoft Edge é um navegador da internet desenvolvido pela Microsoft. Foi lançado pela primeira vez para Windows 10 e Xbox One em 2015, depois para Android e iOS em 2017, para macOS, e distribuições Linux, como Ubuntu, Fedora e OpenSUSE e em suas derivações em 2020. Wikipédia"
    },

];


for (let i = 0; i < posts.length; i++) {
    const postData = posts[i];

    const article = document.createElement("article");
    article.classList.add("article")

    const title = document.createElement("h2");
    const titleText = document.createTextNode(postData.title);
    title.appendChild(titleText);

    article.appendChild(title);
    
    const content = document.createElement("p");
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);

    article.appendChild(content);
    
    wrapper.appendChild(article);
}


/*
posts.forEach( (post) => {
    console.log(post)
});

*/