const fetchNews = async (limit = 10) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        if (!response.ok) {
            throw new Error('Ошибка загрузки новостей');
        }
        const fetchedNews = await response.json();
        return fetchedNews;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const renderNews = (news) => {
    const newsContainerElement = document.getElementById('news-container');
    newsContainerElement.innerHTML = news
        .map(({ title, body }) => `
      <div class="news-card">
        <img src="https://picsum.photos/seed/${title}/200" alt="#">
        <h2>${title}</h2>
        <p>${body}</p>
      </div>
    `)
        .join('');
};

const showLoader = () => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '<div class="loader"></div>';
};

(async function() {
    showLoader();
    const news = await fetchNews(6);
    renderNews(news);
})();