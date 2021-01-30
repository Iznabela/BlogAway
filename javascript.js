 
/* Debugging:
    När jag testade att göra en funktion som skulle ta bort alla sections på blogg-sidan
    tog den inte bort alla inlägg som jag ville, så jag gick in på sources i inspect på sidan
    och satte en break-point i funktionen. När jag steppade igenom koden så höll jag koll
    på index och blogPosts.Lenght (som jag alltså hade som condition för en for-loop) 
    och då insåg jag att längden på blogPosts förändras (blir mindre) för varje varv medan index 
    ökar för varje varv vilket gjorde att de möttes på mitten och inte tog bort alla inlägg.

    Hämtade istället ut Length innan loopen och debuggade igen. Märkte då att eftersom inläggen blir
    en HTML-collection så flyttas elementen i listan efter ett tagits bort, alltså tar jag 
    bort element på index 0 så hamnar elementet på index 1 sedan på index 0, och när jag sedan 
    försöker ta bort ett högre index för varje varv kommer den försöka ta bort inlägg som inte finns
    och inlägg på t.ex. index 0 kommer aldrig tas bort. Sökte då efter en smidigare lösning som
    jag tycker funkar smidigt och är enkel att förstå (se kommentar nedan på removeAllPosts) */

window.onload = function () {

    /* när window objektet laddats (fönstret som är uppe) och input-number fått ett värde 
        körs oninput-eventet som kallar på en funktion som raderar alla posts 
        för att sedan skapa upp så många nya posts som input är satt till */
    document.getElementById("input-number").oninput = function () {
        removeAllPosts();
        let inputNumber = this.value;

        // skapar upp så många inlägg som användaren valt
        for (let i = 1; i <= inputNumber; i++) {

            // sparar blogg-sektionen i en variabel
            let blogSection = document.getElementById("blogSection");

            // skapar en div som blir en post
            let post = document.createElement("div");

            // skapar upp delarna för en post
            let title = document.createElement("h2");
            let postText = document.createElement("p");
            let button = document.createElement("input");

            // skapar innehåll i titeln och texten
            title.innerHTML = "Rubrik " + i;
            postText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";

            // post blir ett barn till blogSection
            blogSection.appendChild(post);

            // innehållet för en post blir barn till en post
            post.appendChild(title);
            post.appendChild(postText);
            post.appendChild(button);

            // gör så att titeln och texten går att editera
            makeEditable(title);
            makeEditable(postText);

            // lägger till klass-namn till elementet post och sätter ett individuellt ID till varje post
            post.classList.add("blogpost");
            post.id = "blog" + i;

            // sätter attribut för knapp
            button.setAttribute('type', 'button')
            button.setAttribute('value', 'Clear')
        }
    }
}

/* när funktionen kallas på med ett element som parameter går det elementet att editera
    genom att ett onclick-event (som sker när elementet klickas på) kallar på en funktion som sätter 
    contentEditable till true och sätter elementet i fokus.
    När elementet inte är i fokus längre (onblur-event) kallas en funktion som sätter contentEditable 
    till false vilket gör att elementet inte går att editera längre. */
function makeEditable(elem) {
    elem.onclick = function () {
        elem.contentEditable = true;
        elem.focus();
    }
    elem.onblur = function () {
        elem.contentEditable = false;
    }
}

// tar bort alla barn till blogSection (alltså alla blogg-inlägg)
function removeAllPosts() {
    let blogSection = document.getElementById("blogSection");
    /* loopar igenom så länge det finns ett "första barn"
        och tar bort det sista barnet tills alla blogginlägg är borta 
        (finns det inga första barn så finns inga fler inlägg) */
    while (blogSection.firstChild) {
        blogSection.removeChild(blogSection.lastChild);
    }
} 

