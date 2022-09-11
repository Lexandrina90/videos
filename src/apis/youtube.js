import axios from 'axios';

const KEY = 'AIzaSyAJ_vwPhNab_rw8E1j7KXUsimv8W0bAnxI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5, 
        key: KEY    
    }
});


