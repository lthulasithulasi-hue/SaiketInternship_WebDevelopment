let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
let editIndex = -1;

function displayPosts() {

    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";

    posts.forEach((post, index) => {

        postsContainer.innerHTML += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.content}</p>

                <div class="actions">
                    <button onclick="editPost(${index})">
                        Edit
                    </button>

                    <button onclick="deletePost(${index})">
                        Delete
                    </button>
                </div>
            </div>
        `;
    });
}

function savePost() {

    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if(title === "" || content === ""){
        alert("Please fill all fields.");
        return;
    }

    const post = {
        title: title,
        content: content
    };

    if(editIndex === -1){
        posts.push(post);
    } else {
        posts[editIndex] = post;
        editIndex = -1;
    }

    localStorage.setItem(
        "blogPosts",
        JSON.stringify(posts)
    );

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    displayPosts();
}

function editPost(index){

    document.getElementById("title").value =
        posts[index].title;

    document.getElementById("content").value =
        posts[index].content;

    editIndex = index;
}

function deletePost(index){

    if(confirm("Are you sure you want to delete this post?")){

        posts.splice(index, 1);

        localStorage.setItem(
            "blogPosts",
            JSON.stringify(posts)
        );

        displayPosts();
    }
}

displayPosts();