
async function loadBlogPosts() {
    const posts = ['2025-05-17-soundtrack-devlog.json', '2025-05-10-corruption-design-notes.json'];

    for (const postFile of posts) {
        const res = await fetch('blogs/' + postFile);
        const post = await res.json();

        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${post.title}</h2>
            <small>${post.date}</small>
            <p>${post.content}</p>
            <hr/>
        `;
        document.getElementById('blog-feed').appendChild(div);
    }
}
window.onload = loadBlogPosts;
