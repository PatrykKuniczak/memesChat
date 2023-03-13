import { useEffect, useState } from "react";
import {
    GifWidgetStyled,
    GifWidgetSearch,
    GifList,
    GifListImage
} from "./GifWidget.styled";
import axios from "axios";

const GifWidget = () => {
    const [gifsLoading, setGifsLoading] = useState(true);
    const [gifList, setGifList] = useState<any[]>([]);
    const [gifSearchInput, setGifSearchInput] = useState("");

    const findGif = (e: any) => {
        setGifSearchInput(e.target.value);
        setGifsLoading(true);
    };

    const getGifUrl = (fullGifUrl: string) => {
        console.log('img',fullGifUrl);
    };

    const renderGifs = () => (
        <>
            <GifWidgetSearch
                type="text"
                value={gifSearchInput}
                onChange={findGif}
                placeholder="find gif"
            />
            <GifList>
                {!gifsLoading
                    ? gifList.map((item, index) => (
                          <GifListImage
                              key={index}
                              src={item.images.preview_gif.url}
                              onClick={() => getGifUrl(item.images.downsized_large.url)}
                          />
                      ))
                    : "loading"}
            </GifList>
        </>
    );

    useEffect(() => {
        gifSearchInput.length > 2 &&
            axios
                .get(
                    `https://api.giphy.com/v1/gifs/search?api_key=0kVBw2UV1wx2rzelZSio79c1iKQqdZpt&q=${gifSearchInput}&limit=18&offset=0&rating=g&lang=en`
                )
                .then(function (response) {
                    // handle success
                    // console.log(response);
                    setGifList(response.data.data);
                    setGifsLoading(false);
                    gifList.map(gif => console.log(gif));
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

        // axios
        //     .get(
        //         "https://api.giphy.com/v1/gifs/random?api_key=0kVBw2UV1wx2rzelZSio79c1iKQqdZpt&tag=&rating=g"
        //     )
        //     .then(function (response) {
        //         // handle success
        //         console.log(response.data.data);
        //         // setGifList(response.data.data);
        //         // setGifsLoading(false);
        //         // gifList.map(gif => console.log(gif));
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .finally(function () {
        //         // always executed
        //     });
    }, [gifSearchInput]);

    return <GifWidgetStyled>{renderGifs()}</GifWidgetStyled>;
};

export default GifWidget;
