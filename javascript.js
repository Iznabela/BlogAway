window.onload = function () {
    document.getElementById("input-number").oninput = function () {
        removeAllSections();
        var count = this.value;
        // var nrOfPosts = document.getElementById("blog").children;
        // nrOfPosts = nrOfPosts.length;
        for (var i = 0; i < count; i++) {

            var parent = document.querySelector("section");

            var child = document.createElement("div");
            var title = document.createElement("h2");
            var postText = document.createElement("p");
            var button = document.createElement("input");

            title.innerHTML = "Rubrik " + i;
            postText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";

            makeEditable(title);
            makeEditable(postText);

            child.appendChild(title);
            child.appendChild(postText);
            child.appendChild(button);
            parent.appendChild(child);

            child.classList.add("blogpost");
            child.id = "blog" + i;

            button.setAttribute('type', 'button')
            button.value = "Save Changes";
        }
    }
}

function makeEditable(elem) {
    elem.onclick = function () {
        elem.contentEditable = true;
        elem.focus();
    }
    elem.onblur = function () {
        elem.contentEditable = false;
    }
}

function removeAllSections() {
    var blogPosts = document.getElementById("blog").children;
    for (var i = 0; i < blogPosts.length; i++) {
        blogPosts[i].remove();
    }
}
