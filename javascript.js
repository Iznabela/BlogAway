/* när window objektet laddats (fönstret som är uppe) och något finns i "input"
tas alla posts bort för att sedan skapa så många som input är satt till */ 
window.onload = function () {
    document.getElementById("input-number").oninput = function () {
        removeAllPosts();
        let count = this.value;

        for (let i = 1; i <= count; i++) {

            let blogSection = document.querySelector("section");

            let post = document.createElement("div");
            let title = document.createElement("h2");
            let postText = document.createElement("p");
            let button = document.createElement("input");

            title.innerHTML = "Rubrik " + i;
            postText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";

            makeEditable(title);
            makeEditable(postText);

            post.appendChild(title);
            post.appendChild(postText);
            post.appendChild(button);
            blogSection.appendChild(post);

            post.classList.add("blogpost");
            post.id = "blog" + i;

            button.setAttribute('type', 'button')
            button.value = "Save Changes";
        }
    }
}

// när funktionen kallas på med ett element som parameter går det elementet att editera
function makeEditable(elem) {
    elem.onclick = function () {
        elem.contentEditable = true;
        elem.focus();
    }
    elem.onblur = function () {
        elem.contentEditable = false;
    }
}

// tar bort alla barn till blogSection
function removeAllPosts() {
    let blogSection = document.getElementById("blogSection");
    /* loopar igenom så länge det finns ett "första barn"
        och tar bort det sista barnet tills alla blogginlägg är borta */
    while (blogSection.firstChild) {
        blogSection.removeChild(blogSection.lastChild);
    }
}
