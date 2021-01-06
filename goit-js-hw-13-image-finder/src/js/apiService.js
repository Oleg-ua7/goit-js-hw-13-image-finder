const apiKey = '19748664-80a2901996a1c8fd030e1b12a';

const apiService = {
  keyword: '',
  page: 1,

  fetchQuery() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.keyword}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(data => data.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      });
  },

  pageReset() {
    this.page = 1;
  },

  set query(newKeyword) {
    this.keyword = newKeyword;
  },
};

export default apiService;