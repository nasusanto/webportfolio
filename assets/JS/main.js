//blog JS to create categories and have them organized by categories//

var categories = ['Entrepreneurship', 'Life', 'College', 'Professional', 'Networking', 'Sports'];
var selectedCategory = null;

function setSelectedCategory(category) {
    selectedCategory = category;
    document.getElementById('reset-category').style.display = 'block';
}

function resetCategory() {
    selectedCategory = null;
    initializeBlogs();
    document.getElementById('reset-category').style.display = 'none';
}

function initializeCategories() {
  for (var i = 0; i < categories.length; i++) {
    var categoryItem = document.createElement('div');
    categoryItem.className = 'col-4 gy-4';
    var categoryButton = document.createElement('button');
    categoryButton.type = 'button';
    categoryButton.className = 'category border-0 fs-6 w-100 rounded text-center text-white py-4';
    categoryButton.innerHTML = categories[i];
    categoryButton.setAttribute("data-category", categories[i]);
    categoryButton.onclick = function () {
        setSelectedCategory(this.getAttribute("data-category"));
        initializeBlogs();
    }
    categoryItem.appendChild(categoryButton);
    document.querySelector('.categories-container').appendChild(categoryItem);
  }
}

var blogs = [
    {
        title: "Everything happens for a reason",
        subtitle: "The crazy life motto I live by.",
        categories: ["Life"],
        href: "life-blog/everyhappens.html",
    },
    {
        title: "The f*** it mentality",
        subtitle: "How to not live in fear.",
        categories: ["Life"],
        href: "#",
    },
    {
        title: "Don't be afraid to cold email",
        subtitle: "The perfect email.",
        categories: ["Professional"],
        href: "#",
    }
];
function initializeBlogs() {
    document.querySelector('.blog-container').innerHTML = '';
    var blogsInCategory = [];

    if (!selectedCategory) {
        blogsInCategory = blogs;
    } else {
        for (var i = 0; i < blogs.length; i++) {
            if (blogs[i].categories.indexOf(selectedCategory) > -1) {
                blogsInCategory.push(blogs[i]);
            }
        }
    }

    if (!blogsInCategory.length) {
        var blogTitle = document.createElement("p");
        blogTitle.className = "fs-3 fw-bold";
        blogTitle.innerHTML = "-";
        document.querySelector('.blog-container').appendChild(blogTitle);
    }

    for (var i = 0; i < blogsInCategory.length; i++) {
        var link = document.createElement("a");
        link.className = "col-12 blog-link";
        link.href = blogsInCategory[i].href;
        var blogTitle = document.createElement("p");
        blogTitle.className = "fs-3 fw-bold";
        blogTitle.innerHTML = blogsInCategory[i].title;
        var blogSubtitle = document.createElement("p");
        blogSubtitle.className = "fs-6";
        blogSubtitle.innerHTML = blogsInCategory[i].subtitle;
        link.append(blogTitle);
        link.append(blogSubtitle);
        document.querySelector('.blog-container').appendChild(link);
        if (i < blogs.length - 1) {
            var blogDivider = document.createElement('hr');
            blogDivider.className = 'blog-divider';
            document.querySelector('.blog-container').appendChild(blogDivider);
        }
    }
}

window.onload = function () {
  initializeBlogs();
  initializeCategories();
}


