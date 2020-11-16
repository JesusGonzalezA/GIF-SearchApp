//**************************************************************************
// This function fetch the gifs from the endpoint
//**************************************************************************

export const getGifs = async(category) => {

    const endpoint  = 'https://api.giphy.com/v1/gifs/search?'

    //Params
    const limit = 10;
    const queryApiKey = 'api_key=9jplbxKhPdDDXYnbjKuZ2NFJPVPnmUeW';
    const theme = category;

    //URL    
    const queryLimit = 'limit=' + limit;
    const queryTheme = 'q=' + theme;
    const url = `${endpoint}${queryLimit}&&${queryTheme}&&${queryApiKey}`;
    
    const resp = await fetch(url);
    const {data} = await resp.json();

    //Gifs
    const gifs = data.map  (img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    
    //Devolver la promesa
    return gifs;
}