const baseUrl = 'http://api.tvmaze.com';

let service = {
    async query(searchString) {
        const url = `${baseUrl}/search/shows?q=${encodeURIComponent(searchString)}`;
        const request = await fetch(url);
        const response = await request.json();

        // Grab the bits we're interested in
        return response.map(entry => ({
            name: entry.show.name,
            image: (entry.show.image || {}).medium,
            summary: entry.show.summary,
            rating: {
                percentage: ((entry.show.rating.average || 0) * 10.0)
            }
        }))
    }
};

export function getService() {
    return service;
}

export function mock(mockedService) {
    service = mockedService
}
